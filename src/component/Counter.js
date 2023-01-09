import { useReducer } from "react";

const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const SET_VALUE_TO_ADD = "setValueToAdd";
const ADD_VALUE_TO_COUNT = "addValueToCount";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    case SET_VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload,
      };
    case ADD_VALUE_TO_COUNT:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0,
      };
    default:
      return state;
  }
};

export default function Counter({ initialCount }) {
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });

  const handleClickIncrement = () => {
    dispatch({
      type: INCREMENT_COUNT,
    });
  };
  const handleClickDecrement = () => {
    dispatch({ type: DECREMENT_COUNT });
  };
  const handleChange = (e) => {
    const value = Number(e.target.value) || 0;
    dispatch({ type: SET_VALUE_TO_ADD, payload: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD_VALUE_TO_COUNT });
  };
  return (
    <div>
      <h1>Count is {state.count}</h1>
      <button onClick={handleClickIncrement}>Increment</button>
      <button onClick={handleClickDecrement}>Decrement</button>
      <form onClick={handleSubmit}>
        <label>Add a lot</label>
        <input
          onChange={handleChange}
          value={state.valueToAdd || ""}
          type="number"
        />
        <button>Add</button>
      </form>
    </div>
  );
}
