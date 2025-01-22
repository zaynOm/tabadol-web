<script setup lang="ts">
const isDarkMode = ref(true);
function toggleDarkMode() {
  document.documentElement.classList.toggle("my-app-dark");
  isDarkMode.value = !isDarkMode.value;
}
watch(isDarkMode, () => console.log("moooood", isDarkMode.value));
</script>

<template>
  <nav class="flex justify-between p-4 h-18">
    <NuxtLink href="/" class="font-bold text-4xl"> تبادل </NuxtLink>
    <div class="flex gap-4">
      <Button
        :icon="isDarkMode ? 'pi pi-moon' : 'pi pi-sun'"
        aria-label="Toggle dark mode"
        severity="contrast"
        @click="toggleDarkMode()"
      />
      <NuxtLink href="/login">
        <Button>سجل الدخول</Button>
      </NuxtLink>
    </div>
  </nav>
</template>
