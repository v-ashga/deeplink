import { Launch } from "./sample/Launch";
import { TeamsFxContext } from "./Context";
import { useContext } from "react";

export default function Tab() {
  const { themeString } = useContext(TeamsFxContext);
  return (
    <div style={{ background: "#fff" }}
      className={themeString === "default" ? "light" : themeString === "dark" ? "dark" : "contrast"}
    >
      <Launch />
    </div>
  );
}
