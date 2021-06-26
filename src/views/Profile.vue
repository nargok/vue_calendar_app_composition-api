<template>
  <v-row align="center" justify="center">
    <v-col cols="12" md="4" class="text-center">
      <p class="display-1 py-12">プロフィール</p>
      <v-row>
        <v-col cols="12" md="4">
          <v-avatar :color="profile.themeColor" size="72">
            <span class="white--text body-2" v-text="profile.nickname" />
          </v-avatar>
        </v-col>
        <v-col>
          <v-file-input
            accept="image/png, image/jpeg, image/bmp"
            placeholder="画像を選択してください"
            prepend-icon="photo_camera"
            label="アバター"
            @change="saveFileContent"
          ></v-file-input>
        </v-col>
      </v-row>
      <label for="" class="v-label theme--lighter">テーマカラー</label>
      <v-color-picker
        v-model="newThemeColor"
        class="mx-auto mb-4 mt-2"
        hide-canvas
        show-swatches
        swaches-max-height="120px"
      />
      <v-btn small rounded color="primary" @click="saveThemeColor">
        テーマカラーを決定する
      </v-btn>
      <v-text-field
        v-model="profile.userName"
        readonly
        label="ユーザー名"
        append-outer-icon="edit"
        class="mt-4"
        @click:append-outer.stop="editUserName"
      />
    </v-col>
  </v-row>
</template>

<script>
import { defineComponent, reactive, toRefs } from '@vue/composition-api';
import { profileStore } from '@/store/profile';

export default defineComponent({
  setup() {
    const state = reactive({
      profile: profileStore.profile,
      newUserName: null,
      newNickName: null,
      newThemeColor: null,
      isOpenEditUserNameDialog: false,
      isOpenEditNicknameDialog: false,
    });

    const saveFileContent = () => {};

    const saveThemeColor = () => {
      profileStore.profile.themeColor = state.newThemeColor.hex;
    };

    const editUserName = () => {
      state.userName = state.profile.userName;
      state.isOpenEditUserNameDialog = true;
    };

    return {
      ...toRefs(state),
      saveFileContent,
      saveThemeColor,
      editUserName,
    };
  },
});
</script>
