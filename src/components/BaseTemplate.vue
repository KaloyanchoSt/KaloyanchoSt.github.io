<template>
  <div>
    <VSheet
      border="md"
      class="d-flex align-center justify-center flex-wrap mx-auto px-12 py-12"
      elevation="12"
      width="100%"
      max-width="1000"
    >
      <div>
        <h2 class="text-h4 font-weight-black text-orange">Congratulations!</h2>

        <div class="text-h5 font-weight-medium mb-2">
          You are officially a part of the Vuetify Community!
        </div>

        <p class="text-body-2 mb-4">
          Please head over to your inbox/spam or others folder to find our
          verificaiton email.
        </p>

        <v-btn variant="text" color="orange">Go to Login</v-btn>
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
import EducationTimeline from ".EducationTimeline.vue";

interface BaseTemplateData {
  items: Array<Object>;
}

export default defineComponent({
  name: "BaseTemplate",
  data(): BaseTemplateData {
    return {
      items: [
        {
          id: 1,
          color: "info",
          icon: "mdi-information",
        },
        {
          id: 2,
          color: "error",
          icon: "mdi-alert-circle",
        },
      ],
    };
  },
});
</script>
