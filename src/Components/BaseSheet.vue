<template>
  <div>
    <VSheet
      border
      class="d-flex align-center justify-center flex-wrap mx-auto px-12 py-10"
      width="100%"
    >
      <div>
        <!-- Name -->
        <div class="text-h4 font-weight-black text-orange">
          {{ baseSheetDetails.Name.toUpperCase() }}
        </div>
        <!-- Position -->
        <div class="text-primary font-weight-bold text-h6">
          {{ baseSheetDetails.Position }}
        </div>
        <!-- Contacts -->
        <VRow>
          <VCol cols="12">
            <ContactList :items="baseSheetDetails.Contacts"> </ContactList>
          </VCol>
        </VRow>
        <!-- Summary -->
        <div>
          <p class="text-primary font-weight-bold text-h7 mt-7">
            {{ summaryTitle }}
          </p>
          <p class="text-body-2 mb-7">
            {{ baseSheetDetails.Summary }}
          </p>
        </div>
        <!-- Experience -->
        <VRow>
          <VCol cols="12">
            <ExpirienceTimeline
              :items="baseSheetDetails.Experience"
            ></ExpirienceTimeline>
          </VCol>
        </VRow>
        <!-- Education -->
        <VRow>
          <VCol cols="12">
            <EducationTimeline
              :items="baseSheetDetails.Education"
            ></EducationTimeline>
          </VCol>
        </VRow>
        <!-- Projects -->
        <VRow>
          <VCol cols="12">
            <ProjectList :items="baseSheetDetails.Projects"> </ProjectList>
          </VCol>
        </VRow>
      </div>
    </VSheet>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import EducationTimeline from "@/Components/EducationTimeline.vue";
import ExpirienceTimeline from "@/Components/ExpirienceTimeline.vue";
import ProjectList from "@/Components/ProjectList.vue";
import ContactList from "@/Components/ContactList.vue";
import {
  getBaseSheetDetails,
  getEmptyBaseSheetViewModel,
} from "@/Services/BaseSheetServices";
import { BaseSheetViewModel, ContactType } from "@/Types/BaseSheet";
import { useToast, TYPE } from "vue-toastification";

interface BaseSheetData {
  baseSheetDetails: BaseSheetViewModel;
  loading: boolean;
  summaryTitle: string;
}

export default defineComponent({
  name: "BaseSheet",
  components: {
    EducationTimeline,
    ExpirienceTimeline,
    ProjectList,
    ContactList,
  },
  data(): BaseSheetData {
    return {
      baseSheetDetails: getEmptyBaseSheetViewModel(),
      loading: false,
      summaryTitle: "SUMMARY",
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

        // Remove LinkedIn contact
        const indexOfLinkedIn = this.baseSheetDetails.Contacts.findIndex(
          (obj) => {
            return obj.Type === ContactType.LinkedIn;
          }
        );
        this.baseSheetDetails.Contacts.splice(indexOfLinkedIn, 1);
      } catch (error) {
        useToast().error("Error while getting resume data", {
          type: TYPE.ERROR,
        });
      } finally {
        this.loading = false;
      }
    },
  },
});
</script>
