import {Schema} from '../screens/FlightListScreenContainer';
import {SelectedDates} from '../types/selectedDates';

export type RootStackParamList = {
  HomeNavigation: undefined;
  Screen: undefined;
  Screen1: {bookId: string};
  Screen2: {id: string};
  Onboarding: {error?: Error};
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
  BookFlights: undefined;
  FlightListScreenContainer: {filteredData: Schema[]};
};

export type HomeNavParamList = {
  HomeStack: undefined;
  LibraryStack: undefined;
  SearchStack: undefined;
  Profile: undefined;
};

export type CombinedNavParamList = RootStackParamList &
  HomeNavParamList &
  HomeStackParamList;

export type Screen = keyof CombinedNavParamList;
