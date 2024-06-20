import { createContext } from "react";
export const StateContext = createContext({});

function StateProvider({ children, loggedIn, setLoggedIn }) {


    const values = {
        loggedIn: loggedIn,
        setLoggedIn: setLoggedIn
    }
  return (
    <StateContext.Provider value={values}>
      {children}
    </StateContext.Provider>
  );
}

export default StateProvider;