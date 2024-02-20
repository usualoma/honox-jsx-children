import { PropsWithChildren } from "hono/jsx";
import { useAppContext } from "./app-context";

export default function Producer({ children }: PropsWithChildren<{}>) {
  const [, updateCount] = useAppContext();
  return (
    <div>
      <button onClick={() => updateCount({ type: "increment" })}>
        Increment
      </button>
    </div>
  );
}
