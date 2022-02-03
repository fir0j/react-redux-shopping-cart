import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  filterProducts,
  sortProducts,
} from "../actions/productActions";

function Filter() {
  // fetching required states from redux store.
  const { itemType, sortBy, items, filteredItems, error } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      dispatch(await fetchProducts());
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="row">
      {error && <h1 style={{ color: "red" }}>{error}</h1>}
      <div className="col-md-4">{filteredItems.length} products found.</div>
      <div className="col-md-4">
        <label>
          Order by
          <select
            className="form-control"
            value={sortBy}
            onChange={(e) =>
              dispatch(sortProducts(filteredItems, e.target.value))
            }
          >
            <option value="">Select</option>
            <option value="Lowest">Lowest to Highest</option>
            <option value="Highest">Highest to Lowest</option>
          </select>
        </label>
      </div>
      <div className="col-md-4">
        <label>
          Filter Item
          <select
            className="form-control"
            value={itemType}
            onChange={(e) => dispatch(filterProducts(items, e.target.value))}
          >
            <option value="">Select</option>
            <option value="pizza">pizza</option>
            <option value="burger">burger</option>
            <option value="pasta">pasta</option>
            <option value="sandwitch">sandwitch</option>
          </select>
        </label>
      </div>
    </div>
  );
}

export default Filter;
