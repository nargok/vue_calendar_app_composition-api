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
      <div v-for="(event, index) in filteredEvents" :key="index">
        <v-chip
          class="mt-2"
          :color="getEventColor(event)"
          text-color="white"
          v-text="event.name"
        />
      </div>
      <v-divider class="my-4" />
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
import { sharedUserStore, getThemeColor } from '@/store/shared-user';
import { todayCalendarEventMockData } from '@/store/calendar-event';

export default defineComponent({
  setup(props, context) {
    const state = reactive({
      today: parseDate(new Date()),
      displayWeekday: computed(() => {
        return ['日', '月', '火', '水', '木', '金', '土'][state.today.weekday];
      }),
      sharedUsers: sharedUserStore.sharedUsers,
      filteredEvents: computed(() => {
        const displayUserIds = state.sharedUsers
          .filter((user) => user.display)
          .map((user) => user.userId);

        // console.log('user_ids', displayUserIds);

        const events = todayCalendarEventMockData.filter(
          (event) => displayUserIds.includes(event.userId) && !event.startTime,
        );

        // console.log('events', events);
        return events;
      }),
    });

    const getEventColor = (event) => {
      if (!event) {
        return;
      }

      return getThemeColor(event.userId);
    };

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
      getEventColor,
      calendar,
      profile,
      share,
    };
  },
});
</script>
