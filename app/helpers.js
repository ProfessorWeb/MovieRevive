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
