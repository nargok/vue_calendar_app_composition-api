<template>
  <v-footer>
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
      <v-menu>
        <template v-slot:activator="{}">
          <div>
            <v-avatar>
              <!-- <span class="white--text body-2" v-text="namihei" /> -->
            </v-avatar>
          </div>
        </template>
      </v-menu>
    </v-bottom-navigation>
  </v-footer>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  setup(props, context) {
    const routerPush = (path) => {
      context.root.$router.push(
        path,
        () => {},
        () => {},
      );
    };

    const profile = () => {
      routerPush('/profile');
    };

    const share = () => {
      routerPush('/share');
    };

    const signOut = () => {
      routerPush('/sign-in');
    };
    return {
      routerPush,
      profile,
      share,
      signOut,
    };
  },
});
</script>
