<template>
  <VContainer fluid>
    <VRow>
      <VCol class="ma-0 pa-0" cols="12">
        <p class="text-primary font-weight-bold">
          {{ expirienceTitle }}
        </p>
      </VCol>
    </VRow>
    <VRow>
      <VCol class="ma-0 pa-0" cols="12">
        <VTimeline side="end" truncate-line="start">
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
            </template>
            <VCard variant="flat">
              <VCardTitle class="font-weight-regular text-h6">
                {{ item.Position }}</VCardTitle
              >
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
      </VCol>
    </VRow>
  </VContainer>
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
