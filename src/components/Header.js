function Header(props) {
  return (
    <header className="header">
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
      <ul className="d-flex align-center">
        <li className="mr-30">
          <img
            onClick={props.onClickCart}
            className="mr-0 cu-p"
            width={50}
            height={50}
            src="img/cart.png"
            alt="BottonImage"
          />
        </li>
        <li>
          <img width={40} height={40} src="/img/user.png" alt="user" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
