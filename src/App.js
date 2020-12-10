import React from "react";
import { useSelector } from "react-redux";

import Header from "./components/header";
import Table from "./components/table";
import AddOrder from "./components/addOrder";

function App() {
  const isOpen = useSelector((state) => state.modal.open);

  return (
    <div className="app">
      <Header />
      <Table />
      <AddOrder isOpen={isOpen} />
    </div>
  );
}

export default App;
