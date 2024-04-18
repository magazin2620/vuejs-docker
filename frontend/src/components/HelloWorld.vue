<template>

  <layout>
    <div class="d-flex align-center justify-center h-100">
      <v-card class="pa-6 pb-8 w-100" elevation="8" max-width="448" rounded="lg">
        <v-img class="d-flex mx-auto my-6" max-width="228" src="../assets/lib_logo.png"></v-img>

        <v-text-field density="compact" placeholder="Email" prepend-inner-icon="mdi-email-outline"
          variant="outlined"></v-text-field>

        <v-text-field :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
          density="compact" placeholder="Password" prepend-inner-icon="mdi-lock-outline" variant="outlined"
          @click:append-inner="visible = !visible"></v-text-field>

        <div class="text-subtitle-1 text-medium-emphasis d-flex align-end justify-space-between mb-2">
          <a class="text-caption text-decoration-none text-blue" href="#" rel="noopener noreferrer" target="_blank">
            Forgot login password?</a>
        </div>

        <v-btn class="mb-8" color="blue" size="large" variant="tonal" block>
          Log In
        </v-btn>

        <v-card-text class="text-center">
          <a class="text-blue text-decoration-none" href="#" rel="noopener noreferrer" target="_blank">
            Sign up <v-icon icon="mdi-chevron-right"></v-icon>
          </a>
        </v-card-text>
      </v-card>
    </div>
  </layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const visible = ref(false);

</script>
