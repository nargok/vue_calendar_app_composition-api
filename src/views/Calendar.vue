<template>
  <v-row class="fill-height">
    <v-col class="mt-16 pt-10">
      <v-sheet height="64">
        <v-toolbar flat>
          <v-btn outlined class="mr-4" color="grey darken-2" @click="setToday">
            Today
          </v-btn>
          <v-btn fab text small color="grey darken-2" @click="prev">
            <v-icon>chevron_left</v-icon>
          </v-btn>
          <v-btn fab text small color="grey darken-2" @click="next">
            <v-icon>chevron_right</v-icon>
          </v-btn>
          <v-toolbar-title v-text="title" />
        </v-toolbar>
      </v-sheet>
      <v-sheet height="580">
        <v-calendar
          v-if="visible"
          ref="calendar"
          v-model="focus"
          color="primary"
          :evenvts="filteredEvents"
          :event-color="getEventColor"
          :now="today"
          :type="type"
          :day-format="formatDay"
          :month-format="formatMonth"
          event-more-text="他 {0} 件"
          @click:event="showEvent"
          @click:more="viewDay"
          @click:date="startAddEvent"
          @change="updateRange"
        />
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
import {
  defineComponent,
  computed,
  reactive,
  toRefs,
} from '@vue/composition-api';

export default defineComponent({
  setup(props, context) {
    const state = reactive({
      title: computed(() => {
        return 'hoge'; // todo 後で変える
      }),
      visible: computed(() => {
        return true;
      }), // todo 後で変える
      focus: null,
      filteredEvents: computed(() => {
        return [];
      }),
      type: computed(() => {
        return context.root.$route.params.type;
      }),
    });

    const setToday = () => {};
    const prev = () => {};
    const next = () => {};
    const getEventColor = () => {};
    const today = () => {};

    return {
      ...toRefs(state),
      setToday,
      prev,
      next,
      getEventColor,
      today,
    };
  },
});
</script>
