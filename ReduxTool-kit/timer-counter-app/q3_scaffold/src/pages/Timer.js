import { TimerActions } from "../components/TimerActions";
import { Time } from "../components/Time";
import { useDispatch, useSelector } from "react-redux";
import { alertSelector, resetAlert } from "../redux/reducers/alertReducer";
import { useEffect } from "react";

export const Timer = () => {
  const dispatch = useDispatch();
  // get alert message here
  const message = useSelector(alertSelector);
  // create effect to reset alert message here
   useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        dispatch(resetAlert());
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [message, dispatch]);

  return (
    <div className="page">
      {/* conditionally show the below div with alert message */}
      {message && <div className="alert">{message}</div>}
      <h1>Simple Timer</h1>
      <Time />
      <TimerActions />
    </div>
  );
};
