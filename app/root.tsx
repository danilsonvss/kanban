import type {
  LinksFunction,
  MetaFunction,
} from "@remix-run/node";
import { Outlet } from "@remix-run/react";

import stylesUrl from "./styles/global.css";
import Document from "./document";

// ----------------------------------------------------------------

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Kanban",
  viewport: "width=device-width,initial-scale=1",
});

// ----------------------------------------------------------------

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}
