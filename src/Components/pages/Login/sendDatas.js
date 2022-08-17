import { useEffect } from "react";

export default function sendDatas(values) {
  const account = {
    username: values.username,
    password: values.password,
  };
  console.log(JSON.stringify(account));
  fetch(
    `http://localhost:8080/users/usernameAndPass?username=${values.username}&password=${values.password}`,
    {
      method: "GET",
      // headers: { "Content-type": "application/json" },
      // body: JSON.stringify(account),
    }
  ).then((res) => {
    if (res.status === 200) {
      //   alert("ok");
      console.log(res.status);
      res.json().then((data) => {
        localStorage.setItem("user", JSON.stringify(data));
      });
      window.location.href = "/MainPage";
    } else {
      alert("wrong data!");
      window.location.href = "/Login";
    }
  });
}
