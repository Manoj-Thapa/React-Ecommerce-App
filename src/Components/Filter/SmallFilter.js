import React, { useContext } from "react";
import { CartContext } from "../../Store/cartContext";
import "./SmallFilter.css";

const SmallFilter = (props) => {
  const { filteredData, setFilteredData } = useContext(CartContext);

  const filterData = (type, e) => {
    //if filter item is checked then add item to the list
    if (e.target.checked) {
      setFilteredData((prevFilteredData) => {
        if (prevFilteredData[type]) {
          return {
            ...prevFilteredData,
            [type]: [...prevFilteredData[type], e.target.value],
          };
        } else {
          return {
            ...prevFilteredData,
            [type]: [e.target.value],
          };
        }
      });
    } else {
      //if filter item is unchecked then remove from the list
      if (filteredData[type].length > 1) {
        setFilteredData((prevFilteredData) => {
          return {
            ...prevFilteredData,
            [type]: [
              ...prevFilteredData[type].filter(
                (item) => item !== e.target.value
              ),
            ],
          };
        });
      } else {
        delete filteredData[type];
        setFilteredData({ ...filteredData });
      }
    }
  };

  const colorChangeHandler = (e) => {
    if (e.target.value) {
      filterData("color", e);
    }
  };

  const genderChangeHandler = (e) => {
    if (e.target.value) {
      filterData("gender", e);
    }
  };

  const priceChangeHandler = (e) => {
    if (e.target.value) {
      filterData("price", e);
    }
  };

  const typeChangeHandler = (e) => {
    if (e.target.value) {
      filterData("type", e);
    }
  };

  return (
    <>
      <div className="Filter my-4">
        <div onClick={() => props.onShow()}>
          <span
            className="iconify Cross"
            data-icon="akar-icons:cross"
            data-width="34"
          ></span>
        </div>

        <div onClick={colorChangeHandler}>
          <p>Color</p>
          <input type="checkbox" value="Red" /> Red <br />
          <input type="checkbox" value="Blue" /> Blue <br />
          <input type="checkbox" value="Green" /> Green <br />
          <input type="checkbox" value="Black" /> Black
        </div>
        <br />
        <div onClick={genderChangeHandler}>
          <p>Gender</p>
          <input type="checkbox" value="Men" /> Men <br />
          <input type="checkbox" value="Women" /> Women
        </div>
        <br />
        <div onClick={priceChangeHandler}>
          <p>Price</p>
          <input type="checkbox" value="0-250" /> Rs 0 - 250 <br />
          <input type="checkbox" value="251-450" /> Rs 251 - 450 <br />
          <input type="checkbox" value="451" /> Rs 451
        </div>
        <br />
        <div onClick={typeChangeHandler}>
          <p>Type</p>
          <input type="checkbox" value="Polo" /> Polo <br />
          <input type="checkbox" value="Hoodie" /> Hoodie <br />
          <input type="checkbox" value="Basic" /> Basic <br />
        </div>
      </div>
    </>
  );
};

export default SmallFilter;
