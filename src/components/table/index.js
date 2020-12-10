import React, { useState } from "react";
import clsx from "clsx";
import { useDispatch } from "react-redux";

import { change } from "../../store/reducers/modalSlice";
import classes from "./Table.module.css";
import Container from "../container";

const data = [
  {
    id: "00926551705",
    name: "Андрей Серп Молотов",
    status: "В обработке",
    operator: "ALTEL",
  },
  {
    id: "00926551706",
    name: "Андрей Серп Молотов",
    status: "В обработке",
    operator: "ALTEL",
  },
];

function Table() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const performSearch = (e) => {
    e.preventDefault();
  };

  return (
    <Container className={classes.root}>
      <h2>Текущие заказы</h2>
      <form className={classes.form}>
        <input
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          placeholder="Поиск по ИИН и ФИО"
          type="text"
        />
        <button onClick={performSearch} disabled={!query} type="submit">
          Искать
        </button>
        <button type="button" onClick={() => dispatch(change(true))}>
          Добавить заказ
        </button>
      </form>
      <div className={classes.table}>
        <div className={clsx(classes.row, classes.mainRow)}>
          <p>ИИН</p>
          <p>ФИО</p>
          <p>Статус</p>
          <p>Оператор</p>
        </div>
        {data.map((current) => (
          <div
            key={current.id}
            className={clsx(classes.row, classes.secondaryRow)}
          >
            <p>{current.id}</p>
            <p>{current.name}</p>
            <p>{current.status}</p>
            <p>{current.operator}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Table;
