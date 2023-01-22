import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMessages } from "../Redux/reducer";

const Greetings = () => {
  const greetings = useSelector((state) => state.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMessages());
  }, [dispatch]);

  return (
    <div>
      <h1>{greetings.message}</h1>
    </div>
  );
};

export default Greetings;
