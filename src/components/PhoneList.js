import React from "react";
import Phone from "./Phone";
import Sidebar from "./Sidebar";
import Title from "./Title";
import { ProductConsumer } from "./context";
function PhoneList() {
  return (
    <React.Fragment>
      <div className="py-5 px-4">
        <div className="row">
          <div className="col-lg-3 col-sm-12 col-xs-12">
            <Sidebar />
          </div>
          <div className="col-lg-9 col-sm-12 col-xs-12">
            <div className="container">
              <Title name="phone" title="list" />
              <div className="row">
                <ProductConsumer>
                  {(value) => {
                    return value.products.map((product) => {
                      return <Phone key={product.id} product={product} />;
                    });
                  }}
                </ProductConsumer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default PhoneList;
