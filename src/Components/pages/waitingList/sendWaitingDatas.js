import React from "react";
const SendWaitingDatas = (id_user, title) => {
  const user = JSON.parse(window.localStorage.getItem("user"));

  fetch(
    `http://localhost:8080/waitinglist/waiting?idUserWhoBorrow=${user.id}&title=${title}`,
    {
      method: "POST",
    }
  ).then((res) => {
    if (res.status === 200) {
      alert("You've been added to the waiting list!");
      window.location.reload();
    } else {
      alert("Something went wrong! Try again!");
    }
  });
};
export default SendWaitingDatas;
