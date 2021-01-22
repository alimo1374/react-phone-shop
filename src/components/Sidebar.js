import React from "react";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import RangeSlider from "react-bootstrap-range-slider";
import { ProductConsumer } from "./context";

function Sidebar() {
  const [brandName, setBrandName] = React.useState("");
  const [querySearch, setQuery] = React.useState("");
  const [minValue, setMinPrice] = React.useState(100);
  const [maxValue, setMaxPrice] = React.useState(1200);
  return (
    <React.Fragment>
      <ProductConsumer>
        {(value) => {
          return (
            <div className="row">
              <div className="col-12 mx-3">
                <div className="row">
                  <div className="form-group col-lg-8 col-xs-9">
                    <input
                      className="form-control"
                      type="text"
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Search"
                    />
                  </div>
                  <div className="form-group col-lg-4 col-xs-3">
                    <button
                      onClick={() => value.findProduct(querySearch)}
                      type="button"
                      className="btn btn-block btn-primary"
                    >
                      Search
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="card col-lg-12 mx-3">
                    <div className="form-group col-sm-3 col-xs-6 col-lg-12 my-2">
                      <select
                        onChange={(e) => value.filterByBrand(e.target.value)}
                        data-filter="make"
                        className="filter-make filter form-control"
                      >
                        <option value="">Select Brand</option>
                        <option value="">Show All</option>
                        <option value="apple">Apple</option>
                        <option value="sumsung">Sumsung</option>
                      </select>
                    </div>
                    <div className="form-group col-sm-3 col-xs-6 col-lg-12 my-2">
                      <label>Price</label>
                    </div>
                    <div className="form-group col-sm-3 col-xs-6 col-lg-12 my-3">
                      <label>Min</label>
                      <RangeSlider
                        value={value.min}
                        onChange={(changeEvent) =>
                          value.filterMinPrice(changeEvent.target.value)
                        }
                        tooltipLabel={(currentValue) => `${currentValue} \$`}
                        tooltip="on"
                        min={100}
                        max={1200}
                        step={100}
                      />
                    </div>
                    <div className="form-group col-sm-3 col-xs-6 col-lg-12 my-2">
                      <label>Max</label>
                      <RangeSlider
                        value={value.max}
                        onChange={(changeEvent) =>
                          value.filterMaxPrice(changeEvent.target.value)
                        }
                        tooltipLabel={(currentValue) => `${currentValue} \$`}
                        tooltip="on"
                        min={100}
                        max={1200}
                        step={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    </React.Fragment>
  );
}

export default Sidebar;
