import React from "react";

function CartPage() {
  return (
    <div id="content" className="siteMinWidth">
      <div id="contentc" className="sitewidth">
        <div id="content_holder" className="siteWidth clearer">
          <div id="content_left">
            <div id="side_menu">
              <ul>
                <li>Contact</li>
                <li>Plata si Livrarea</li>
                <li>Returnare</li>
                <li>Garantie</li>
              </ul>
            </div>
          </div>
          <div id="content_right" className="clearer">
            <div id="cart_header">
              <h1>Cos</h1>
              <a href="" id="cart_empty">
                Sterge toate produsele
              </a>
            </div>
            <div id="cart_content">
              <div className="cart_box clearer">
                <input type="text" />
                <div className="cartb_image">
                  <a href="">
                    <img src="" alt="" />
                  </a>
                </div>
                <div className="cartb_content">
                  <div className="cartbc_name">
                    <a href="">
                      <span>Adidas</span>
                      "Matchbreak Super"
                    </a>
                  </div>
                  <div className="cartbc_opth clearer">
                    <div className="cartbc_opt_box">
                      <span className="opt_label">Culoare</span>
                      <div className="opt_color">
                        <div className="opt_color_opth">
                          <em
                            className="opt_color_opt"
                            style="background-color:#000000"
                          >
                            Negru
                          </em>
                          <em
                            className="opt_color_opt"
                            style="background-color:#000000"
                          >
                            Alb
                          </em>
                        </div>
                      </div>
                    </div>
                    <div className="cartbc_opt_box">
                      <span className="opt_label">Marime</span>
                      <div className="opt_size">
                        <span className="opt_size_value">42</span>
                      </div>
                    </div>
                    <div className="cartbc_opt_box">
                      <span className="opt_label">Pret</span>
                      <div className="opt_price">
                        "349 "<sup>LEI</sup>
                      </div>
                    </div>
                    <div className="cartbc_opt_box">
                      <span className="opt_label">Cantitate</span>
                      <div className="opt_qty" id="opt_qty_335953">
                        <a href="" className="opt_qty_dwn">
                          -
                        </a>
                        <span className="opt_qty_value">1</span>
                        <a href="" className="opt_qty_up">
                          +
                        </a>
                      </div>
                    </div>
                    <div className="cartbc_opt_box">
                      <span className="opt_label">Total</span>
                      <div
                        className="opt_price opt_price_higl"
                        id="oitem_price_value_335953"
                      >
                        "349 "<sup>LEI</sup>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="" className="cart_delete" id="oitem_delete_335953">
                  <span>Sterge</span>
                </a>
              </div>
            </div>
            <div id="cart_info" className="clearer">
              <form
                name="form_checkout"
                id="form_checkout"
                method="post"
                action=""
              >
                <input type="hidden" name="step" id="step" value="0" />
                <input
                  type="hidden"
                  name="items_unavailable"
                  id="items-unavailable"
                  value="0"
                />
                <input
                  type="hidden"
                  name="order_wrap"
                  id="order_wrap"
                  value="0"
                />
                <div id="cart_infol">
                  <div id="cart_infol_desc">
                    <strong>Metoda de Transport</strong>
                  </div>
                  <input
                    type="hidden"
                    name="order_ship_method"
                    id="order_ship_method"
                    value="1"
                  />
                  <div id="cart_shipo" className="clearer">
                    <li>
                      <a href="" id="shipm_1" className="sel">
                        <em>&nbsp;</em>
                        "Fan Courier "<span>20 LEI / 1-2 zile </span>
                      </a>
                    </li>
                  </div>
                </div>
                <div id="cart_infor">
                  <span id="cart_inforb">&nbsp;</span>
                  <div id="cart_inforc">
                    <div id="cart_promoh">
                      <input
                        type="text"
                        name="order_promo"
                        id="order_promo"
                        placeholder="Cod promo"
                        value
                      />
                    </div>
                    <div id="cart_total" className="clearer">
                      <div className="cart_totalc" id="cart_count">
                        <span>Produse</span>
                        <em>1</em>
                      </div>
                      <div className="cart_totalc" id="cart_value">
                        <span>Total</span>
                        <em className="higl">
                          "349 "<sup>LEI</sup>
                        </em>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div id="cart_action">
              <a href="" className="lnk_cart">
                Continua cumparaturile
              </a>
              <a href="" className="btn_cart" id="submit_checkout">
                Pasul urmator
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
