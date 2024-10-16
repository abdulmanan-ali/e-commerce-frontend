import { Link } from "react-router-dom";
import ProductCard from "../components/product-card";

const home = () => {
  const handler = () => {};
  return (
    <>
      <div className="home">
        <img
          src="https://cdn.mos.cms.futurecdn.net/4wpKrH93D37dDPTisdqGy4.jpg"
          alt="camera"
        />
        <h1>
          Latest Products
          <Link to="/search" className="findMore">
            More
          </Link>
        </h1>
      </div>

      <main>
        <Link to="/cart">
          <ProductCard
            photo="https://m.media-amazon.com/images/I/619L9jf3-rL._AC_SX679_.jpg"
            name="MacBook"
            price={333}
            stock={888}
            handler={handler}
          />
        </Link>
      </main>
    </>
  );
};

export default home;
