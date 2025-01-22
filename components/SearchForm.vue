<script setup lang="ts">
import { AutoComplete, Button } from "primevue";

const items = ref<string[]>([]);
const filterVisible = ref(false);

const state = reactive({
  currSchool: "",
  currCity: "",
  currRegion: "",
  distSchool: "",
  distCity: "",
  distRegion: "",
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
          v-model="state.distRegion"
          :suggestions="items"
          @complete="search"
          placeholder="الجهة"
        />
        <AutoComplete
          v-model="state.distCity"
          :suggestions="items"
          @complete="search"
          placeholder="المدينة"
        />
        <AutoComplete
          v-model="state.distSchool"
          :suggestions="items"
          @complete="search"
          placeholder="المدرسة"
        />
      </div>
      <div class="space-y-4">
        <label>الوجهة</label>
        <AutoComplete
          v-model="state.distRegion"
          :suggestions="items"
          @complete="search"
          placeholder="الجهة"
        />
        <AutoComplete
          v-model="state.distCity"
          :suggestions="items"
          @complete="search"
          placeholder="المدينة"
        />
        <AutoComplete
          v-model="state.distSchool"
          :suggestions="items"
          @complete="search"
          placeholder="المدرسة"
        />
      </div>
    </div>
  </Drawer>
</template>
