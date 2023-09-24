<template>
  <div>
    <v-timeline side="end">
      <v-timeline-item
        v-for="item in items"
        :key="item.id"
        :dot-color="item.color"
        size="small"
      >
        <v-alert :value="true" :color="item.color" :icon="item.icon">
          Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola
          imperdiet nec ut, sed euismod convenire principes at. Est et nobis
          iisque percipit, an vim zril disputando voluptatibus, vix an salutandi
          sententiae.
        </v-alert>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { EdicationViewModel } from "@/Types/Education";
//import { EdicationViewModel }from "../Types/Education";

// interface BaseTemplateData {
//   items: Array<EdicationViewModel>;
// }

export default defineComponent({
  name: "EducationTimeline",
  props: {
    items: {
      required: true,
      type: Array<EdicationViewModel>,
    },
  },
  data() {
    return {
      // items: [
      //   {
      //     ID: 1,
      //     color: "info",
      //     icon: "mdi-information",
      //   },
      //   {
      //     ID: 2,
      //     color: "error",
      //     icon: "mdi-alert-circle",
      //   },
      // ],
    };
  },
});
</script>
