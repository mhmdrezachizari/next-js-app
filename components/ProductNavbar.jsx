import React from "react";
import styles from './rang.module.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
const ProductNavbar = () => {
  return (
    <>
 <nav class="navbar navbar-expand-lg bg-primary" className={styles.colornav}>
  <div class="container-fluid">
    <Link class="navbar-brand" href="/">Mhmdrezachizari</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" href="/home">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" href="/product">product</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" href="/about">about</Link>
        </li>
     
      </ul>
    </div>
  </div>
</nav>
    </>
  );
};

export default ProductNavbar;
