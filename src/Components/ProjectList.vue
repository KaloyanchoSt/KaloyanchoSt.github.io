<template>
  <div>
  <VTimeline side="end">
    <VTimelineItem
      v-for="item in items"
      :key="item.ID"
      dot-color="primary"
      size="small"
    >
      <VAlert
        :value="true"
        color="secondary"
      >
        Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
      </VAlert>
    </VTimelineItem>
  </VTimeline>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ProjectViewModel } from "@/Types/BaseSheet";

// interface ProjectListData {
//   items: Array<Object>;
// }

export default defineComponent({
  name: "ProjectList",
  props: {
    items: {
      required: true,
      type: Array<ProjectViewModel>,
    },
  },
  // data(): ProjectListData {
  //   return {
  //   };
  // },
});
</script>
@/types/Project
