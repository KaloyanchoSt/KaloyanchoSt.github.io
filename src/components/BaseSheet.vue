<template>
  <div>
    <VSheet
      border="md"
      class="d-flex align-center justify-center flex-wrap mx-auto px-12 py-12"
      elevation="12"
      width="100%"
      max-width="940"
    >
      <div>
        <h2 class="text-h4 font-weight-black text-orange">
          {{ baseSheetDetails.Name }}
        </h2>

        <div class="text-h5 font-weight-medium mb-2">
          {{ baseSheetDetails.Position }}
        </div>

        <p class="text-body-2 mb-4">
          {{ baseSheetDetails.Summary }}
        </p>

        <v-btn variant="text" color="orange">Go to Login</v-btn>
        <!-- <VTimeline side="end">
          <VTimelineItem
            v-for="item in baseSheetDetails.Experience"
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
              <VCardSubtitle class="text-h9">
                {{ item.Company }}
              </VCardSubtitle>
              <VCardText>
                <template #default
                  ><li v-for="subItem in item.Projects">
                    <p class="text-body-2">{{ subItem.Name }}</p>
                    <p class="text-body-2">{{ subItem.Description }}</p>
                    {{ subItem.Technologies.toString() }}
                  </li>
                </template>
              </VCardText>
            </VCard>
          </VTimelineItem>
        </VTimeline> -->
        <ExpirienceTimeline :items="baseSheetDetails.Experience">
        </ExpirienceTimeline>

        <VDivider :thickness="20" class="border-opacity-0"></VDivider>
        
        <EducationTimeline
          :items="baseSheetDetails.Education"
        ></EducationTimeline>
        <!-- <VTimeline side="end">
          <VTimelineItem
            v-for="item in baseSheetDetails.Education"
            :key="item.ID"
            dot-color="primary"
            size="small"
          >
            <template v-slot:opposite>
              <h5>{{ item.From }} - {{ item.Until }}</h5>
              <p class="text-body-2">{{ item.Location }}</p>
            </template>
            <VCard class="elevation-2">
              <VCardTitle class="text-h9"> {{ item.Specialty }}</VCardTitle>
              <VCardSubtitle class="text-h9">
                {{ item.Institution }}
              </VCardSubtitle>
              <VCardText>{{ item.Subjects.toString() }} </VCardText>
            </VCard>
          </VTimelineItem>
        </VTimeline> -->
      </div>
    </VSheet>
    <!-- <VCard width="1000" variant="outlined" text="">
        <VCardItem>
          <VCardTitle class="red--text">Kaloyan Stefanov</VCardTitle>
          <VCardSubtitle class="text-primary">Software Developer</VCardSubtitle>
        </VCardItem>
        <VCardText> text</VCardText>
      </VCard> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import EducationTimeline from "@/components/EducationTimeline.vue";
import ExpirienceTimeline from "@/components/ExpirienceTimeline.vue";
import {
  getBaseSheetDetails,
  getEmptyBaseSheetViewModel,
} from "@/Services/BaseSheetServices";
import { BaseSheetViewModel } from "@/Types/BaseSheet";

interface BaseSheetData {
  baseSheetDetails: BaseSheetViewModel;
  loading: boolean;
}

export default defineComponent({
  name: "BaseSheet",
  components: {
    EducationTimeline,
    ExpirienceTimeline,
  },
  data(): BaseSheetData {
    return {
      baseSheetDetails: getEmptyBaseSheetViewModel(),
      loading: false,
    };
  },
  mounted() {
    this.getEducationData();
  },
  methods: {
    async getEducationData() {
      try {
        this.loading = true;
        this.baseSheetDetails = await getBaseSheetDetails();
      } catch (error) {
      } finally {
        this.loading = false;
      }
    },
  },
});
</script>
