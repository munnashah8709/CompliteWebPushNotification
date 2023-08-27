import React, { useEffect, useState } from "react";
import { getToken } from "firebase/messaging";
import { messaging } from "./firebase.config";

const Lonin = (e) => {
  const [inputdata, setinputdata] = useState({});
  const [DeviceToken, setdeviceTocken] = useState("");



  async function requestPermission() {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      console.log(permission);
      const token = await getToken(messaging, {
        vapidKey:"BChtt3ZJI-TLGJR2MxiWcBxYO5DOjseOUHesXaxL6-oAyIGV1KrmueGGUPqtQsXrCIZX2_LbSfFDXwYoxXcscVM",
      });
      setdeviceTocken(token);
    } else if (permission === "denied") {
      alert("You denied for the notification");
    }
  }

  const showMessaging = () => {
    messaging.onMessage((messages) => {
      console.log(messages);
      alert(
        `Title ${messages.notification.title} Body:${messages.notification.body}`
      );
    });
  };
  useEffect(() => {
    requestPermission();
    showMessaging();
  }, []);

  const handelinput = (e) => {
    const Name = e.target.name;
    const Value = e.target.value;
    setinputdata({ ...inputdata, [Name]: Value });
  };

  const formdata1 = new FormData();
  formdata1.append("email", inputdata.email);
  formdata1.append("password", inputdata.password);

  const handelSubmit = async (e) => {
    e.preventDefault();
    console.log(inputdata);
    const response = await fetch("http://localhost:8000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: inputdata.email,
        password: inputdata.password,
        DeviceTocken: DeviceToken,
      }),
    });

    const datas = await response.json();
    console.log(datas);
  };

  return (
    <div>
      <h5 className="fw-normal mb-3 pb-3" style={{ letterspacing: "1px" }}>
        Sign into your account
      </h5>
      <div className="mb-4">
        <label className="form-label">Email address</label>
        <input
          type="email"
          id=""
          onChange={handelinput}
          name="email"
          className="form-control form-control-lg"
        />
      </div>
      <div className=" mb-4">
        <label className="form-label">Password</label>
        <input
          type="password"
          id=""
          onChange={handelinput}
          name="password"
          autoComplete="off"
          className="form-control"
        />
      </div>

      <div className="pt-1 mb-4">
        <button
          className="btn btn-dark btn-lg btn-block"
          onClick={handelSubmit}
          type="button"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Lonin;
