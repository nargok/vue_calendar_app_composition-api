<template>
  <v-row align="center" justify="center">
    <v-col cols="12" md="6" class="text-center">
      <v-row class="py-12" align="center" justify="center">
        <span class="font-weight-thin title" v-text="`${today.year}/`" />
        <span class="pl-2 display-1" v-text="`${today.month}/${today.day}`" />
        <v-chip
          class="ml-2 pt-0 title"
          color="pink"
          text-color="white"
          v-text="displayWeekday"
        />
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import {
  defineComponent,
  toRefs,
  computed,
  reactive,
} from '@vue/composition-api';
import { parseDate } from 'vuetify/lib/components/VCalendar/util/timestamp';

export default defineComponent({
  setup(props, context) {
    const state = reactive({
      today: parseDate(new Date()),
      displayWeekday: computed(() => {
        return ['日', '月', '火', '水', '木', '金', '土'][state.today.weekday];
      }),
    });

    const calendar = () => {
      context.root.$router.push(
        'calendar/month',
        // () => {},
        // () => {},
      );
    };

    const profile = () => {
      context.root.$router.push(
        'profile',
        () => {},
        () => {},
      );
    };

    const share = () => {
      context.root.$router.push(
        'share',
        () => {},
        () => {},
      );
    };

    return {
      ...toRefs(state),
      calendar,
      profile,
      share,
    };
  },
});
</script>
