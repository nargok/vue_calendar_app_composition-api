import '@/plugins/composition-api';
import { reactive } from '@vue/composition-api';

export const sharedUserMockData = [
  {
    userId: 1,
    userName: 'namihei',
    nickname: '波平',
    themeColor: '#4caf50',
    hasAvatar: false,
    display: true,
  },
  {
    userId: 2,
    userName: 'fune',
    nickname: 'フネ',
    themeColor: '#ff9800',
    hasAvatar: false,
    display: true,
  },
];

export const sharedUserStore = reactive({ sharedUsers: sharedUserMockData });

export const update = (profile) => {
  const filteredUser = sharedUserStore.sharedUsers.filter(
    (user) => user.userId === profile.userId,
  );

  if (!filteredUser || filteredUser.length === 0) {
    return;
  }

  const targetUser = filteredUser[0];
  targetUser.userName = profile.userName;
  targetUser.nickname = profile.nickname;
  targetUser.themeColor = profile.themeColor;
  targetUser.hasAvatar = profile.hasAvatar;
};

export const searchUsers = (partOfNickname) => {
  return sharedUserStore.sharedUsers.filter((user) =>
    user.nickname.startsWith(partOfNickname),
  );
};

export const getThemeColor = (userId) => {
  const defaultColor = '#f44336';
  const user = sharedUserStore.sharedUsers.find(
    (user) => user.userId === userId,
  );
  if (!user) {
    return defaultColor;
  }

  return user.themeColor;
};
