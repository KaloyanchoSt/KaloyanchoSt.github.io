<template>
  <div>
    <VRow>
      <VCol cols="12">
        <p class="text-primary font-weight-bold text-h7">
          {{ expirienceTitle }}
        </p>
      </VCol>
    </VRow>
    <VTimeline side="end">
      <VTimelineItem
        v-for="item in items"
        :key="item.ID"
        dot-color="primary"
        size="small"
      >
        <template v-slot:opposite>
          <div
            class="text-body-2 font-weight-bold"
            v-text="`${item.From}-${item.Until}`"
          ></div>
          <!-- <span class="text-h7">{{ item.From }} - {{ item.Until }}</span> -->
          <!-- <h5>{{ item.From }} - {{ item.Until }}</h5> -->
          <!-- <p class="text-body-2">{{ item.Location }}</p> -->
        </template>
        <VCard class="elevation-2">
          <VCardTitle class="text-h9"> {{ item.Position }}</VCardTitle>
          <!-- <VCardSubtitle class="text-h9">
          {{ item.Company }}
        </VCardSubtitle> -->
          <VCardText>
            <template #default
              ><li v-for="subItem in item.Projects" :key="subItem.ID">
                <p class="text-body-2">{{ subItem.Name }}</p>
                <p class="text-body-2">{{ subItem.Description }}</p>
                {{ subItem.Technologies.join(", ") }}
              </li>
            </template>
          </VCardText>
        </VCard>
      </VTimelineItem>
    </VTimeline>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ExperienceViewModel } from "@/Types/BaseSheet";

interface ExpirienceTimelineData {
  expirienceTitle: string;
}

export default defineComponent({
  name: "ExpirienceTimeline",
  props: {
    items: {
      type: Array as PropType<Array<ExperienceViewModel>>,
      required: true,
    },
  },
  data(): ExpirienceTimelineData {
    return {
      expirienceTitle: "PROFESSIONAL EXPERIENCE",
    };
  },
});
</script>
