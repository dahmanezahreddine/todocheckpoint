import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

const Listtask = () => {
  const todotask = useSelector((state) => state.todoReducer.tasklist);
  const filtertask = useSelector((state) => state.todoReducer.filter);
  return (
    <div>
      {todotask
        .filter((el) =>
          filtertask === "done"
            ? el.isdone
            : filtertask === "notdone"
            ? !el.isdone
            : el
        )
        .map((el) => (
          <Task key={el.id} {...el}></Task>
        ))}
    </div>
  );
};

export default Listtask;
