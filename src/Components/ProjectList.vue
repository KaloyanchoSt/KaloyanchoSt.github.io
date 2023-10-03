<template>
  <div>
    <VRow>
      <VCol cols="12">
        <p class="text-primary font-weight-bold text-h7">
          {{ projectTitle }}
        </p>
      </VCol>
    </VRow>
    <VList lines="one">
      <VListItem
        v-for="project in items"
        :key="project.ID"
        :title="`${project.Name}`"
      >
        <VListItemTitle class="text-primary font-weight-bold text-h9">
          {{ project.For }}
        </VListItemTitle>
      </VListItem>
    </VList>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ProjectViewModel } from "@/Types/BaseSheet";

interface ProjectListData {
  projectTitle: string;
}

export default defineComponent({
  name: "ProjectList",
  props: {
    items: {
      type: Array as PropType<Array<ProjectViewModel>>,
      required: true,
    },
  },
  data(): ProjectListData {
    return {
      projectTitle: "PROJECTS",
    };
  },
});
</script>
