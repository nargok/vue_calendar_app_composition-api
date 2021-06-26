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
        label="ユーザー名*"
        append-outer-icon="edit"
        class="mt-4"
        @click:append-outer.stop="editUserName"
      />
      <v-dialog
        v-model="isOpenEditUserNameDialog"
        max-width="600"
        open-on-hover
      >
        <v-card>
          <v-card-text>
            <v-container>
              <v-row>
                <v-text-field v-model="newUserName" label="ユーザー名" />
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="blue darken-1" text @click="closeEditUserNameDialog">
              キャンセル
            </v-btn>
            <v-btn color="blue darken-1" text @click="saveUserName">
              保存する
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-text-field
        v-model="profile.nickname"
        readonly
        label="ニックネーム*"
        append-outer-icon="edit"
        class="mt-4"
        @click:append-outer.stop="editUserNickname"
      />
      <v-dialog
        v-model="isOpenEditNicknameDialog"
        max-width="600"
        open-on-hover
      >
        <v-card>
          <v-card-text>
            <v-container>
              <v-row>
                <v-text-field v-model="newNickName" label="ニックネーム" />
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              color="blue darken-1"
              text
              @click="closeEditUserNicknameDialog"
            >
              キャンセル
            </v-btn>
            <v-btn color="blue darken-1" text @click="saveUserNickname">
              保存する
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
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
      state.newUserName = state.profile.userName;
      state.isOpenEditUserNameDialog = true;
    };

    const saveUserName = () => {
      profileStore.profile.userName = state.newUserName;
      state.isOpenEditUserNameDialog = false;
    };

    const closeEditUserNameDialog = () => {
      state.isOpenEditUserNameDialog = false;
    };

    const editUserNickname = () => {
      state.newNickName = state.profile.nickname;
      state.isOpenEditNicknameDialog = true;
    };

    const saveUserNickname = () => {
      profileStore.profile.nickname = state.newNickName;
      state.isOpenEditNicknameDialog = false;
    };

    const closeEditUserNicknameDialog = () => {
      state.isOpenEditNicknameDialog = false;
    };
    return {
      ...toRefs(state),
      saveFileContent,
      saveThemeColor,
      editUserName,
      saveUserName,
      closeEditUserNameDialog,
      editUserNickname,
      saveUserNickname,
      closeEditUserNicknameDialog,
    };
  },
});
</script>
