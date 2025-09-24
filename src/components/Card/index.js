import styles from "./Card.module.scss";
import React, { useState } from "react";

function Card({
  cardKey,
  name,
  price,
  imageUrl,
  onFavorite,
  onPlus,
  onRemove,
  cartItems,
  item,
  items,
}) {
  const [isLiked, setIsLiked] = useState(false);
  const isAdded = cartItems.some((cartItem) => cartItem.id === cardKey);

  const onClickLike = () => {
    onFavorite({ name, price, imageUrl });
    setIsLiked(!isLiked);
  };

  const onClickPlus = () => {
    if (isAdded) {
      onRemove(cardKey);
    } else {
      onPlus(item);
    }
  };

  return (
    <div className={styles.card}>
      <img width={133} height={122} src={imageUrl} alt="sneakers" />

      <h5>{name}</h5>
      <div className="d-flex justify-around">
        <div className="mr-10">ЦІНА:</div>
        <b>{price}</b>

        <button className={styles.button} onClick={onClickLike}>
          <img
            width={40}
            height={40}
            src={isLiked ? "/img/heart-liked.png" : "/img/heart-unliked.png"}
            alt="Unliked"
          />
        </button>
        <button className={styles.button} onClick={onClickPlus}>
          <img
            width={40}
            height={40}
            src={isAdded ? "img/cart-plus.png" : "img/cart.png"}
            alt="BottonImage"
          />
        </button>
      </div>
    </div>
  );
}

export default Card;
