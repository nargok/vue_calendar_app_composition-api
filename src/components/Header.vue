<template>
  <v-app-bar color="primary" app>
    <v-toolbar-title class="white--text">Calendar APP</v-toolbar-title>
    <v-spacer />
    <span v-if="signInUser" class="appbar__text" v-text="greeting"></span>
    <span
      v-if="!isSignInPage && !signInUser"
      class="appbar__text clickable"
      @click="signIn"
    >
      サインイン
    </span>
  </v-app-bar>
</template>

<script>
import { defineComponent, computed } from '@vue/composition-api';
import { profileStore } from '@/store/profile';

export default defineComponent({
  setup(props, context) {
    // サインイン画面に来ているときはサインインのテキストを出さない
    const path = computed(() => context.root.$route.path);
    const isSignInPage = computed(() => {
      return path.value === '/sign-in';
    });

    const signIn = () => {
      context.root.$router.push('/sign-in');
    };

    const signInUser = computed(() => {
      return profileStore.profile;
    });

    // サインイン済のときはサインインのボタンを出さないで、こんにちは、XXさんを出す
    const greeting = computed(() => {
      console.log(signInUser);
      return `こんにちは ${signInUser.value.nickname}さん`;
    });

    return {
      signIn,
      isSignInPage,
      greeting,
      signInUser,
    };
  },
});
</script>

<style scoped>
.appbar__text {
  color: #fff;
  font-weight: bold;
}

.clickable {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
}

.clickable:hover {
  cursor: pointer;
}
</style>
