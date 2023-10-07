<template>
  <div>
    <VRow>
      <VCol cols="12">
        <p class="text-primary font-weight-bold">
          {{ educationTitle }}
        </p>
      </VCol>
    </VRow>
    <VTimeline side="end" truncate-line="start">
      <VTimelineItem
        v-for="item in items"
        :key="item.ID"
        dot-color="primary"
        size="small"
        height="90"
        id="timeline"
      >
        <template v-slot:opposite>
          <div
            class="text-body-2 font-weight-bold"
            v-text="`${item.From}-${item.Until}`"
          ></div>
        </template>
        <VCard id="vcard" class="mx-auto" variant="flat">
          <VList lines="three">
            <VListItem :title="`${item.Specialty}`">
              <VListItemTitle
                class="text-primary font-weight-bold text-subtitle-2"
              >
                {{ item.Institution }}
              </VListItemTitle>
              <VListItemSubtitle>
                {{ item.Subjects.join(", ") }}
              </VListItemSubtitle>
            </VListItem>
          </VList>
          <!-- <VCardTitle id="card-title" class="font-weight-regular text-h6">
            {{ item.Specialty }}</VCardTitle
          >
          <VCardSubtitle
            id="card-subtitle"
            class="text-primary font-weight-bold"
          >
            {{ item.Institution }}
          </VCardSubtitle>
          <VCardText id="card-text">{{ item.Subjects.join(", ") }} </VCardText> -->
        </VCard>
      </VTimelineItem>
    </VTimeline>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { EducationViewModel } from "@/Types/BaseSheet";

interface EducationTimelineData {
  educationTitle: string;
}

export default defineComponent({
  name: "EducationTimeline",
  props: {
    items: {
      required: true,
      type: Array as PropType<Array<EducationViewModel>>,
    },
  },
  data(): EducationTimelineData {
    return {
      educationTitle: "EDUCATION",
    };
  },
});
</script>

<style scoped>
div.slot-opposite {
  text-align: left;
}
#timeline {
  margin-top: 0;
  padding-top: 0;
}
/* #card-title {
  padding-top: 0;
  padding-bottom: 0;
}
#card-text {
  padding-top: 0;
  padding-bottom: 0;
} */
</style>
