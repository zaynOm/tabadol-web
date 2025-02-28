import type { AutoCompleteCompleteEvent } from "primevue/autocomplete";

export function useAutoCompleteData<T extends { name: string }>(
  table: string,
  filterKey?: string,
) {
  const supabase = useSupabaseClient();
  const items = ref<T[]>([]);
  const data = ref<T[]>([]);
  const filterValue = ref<number | null>(null);

  const fetchData = async () => {
    let query = supabase.from(table).select();

    if (filterKey && filterValue.value) {
      query = query.eq(filterKey, filterValue.value);
    }
    const result = await query;
    if (result.data) {
      data.value = result.data;
    }
  };

  const search = (event: AutoCompleteCompleteEvent) => {
    items.value =
      data.value.filter((r) =>
        r.name.toLowerCase().includes(event.query.toLowerCase()),
      ) || [];
  };

  if (filterValue) {
    watch(filterValue, async () => await fetchData());
  }

  return {
    fetchData,
    search,
    items,
    setFilter: (value: number | null) => (filterValue.value = value),
  };
}
