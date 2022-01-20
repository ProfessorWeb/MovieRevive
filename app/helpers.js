import { API_KEY } from './config.js';

export const getJSON = async function (url, api = API_KEY) {
  try {
    const res = await fetch(`${url}?api_key=${api}`);
    if (!res.ok) throw new Error(`error ${res.status}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const getJSONSearch = async function (api = API_KEY, queryMovie) {
  try {
    const res = await fetch(`
    https://api.themoviedb.org/3/search/movie?api_key=${api}&query=${queryMovie}`);
    if (!res.ok) throw new Error(`error ${res.status}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const getJSON_BY_ID = async function (movie_id, api = API_KEY) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${api}`
    );
    if (!res.ok) throw new Error(`error ${res.status}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const getJSON_Trailer = async function (Trailer_id, api = API_KEY) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${Trailer_id}/videos?api_key=${api}`
    );
    if (!res.ok) throw new Error(`error ${res.status}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};
