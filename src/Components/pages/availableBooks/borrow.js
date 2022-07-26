import React from "react";
import { useState, useEffect } from "react";
import Availablebooks from "./availableBooks";

const BorrowUseForm = (period, title) => {
  const user = JSON.parse(window.localStorage.getItem("user"));

  //   console.log(title);
};
export default BorrowUseForm;
