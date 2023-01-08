import React from "react";

function Home() {
  return (
    <>
      <header className="main-header">
        <nav className="main-nav nav">
          <ul>
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">STORE</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
          </ul>
        </nav>
        <h1 className="band-name band-name-large">The Generics</h1>
      </header>
      <section className="container content-section">
        <h2 className="section-header">MUSIC</h2>
        <div className="shop-items">
          <div className="shop-item">
            <span className="shop-item-title">Album 1</span>
            <img className="shop-item-image" src="Images/Album 1.png" alt="" />
            <div
              className="shop-item-details"
              style="justify-content: space-between;"
            >
              <span className="shop-item-price-container">
                $<span className="shop-item-price">12.99</span>
              </span>
              <button
                className="btn btn-primary shop-item-button"
                type="button"
              >
                ADD TO CART
              </button>
            </div>
          </div>
          <div className="shop-item">
            <span className="shop-item-title">Album 2</span>
            <img className="shop-item-image" src="Images/Album 2.png" alt="" />
            <div
              className="shop-item-details"
              style="justify-content: space-between;"
            >
              <span className="shop-item-price-container">
                $<span className="shop-item-price">14.99</span>
              </span>
              <button
                className="btn btn-primary shop-item-button"
                type="button"
              >
                ADD TO CART
              </button>
            </div>
          </div>
          <div className="shop-item">
            <span className="shop-item-title">Album 3</span>
            <img className="shop-item-image" src="Images/Album 3.png" alt="" />
            <div
              className="shop-item-details"
              style="justify-content: space-between;"
            >
              <span className="shop-item-price-container">
                $<span className="shop-item-price">9.99</span>
              </span>
              <button
                className="btn btn-primary shop-item-button"
                type="button"
              >
                ADD TO CART
              </button>
            </div>
          </div>
          <div className="shop-item">
            <span className="shop-item-title">Album 4</span>
            <img className="shop-item-image" src="Images/Album 4.png" alt="" />
            <div
              className="shop-item-details"
              style="justify-content: space-between;"
            >
              <span className="shop-item-price-container">
                $<span className="shop-item-price">19.99</span>
              </span>
              <button
                className="btn btn-primary shop-item-button"
                type="button"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="container content-section">
        <h2 className="section-header">MERCH</h2>
        <div className="shop-items">
          <div className="shop-item">
            <span className="shop-item-title">T-Shirt</span>
            <img className="shop-item-image" src="Images/Shirt.png" alt="" />
            <div
              className="shop-item-details"
              style="justify-content: space-between;"
            >
              <span className="shop-item-price-container">
                $<span className="shop-item-price">19.99</span>
              </span>
              <button
                className="btn btn-primary shop-item-button"
                type="button"
              >
                ADD TO CART
              </button>
            </div>
          </div>
          <div className="shop-item">
            <span className="shop-item-title">Coffee Cup</span>
            <img className="shop-item-image" src="Images/Cofee.png" alt="" />
            <div
              className="shop-item-details"
              style="justify-content: space-between;"
            >
              <span className="shop-item-price-container">
                $<span className="shop-item-price">6.99</span>
              </span>
              <button
                className="btn btn-primary shop-item-button"
                type="button"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="container content-section">
        <h2 className="section-header">CART</h2>
        <div className="cart-row">
          <span className="cart-item cart-header cart-column">ITEM</span>
          <span className="cart-price cart-header cart-column">PRICE</span>
          <span className="cart-quantity cart-header cart-column">
            QUANTITY
          </span>
        </div>
        <div className="cart-items"></div>
        <div className="cart-total">
          <strong className="cart-total-title">Total</strong>
          <span className="cart-total-price">$0</span>
        </div>
        <button className="btn btn-primary btn-purchase" type="button">
          PURCHASE
        </button>
      </section>
      <footer className="main-footer">
        <div className="container main-footer-container">
          <h3 className="band-name">The Generics</h3>
          <ul className="nav footer-nav">
            <li>
              <a href="https://www.youtube.com" target="_blank">
                <img src="Images/YouTube Logo.png" alt="" />
              </a>
            </li>
            <li>
              <a href="https://www.spotify.com" target="_blank">
                <img src="Images/Spotify Logo.png" alt="" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com" target="_blank">
                <img src="Images/Facebook Logo.png" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Home;
