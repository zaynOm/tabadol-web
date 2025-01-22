<script setup lang="ts">
import { AutoComplete, Button } from "primevue";

const items = ref<string[]>([]);

const state = reactive({
  currSchool: "",
});

const search = (event: any) => {
  items.value = [...Array(10).keys()].map((item) => event.query + "-" + item);
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
            :suggestions="items"
            @complete="search"
            placeholder="إسم المدرسة"
            class="flex-1"
            input-class="flex-1"
          />
          <Button label="بحث" icon="pi pi-search" />
        </div>
      </template>
    </Card>
  </div>
</template>
