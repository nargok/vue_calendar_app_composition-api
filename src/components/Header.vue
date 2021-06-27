<template>
  <v-app-bar color="primary" app>
    <v-toolbar-title class="white--text">Calendar APP</v-toolbar-title>
    <v-spacer />
    <span v-if="!isSignInPage" class="clickable" @click="signIn"
      >サインイン</span
    >
  </v-app-bar>
</template>

<script>
import {
  defineComponent,
  // reactvie,
  computed,
  // toRefs,
  // watch,
  // getCurrentInstance,
} from '@vue/composition-api';

// https://github.com/vuejs/composition-api/issues/630
// function useRoute() {
//   const vm = getCurrentInstance();
//   if (!vm) throw new Error('must be called in setup');

//   console.log(vm);

//   return vm.proxy.$route;
// }

export default defineComponent({
  setup(props, context) {
    // https://stackoverflow.com/questions/65989489/best-way-to-get-current-route-in-vue3-and-vue-router
    const path = computed(() => context.root.$route.path);

    // const route = useRoute();

    // https://stackoverflow.com/questions/66815981/vue-router-get-route-params-using-the-vue-2-composition-api
    // const route = context.root.$route;

    // const state = reactvie({
    //   currentPath: computed(() => {
    //     return context.root.proxy.$route.path;
    //   }),
    // });

    // watch(
    //   () => context.root.$route,
    //   (r) => {
    //     state.route = r;
    //   },
    // );

    // const currentPath = computed(() => {
    //   context.root.$router.path;
    // });

    // サインイン画面に来ているときはサインインのテキストを出さない
    const isSignInPage = computed(() => {
      return path.value === '/sign-in';
    });

    const signIn = () => {
      context.root.$router.push('/sign-in');
    };

    // TODO サインイン済のときはサインインのボタンを出さないで、こんにちは、XXさんを出す

    return {
      // ...toRefs(state),
      signIn,
      isSignInPage,
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
