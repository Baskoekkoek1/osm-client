import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { reset } from "../../store/teams/actions";

export default function ResetButton() {
  const dispatch = useDispatch();

  const resetButton = () => {
    dispatch(reset());
  };

  return (
    <div>
      <Button onClick={resetButton}>Reset</Button>
    </div>
  );
}
