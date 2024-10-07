import { Link } from "react-router-dom";
import ProductCard from "../components/product-card";
import image from "../assets/images/camera.jpeg";

const home = () => {
  const handler = () => {};
  return (
    <>
      <div className="home">
        <img src={image} alt="camera" />
        <h1>
          Latest Products
          <Link to="/search" className="findMore">
            More
          </Link>
        </h1>
      </div>

      <main>
        <ProductCard
          photo="https://m.media-amazon.com/images/I/619L9jf3-rL._AC_SX679_.jpg"
          name="MacBook"
          price={333}
          stock={888}
          handler={handler}
        />
      </main>
    </>
  );
};

export default home;
