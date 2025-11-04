import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { StartseiteDesktop } from "./screens/StartseiteDesktop";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <StartseiteDesktop />
  </StrictMode>,
);
