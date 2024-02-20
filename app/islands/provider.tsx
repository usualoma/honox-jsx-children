import AppContext from "./app-context";
import type { AppContextType } from "./app-context";
import { appReducer } from "./app-reducer";
import { useReducer } from "hono/jsx";

export default function Provider({ children }: { children: any }) {
  const [state, dispatch] = useReducer(appReducer, 0);
  const providerState = [state, dispatch] as AppContextType;
  return (
    <AppContext.Provider value={providerState}>{children}</AppContext.Provider>
  );
}
