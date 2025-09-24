import React, { useEffect } from "react";
import { useState } from "react";

function Drawer({ onClickCart, onRemove, cartItems = [] }) {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(function countPrice() {
    setTotalPrice(cartItems.reduce((acc, el) => acc + el.price, 0));
  }, []);
  return (
    <div style={{ display: "block" }} className="overlay">
      <div className="drawer">
        <div className="items">
          <h2 className="d-flex justify-between m-10">
            Корзина{" "}
            <img
              className="removeBtn m-10 cu-p"
              src="/img/btn-remove.svg"
              alt="Remove"
              onClick={onClickCart}
            />
          </h2>

          {cartItems
            .filter((el) => el != null)
            .map((obj) => (
              <React.Fragment key={obj.id}>
                <div className="cartItem d-flex justify-around align-center">
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className="cartItemImg m-10"
                  ></div>
                  <div className="mr-10">
                    <p className="mb-0">
                      Чоловічі кросівки<br></br> {obj.name}
                    </p>
                    <b>{obj.price}</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn m-10"
                    src="/img/btn-remove.svg"
                    alt="Remove"
                  />
                </div>
              </React.Fragment>
            ))}
        </div>
        <div className="cardTotalBlock">
          <button className="orderButton">
            Замовити <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
