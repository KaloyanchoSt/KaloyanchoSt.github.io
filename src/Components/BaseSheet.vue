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

        <ExpirienceTimeline :items="baseSheetDetails.Experience">
        </ExpirienceTimeline>

        <VDivider :thickness="20" class="border-opacity-0"></VDivider>

        <EducationTimeline
          :items="baseSheetDetails.Education"
        ></EducationTimeline>
      </div>
    </VSheet>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import EducationTimeline from "@/Components/EducationTimeline.vue";
import ExpirienceTimeline from "@/Components/ExpirienceTimeline.vue";
import {
  getBaseSheetDetails,
  getEmptyBaseSheetViewModel,
} from "@/Services/BaseSheetServices";
import { BaseSheetViewModel } from "@/Types/BaseSheet";
import { useToast, TYPE } from "vue-toastification";

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
        useToast().error("I'm an info toast!", { type: TYPE.ERROR });
      } finally {
        this.loading = false;
      }
    },
  },
});
</script>
@/Services/BaseSheetServices
