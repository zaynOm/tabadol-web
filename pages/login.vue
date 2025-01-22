<script setup lang="ts">
import { Button } from "primevue";

const { googleSignIn, facebookSignIn } = useAuth();
</script>

<template>
  <div class="h-screen flex justify-center items-center">
    <Card class="w-1/4 p-4 text-center">
      <template #header>
        <h2>مرحبا بكم</h2>
      </template>
      <template #content>
        <div class="space-y-2">
          <Button
            class="w-full"
            label="المتابعة عبر جوجل"
            icon="pi pi-google"
            severity="secondary"
            @click="googleSignIn"
          />
          <Button
            class="w-full"
            label="المتابعة عبر فايسبوك"
            icon="pi pi-facebook"
            severity="secondary"
            @click="facebookSignIn"
          />
        </div>
      </template>
    </Card>
  </div>
</template>
