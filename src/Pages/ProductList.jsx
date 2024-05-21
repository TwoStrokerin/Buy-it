import { useEffect, useState } from "react";
import Filter from "../Components/Filter";
import Pagination from "../Components/Pagination";
import Products from "../Components/Products";
import Search from "../Components/Search";
import Sort from "../Components/Sort";
import productsData from "../data/product.json";
import Header from "../Components/Header";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);

  useEffect(() => {
    setProducts(productsData);
    setFilteredProducts(productsData);
  }, []);

  const handleFilter = (category) => {
    setCategory(category);
    const filtered =
      category === ""
        ? products
        : products.filter((product) => product.category === category);
    setFilteredProducts(filtered);
  };

  const handleSort = (order) => {
    setSortOrder(order);
    const sorted = [...filteredProducts].sort((a, b) =>
      order === "asc" ? a.price - b.price : b.price - a.price
    );
    setFilteredProducts(sorted);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    const searched = products.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(searched);
  };

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div className="container">
        <Header/>
      <div className="sub-header">
        <Search onSearch={handleSearch} />
        <div className="filter">
          <Filter onFilter={handleFilter} />
          <Sort onSort={handleSort} />
        </div>
      </div>
      <div className="product-content">
        <Products products={currentProducts} />
        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={filteredProducts.length}
          paginate={handlePagination}
        />
      </div>
    </div>
  );
};

export default ProductList;
