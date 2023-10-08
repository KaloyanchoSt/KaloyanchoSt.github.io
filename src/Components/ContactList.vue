<template>
  <div>
    <ul>
      <li v-for="contact in items" :key="contact.ID">
        <VTooltip location="top">
          <template v-slot:activator="{ props }">
            <a
              v-bind="props"
              color="primary"
              class="text-body-2"
              :href="`${contact.Type}:${contact.Value}`"
            >
              <VIcon class="mr-1" color="primary" :icon="contact.Icon" />{{
                contact.Value
              }}
            </a>
          </template>
          <span>{{ visit }}</span>
        </VTooltip>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ContactViewModel } from "@/Types/BaseSheet";

interface ContactListData {
  visit: string;
}

export default defineComponent({
  name: "ContactList",
  props: {
    items: {
      type: Array as PropType<Array<ContactViewModel>>,
      required: true,
    },
  },
  data(): ContactListData {
    return {
      visit: "Click",
    };
  },
});
</script>

<style scoped>
ul {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  margin: 0;
  padding: 0;
}
li {
  list-style-type: none;
}
a:link {
  color: black;
  background-color: transparent;
  text-decoration: none;
}
a:visited {
  color: black;
}
@media (max-width: 960px) and (min-width: 501px) {
  li {
    width: 100%;
  } /* Show 2 logos per row on medium devices (tablets, phones in landscape) */
}

@media (max-width: 500px) {
  li {
    width: 100%;
  } /* On small screens, show one logo per row */
}
</style>
