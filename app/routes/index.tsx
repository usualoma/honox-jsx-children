import { Suspense, ErrorBoundary } from "hono/jsx";
import { createRoute } from "honox/factory";
import Counter from "../islands/counter";

const FizzBuzzCounter = async ({
  count,
  upto,
}: {
  count: number;
  upto: number;
}) => {
  await new Promise((resolve) => setTimeout(resolve, count === 0 ? 2000 : 200));
  if (count > upto) {
    return <p>Done!</p>;
  }
  return (
    <Suspense
      fallback={
        <p>
          {count % 3 === 0 && count % 5 === 0
            ? "FizzBuzz"
            : count % 3 === 0
            ? "Fizz"
            : count % 5 === 0
            ? "Buzz"
            : count}
        </p>
      }
    >
      <FizzBuzzCounter count={count + 1} upto={30} />
    </Suspense>
  );
};

const FizzBuzz = async () => {
  return (
    <Suspense fallback="<p>Thinking...</p>">
      <FizzBuzzCounter count={0} upto={100} />
    </Suspense>
  );
};

export default createRoute((c) => {
  const name = c.req.query("name") ?? "no name";
  return c.render(
    <div>
      <h1>Hello, {name}!</h1>
      <Counter>
        <FizzBuzz />
      </Counter>
    </div>,
    { title: name }
  );
});
