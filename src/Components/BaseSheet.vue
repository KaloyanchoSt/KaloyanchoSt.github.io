<template>
  <div>
    <VSheet
      class="align-center mx-auto px-8 py-6"
      :max-width="900"
      width="100%"
    >
      <div>
        <!-- Name -->
        <VRow>
          <VCol cols="8">
            <div class="text-h4 font-weight-black text-orange">
              {{ baseSheetDetails.Name.toUpperCase() }}
            </div>
          </VCol>
          <!-- Print -->
          <!-- <VCol cols="4" align="right">
            <VBtn @click="exportToPDF">Print</VBtn>
          </VCol> -->
        </VRow>
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
        <VRow>
          <VCol cols="12">
            <p class="bold-primary">
              {{ summaryTitle }}
            </p>
          </VCol>
          <VCol cols="12">
            <p class="text-body-2">
              {{ baseSheetDetails.Summary }}
            </p>
          </VCol>
        </VRow>
        <div></div>
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
    exportToPDF() {
      window.print();
    },
  },
});
</script>

<style scoped>
.bold-primary {
  color: #1867c0;
  font-weight: bold;
}
</style>
