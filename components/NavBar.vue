<script setup lang="ts">
import { Button } from "primevue";

const { user, signOut } = useAuth();
const isDarkMode = ref(true);
const op = ref();

function toggleDarkMode() {
  document.documentElement.classList.toggle("my-app-dark");
  isDarkMode.value = !isDarkMode.value;
}

const togglePopover = (event: MouseEvent) => {
  op.value.toggle(event);
};
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
        <Button as-child @click="togglePopover">
          <Avatar
            :image="user.user_metadata.picture"
            class="mr-2 cursor-pointer"
            size="large"
            shape="circle"
            @click="togglePopover"
          />
        </Button>
        <Popover ref="op">
          <Button
            icon="pi pi-sign-out"
            label="تسجيل الخروج"
            @click="signOut"
            severity="danger"
          />
        </Popover>
      </div>
    </div>
  </nav>
</template>
