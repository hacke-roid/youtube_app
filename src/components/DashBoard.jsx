import React, { useEffect, useState } from "react";
import "./DashBoard.css";

// import axios from "axios";

const DashBoard = () => {
  const [videos, setVideos] = useState([]);

  const getRandomKeyword = () => {
    const keywords = [
      "music",
      "news",
      "technology",
      "sports",
      "cooking",
      "comedy",
      "nature",
      "gaming",
    ];
    return keywords[Math.floor(Math.random() * keywords.length)];
  };

  const fetchingApi = async () => {
    const keyword = getRandomKeyword(); // Get a random keyword for each fetch

    try {
      let response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${keyword}&maxResults=30&key=AIzaSyAVieO9ZwEaXedkEkuBgrHRhexpWlunPWk`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }

      let data = await response.json();
      const shuffledVideos = data.items.sort(() => Math.random() - 0.5); // Shuffle results
      setVideos(shuffledVideos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchingApi();
  }, []);

  return (
    <div className="page_container">
      <div className="display_container">
        {/* <h1>Random Videos</h1> */}
        {videos.map((video, index) => (
          <div key={video.id.videoId} className="container">
            <div className="video_container">
              <iframe
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                title={video.snippet.title}
              ></iframe>
              <p>{video.snippet.title}</p>
              <p>{video.snippet.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashBoard;
