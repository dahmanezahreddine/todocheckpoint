const initialState = {
  tasklist: [],
  filter: "",
};
const todoReducer = (state = initialState, action) => {
  if (action.type === "addtask") {
    return {
      ...state,
      tasklist: [...state.tasklist, action.payload],
    };
  }
  if (action.type === "deletetask") {
    return {
      ...state,
      tasklist: state.tasklist.filter((el) => action.payload !== el.id),
    };
  }
  if (action.type === "donetask") {
    return {
      ...state,
      tasklist: state.tasklist.map((el) =>
        action.payload === el.id ? { ...el, isdone: !el.isdone } : el
      ),
    };
  }
  if (action.type === "changemodi") {
    return {
      ...state,
      tasklist: state.tasklist.map((el) =>
        action.id === el.id ? { ...el, title: action.payload } : el
      ),
    };
  }
  if (action.type === "filterchange") {
    return {
      ...state,
      filter: action.payload,
    };
  }

  return state;
};

export default todoReducer;
