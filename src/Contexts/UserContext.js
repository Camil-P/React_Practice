import { createContext, useReducer } from "react";
import userReducer from "../Reducer/userReducer";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [userState, dispatchUserState] = useReducer(userReducer, {
    accessToken: null,
    refreshToken: null,
  });

  const isUserLogged = () => userState.accessToken && userState.refreshToken;

  return (
    <UserContext.Provider
      value={{
        userState,
        dispatchUserState,
        isUserLogged
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
