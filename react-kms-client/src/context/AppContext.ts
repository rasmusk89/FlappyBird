import React from "react";

export interface IAppState {
    jwt: string | null;
    firstName: string;
    lastName: string;
    setAuthInfo: (jwt: string, firstName: string, lastName: string) => void;
}

export const initialAppState: IAppState = {
    jwt: '00000-00000-00000jwt',
    firstName: 'Rasmus',
    lastName: 'Kilk',
    setAuthInfo: (): void => {}
}

export const AppContext = React.createContext<IAppState>(initialAppState);
export const AppContextProvider = AppContext.Provider;
export const AppContextConsumer = AppContext.Consumer;
