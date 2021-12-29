import "./styles.css";
import { Book } from "./Book";
import React from "react";

const App = () => {
  return (
    <div>
      <Book name="Js for beginners" year="2018" price="1000" />
      <Book name="React" year="2020" price="1200" />
      <Book name="Vue JS" year="2019" price="1100" />
    </div>
  );

  // return React.createElement('div', {}, [
  //   React.createElement(Book, { name: 'Js for beginners', year: 2018, price: 1000 }),
  //   React.createElement(Book, { name: 'React', year: 2020, price: 1200 }),
  //   React.createElement(Book, { name: 'Vue JS', year: 2019, price: 1100 })
  // ])
};

export default App;

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//       <p> Test my save </p>
//     </div>
//   );
// }
