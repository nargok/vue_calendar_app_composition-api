<template>
  <v-app>
    <v-container fruid pt-0>
      <Header />
      <router-view />
      <Footer />
    </v-container>
  </v-app>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import HeaderComponent from '@/components/Header.vue';
import FooterComponent from '@/components/Footer.vue';

export default defineComponent({
  components: {
    Header: HeaderComponent,
    Footer: FooterComponent,
  },
  setup() {},
});
</script>
