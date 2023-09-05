import {GraphQlError} from './types';

export type RootStackParamList = {
  AppOutdated: undefined;
  HomeNavigation: undefined;
  ProductModal: undefined;
  Reader: {bookId: string};
  Player: {id: string};
  Onboarding: {error?: GraphQlError};
  RegisterNewUser: undefined;
  Registration: undefined;
  WelcomeNewUser: undefined;
  LoginLandingPage: undefined;
  LoginEmailVerification: {
    connectionId: string;
    codeVerifier: string;
  };
  LoginCallback: {
    id?: string;
    code?: string;
  };
};

export type HomeStackParamList = {
  Home: undefined;
  Product: {id: string};
};

export type LibraryStackParamList = {
  Library: undefined;
  Product: {id: string};
};

export type SearchStackParamList = {
  Search: undefined;
  Product: {id: string};
};

export type HomeNavParamList = {
  HomeStack: undefined;
  LibraryStack: undefined;
  SearchStack: undefined;
  Profile: undefined;
};

export type CombinedNavParamList = RootStackParamList &
  HomeNavParamList &
  HomeStackParamList &
  LibraryStackParamList &
  SearchStackParamList;

export type Screen = keyof CombinedNavParamList;
