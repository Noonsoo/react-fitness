export const exerciseOptions = {
  method: "GET",
  params: { limit: "50" },
  headers: {
    "X-RapidAPI-Key": "9c7c6af8acmsh552a32eef05a4bep1c16f6jsneab3aa400a39",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "9c7c6af8acmsh552a32eef05a4bep1c16f6jsneab3aa400a39",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

const options = {
  method: "GET",
  url: "https://youtube-search-and-download.p.rapidapi.com/search",
  params: {
    query: "rick roll",
  },
  headers: {
    "X-RapidAPI-Key": "0d9dfc2474mshc71a5c39d56c2c4p10e78ajsn66221ae0415a",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};
