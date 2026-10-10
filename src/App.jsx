import "./App.css";
import data from "./data/data.js";

import Header from "./components/Header";
import Entry from "./components/Entry";

export default function App() {
  const entryElements = data.map(entry => {
    return <Entry key={entry.id} {...entry} />;
  });
  return (
    <>
      <Header />
      {entryElements}
    </>
  );
}
