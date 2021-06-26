<template>
  <v-footer v-if="signInUser" app class="pa-0">
    <v-bottom-navigation grow dark>
      <v-btn class="my-auto" height="56" @click="routerPush('/')">
        <span>home</span>
        <v-icon large>home</v-icon>
      </v-btn>
      <v-btn class="my-auto" height="56" @click="routerPush('/')">
        <span>daily</span>
        <v-icon large>view_day</v-icon>
      </v-btn>
      <v-btn class="my-auto" height="56" @click="routerPush('/')">
        <span>weekly</span>
        <v-icon large>view_week</v-icon>
      </v-btn>
      <v-btn class="my-auto" height="56" @click="routerPush('/')">
        <span>monthly</span>
        <v-icon large>event_note</v-icon>
      </v-btn>
      <v-menu top open-on-hover offset-y>
        <template v-slot:activator="{ on }">
          <div class="py-1 px-1 text-center" v-on="on">
            <v-avatar :color="signInUser.themeColor">
              <span class="white--text body-2" v-text="signInUser.nickname" />
            </v-avatar>
          </div>
        </template>
        <v-card>
          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index" link>
              <v-list-item-icon>
                <v-icon v-text="item.icon" />
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.title" />
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-card-actions>
            <v-btn @click="signOut">サインアウト</v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
    </v-bottom-navigation>
  </v-footer>
</template>

<script>
import {
  defineComponent,
  reactive,
  toRefs,
  computed,
} from '@vue/composition-api';
import { profileStore } from '@/store/profile';

export default defineComponent({
  setup(props, context) {
    const state = reactive({
      items: [
        {
          title: 'プロフィール',
          icon: 'account_circle',
          methodName: 'profile',
        },
        { title: '共有する', icon: 'share', methodName: 'share' },
      ],
    });

    const handleMethod = (methodName) => {
      eval(methodName)();
    };

    const profile = () => {
      routerPush('/profile');
    };

    const share = () => {
      routerPush('/share');
    };

    const signInUser = computed(() => {
      return profileStore.profile;
    });

    const signOut = () => {
      profileStore.profile = null;
      routerPush('/sign-in');
    };

    const routerPush = (path) => {
      context.root.$router.push(
        path,
        () => {},
        () => {},
      );
    };

    return {
      ...toRefs(state),
      handleMethod,
      routerPush,
      profile,
      share,
      signOut,
      signInUser,
    };
  },
});
</script>
