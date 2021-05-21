import React, { useContext } from "react";
import "./SplashGrid.scss";
import { UnsplashContext } from "../../context";

export default function SplashGrid() {
  const { images } = useContext(UnsplashContext);

  return (
    <section id="splashgrid">
      <div className="container">
        <ul className="grid">
          {images ? (
            images.map((image) => (
              <li className="grid__item">
                <img
                  className="grid__image"
                  src={image.urls.regular}
                  alt="loading...."
                  loading="lazy"
                />
              </li>
            ))
          ) : (
            <h2>Loading</h2>
          )}
        </ul>
      </div>
    </section>
  );
}
