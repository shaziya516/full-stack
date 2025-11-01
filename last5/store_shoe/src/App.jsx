import React, { useState, useEffect } from 'react';
import SideBar from './Components/SideBar';
import Nabvar from './Components/Nabvar';
import Recommended from './Components/Recommended';
import Card from './Components/Card';
import data from './Data';
import './style.css';

const App = () => {
  const [recommended, setRecommended] = useState("All");
  const [category, setCategory] = useState("All");
  const [price, setPrice] = useState("All");
  const [color, setColor] = useState("All");
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]); 

  
  const applyFilters = () => {
    const filtered = data.filter((item) => {
      const matchesSearch =
        search.trim() === "" ||
        item.title.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ||
        item.category.toLowerCase() === category.toLowerCase();

      const matchesColor =
        color === "All" ||
        item.color.toLowerCase() === color.toLowerCase(); 

      const matchesCompany =
        recommended === "All" ||
        item.company.toLowerCase() === recommended.toLowerCase();

      let matchesPrice = true;
      const priceValue = Number(item.newPrice);
      if (price !== "All") {
        if (price === "$0-50") matchesPrice = priceValue <= 50;
        else if (price === "$50-100") matchesPrice = priceValue >= 50 && priceValue <= 100;
        else if (price === "$100-150") matchesPrice = priceValue >= 100 && priceValue <= 150;
        else if (price === "over $150") matchesPrice = priceValue >= 150;
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
  }, [search, category, price, color, recommended]);

  return (
    <section className="window">
      <div className="left-section">
        <SideBar
          category={category}
          price={price}
          color={color}
          setCategory={setCategory}
          setPrice={setPrice}
          setColor={setColor}
        />
      </div>

      <div className="right-section">
        <Nabvar search={search} setSearch={setSearch} />

        <Recommended
          recommended={recommended}
          setRecommended={setRecommended}
        />

        <div className="conatiner">
          {products.map((item, idx) => (
            <Card
              key={idx}
              img={item.img}
              title={item.title}
              reviews={item.reviews}
              prevprice={item.prevPrice}
              newprice={item.newPrice}
              color={item.color}
              company={item.company}
              category={item.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default App;
