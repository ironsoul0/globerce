import React from "react";
import { useSelector } from "react-redux";

import Header from "./components/header";
import Table from "./components/table";
import AddOrder from "./components/addOrder";
import EditOrder from "./components/editOrder";

function App() {
  const { open, pickedId } = useSelector((state) => state.modal);

  return (
    <div className="app">
      <Header />
      <Table />
      <AddOrder isOpen={open && !pickedId} />
      {pickedId && <EditOrder isOpen={open} />}
    </div>
  );
}

export default App;
