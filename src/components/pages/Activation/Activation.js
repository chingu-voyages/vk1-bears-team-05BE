import React, { useEffect, useState } from "react";
import { useParams, Redirect } from "react-router-dom";
import axios from "axios";

const Activation = () => {
  const [activate, setActivate] = useState(false);
  let { key } = useParams();

  useEffect(() => {
    //connect to api confirm the key

    setActivate(true);
  }, []);

  return (
    <div>
      {!activate ? (
        "Activating your account..."
      ) : (
        <Redirect to="/signin?activate=1" />
      )}
    </div>
  );
};

export default Activation;
