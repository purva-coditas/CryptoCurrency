import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Search } from "./search";

const ImageLoader = () => {
  const [image, setImage] = useState([]);
  const [searchedimage, setSearchedimage] = useState("");
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {
      console.log(res);
      setImage(res.data);
    });
  }, []);

  return (
    <div>
      <h1>here</h1>
      <div className="input-group rounded">
        <input
          style={{ width: "200" }}
          type="search"
          //   className="form-control rounded"
          value={searchedimage}
          onChange={(e) => {
            setSearchedimage(e.target.value);
          }}
          placeholder="Search"
          aria-label="Search"
          //   aria-describedby="search-addon"
        />
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            Search(searchedimage);
          }}
        >
          <i className="fas fa-search"></i>
        </button>
      </div>
      {image.map((i) => (
        <img key={i.id} src={i.url}></img>
      ))}
    </div>
  );
};

export default ImageLoader;
