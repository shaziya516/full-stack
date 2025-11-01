import React from "react";
import { SiFalcon } from "react-icons/si";
const SideBar = ({
  category,
  setCategory,
  price,
  setPrice,
  color,
  setColor,
}) => {
  return (
    <div className="sidebar">
      <div className="sidebar-upper">
        <SiFalcon />
      </div>

      <div className="sidebar-lower">
        <article>
          <div className="categories">
            <h2>Categories</h2>

            <div>
              <input
                type="radio"
                name="category"
                value="All"
                id="All"
                checked={category === "All"}
                onChange={() => setCategory("All")}
              />

              <label htmlFor="All">All</label>
            </div>

            <div>
              <input
                type="radio"
                name="category"
                value="Snekers"
                id="Snekers"
                checked={category === "snekers"}
                onChange={() => setCategory("snekers")}
              />

              <label htmlFor="Snekers">Snekers </label>
            </div>

            <div>
              <input
                type="radio"
                name="category"
                value="Flats"
                id="Flats"
                checked={category === "Flats"}
                onChange={() => setCategory("Flats")}
              />

              <label htmlFor="Flats"> Flats </label>
            </div>

            <div>
              <input
                type="radio"
                name="category"
                value="Sandles"
                id="Sandles"
                checked={category === "Sandles"}
                onChange={() => setCategory("Sandles")}
              />

              <label htmlFor="Sandles"> Sandles</label>
            </div>

            <div>
              <input
                type="radio"
                name="category"
                value="Heels"
                id="Heels"
                checked={category === "heels"}
                onChange={() => setCategory("heels")}
              />
              <label htmlFor="Heels"> Heals</label>
            </div>
          </div>

          <div className="price">
            <h2>price</h2>

            <div>
              <input
                type="radio"
                name="price"
                value="All"
                id="Allprice"
                checked={price === "All"}
                onChange={() => setPrice("All")}
              />
              <label htmlFor="Allprice"> All</label>
            </div>

            <div>
              <input
                type="radio"
                name="price"
                value="$0-50"
                id="50"
                checked={price === "$0-50"}
                onChange={() => setPrice("$0-50")}
              />

              <label htmlFor="50"> $0-50</label>
            </div>

            <div>
              <input
                type="radio"
                name="price"
                value="$50-100"
                id="100"
                checked={price === "$50-100"}
                onChange={() => setPrice("$50-100")}
              />

              <label htmlFor="100"> $50-100</label>
            </div>

            <div>
              <input
                type="radio"
                name="price"
                value="$100-150"
                id="150"
                checked={price === "$100-150"}
                onChange={() => setPrice("$100-150")}
              />

              <label htmlFor="150"> $100-150 </label>
            </div>

            <div>
              <input
                type="radio"
                name="price"
                value="$150-200"
                id="200"
                checked={price === "$150-200"}
                onChange={() => setPrice("$150-200")}
              />

              <label htmlFor="200"> $150-200</label>
            </div>
          </div>

          <div className="color">
            <h2>Color</h2>

            <div>
              <input
                type="radio"
                name="color"
                value="All"
                id="Allcolor"
                checked={color === "All"}
                onChange={() => setColor("All")}
              />

              <label htmlFor="Allcolor">All </label>
            </div>

            <div>
              <input
                type="radio"
                name="color"
                value="Black"
                id="Black"
                checked={color === "Black"}
                onChange={() => setColor("Black")}
              />

              <label htmlFor="Black"> Black</label>
            </div>

            <div>
              <input
                type="radio"
                name="color"
                value="blue"
                id="blue"
                checked={color === "blue"}
                onChange={() => setColor("blue")}
              />

              <label htmlFor="blue">Blue </label>
            </div>

            <div>
              <input
                type="radio"
                name="color"
                value="Red"
                id="Red"
                checked={color === "Red"}
                onChange={() => setColor("Red")}
              />

              <label htmlFor="Red"> red</label>
            </div>

            <div>
              <input
                type="radio"
                name="color"
                value="Green"
                id="Green"
                checked={color === "Green"}
                onChange={() => setColor("Green")}
              />

              <label htmlFor="Green"> Green</label>
            </div>

            <div>
              <input
                type="radio"
                name="color"
                value="White"
                id="White"
                checked={color === "White"}
                onChange={() => setColor("White")}
              />

              <label htmlFor="White"> White</label>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default SideBar;
