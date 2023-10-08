<template>
  <VApp>
    <VMain>
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
  },
});
</script>
