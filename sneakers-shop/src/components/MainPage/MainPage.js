import React from "react";
import "./MainPage.css";
import shoesMainPage from "../../images/shoesMainPage.jpg";
import newCollectionMainPage from "../../images/newCollectionMainPage.jpg";
import haineMainPage from "../../images/haineMainPage.jpg";
import accesoriiMainPage from "../../images/accesoriiMainPage.jpg";
import p1 from "../../images/p1.jpg";
import p2 from "../../images/p2.jpg";
import p3 from "../../images/p3.jpg";
import p4 from "../../images/p4.jpg";
import p5 from "../../images/p5.jpg";
import p6 from "../../images/p6.jpg";
import p7 from "../../images/p7.jpg";
import p8 from "../../images/p8.jpg";

const MainPage = () => {
  return (
    <div className="container">
      <section class="categories">
        <div
          class="category-item"
          style={{ backgroundImage: `url(${shoesMainPage})` }}
        >
          <div class="category-item-inner">
            <div>Shoes</div>
          </div>
        </div>
        <div
          class="category-item"
          style={{ backgroundImage: `url(${haineMainPage})` }}
        >
          <div class="category-item-inner">
            <div>Haine</div>
          </div>
        </div>
        <div
          class="category-item"
          style={{ backgroundImage: `url(${accesoriiMainPage})` }}
        >
          <div class="category-item-inner">
            <div>Accesorii</div>
          </div>
        </div>
        <div
          class="category-item"
          style={{ backgroundImage: `url(${newCollectionMainPage})` }}
        >
          <div class="category-item-inner">
            <div>New Collection</div>
          </div>
        </div>
      </section>
      <h2 class="featured-products-title">Featured products</h2>
      <section class="featured-products">
        <div class="featured-product-item">
          <div
            style={{ backgroundImage: `url(${p1})` }}
            class="featured-product-item-image"
          ></div>
          <p class="title">Plain white t shirt</p>
          <p class="description">A plain white t shirt perfect for summer!</p>
          <p class="price">from $9.99</p>
          <button>View item</button>
        </div>
        <div class="featured-product-item">
          <div
            style={{ backgroundImage: `url(${p2})` }}
            class="featured-product-item-image"
          ></div>
          <p class="title">Plain white t shirt</p>
          <p class="description">A plain white t shirt perfect for summer!</p>
          <p class="price">from $9.99</p>
          <button>View item</button>
        </div>
        <div class="featured-product-item">
          <div
            style={{ backgroundImage: `url(${p3})` }}
            class="featured-product-item-image"
          ></div>
          <p class="title">Plain white t shirt</p>
          <p class="description">A plain white t shirt perfect for summer!</p>
          <p class="price">from $9.99</p>
          <button>View item</button>
        </div>
        <div class="featured-product-item">
          <div
            style={{ backgroundImage: `url(${p4})` }}
            class="featured-product-item-image"
          ></div>
          <p class="title">Plain white t shirt</p>
          <p class="description">A plain white t shirt perfect for summer!</p>
          <p class="price">from $9.99</p>
          <button>View item</button>
        </div>
        <div class="featured-product-item">
          <div
            style={{ backgroundImage: `url(${p5})` }}
            class="featured-product-item-image"
          ></div>
          <p class="title">Plain white t shirt</p>
          <p class="description">A plain white t shirt perfect for summer!</p>
          <p class="price">from $9.99</p>
          <button>View item</button>
        </div>
        <div class="featured-product-item">
          <div
            style={{ backgroundImage: `url(${p6})` }}
            class="featured-product-item-image"
          ></div>
          <p class="title">Plain white t shirt</p>
          <p class="description">A plain white t shirt perfect for summer!</p>
          <p class="price">from $9.99</p>
          <button>View item</button>
        </div>
        <div class="featured-product-item">
          <div
            style={{ backgroundImage: `url(${p7})` }}
            class="featured-product-item-image"
          ></div>
          <p class="title">Plain white t shirt</p>
          <p class="description">A plain white t shirt perfect for summer!</p>
          <p class="price">from $9.99</p>
          <button>View item</button>
        </div>
        <div class="featured-product-item">
          <div
            style={{ backgroundImage: `url(${p8})` }}
            class="featured-product-item-image"
          ></div>
          <p class="title">Plain white t shirt</p>
          <p class="description">A plain white t shirt perfect for summer!</p>
          <p class="price">from $9.99</p>
          <button>View item</button>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
