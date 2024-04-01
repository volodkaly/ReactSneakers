import React from "react";
import "./index.scss";
import "macro-css";

function App() {
  return (
    <div className="wrapper">
      <div style={{ display: "none" }} className="overlay">
        <div className="drawer">
          <div className="items">
            <h2 className="d-flex justify-between m-10">
              Корзина{" "}
              <img
                className="removeBtn m-10 cu-p"
                src="/img/btn-remove.svg"
                alt="Remove"
              />
            </h2>
            <div className="cartItem d-flex justify-around align-center">
              <div
                style={{ backgroundImage: "url(/img/sneakers/1.png)" }}
                className="cartItemImg m-10"
              ></div>

              <div className="mr-10">
                <p className="mb-0">
                  Чоловічі кросівки<br></br> Model 2
                </p>
                <b>9 999 UAH</b>
              </div>
              <img
                className="removeBtn m-10"
                src="/img/btn-remove.svg"
                alt="Remove"
              />
            </div>
            <div className="cartItem d-flex justify-around align-center">
              <div
                style={{ backgroundImage: "url(/img/sneakers/1.png)" }}
                className="cartItemImg m-10"
              ></div>

              <div className="mr-10">
                <p className="mb-0">
                  Чоловічі кросівки<br></br> Model 2
                </p>
                <b>9 999 UAH</b>
              </div>
              <img
                className="removeBtn m-10"
                src="/img/btn-remove.svg"
                alt="Remove"
              />
            </div>
            <div className="cartItem d-flex justify-around align-center">
              <div
                style={{ backgroundImage: "url(/img/sneakers/1.png)" }}
                className="cartItemImg m-10"
              ></div>

              <div className="mr-10">
                <p className="mb-0">
                  Чоловічі кросівки<br></br> Model 2
                </p>
                <b>9 999 UAH</b>
              </div>
              <img
                className="removeBtn m-10"
                src="/img/btn-remove.svg"
                alt="Remove"
              />
            </div>
            <div className="cartItem d-flex justify-around align-center">
              <div
                style={{ backgroundImage: "url(/img/sneakers/1.png)" }}
                className="cartItemImg m-10"
              ></div>

              <div className="mr-10">
                <p className="mb-0">
                  Чоловічі кросівки<br></br> Model 2
                </p>
                <b>9 999 UAH</b>
              </div>
              <img
                className="removeBtn m-10"
                src="/img/btn-remove.svg"
                alt="Remove"
              />
            </div>
            <div className="cartItem d-flex justify-around align-center">
              <div
                style={{ backgroundImage: "url(/img/sneakers/1.png)" }}
                className="cartItemImg m-10"
              ></div>

              <div className="mr-10">
                <p className="mb-0">
                  Чоловічі кросівки<br></br> Model 2
                </p>
                <b>9 999 UAH</b>
              </div>
              <img
                className="removeBtn m-10"
                src="/img/btn-remove.svg"
                alt="Remove"
              />
            </div>
            <div className="cartItem d-flex justify-around align-center">
              <div
                style={{ backgroundImage: "url(/img/sneakers/1.png)" }}
                className="cartItemImg m-10"
              ></div>

              <div className="mr-10">
                <p className="mb-0">
                  Чоловічі кросівки<br></br> Model 2
                </p>
                <b>9 999 UAH</b>
              </div>
              <img
                className="removeBtn m-10"
                src="/img/btn-remove.svg"
                alt="Remove"
              />
            </div>
            <div className="cartItem d-flex justify-around align-center">
              <div
                style={{ backgroundImage: "url(/img/sneakers/1.png)" }}
                className="cartItemImg m-10"
              ></div>

              <div className="mr-10">
                <p className="mb-0">
                  Чоловічі кросівки<br></br> Model 2
                </p>
                <b>9 999 UAH</b>
              </div>
              <img
                className="removeBtn m-10"
                src="/img/btn-remove.svg"
                alt="Remove"
              />
            </div>
            <div className="cartItem d-flex justify-around align-center">
              <div
                style={{ backgroundImage: "url(/img/sneakers/1.png)" }}
                className="cartItemImg m-10"
              ></div>

              <div className="mr-10">
                <p className="mb-0">
                  Чоловічі кросівки<br></br> Model 2
                </p>
                <b>9 999 UAH</b>
              </div>
              <img
                className="removeBtn m-10"
                src="/img/btn-remove.svg"
                alt="Remove"
              />
            </div>
            <div className="cartItem d-flex justify-around align-center">
              <div
                style={{ backgroundImage: "url(/img/sneakers/1.png)" }}
                className="cartItemImg m-10"
              ></div>

              <div className="mr-10">
                <p className="mb-0">
                  Чоловічі кросівки<br></br> Model 2
                </p>
                <b>9 999 UAH</b>
              </div>
              <img
                className="removeBtn m-10"
                src="/img/btn-remove.svg"
                alt="Remove"
              />
            </div>
            <div className="cartItem d-flex justify-around align-center">
              <div
                style={{ backgroundImage: "url(/img/sneakers/1.png)" }}
                className="cartItemImg m-10"
              ></div>

              <div className="mr-10">
                <p className="mb-0">
                  Чоловічі кросівки<br></br> Model 2
                </p>
                <b>9 999 UAH</b>
              </div>
              <img
                className="removeBtn m-10"
                src="/img/btn-remove.svg"
                alt="Remove"
              />
            </div>
          </div>
          <div className="cardTotalBlock">
            <ul>
              <li className="d-flex">
                <span>Загалом:</span>
                <div></div>
                <b>19 998 UAH</b>
              </li>
              <li className="d-flex">
                <span>Податок 5%:</span>
                <div></div>
                <b>1000 UAH</b>
              </li>
            </ul>
            <button className="orderButton">
              Замовити <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </div>

      <header className="d-flex justify-between align-center p-10">
        <div className="d-flex align-center">
          <img
            className="topLogo"
            width={90}
            height={60}
            src="/img/logo.png"
            alt="logo"
          />
          <div className="headerInfo">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p>Магазин найкращих кросівок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/cart.png" alt="cart" />
            <span>
              <b>1205 UAH</b>
            </span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.png" alt="user" />
          </li>
        </ul>
      </header>

      <div className="d-flex flex-column">
        <div className="search-block d-flex align-center">
          <img src="/img/search.svg" width={25} height={25} alt="Search" />
          <input maxLength={50} placeholder="Пошук ..." />
        </div>
      </div>

      <h1 className="content text-center">Всі кросівки</h1>

      <div className="content p-20 d-flex justify-center flex-row flex-wrap">
        <div className="card">
          <div className="favorite m-0 p-0">
            <img
              className="m-0 p-0"
              src="/img/heart-unliked.svg"
              alt="Unliked"
            />
          </div>
          <img
            width={133}
            height={122}
            src="/img/sneakers/1.png"
            alt="sneakers"
          />

          <h5>
            Чоловічі кросівки<br></br> Nike Blazer Mid Suede
          </h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>ЦІНА:</span>
              <b>10 999 UAH</b>
            </div>
            <button className="button">
              <img
                className="button-image"
                width={20}
                height={20}
                src="img/plus.png"
                alt="BottonImage"
              />
            </button>
          </div>
        </div>

        <div className="card">
          <img
            width={133}
            height={122}
            src="/img/sneakers/2.png"
            alt="sneakers"
          />
          <h5>
            Чоловічі кросівки<br></br> Model 2
          </h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>ЦІНА:</span>
              <b>9 999 UAH</b>
            </div>
            <button className="button">
              <img
                width={20}
                height={20}
                src="img/plus.png"
                alt="BottonImage"
              />
            </button>
          </div>
        </div>

        <div className="card">
          <img
            width={133}
            height={122}
            src="/img/sneakers/3.png"
            alt="sneakers"
          />
          <h5>
            Чоловічі кросівки<br></br> Model 3
          </h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>ЦІНА:</span>
              <b>8 999 UAH</b>
            </div>
            <button className="button">
              <img
                width={20}
                height={20}
                src="img/plus.png"
                alt="BottonImage"
              />
            </button>
          </div>
        </div>

        <div className="card">
          <img
            width={133}
            height={122}
            src="/img/sneakers/4.png"
            alt="sneakers"
          />
          <h5>
            Чоловічі кросівки<br></br> Model 4
          </h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>ЦІНА:</span>
              <b>15 000 UAH</b>
            </div>
            <button className="button">
              <img
                width={20}
                height={20}
                src="img/plus.png"
                alt="BottonImage"
              />
            </button>
          </div>
        </div>

        <div className="card">
          <img
            width={133}
            height={122}
            src="/img/sneakers/5.png"
            alt="sneakers"
          />
          <h5>
            Чоловічі кросівки<br></br> Model 5
          </h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>ЦІНА:</span>
              <b>29 999 UAH</b>
            </div>
            <button className="button">
              <img
                width={20}
                height={20}
                src="img/plus.png"
                alt="BottonImage"
              />
            </button>
          </div>
        </div>

        <div className="card">
          <img
            width={133}
            height={122}
            src="/img/sneakers/6.png"
            alt="sneakers"
          />
          <h5>
            Чоловічі кросівки<br></br> Model 6
          </h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>ЦІНА:</span>
              <b>5 750 UAH</b>
            </div>
            <button className="button">
              <img
                width={20}
                height={20}
                src="img/plus.png"
                alt="BottonImage"
              />
            </button>
          </div>
        </div>

        <div className="card">
          <img
            width={133}
            height={122}
            src="/img/sneakers/7.png"
            alt="sneakers"
          />
          <h5>
            Чоловічі кросівки<br></br> Model 7
          </h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>ЦІНА:</span>
              <b>5 899 UAH</b>
            </div>
            <button className="button">
              <img
                width={20}
                height={20}
                src="img/plus.png"
                alt="BottonImage"
              />
            </button>
          </div>
        </div>

        <div className="card">
          <img
            width={133}
            height={122}
            src="/img/sneakers/8.png"
            alt="sneakers"
          />
          <h5>
            Чоловічі кросівки<br></br> Model 8
          </h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>ЦІНА:</span>
              <b>6 000 UAH</b>
            </div>
            <button className="button">
              <img
                width={20}
                height={20}
                src="img/plus.png"
                alt="BottonImage"
              />
            </button>
          </div>
        </div>

        <div className="card">
          <img
            width={133}
            height={122}
            src="/img/sneakers/9.png"
            alt="sneakers"
          />
          <h5>
            Чоловічі кросівки<br></br> Model 9
          </h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>ЦІНА:</span>
              <b>5 500 UAH</b>
            </div>
            <button className="button">
              <img
                width={20}
                height={20}
                src="img/plus.png"
                alt="BottonImage"
              />
            </button>
          </div>
        </div>

        <div className="card">
          <img
            width={133}
            height={122}
            src="/img/sneakers/10.png"
            alt="sneakers"
          />
          <h5>
            Чоловічі кросівки<br></br> Model 10
          </h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>ЦІНА:</span>
              <b>4 900 UAH</b>
            </div>
            <button className="button">
              <img
                width={20}
                height={20}
                src="img/plus.png"
                alt="BottonImage"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
