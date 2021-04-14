import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Footer from "../../Footer";
import chair from "../../assets/chair.png";
import "./styles.css";

const ProductDescription = () => {
  return (
    <section className="productdescription-container">
      <Link to="/" className="productdescription-header">
        <IoIosArrowBack className="productdescription-headericon" />
        <p className="productdescription-pagename">Furniture</p>
      </Link>
      <span className="line"></span>
      <section className="product-display">
        <div className="product">
          <div className="isproductdescribed-container">
            <img
              src={chair}
              className="productdescription-image"
              alt="product"
              height="150px"
            />
          </div>
          <div className="pointers">
            <div className="pointer"></div>
            <div className="pointer"></div>
            <div className="pointer"></div>
            <div className="pointer"></div>
          </div>
        </div>
        <div className="isproductdescribed-info">
          <h3 className="isproductdescribed-name">
            Norbury Scandinavian Wood Leg Ottoman
          </h3>
          <p className="isproductdescribed-information">
            Sold as a piece, Wooden upholstered ottoman lends a laid back appeal
            to your indoor space. comes with soft padding for extra comfort and
            support. Solid wooden and metal frame ensures durable, long-lasting
            use. Great as a footrest or extra seat when entertaining guests
          </p>
          <div className="isproductdescribed-price">
            <div className="price">
              <p className="new-productprice">
                UGX 118,400 <br />
                <span className="old-productprice">UGX 148,000</span>
              </p>
              <button className="incrementproduct-btn">
                <span className="decrement">-</span>
                <span className="incrementproduct-count">1</span>
                <span className="increment">+</span>
              </button>
            </div>
            <p className="isproductdescribed-discount">-20%</p>
          </div>
          <button className="addtobag-btn">Add to Bag</button>
          <button className="buynow-btn">Buy Now</button>
        </div>
      </section>
      <section className="relatedproducts-section">
        <div className="relatedproducts-heading">
          <p className="relatedproducts-headingtext">RELATED PRODUCTS</p>
          <div className="relatedproducts-icon">
            <IoIosArrowBack className="relatedproducts-backwardicon" />
            <IoIosArrowForward className="relatedproducts-forwardicon" />
          </div>
        </div>
        <div className="carousel">
          <div className="carousel-track">
            <div className="related-productcard">
              <div>
                <img
                  src={chair}
                  className="relatedproduct-image"
                  alt="related-product"
                  height="100px"
                />
              </div>

              <p className="relatedproduct-name">
                Holiday Print Flannel Sheet Set...
              </p>
            </div>
            <div className="related-productcard">
              <div>
                <img
                  src={chair}
                  className="relatedproduct-image"
                  alt="related-product"
                  height="100px"
                />
              </div>
              <p className="relatedproduct-discount">-20%</p>
              <p className="relatedproduct-name">Norbury Scandinavian...</p>
            </div>
            <div className="related-productcard">
              <div>
                <img
                  src={chair}
                  className="relatedproduct-image"
                  alt="related-product"
                  height="100px"
                />
              </div>
              <p className="relatedproduct-name">
                50" x 70" Jersey Weighted Throw...
              </p>
            </div>
            <div className="related-productcard">
              <div>
                <img
                  src={chair}
                  className="relatedproduct-image"
                  alt="related-product"
                  height="100px"
                />
              </div>
              <p className="relatedproduct-name">Flannel Herringbone...</p>
            </div>
            <div className="related-productcard">
              <div>
                <img
                  src={chair}
                  className="relatedproduct-image"
                  alt="related-product"
                  height="100px"
                />
              </div>
              <p className="relatedproduct-name">
                Heavyweight Linen Blend Quilt...
              </p>
            </div>
            <div className="related-productcard">
              <div>
                <img
                  src={chair}
                  className="relatedproduct-image"
                  alt="related-product"
                  height="100px"
                />
              </div>
              <p className="relatedproduct-name">
                Holiday Print Flannel Sheet Set...
              </p>
            </div>
            <div className="related-productcard">
              <div>
                <img
                  src={chair}
                  className="relatedproduct-image"
                  alt="related-product"
                  height="100px"
                />
              </div>
              <p className="relatedproduct-discount">-20%</p>
              <p className="relatedproduct-name">Norbury Scandinavian...</p>
            </div>
            <div className="related-productcard">
              <div>
                <img
                  src={chair}
                  className="relatedproduct-image"
                  alt="related-product"
                  height="100px"
                />
              </div>
              <p className="relatedproduct-name">
                50" x 70" Jersey Weighted Throw...
              </p>
            </div>
            <div className="related-productcard">
              <div>
                <img
                  src={chair}
                  className="relatedproduct-image"
                  alt="related-product"
                  height="100px"
                />
              </div>
              <p className="relatedproduct-name">Flannel Herringbone...</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default ProductDescription;
