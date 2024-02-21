import { PropsWithChildren } from "hono/jsx";
import { useAppContext } from "./app-context";

export default function Counter({ children }: PropsWithChildren<{}>) {
  const [, updateCount] = useAppContext();
  return (
    <div>
      <button onClick={() => updateCount({ type: "increment" })}>
        Increment
      </button>
    </div>
  );
}
