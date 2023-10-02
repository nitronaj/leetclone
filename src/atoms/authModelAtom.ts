import { atom } from 'recoil';

export type AuthModalType = 'login' | 'register' | 'forgotPassword';

type AuthModalState = {
  isOpen: boolean;
  type: AuthModalType;
};

const initialAuthModalState: AuthModalState = {
  isOpen: false,
  type: 'login',
};

export const authModalState = atom({
  key: 'authModelState',
  default: initialAuthModalState,
});
