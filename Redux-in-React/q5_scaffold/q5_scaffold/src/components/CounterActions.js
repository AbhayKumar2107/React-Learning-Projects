import { useDispatch, useSelector } from "react-redux";
// add action creators imports here
import{
  increaseCount,
  decreaseCount,
  resetCount,
} from "../redux/actions/counterActions";

export const CounterActions = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);

  return (
    <div className="actions">
      {/* disptach action to decrease count here */}
      <button disabled={count <= 0} onClick={() => dispatch(decreaseCount())}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
          alt="dec"
        />
      </button>
      {/* disptach action to increase count here */}
      <button disabled={count >= 10} onClick={() => dispatch(increaseCount())} >
        <img
          src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
          alt="inc"
        />
      </button>
      {/* disptach action to reset count here */}
      <button onClick={() => dispatch(resetCount())}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/9923/9923627.png"
          alt="reset"
        />
      </button>
    </div>
  );
};
