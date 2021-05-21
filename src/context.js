import React, { useState, useEffect } from "react";
import axios from "axios";

const UnsplashContext = React.createContext();
const rootUrl = "https://api.unsplash.com";
const searchUrl = `${rootUrl}/search/photos?per_page=50&query=`;
const getPhotos = `${rootUrl}/photos/random/?count=50`;

axios.defaults.headers.common["Authorization"] =
  "Client-ID 4KLoIMe9UUqlIwgHX1jxZBVTm3s5YvnRgfsu7ukCWK0";

const ImageProvider = ({ children }) => {
  const [images, setImages] = useState([]);

  //   Get the latest movies
  const GetImages = async () => {
    await axios
      .get(getPhotos)
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => console.log(error));
  };

  // Search for Movies
  const SearchImages = async (term) => {
    await axios
      .get(searchUrl + term)
      .then((response) => setImages(response.data.results))
      .catch((error) => console.log(error));
  };

  return (
    <UnsplashContext.Provider
      value={{
        images,
        setImages,
        SearchImages,
        GetImages,
      }}
    >
      {children}
    </UnsplashContext.Provider>
  );
};

export { UnsplashContext, ImageProvider };
