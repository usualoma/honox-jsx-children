import { createRoute } from "honox/factory";
import Producer from "../islands/producer";
import Consumer from "../islands/consumer";

export default createRoute((c) => {
  const name = c.req.query("name") ?? "no name";
  return c.render(
    <div>
      <h1>Hello, {name}!</h1>
      <Producer/>
      <h2>Consumer</h2>
      <Consumer/>
    </div>,
    { title: name }
  );
});
