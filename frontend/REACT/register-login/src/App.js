import React from "react";

import { Navbar } from './components/Navbar'
import { Slider } from './components/Slider'
import { Categories } from './components/Categories'
import { HighlightedProduts } from './components/HighlightedProduts'

function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <Categories />
      <HighlightedProduts />
    </>
  );
}

export default App;
