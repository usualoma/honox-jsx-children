import { createContext, useContext } from "hono/jsx";
import { ACTIONS } from "./app-reducer";

export type AppContextType = [number, ({ type }: { type: ACTIONS }) => void];
const AppContext = createContext<AppContextType | undefined>(undefined);

export function useAppContext() {
  return useContext(AppContext) as AppContextType;
}

export default AppContext;
