import Homepage from "./Homepage";
import Resume from "./Resume";

export default function App() {
  const path = window.location.pathname;

  return (
    <>
      {path === "/resume" ? <Resume /> : <Homepage />}
    </>
  );
}
