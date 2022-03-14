const apiKey = "6ce0d459534f98e74a72d481b7c1de9d275ad79c";

const apiUrl = `https://api.nomics.com/v1/currencies/ticker?key=${apiKey}&interval=1d,30d&convert=USD&per-page=100`;

/* get data from server */

const getData = async (url) => {
  try {
    const get = await axios.get(url);
    const data = get.data;
  } catch (error) {}
};
getData(apiUrl);
