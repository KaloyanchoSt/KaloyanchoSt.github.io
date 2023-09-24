<template>
  <div>
  <v-timeline side="end">
    <v-timeline-item
      v-for="item in items"
      :key="item.ID"
      dot-color="primary"
      size="small"
    >
      <v-alert
        :value="true"
        color="secondary"
      >
        Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
      </v-alert>
    </v-timeline-item>
  </v-timeline>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ProjectViewModel } from "@/Types/Project";

interface ProjectListData {
  items: Array<Object>;
}

export default defineComponent({
  name: "ProjectList",
  props: {
    items: {
      required: true,
      type: Array<ProjectViewModel>,
    },
  },
  data(): ProjectListData {
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
