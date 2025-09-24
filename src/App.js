import React from "react";
import "./index.scss";
import "macro-css";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Чоловічі кросівки Nike Blazer Mid Suede",
      price: 10999,
      imageUrl: "/ReactSneakers/img/sneakers/1.png",
      inCart: false,
    },
    {
      id: 2,
      name: "Чоловічі кросівки Adidas super puper wow",
      price: 8699,
      imageUrl: "/ReactSneakers/img/sneakers/2.png",
      inCart: false,
    },
    {
      id: 3,
      name: "Чоловічі кросівки Sneakers Twix Milkyway Kitkat yopta",
      price: 18499,
      imageUrl: "/ReactSneakers/img/sneakers/3.png",
      inCart: false,
    },
    {
      id: 4,
      name: "Чоловічі кросівки Puma very gud",
      price: 19999,
      imageUrl: "/ReactSneakers/img/sneakers/4.png",
      inCart: false,
    },
    {
      id: 5,
      name: "Чоловічі кросівки Original Lotto",
      price: 50000,
      imageUrl: "/ReactSneakers/img/sneakers/5.png",
      inCart: false,
    },
    {
      id: 6,
      name: "Чоловічі кросівки Light New Balance Old Balance",
      price: 11899,
      imageUrl: "/ReactSneakers/img/sneakers/6.png",
      inCart: false,
    },
    {
      id: 7,
      name: "Чоловічі кросівки cheap shoes",
      price: 6999,
      imageUrl: "/ReactSneakers/img/sneakers/7.png",
      inCart: false,
    },
    {
      id: 8,
      name: "Чоловічі кросівки Ohh yeah",
      price: 7999,
      imageUrl: "/ReactSneakers/img/sneakers/8.png",
      inCart: false,
    },
    {
      id: 9,
      name: "Чоловічі кросівки Model xz351",
      price: 8999,
      imageUrl: "/ReactSneakers/img/sneakers/9.png",
      inCart: false,
    },
    {
      id: 10,
      name: "Чоловічі кросівки Model x4.7787",
      price: 9999,
      imageUrl: "/ReactSneakers/img/sneakers/10.png",
      inCart: false,
    },
  ]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  const onAddToCart = (obj) => {
    obj.inCart = true;

    setCartItems((prev) => [...prev, obj]);
    console.log(obj);
  };

  const onRemoveItem = (id) => {
    console.log(id);
    setCartItems((items) => items.filter((item) => item.id !== id));
setItems(
  items.map((item) =>
    item.id === id ? { ...item, inCart: false } : item
  )
);
    console.log(items);
  };

  const onAddToFavorite = (obj) => {
    setFavorites((prev) => [...prev, obj]);
    console.log(favorites);
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onClickCart = () => {
    setCartOpened(!cartOpened);
    console.log(cartItems);
  };

  return (
    <div className="wrapper">
      {cartOpened ? (
        <Drawer
          onClickCart={onClickCart}
          cartItems={cartItems}
          onRemove={onRemoveItem}
        />
      ) : null}

      <Header onClickCart={onClickCart} />

      <div className="d-flex flex-column">
        <div className="search-block d-flex align-center">
          <img src="/img/search.svg" width={25} height={25} alt="Search" />
          <input
            onChange={onChangeSearchInput}
            maxLength={50}
            placeholder="Пошук ..."
            value={searchValue}
          />
          {searchValue && (
            <div onClick={() => setSearchValue("")} className="cu-p">
              X
            </div>
          )}
        </div>
      </div>

      <div className="content pr-20 pl-20 d-flex justify-center flex-row flex-wrap">
        {items
          .filter((item) =>
            item?.name?.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((item, index) => (
            <Card
              key={index}
              cardKey={item.id}
              name={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
              onFavorite={onAddToFavorite}
              onPlus={onAddToCart}
              onRemove={onRemoveItem}
              cartItems={cartItems}
              item={item}
              items={items}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
