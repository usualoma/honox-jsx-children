import { createContext, useContext } from "hono/jsx";
import { ACTIONS } from "./app-reducer";

export type AppContextType = [number, ({ type }: { type: ACTIONS }) => void];
const AppContext = createContext<AppContextType>([0, () => {}]);

export const useAppContext = () => useContext(AppContext);

export default AppContext;
