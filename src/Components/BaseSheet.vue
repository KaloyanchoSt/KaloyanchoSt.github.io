<template>
  <div>
    <VSheet
      border
      class="d-flex align-center justify-center flex-wrap mx-auto px-12 py-10"
      width="100%"
      max-width="940"
    >
      <!-- Name -->
      <div>
        <div class="text-h4 font-weight-black text-orange">
          {{ baseSheetDetails.Name.toUpperCase() }}
        </div>

        <!-- Position -->
        <div class="text-primary font-weight-bold text-h6">
          {{ baseSheetDetails.Position }}
        </div>

        <!-- Contacts -->
        <div>
          <ul>
            <li v-for="contact in baseSheetDetails.Contacts" :key="contact.ID">
              <!-- <VIcon icon="mdi-home" /> -->
              <!-- {{contact.Icon}}
              <VIcon small color="primary" :icon="contact.Icon"></VIcon> -->
              <!-- <VImg height="2" :src="contact.Icon" /> -->
              <VTooltip location="top">
                <template v-slot:activator="{ props }">
                  <a
                    v-bind="props"
                    color="primary"
                    class="text-body-2"
                    :href="`${contact.Type}:${contact.Value}`"
                  >
                    <VIcon
                      class="mr-1"
                      x-small
                      color="primary"
                      :icon="contact.Icon"
                    />{{ contact.Value }}
                  </a>
                </template>
                <span>{{ visit }}</span>
              </VTooltip>
              <!-- <p class="text-body-2">{{ item.Description }}</p>
              {{ item.Technologies.join(", ") }} -->
            </li>
          </ul>
        </div>

        <!-- Summary -->
        <div>
          <p class="text-primary font-weight-bold text-h7 mt-7">SUMMARY</p>
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
import {
  getBaseSheetDetails,
  getEmptyBaseSheetViewModel,
} from "@/Services/BaseSheetServices";
import { BaseSheetViewModel } from "@/Types/BaseSheet";
import { useToast, TYPE } from "vue-toastification";

interface BaseSheetData {
  baseSheetDetails: BaseSheetViewModel;
  loading: boolean;
  contactIcon: string;
  visit: string;
}

export default defineComponent({
  name: "BaseSheet",
  components: {
    EducationTimeline,
    ExpirienceTimeline,
    ProjectList,
  },
  data(): BaseSheetData {
    return {
      baseSheetDetails: getEmptyBaseSheetViewModel(),
      loading: false,
      contactIcon: "mdi-home",
      visit: "Click"
    };
  },
  mounted() {
    console.log(this.$vuetify);
    console.log(this.$vuetify.icons);
    console.log(this.$vuetify.icons.aliases?.calendar);
    console.log(this.$vuetify);
    this.getEducationData();
  },
  methods: {
    async getEducationData() {
      try {
        this.loading = true;

        this.baseSheetDetails = await getBaseSheetDetails();
        console.log("base details", this.baseSheetDetails.Contacts);
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

<style scoped>
ul {
  display: flex;
  align-items: stretch; /* Default */
  justify-content: space-between;
  width: 100%;
  margin: 0;
  padding: 0;
}
li {
  display: block;
  flex: 0 1 auto; /* Default */
  list-style-type: none;
}
a:link {
  color: black;
  background-color: transparent;
  text-decoration: none;
}
</style>
