import { useState, PropsWithChildren } from "hono/jsx";

export default function Counter({ children }: PropsWithChildren<{}>) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {children}
    </div>
  );
}
