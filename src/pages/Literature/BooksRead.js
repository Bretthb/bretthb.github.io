import React from "react";
import Content from "../../Components/ContentDiv";
import "./BooksRead.css";
import list from "./BooksReadList";

const BooksRead = () => {
  const handleBookClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <Content>
      <div className="BookPage">
        {[...list]
          .sort((a, b) => a.Title.localeCompare(b.Title))
          .map((data) => (
            <div
              key={data.Title}
              className="BookContainer"
              onClick={() => handleBookClick(data.url)}
            >
              <div className="Title">
                <h2>{data.Title}</h2>
              </div>

              <div className="Author">
                <h3>{data.Author}</h3>
              </div>

              <div className="Genre">
                <h4>{data.Genre}</h4>
              </div>

              <div>
                <img className="Image" alt="Book Images" src={data.Picture} />
              </div>

              <div className="Description">
                <p>{data.Description}</p>
              </div>
            </div>
          ))}
      </div>
    </Content>
  );
};

export default BooksRead;
