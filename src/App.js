import "./styles.css";
// import RenderList from "./RenderList";
// import ToDo from "./ToDo/ToDo";
// import RenderList from "./RenderList";
// import testMyAll from "./Problems/Promise-all-polyfill";
// import Timer from "./Timer/Timer";
import PubSub from "./PubSub/PubSub";
import { useEffect, useRef } from "react";
export default function App() {
  // testMyAll(); // promise all polyfill
  const isCalled = useRef(false);
  useEffect(() => {
    if (isCalled.current) return;
    isCalled.current = true;
    console.log("inside effect");

    let pubSub = new PubSub();
    pubSub.subcribe("evt1", (data) => {
      console.log("evt1", data);
    });
    pubSub.subcribe("evt1", (data) => {
      console.log("evt1", data);
    });
    pubSub.subcribe("evt2", (data) => {
      console.log("evt2", data);
    });
    pubSub.publish("evt1", 100);
    pubSub.publish("evt2", 200);
  }, []);

  return (
    <div className="App">
      <h1>My Learning Of React Application</h1>
      {/* <RenderList /> */}
      {/* <ToDo /> */}
      {/* <Timer forTime={5 * 60} /> */}
    </div>
  );
}
