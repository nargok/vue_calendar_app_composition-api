import '@/plugins/composition-api';
import { reactive } from '@vue/composition-api';

export const profileMockData = {
  userId: 1,
  userName: 'namihei',
  nickname: '波平',
  themeColor: '#4caf50',
  hasAvatar: false,
  mailAddress: 'namihei@example.com',
};

export const profileStore = reactive({ profile: null });
