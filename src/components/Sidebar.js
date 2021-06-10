import React from "react";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import RangeSlider from "react-bootstrap-range-slider";
import { ProductConsumer } from "./context";

function Sidebar() {
  const [querySearch, setQuery] = React.useState("");
  return (
    <React.Fragment>
      <ProductConsumer>
        {(value) => {
          return (
            <div className="row">
              <div className="col-lg-12 col-sm-12 col-xs-12">
                <div className="row">
                  <div className="form-group col-lg-8 col-sm-12 col-xs-12 px-4">
                    <input
                      className="form-control"
                      type="text"
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Search"
                    />
                  </div>
                  <div className="form-group col-lg-4 col-sm-12 col-xs-12 px-4">
                    <button
                      onClick={() => value.findProduct(querySearch)}
                      type="button"
                      className="btn btn-block btn-primary"
                    >
                      Search
                    </button>
                  </div>
                </div>
                <div className="row px-4">
                  <div className="card col-lg-12 col-sm-12 col-xs-12 px-2">
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
                    <div className="form-group col-sm-3 col-xs-6 col-lg-12 px-4">
                      <label>Min</label>
                      <RangeSlider
                        value={value.min}
                        onChange={(changeEvent) =>
                          value.filterMinPrice(changeEvent.target.value)
                        }
                        tooltipLabel={(currentValue) => `${currentValue} $`}
                        tooltip="on"
                        min={100}
                        max={1200}
                        step={100}
                      />
                    </div>
                    <div className="form-group col-sm-3 col-xs-6 col-lg-12 px-4">
                      <label>Max</label>
                      <RangeSlider
                        value={value.max}
                        onChange={(changeEvent) =>
                          value.filterMaxPrice(changeEvent.target.value)
                        }
                        tooltipLabel={(currentValue) => `${currentValue} $`}
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
