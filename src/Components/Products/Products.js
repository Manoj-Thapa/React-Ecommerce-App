import React, { useState, useEffect, useContext } from "react";
import Product from "../Product/Product";
import { CartContext } from "../../Store/cartContext";
import SearchNotFound from "../Message/SearchNotFound";

const Products = () => {
  const [items, setItems] = useState([]);
  const [filterItems, setFilterItems] = useState([]);
  const { filteredData, searchTerm } = useContext(CartContext);
  const [prevSearchTerm, setPrevSearchTerm] = useState("");

  useEffect(() => {
    //requesting Data from API
    async function getData() {
      const res = await fetch(
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
      );
      const data = await res.json();
      setItems(data);
    }

    if (!items.length) {
      getData();
    }

    //(A) filtering Data according to different filter Terms
    if (Object.keys(filteredData).length) {
      let newItems;
      if (searchTerm.length && filterItems.length) {
        newItems = filterItems;
      } else {
        if (searchTerm.length) {
          let termData = filterSearchData(items);
          newItems = termData;
        } else {
          newItems = items;
        }
      }

      const fltrData = newItems.filter((item) => {
        let flag = true;

        //(a) checking whether the given product item satisfy the given color filter
        if ("color" in filteredData) {
          if (!filteredData.color.includes(item.color)) flag = false;
        }

        //(b) checking whether the given product item satisfy the given gender filter
        if ("gender" in filteredData) {
          if (!filteredData.gender.includes(item.gender)) flag = false;
        }

        //(c) checking whether the given product item satisfy the given price filter
        if ("price" in filteredData) {
          // {0: 250, 251: 450, 451: MAX_VALUE} => Price Range Representation in Object
          let priceRange = {};
          for (let itemValue of filteredData.price) {
            let rangeOfPrice = itemValue.split("-");
            let low = parseInt(rangeOfPrice[0]);
            let high = parseInt(rangeOfPrice[1]);
            if (!high) priceRange[low] = Number.MAX_VALUE;
            else priceRange[low] = high;
          }

          let isPriceExist = false;
          for (let priceValue in priceRange) {
            if (
              item.price >= priceValue &&
              item.price <= priceRange[priceValue]
            ) {
              isPriceExist = true;
              break;
            }
          }

          if (!isPriceExist) flag = false;
        }

        //(d) checking whether the given product item satisfy the given type filter
        if ("type" in filteredData) {
          if (!filteredData.type.includes(item.type)) flag = false;
        }

        //return only those item which satisfy the given filter type
        if (flag) {
          return item;
        }
        return undefined;
      });
      setFilterItems(fltrData);
    } else {
      if (filterItems.length) {
        filterSearchData(items);
      } else {
        setFilterItems([]);
      }
    }

    //(B) filtering Data according to Search Terms
    function filterSearchData(items) {
      const searchTermData = items.filter((itm) => {
        if (itm.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return itm;
        }
        return undefined;
      });
      setFilterItems(searchTermData);

      return searchTermData;
    }

    if (prevSearchTerm !== searchTerm && searchTerm.length) {
      if (!Object.keys(filteredData).length) {
        filterSearchData(items);
      } else {
        filterSearchData(filterItems);
      }
      setPrevSearchTerm(searchTerm);
    }
  }, [filteredData, prevSearchTerm, searchTerm]);

  return (
    <div className="row">
      {!filterItems.length ? (
        searchTerm.length ? (
          <SearchNotFound />
        ) : (
          items.map((item) => (
            <Product
              key={item.id}
              id={item.id}
              name={item.name}
              imageURL={item.imageURL}
              type={item.type}
              price={item.price}
              color={item.color}
              gender={item.gender}
              quantity={item.quantity}
            />
          ))
        )
      ) : (
        filterItems.map((item, index) => (
          <Product
            key={index}
            id={item.id}
            name={item.name}
            imageURL={item.imageURL}
            type={item.type}
            price={item.price}
            color={item.color}
            gender={item.gender}
            quantity={item.quantity}
          />
        ))
      )}
    </div>
  );
};

export default Products;
