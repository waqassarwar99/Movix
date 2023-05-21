import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODM3ZWIwY2Q1MDcwZDQyOTlkY2VhZTE0YjE2MTgzYiIsInN1YiI6IjY0NTBmZDAzZTk0MmVlMGUzOGJkNmFkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A6ZI9AG9L4ItiY9neocjLGccTw_oMKEPzF7Kbxgp8Tg";

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
