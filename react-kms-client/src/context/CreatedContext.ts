import React from "react";

export interface ICreated {
    created: boolean
    setCreated: (created: boolean | null) => void;
}

export const initialAppState: ICreated = {
    created: false,
    setCreated: (created: boolean | null): void => {}


}

export const CreatedContext = React.createContext<ICreated>(initialAppState);
export const CreatedContextProvider = CreatedContext.Provider;
export const CreatedContextConsumer = CreatedContext.Consumer;
