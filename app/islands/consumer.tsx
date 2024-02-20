import { PropsWithChildren } from "hono/jsx";
import { useAppContext } from "./app-context";

export default function Consumer({ children }: PropsWithChildren<{}>) {
  const [state] = useAppContext();
  return <div>{state}</div>;
}
