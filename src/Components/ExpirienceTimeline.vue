<template>
  <VTimeline side="end">
    <VTimelineItem
      v-for="item in items"
      :key="item.ID"
      dot-color="primary"
      size="small"
    >
      <template v-slot:opposite>
        <h5>{{ item.From }} - {{ item.Until }}</h5>
        <p class="text-body-2">{{ item.Location }}</p>
      </template>
      <VCard class="elevation-2">
        <VCardTitle class="text-h9"> {{ item.Position }}</VCardTitle>
        <!-- <VCardSubtitle class="text-h9">
          {{ item.Company }}
        </VCardSubtitle> -->
        <VCardText>
          <template #default
            ><li v-for="subItem in item.Projects">
              <p class="text-body-2">{{ subItem.Name }}</p>
              <p class="text-body-2">{{ subItem.Description }}</p>
              {{ subItem.Technologies.join(", ") }}
            </li>
          </template>
        </VCardText>
      </VCard>
    </VTimelineItem>
  </VTimeline>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ExperienceViewModel } from "@/Types/BaseSheet";

export default defineComponent({
  name: "ExpirienceTimeline",
  props: {
    items: {
      required: true,
      type: Array<ExperienceViewModel>,
    },
  },
  data() {
    return {};
  },
});
</script>
