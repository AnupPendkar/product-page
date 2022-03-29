import Reducer from "./Reducer";
import { createContext, useReducer } from "react";

const initialState = {
  TotQuan: 0,
  total: 0,
};

export const Context = createContext(initialState);
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const addQuan = (quan) => {
    dispatch({
      type: "add",
      payload: quan,
    });
  };

  return (
    <Context.Provider
      value={{
        TotQuan: state.TotQuan,
        total: state.total,
        addQuan,
      }}
    >
      {children}
    </Context.Provider>
  );
};
