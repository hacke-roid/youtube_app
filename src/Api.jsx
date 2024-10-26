// console.log("hii")
const fetchingYoutubeApi = async (inputValue) => {
  console.log("hiii");
  try {
    let data = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${inputValue}&key=AIzaSyAVieO9ZwEaXedkEkuBgrHRhexpWlunPWk`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        params: {
          q: inputValue,
          key: "AIzaSyAVieO9ZwEaXedkEkuBgrHRhexpWlunPWk",
          part: "snippet",
          maxResults: 30,
        },
      }
    );
    console.log(data);

    let finalData = await data.json();
    console.log(finalData);
    return finalData;
  } catch (error) {
    console.log(error);
  }
};

// fetchingYoutubeApi();

export default fetchingYoutubeApi;
