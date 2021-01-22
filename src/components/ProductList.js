import React from "react";
import Product from "./Product";
import Sidebar from "./Sidebar";
import Title from "./Title";
import { ProductConsumer } from "./context";
function ProductList() {
  return (
    <React.Fragment>
      <div className="py-5">
        <div className="row">
          <div className="col-lg-2">
            <Sidebar />
          </div>
          <div className="col-lg-8">
            <div className="container">
              <Title name="product" title="list" />
              <div className="row">
                <ProductConsumer>
                  {(value) => {
                    return value.products.map((product) => {
                      return <Product key={product.id} product={product} />;
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

export default ProductList;
