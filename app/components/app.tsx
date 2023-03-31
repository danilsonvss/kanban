import "./app.css";
import Navbar from "./navbar";

export default function App(props: any) {
  return (
    <div className="app">
      <Navbar title={props.title} />
    </div>
  );
}
