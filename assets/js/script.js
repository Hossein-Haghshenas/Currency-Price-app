const apiKey = "6ce0d459534f98e74a72d481b7c1de9d275ad79c";

const apiUrl = `https://api.nomics.com/v1/currencies/ticker?key=${apiKey}&interval=1d,30d&convert=USD&per-page=100`;

/* get data from server */

const getData = async (url) => {
  try {
    const get = await axios.get(url);
    const data = get.data;
    displayData(data);
  } catch (error) {
    console.log(`something went wrong with error${error}`);
  }
};
getData(apiUrl);

/* display data for currencies */

const displayData = (data) => {
  const container = document.querySelector("#currencys-container");

  for (const items of data) {
    /* currencie container */
    const newItem = document.createElement("li");
    newItem.classList.add("currency-item");
    /* currencie img */
    const newImage = document.createElement("img");
    newImage.classList.add("currencys-img");
    newImage.setAttribute("src", items.logo_url);
    /* currencie details */
    const nameText = document.createElement("span");
    nameText.textContent = items.currency;
    const priceText = document.createElement("span");

    let price = Number(items.price);
    price = price < 0.01 ? price.toFixed(7) : price.toFixed(2);
    priceText.textContent = `${price} $`;

    newItem.append(newImage, nameText, priceText);
    container.appendChild(newItem);
  }
};

const menuBtn = document.querySelector("#burger-menu-btn");
const menuItem = document.querySelector("#burger-menu-container");
const register = document.querySelector(".header-register");

menuBtn.addEventListener("click", () => {
  menuItem.classList.toggle("d-none");
});
