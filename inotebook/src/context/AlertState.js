import AlertContext from "./alertContext";
import React, { useState } from "react";

const AlertState = (props) => {
  const host = "http://localhost:1212";

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <AlertContext.Provider value={{showAlert}}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
