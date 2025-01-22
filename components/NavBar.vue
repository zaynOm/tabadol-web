<script setup lang="ts">
const { user } = useAuth();
const isDarkMode = ref(true);
function toggleDarkMode() {
  document.documentElement.classList.toggle("my-app-dark");
  isDarkMode.value = !isDarkMode.value;
}
</script>

<template>
  <nav class="flex justify-between p-4 h-18">
    <NuxtLink href="/" class="font-bold text-4xl"> تبادل </NuxtLink>
    <div class="flex gap-4 items-center">
      <Button
        :icon="isDarkMode ? 'pi pi-moon' : 'pi pi-sun'"
        aria-label="Toggle dark mode"
        severity="contrast"
        @click="toggleDarkMode()"
      />
      <NuxtLink href="/login" v-if="!user">
        <Button>سجل الدخول</Button>
      </NuxtLink>
      <div v-else class="flex items-center">
        <!-- <span>{{ user.user_metadata.name }}</span> -->
        <Avatar
          :image="user.user_metadata.picture"
          class="mr-2"
          size="large"
          shape="circle"
        />
      </div>
    </div>
  </nav>
</template>
