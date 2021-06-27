<template>
  <v-app-bar color="primary" app>
    <v-toolbar-title class="white--text">Calendar APP</v-toolbar-title>
    <v-spacer />
    <span class="clickable" @click="signIn">サインイン</span>
  </v-app-bar>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  setup(props, context) {
    const signIn = () => {
      context.root.$router.push('/sign-in');
    };

    return {
      signIn,
    };
  },
});
</script>

<style scoped>
.clickable {
  align-items: center;
  color: #bbe;
  display: flex;
  height: 100%;
  justify-content: center;
}

.clickable:hover {
  cursor: pointer;
  /* display: block; */
}
</style>
