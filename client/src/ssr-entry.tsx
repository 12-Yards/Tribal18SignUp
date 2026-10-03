import { renderToString } from "react-dom/server";
import { Router as WouterRouter } from "wouter";
import App from "./App";

export function renderPage(path: string) {
  return renderToString(
    <WouterRouter ssrPath={path}>
      <App />
    </WouterRouter>,
  );
}