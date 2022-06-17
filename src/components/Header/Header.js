import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [email, setEmail] = useState(localStorage.getItem("AUTH_EMAIL"));

  const handleLogout = () => {
    localStorage.removeItem("AUTH_EMAIL");
    localStorage.removeItem("AUTH_TOKEN");
    setEmail("");
  };

  return (
    <header className="header">
      <div className="top_bar">
        <div className="container">
          <div className="row">
            <div className="col d-flex flex-row">
              <div className="top_bar_contact_item">
                <div className="top_bar_icon">
                  <img
                    src={require("../../images/xphone.png.pagespeed.ic.f_yfuJIpsP.png")}
                    alt=""
                  />
                </div>
                +38 068 005 3570
              </div>
              <div className="top_bar_contact_item">
                <div className="top_bar_icon">
                  <img
                    src={require("../../images/xmail.png.pagespeed.ic.Av1SZBKjB0.png")}
                    alt=""
                  />
                </div>
                <a href="mailto:fastsales@gmail.com">fastsales@gmail.com</a>
              </div>
              <div className="top_bar_content ml-auto">
                <div className="top_bar_menu">
                  <ul className="standard_dropdown top_bar_dropdown">
                    <li>
                      <a href=" ">
                        English
                        <i className="fas fa-chevron-down" />
                      </a>
                      <ul>
                        <li>
                          <a href=" ">Italian</a>
                        </li>
                        <li>
                          <a href=" ">Spanish</a>
                        </li>
                        <li>
                          <a href=" ">Japanese</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href=" ">
                        $ US dollar
                        <i className="fas fa-chevron-down" />
                      </a>
                      <ul>
                        <li>
                          <a href=" ">EUR Euro</a>
                        </li>
                        <li>
                          <a href=" ">GBP British Pound</a>
                        </li>
                        <li>
                          <a href=" ">JPY Japanese Yen</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="top_bar_user">
                  {(!email || email === "") && (
                    <Fragment>
                      <div className="user_icon">
                        <img
                          src={require("../../images/user.svg").default}
                          alt=""
                        />
                      </div>
                      <div>
                        <Link to="/register">Register</Link>
                      </div>
                    </Fragment>
                  )}
                  {(!email || email === "") && (
                    <div>
                      <Link to="/login">Login</Link>
                    </div>
                  )}
                  {email && email !== "" && (
                    <button className="btn btn-primary" onClick={handleLogout}>
                      Logout
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header_main">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-sm-3 col-3 order-1">
              <div className="logo_container">
                <div className="logo">
                  <Link to={"/"}>
                    <img
                      src={require("../../images/logo.png")}
                      height={100}
                      width={100}
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 order-lg-2 order-3 text-lg-left text-right">
              <div className="header_search">
                <div className="header_search_content">
                  <div className="header_search_form_container">
                    <form action=" " className="header_search_form clearfix">
                      <input
                        type="search"
                        required=""
                        className="header_search_input"
                        placeholder="Search for products..."
                      />
                      <button
                        type="submit"
                        className="header_search_button trans_300"
                        value="Submit"
                      >
                        <img src={require("../../images/search.png")} alt="" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-9 order-lg-3 order-2 text-lg-left text-right">
              <div className="wishlist_cart d-flex flex-row align-items-center justify-content-end">
                <div className="wishlist d-flex flex-row align-items-center justify-content-end">
                  <div className="wishlist_icon">
                    <img src={require("../../images/heart.png")} alt="" />
                  </div>
                  <div className="wishlist_content">
                    <div className="wishlist_text">
                      <a href=" ">Wishlist</a>
                    </div>
                    <div className="wishlist_count">115</div>
                  </div>
                </div>
                <div className="cart">
                  <div className="cart_container d-flex flex-row align-items-center justify-content-end">
                    <div className="cart_icon">
                      <img src={require("../../images/cart.png")} alt="" />
                      <div className="cart_count">
                        <span>10</span>
                      </div>
                    </div>
                    <div className="cart_content">
                      <div className="cart_text">
                        <a href=" ">Cart</a>
                      </div>
                      <div className="cart_price">$85</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="main_nav">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="main_nav_content d-flex flex-row">
                <div className="cat_menu_container">
                  <div className="cat_menu_title d-flex flex-row align-items-center justify-content-start">
                    <div className="cat_burger">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="cat_menu_text">categories</div>
                  </div>
                  <ul className="cat_menu">
                    <li>
                      <a href=" ">Mega Contest</a>
                    </li>
                    <li>
                      <a href=" ">Big Bumper Contest</a>
                    </li>
                    <li>
                      <a href=" ">Laptops &amp; Computers </a>
                    </li>
                    <li>
                      <a href=" ">Cameras &amp; TV</a>
                    </li>
                    <li>
                      <a href=" ">Smartphones &amp; Tablets</a>
                    </li>
                  </ul>
                </div>
                <div className="main_nav_menu ml-auto">
                  <ul className="standard_dropdown main_nav_dropdown">
                    <li>
                      <Link to={"/home"}>Home</Link>
                    </li>
                    <li>
                      <Link to={"/contests"}>Contests</Link>
                    </li>
                    <li>
                      <Link to={"/about"}>About</Link>
                    </li>
                    <li>
                      <Link to={"/contact"}>Contact</Link>
                    </li>
                    {email && email !== "" && (
                      <li>
                        <Link to={"/about"}>{email}</Link>
                        <ul className="cat_menu">
                          <li>
                            <Link to={"/about"}>Wallet</Link>
                          </li>
                          <li>
                            <Link to={"/about"}>Your Contests</Link>
                          </li>
                          <li>
                            <Link to={"/about"}>Settings</Link>
                          </li>
                        </ul>
                      </li>
                    )}
                  </ul>
                </div>
                <div className="menu_trigger_container ml-auto">
                  <div className="menu_trigger d-flex flex-row align-items-center justify-content-end">
                    <div className="menu_burger">
                      <div className="menu_trigger_text">menu</div>
                      <div className="cat_burger menu_burger_inner">
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="page_menu">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="page_menu_content">
                <div className="page_menu_search">
                  <form action="#">
                    <input
                      type="search"
                      required=""
                      className="page_menu_search_input"
                      placeholder="Search for products..."
                    />
                  </form>
                </div>
                <ul className="page_menu_nav">
                  <li className="page_menu_item has-children">
                    <a href=" ">
                      Language
                      <i className="fa fa-angle-down" />
                    </a>
                    <ul className="page_menu_selection">
                      <li>
                        <a href=" ">
                          English
                          <i className="fa fa-angle-down" />
                        </a>
                      </li>
                      <li>
                        <a href=" ">
                          Italian
                          <i className="fa fa-angle-down" />
                        </a>
                      </li>
                      <li>
                        <a href=" ">
                          Spanish
                          <i className="fa fa-angle-down" />
                        </a>
                      </li>
                      <li>
                        <a href=" ">
                          Japanese
                          <i className="fa fa-angle-down" />
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="page_menu_item has-children">
                    <a href=" ">
                      Currency
                      <i className="fa fa-angle-down" />
                    </a>
                    <ul className="page_menu_selection">
                      <li>
                        <a href=" ">
                          US Dollar
                          <i className="fa fa-angle-down" />
                        </a>
                      </li>
                      <li>
                        <a href=" ">
                          EUR Euro
                          <i className="fa fa-angle-down" />
                        </a>
                      </li>
                      <li>
                        <a href=" ">
                          GBP British Pound
                          <i className="fa fa-angle-down" />
                        </a>
                      </li>
                      <li>
                        <a href=" ">
                          JPY Japanese Yen
                          <i className="fa fa-angle-down" />
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="page_menu_item">
                    <a href=" ">
                      Home
                      <i className="fa fa-angle-down" />
                    </a>
                  </li>
                  <li className="page_menu_item has-children">
                    <a href=" ">
                      Super Deals
                      <i className="fa fa-angle-down" />
                    </a>
                    <ul className="page_menu_selection">
                      <li>
                        <a href=" ">
                          Super Deals
                          <i className="fa fa-angle-down" />
                        </a>
                      </li>
                      <li className="page_menu_item has-children">
                        <a href=" ">
                          Menu Item
                          <i className="fa fa-angle-down" />
                        </a>
                        <ul className="page_menu_selection">
                          <li>
                            <a href=" ">
                              Menu Item
                              <i className="fa fa-angle-down" />
                            </a>
                          </li>
                          <li>
                            <a href=" ">
                              Menu Item
                              <i className="fa fa-angle-down" />
                            </a>
                          </li>
                          <li>
                            <a href=" ">
                              Menu Item
                              <i className="fa fa-angle-down" />
                            </a>
                          </li>
                          <li>
                            <a href=" ">
                              Menu Item
                              <i className="fa fa-angle-down" />
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href=" ">
                          Menu Item
                          <i className="fa fa-angle-down" />
                        </a>
                      </li>
                      <li>
                        <a href=" ">
                          Menu Item
                          <i className="fa fa-angle-down" />
                        </a>
                      </li>
                      <li>
                        <a href=" ">
                          Menu Item
                          <i className="fa fa-angle-down" />
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="page_menu_item has-children">
                    <a href=" ">
                      Featured Brands
                      <i className="fa fa-angle-down" />
                    </a>
                    <ul className="page_menu_selection">
                      <li>
                        <a href=" ">
                          Featured Brands
                          <i className="fa fa-angle-down" />
                        </a>
                      </li>
                      <li>
                        <a href=" ">
                          Menu Item
                          <i className="fa fa-angle-down" />
                        </a>
                      </li>
                      <li>
                        <a href=" ">
                          Menu Item
                          <i className="fa fa-angle-down" />
                        </a>
                      </li>
                      <li>
                        <a href=" ">
                          Menu Item
                          <i className="fa fa-angle-down" />
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="page_menu_item has-children">
                    <a href=" ">
                      Trending Styles
                      <i className="fa fa-angle-down" />
                    </a>
                    <ul className="page_menu_selection">
                      <li>
                        <a href=" ">
                          Trending Styles
                          <i className="fa fa-angle-down" />
                        </a>
                      </li>
                      <li>
                        <a href=" ">
                          Menu Item
                          <i className="fa fa-angle-down" />
                        </a>
                      </li>
                      <li>
                        <a href=" ">
                          Menu Item
                          <i className="fa fa-angle-down" />
                        </a>
                      </li>
                      <li>
                        <a href=" ">
                          Menu Item
                          <i className="fa fa-angle-down" />
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="page_menu_item">
                    <a href="blog.html">
                      blog
                      <i className="fa fa-angle-down" />
                    </a>
                  </li>
                  <li className="page_menu_item">
                    <a href="contact.html">
                      contact
                      <i className="fa fa-angle-down" />
                    </a>
                  </li>
                </ul>
                <div className="menu_contact">
                  <div className="menu_contact_item">
                    <div className="menu_contact_icon">
                      <img src="images/phone_white.png" alt="" />
                    </div>
                    +38 068 005 3570
                  </div>
                  <div className="menu_contact_item">
                    <div className="menu_contact_icon">
                      <img src="images/mail_white.png" alt="" />
                    </div>
                    <a href="https://preview.colorlib.com/cdn-cgi/l/email-protection#b7d1d6c4c3c4d6dbd2c4f7d0dad6dedb99d4d8da">
                      <span
                        className="__cf_email__"
                        data-cfemail="f89e998b8c8b99949d8bb89f95999194d69b9795"
                      >
                        [email&nbsp;protected]
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
