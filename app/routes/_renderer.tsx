import { Style } from "hono/css";
import { jsxRenderer } from "hono/jsx-renderer";
import { Script } from "honox/server";
import Provider from "../islands/provider";

export default jsxRenderer(
  ({ children, title }) => {
    return (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>{title}</title>
          <Style />
        </head>
        <body>
          <Provider>{children}</Provider>
          <Script src="/app/client.ts" async />
        </body>
      </html>
    );
  },
  { stream: true }
);
