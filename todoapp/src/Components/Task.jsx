import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Task = (props) => {
  const dispatch = useDispatch();
  const handledelete = () => {
    dispatch({ type: "deletetask", payload: props.id });
  };
  const handledone = () => {
    dispatch({ type: "donetask", payload: props.id });
  };
  const [modifie, setmodifie] = useState(false);
  const [changemodi, setChangemodi] = useState("");
  const handlemod = () => {
    return setmodifie(!modifie);
  };
  const handleedit = () => {
    dispatch({ type: "changemodi", payload: changemodi, id: props.id });
    setmodifie(!modifie);
  };

  return (
    <div className="listoftask">
      <button onClick={handledone}>{props.isdone ? "undone" : "done"} </button>
      <span
        className={props.isdone === true ? "titretask" : ""}
        // style={{
        //   textDecoration: props.isdone === true ? "line-through" : "none",
        // }}
      >
        {props.title}
      </span>

      {modifie ? (
        <span>
          <input onChange={(e) => setChangemodi(e.target.value)} type="text" />
          <button onClick={handleedit}>validate</button>
        </span>
      ) : (
        <button onClick={handlemod}>mod </button>
      )}

      <button onClick={handledelete}>delete</button>
    </div>
  );
};

export default Task;
