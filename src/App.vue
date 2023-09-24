<template>
  <v-app>
    <v-btn @click="toggleTheme">toggle theme</v-btn>
    <v-main>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import HelloWorld from "@/Components/HelloWorld";
import { useTheme } from "vuetify";

const theme = useTheme();
function toggleTheme() {
  window.print();
  //theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
}
</script>
