import React from "react";
import "./Descriptionbox.css";

const Descriptionbox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box active">Description</div>
        <div className="descriptionbox-nav-box faded">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is an online platform that facilitates the
          buying and selling of products or services over the internet. It
          serves as a virtual marketplace where businesses and individuals can
          showcase their products, interact with customers, and conduct
          transoctions without the need for a physical presence. E-commercev
          websites have gained immense popularity due to their convenience,
          accessability, and the global reach they offer. E-commerce websites
          typically display products or services along with detailed
          descriptions, images, prices, and any available variations (e.g.sizes,
          colors). Each product usually has its own dedicated page with relevant
          information.
        </p>
        <p></p>
      </div>
    </div>
  );
};

export default Descriptionbox;
