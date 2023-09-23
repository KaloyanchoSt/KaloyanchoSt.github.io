<template>
  <div>
  <v-timeline side="end">
    <v-timeline-item
      v-for="item in items"
      :key="item.id"
      :dot-color="item.color"
      size="small"
    >
      <v-alert
        :value="true"
        :color="item.color"
        :icon="item.icon"
      >
        Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
      </v-alert>
    </v-timeline-item>
  </v-timeline>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface BaseTemplateData {
  items: Array<Object>;
}

export default defineComponent({
  name: "BaseTemplate",
  data(): BaseTemplateData {
    return {
      items: [
        {
          id: 1,
          color: "info",
          icon: "mdi-information",
        },
        {
          id: 2,
          color: "error",
          icon: "mdi-alert-circle",
        },
      ],
    };
  },
});
</script>
