<template>
  <VApp>
    <VMain>
      <VRow>
        <VCol cols="12"><VBtn @click="exportToPDF"> </VBtn> </VCol>
      </VRow>
      <VRow>
        <VCol cols="12">
          <BaseSheet ref="baseSheet" />
        </VCol>
      </VRow>
    </VMain>
  </VApp>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseSheet from "@/Components/BaseSheet.vue";

export default defineComponent({
  components: {
    BaseSheet,
  },
  methods: {
    // methods
    exportToPDF() {
      window.print();
      // w?.document.write((this.$refs as any).baseSheet.$el.innerHTML);
      // w?.document.close();
      // w?.setTimeout(function () {
      //   w?.print();
      // }, 1000);
    },
  },
});
</script>
