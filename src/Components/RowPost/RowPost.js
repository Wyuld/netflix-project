import React, { useEffect, useState } from "react";
import Axios from "../../axios/axios";
import { imageUrl } from "../../constants/constants";
import "./RowPost.css";

function RowPost({ title, isSmall, api }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    Axios.get(api)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((err) => {
        alert("Network Error");
      });
  }, [api]);

  let display = movies.map((item, index) => {
    return (
      <img
        key={index}
        className={isSmall ? "small-poster" : "poster"}
        src={imageUrl + item.backdrop_path}
        alt=""
      />
    );
  });

  return (
    <>
      <div className="row">
        <h2>{title}</h2>

        <div className="posters">
          {movies && display}{" "}
        </div>
      </div>
    </>
  );
}

export default RowPost;
