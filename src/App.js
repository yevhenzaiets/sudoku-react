import './App.css'
import Main from "./components/Main/Main";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import generator from "sudoku";
import { useState } from 'react';

window.generator = generator;

//// create sudoku structure { rows: [ { cols: [ {properties} ] } ] }

function generateSudoku() {
  const raw = generator.makepuzzle();
  const result = { rows: [] };

  for(let i = 0; i < 9; i++) {
    const row = {cols: [], index: i}
    for(let j = 0; j < 9; j++) {
      const value = raw[i * 9 + j];
      const col = {
        row: i,
        col: j,
        value: value,
        readonly: value !== null
      };
      row.cols.push(col);
    }
    result.rows.push(row);
    // console.log(row)
  }
  // console.log(result);
  return result;
}

generateSudoku();



function App(props) {
  const [sudoku, setSudoku] = useState(generateSudoku);

  return <div className="wrapper">
    <div className="container">
      <Header/>
      <Main sudoku={sudoku} сlassName="main"/>
      <Footer/>
    </div>
  </div>
}

export default App;
