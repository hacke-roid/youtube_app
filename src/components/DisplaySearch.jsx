import React from "react";
import "./DisplaySearch.css";

const DisplaySearch = ({ data }) => {
  return (
    <div className="page_container">
    <div className="display_container">
      {data.items.map((m) => {
        return (
          <div key={m.id} className="container">
            <div className="video_container">
              <iframe
                src={`https://www.youtube.com/embed/${m.id.videoId}`}
                title={m.snippet.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p>{m.snippet.title}</p>
            <p>{m.snippet.description}</p>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default DisplaySearch;
