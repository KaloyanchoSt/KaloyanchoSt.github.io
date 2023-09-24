<template>
  <div>
    <v-timeline side="end">
      <v-timeline-item
        v-for="item in items"
        :key="item.ID"
        dot-color="primary"
        size="small"
      >
      <!-- :icon="item.icon -->
        <v-alert :value="true" color="primary"> 
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
import { EducationViewModel } from "@/types/Education";
//import { EdicationViewModel }from "../Types/Education";

// interface BaseSheetData {
//   items: Array<EdicationViewModel>;
// }

export default defineComponent({
  name: "EducationTimeline",
  props: {
    items: {
      required: true,
      type: Array<EducationViewModel>,
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
@/types/Education