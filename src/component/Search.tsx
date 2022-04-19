import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

export const Search = (title: string) => {
  console.log(title);
  const [searchedtitle, setsearchedTitle] = useState();
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos=${title}`)
      .then((res) => {
        console.log(res);
        setsearchedTitle(res.data);
      });
  }, []);
  console.log(searchedtitle);
};
