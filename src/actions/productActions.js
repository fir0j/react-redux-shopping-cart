import {
  FETCH_PRODUCTS,
  FETCH_ERROR,
  FILTER_PRODUCTS_BY_TYPE,
  ORDER_PRODUCTS_BY_PRICE,
} from "./types";

// without hoc pattern
export const fetchProducts = async () => {
  try {
    const response = await fetch("https://fir0j.github.io/JSON-Server/db.json");
    const data = await response.json();
    return { type: FETCH_PRODUCTS, payload: data };
  } catch (err) {
    // throw err;
    return { type: FETCH_ERROR, payload: err.message };
  }
};

export const filterProducts = (products, itemType) => {
  return {
    type: FILTER_PRODUCTS_BY_TYPE,
    payload: {
      itemType: itemType,
      filteredItems:
        itemType === ""
          ? products
          : products.filter((item) => item.type === itemType),
    },
  };
};

export const sortProducts = (products, sortBy) => {
  const items = products.slice();

  items.sort((a, b) =>
    sortBy === "Highest"
      ? a.price < b.price
        ? 1
        : -1
      : a.price > b.price
      ? 1
      : -1
  );

  return {
    type: ORDER_PRODUCTS_BY_PRICE,
    payload: {
      sortBy: sortBy,
      sortedItems: items,
    },
  };
};
