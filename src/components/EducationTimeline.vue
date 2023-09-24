<template>
  <VTimeline side="end">
    <VTimelineItem
      class="timeline-item"
      v-for="item in items"
      :key="item.ID"
      dot-color="primary"
      size="small"
    >
      <template v-slot:opposite>
        <h5>{{ item.From }} - {{ item.Until }}</h5>
        <p class="text-body-2">{{ item.Location }}</p>
      </template>
      <VCard id="vcard" class="mx-auto" variant="flat">
        <VCardTitle id="card-title" class="text-h9">
          {{ item.Specialty }}</VCardTitle
        >
        <VCardSubtitle id="card-subtitle" class="text-primary font-weight-bold text-h9">
          {{ item.Institution }}
        </VCardSubtitle>
        <VCardText id="card-text">{{ item.Subjects.join(", ") }} </VCardText>
      </VCard>
    </VTimelineItem>
  </VTimeline>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { EducationViewModel } from "@/Types/BaseSheet";

interface EducationTimelineData {
  cardVariant: string;
}

export default defineComponent({
  name: "EducationTimeline",
  props: {
    items: {
      required: true,
      type: Array<EducationViewModel>,
    },
  },
  data(): EducationTimelineData {
    return {
      cardVariant: "flat",
    };
  },
});
</script>

<style scoped>
#card-title {
  padding-top: 0;
  padding-bottom: 0;
}
#card-text {
  padding-top: 0;
  padding-bottom: 0;
}
</style>
