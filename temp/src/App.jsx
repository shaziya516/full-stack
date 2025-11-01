import React, { useEffect, useState } from "react";
import data from "./Data.jsx";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./Sidebar.jsx";
import Recommended from "./components/Recommended.jsx";
import Productresult from "./components/Productresult.jsx";

const App = () => {
  // console.log(data)
  const [category, setCategory] = useState("All");
  const [price, setPrice] = useState("All");
  const [colors, setColors] = useState("All");
  const [products, setProducts] = useState(data);
  const [recommended, setRecommended] = useState("All");
  const [search, setSearch] = useState("");

  const applyFilters = () => {
  const filtered = data.filter((item) => {

    const matchesSearch =
      search.trim() === "" ||
      item.title.toLowerCase().includes(search.toLowerCase());


    const matchesCategory =
      category === "All" ||
      item.category.toLowerCase() === category.toLowerCase();

  
    const matchesColor =
      colors === "All" ||
      item.color.toLowerCase() === colors.toLowerCase();

  
    const matchesCompany =
      recommended === "All" ||
      item.company.toLowerCase() === recommended.toLowerCase();

 
    let matchesPrice = true;
    const priceValue = Number(item.newPrice); 
    if (price !== "All") {
      if (price === "$0-50") matchesPrice = (priceValue <= 50);
      else if (price === "$50-100") matchesPrice = (priceValue >= 50 && priceValue <= 100);
      else if (price === "$100-150") matchesPrice = (priceValue >= 100 && priceValue <= 150);
      else if (price === "over $150") matchesPrice = (priceValue >= 150);
    }

    return (
      matchesSearch &&
      matchesCategory &&
      matchesColor &&
      matchesCompany &&
      matchesPrice
    );
  });

  setProducts(filtered);
};


useEffect(() => {
  applyFilters();
}, [search, category, price, colors, recommended]);


  console.log(products)
  return (
    <section className="win">
      <div className="rightsec">
        <Sidebar
          setProducts={setProducts}
          data={data}
          category={category}
          price={price}
          colors={colors}
          setCategory={setCategory}
          setPrice={setPrice}
          setColors={setColors}
        />
      </div>
      <div className="leftsec">
        <Navbar search={search} setSearch={setSearch} />
        <Recommended
          setRecommended={setRecommended}
          recommended={recommended}
        />
        <Productresult products={products} />
      </div>
    </section>
  );
};

export default App;
