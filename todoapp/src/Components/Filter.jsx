import React, { useState } from "react";
import { useDispatch } from "react-redux";
const Filter = () => {
  const dispatch = useDispatch();
  const handlechange = (e) => {
    dispatch({ type: "filterchange", payload: e.target.id });
  };
  return (
    <div>
      <form onChange={handlechange}>
        <input type="radio" id="all" name="filter" />
        <label htmlFor="all">All</label>
        <input type="radio" id="done" name="filter" />
        <label htmlFor="done">Done</label>
        <input type="radio" id="notdone" name="filter" />
        <label htmlFor="notdone">Not Done</label>
      </form>
    </div>
  );
};

export default Filter;
