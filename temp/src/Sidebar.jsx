
import { SiFalcon } from "react-icons/si";

const Sidebar = ({category,setCategory,price,setPrice,colors,setColors }) => {


  return (
    <section className="sidebar">
      <div className="upper">
        <SiFalcon /> 
      </div>


      <div className="lower">
        <article>


          <div className="Category">
            <h3>Category</h3>


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
                value="Sneakers"
                id="Sneakers"
                checked={category === "sneakers"}
                onChange={() => setCategory("sneakers")}
              />
              <label htmlFor="Sneakers">Sneakers</label>
            </div>
            
            <div>
              <input
                type="radio"
                name="category"
                value="Flats"
                id="Flats"
                checked={category === "flats"}
                onChange={() => setCategory("flats")}
              />
              <label htmlFor="Flats">Flats</label>
            </div>
            <div>
              <input
                type="radio"
                name="category"
                value="Sandals"
                id="Sandals"
                checked={category === "sandals"}
                onChange={() => setCategory("sandals")}
              />
              <label htmlFor="Sandals">Sandals</label>
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

              <label htmlFor="Heels">Heels</label>
            </div>
          </div>

          <div className="Price">
            <h3>Price</h3>

            <div>
              <input
                type="radio"
                name="Price"
                value="Allprice"
                id="Allprice"
                checked={price === "All"}
                onChange={() => setPrice("All")}
              />
              <label htmlFor="Allprice">All</label>
            </div>
            <div>
              <input
                type="radio"
                name="Price"
                value="$0-50"
                id="$0-50"
                checked={price === "$0-50"}
                onChange={() => setPrice("$0-50")}
              />
              <label htmlFor="$0-50">$0-50</label>
            </div>
            <div>
              <input
                type="radio"
                name="Price"
                value="$50-100"
                id="$50-100"
                checked={price === "$50-100"}
                onChange={() => setPrice("$50-100")}
              />
              <label htmlFor="$50-100">$50-100</label>
            </div>
            <div>
              <input
                type="radio"
                name="Price"
                value="$100-150"
                id="$100-150"
                checked={price === "$100-150"}
                onChange={() => setPrice("$100-150")}
              />
              <label htmlFor="$100-150">$100-150</label>
            </div>
            <div>
              <input
                type="radio"
                name="Price"
                value="Over $150"
                id="Over $150"
                checked={price === "over $150"}
                onChange={() => setPrice("over $150")}
              />
              <label htmlFor="Over $150">Over $150</label>
            </div>
          </div>

          <div className="Colors">
            <h3>Colors</h3>

            <div>
              <input
                type="radio"
                name="Colors"
                value="AllColor"
                id="AllColor"
                checked={colors === "All"}
                onChange={() => setColors("All")}
              />
              <label htmlFor="AllColor">All</label>
            </div>
            <div>
              <input
                type="radio"
                name="Colors"
                value="Black"
                id="Black"
                checked={colors === "Black"}
                onChange={() => setColors("Black")}
              />
              <label htmlFor="Black">Black</label>
            </div>
            <div>
              <input
                type="radio"
                name="Colors"
                value="Blue"
                id="Blue"
                checked={colors === "Blue"}
                onChange={() => setColors("Blue")}
              />
              <label htmlFor="Blue">Blue</label>
            </div>
            <div>
              <input
                type="radio"
                name="Colors"
                value="Red"
                id="Red"
                checked={colors === "Red"}
                onChange={() => setColors("Red")}
              />
              <label htmlFor="Red">Red</label>
            </div>
            <div>
              <input
                type="radio"
                name="Colors"
                value="Green"
                id="Green"
                checked={colors === "Green"}
                onChange={() => setColors("Green")}
              />
              <label htmlFor="Green">Green</label>
            </div>
            <div>
              <input
                type="radio"
                name="Colors"
                value="White"
                id="White"
                checked={colors === "White"}
                onChange={() => setColors("White")}
              />
              <label htmlFor="White">White</label>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Sidebar;
