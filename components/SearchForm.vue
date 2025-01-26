<script setup lang="ts">
import { AutoComplete, Button } from "primevue";
import type { Province, Region, Commune } from "~/types/supabase.typs";

const filterVisible = ref(false);

const state = reactive({
  currRegion: "",
  currProvince: "",
  currCommune: "",
  currSchool: "",
  distRegion: "",
  distProvince: "",
  distCommune: "",
  distSchool: "",
});

const {
  fetchData,
  search: searchRegions,
  items: regionItems,
} = useAutoCompleteData<Region>("regions");

const {
  fetchData: fetchProvinces,
  search: searchProvinces,
  items: provinceItems,
  setFilter: setProvinceFilter,
} = useAutoCompleteData<Province>("provinces", "regionId");

const {
  fetchData: fetchCommunes,
  search: searchCommune,
  items: communeItems,
  setFilter: setCommuneFilter,
} = useAutoCompleteData<Commune>("communes", "provinceId");

onMounted(async () => {
  await fetchData();
});

const onRegionSelect = () => {
  const selectedRegion = regionItems.value.find(
    (r) => r.name === state.currRegion,
  );
  setProvinceFilter(selectedRegion?.id || null);
  fetchProvinces();
};

const onProvinceSelect = () => {
  const selectedProvince = provinceItems.value.find(
    (r) => r.name === state.currProvince,
  );
  setCommuneFilter(selectedProvince?.id || null);
  fetchCommunes();
};
</script>

<template>
  <div
    class="h-[calc(100vh-300px)] flex items-center justify-center p-4 w-full"
  >
    <Card class="w-2/4 h-32 justify-center">
      <template #content>
        <div class="flex justify-center gap-4">
          <AutoComplete
            v-model="state.currSchool"
            placeholder="إسم المدرسة"
            class="flex-1"
            input-class="flex-1"
          />
          <Button label="بحث" icon="pi pi-search" />
          <Button
            label="بحث متقدم"
            icon="pi pi-filter"
            variant="outlined"
            @click="filterVisible = true"
          />
        </div>
      </template>
    </Card>
  </div>
  <Drawer v-model:visible="filterVisible" header="بحث متقدم">
    <div class="space-y-10" dir="rtl">
      <div class="space-y-4">
        <label>حاليا</label>
        <AutoComplete
          v-model="state.currRegion"
          :suggestions="regionItems"
          @complete="searchRegions"
          @item-select="onRegionSelect"
          option-label="name"
          placeholder="الجهة"
        />
        <AutoComplete
          v-model="state.currProvince"
          :suggestions="provinceItems"
          @complete="searchProvinces"
          @item-select="onProvinceSelect"
          option-label="name"
          placeholder="المديرية"
        />
        <AutoComplete
          v-model="state.currCommune"
          :suggestions="communeItems"
          @complete="searchCommune"
          option-label="name"
          placeholder="الجماعة"
        />
        <InputText v-model="state.currSchool" placeholder="المدرسة" />
      </div>
      <div class="space-y-4">
        <label>الوجهة</label>
        <AutoComplete
          v-model="state.distRegion"
          :suggestions="regionItems"
          @complete="searchRegions"
          option-label="name"
          placeholder="الجهة"
        />
        <AutoComplete
          v-model="state.distProvince"
          :suggestions="provinceItems"
          @complete="searchProvinces"
          option-label="name"
          placeholder="المديرية"
        />
        <AutoComplete
          v-model="state.distCommune"
          :suggestions="communeItems"
          @complete="searchCommune"
          option-label="name"
          placeholder="الجماعة"
        />
        <InputText v-model="state.distSchool" placeholder="المدرسة" />
      </div>
      <Button label="تطبيق" />
    </div>
  </Drawer>
</template>
