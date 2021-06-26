<template>
  <v-app>
    <v-container fruid pt-0>
      <router-view />
      <Footer />
    </v-container>
  </v-app>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import FooterComponent from '@/components/Footer.vue';

export default defineComponent({
  components: {
    Footer: FooterComponent,
  },
  setup() {},
});
</script>
