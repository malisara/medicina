import { NavLink } from "react-router-dom";
import { products_urls } from "../../utils/urls";
import Title from "../../components/Title";
import Button from "../Button";

//TODO change title color &|| style
function ProductsOverview(): JSX.Element {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#e8d1eb"
          fillOpacity="1"
          d="M0,224L1440,64L1440,320L0,320Z"
        ></path>
      </svg>
      <div className="bg-primaryPurple">
        <Title title="Ponudba" />
        <div
          className="flex flex-wrap justify-center gap-8 mt-10 w-[80%]
          md:w-[60%] mx-auto flex-col md:flex-row"
        >
          {products_urls.map((product_url) => {
            return (
              <div
                className="text-center flex flex-col items-center"
                key={product_url.title}
              >
                <NavLink to={product_url.url}>
                  <img
                    src={product_url.img}
                    alt=""
                    className="h-[80vw] sm:h-[20rem] w-[20rem] 
                  object-cover md:mt-6 hover:opacity-80"
                  />
                </NavLink>
                <Button text={product_url.title} url={product_url.url} />
              </div>
            );
          })}
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#e8d1eb"
          fillOpacity="1"
          d="M0,192L1440,128L1440,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
}

export default ProductsOverview;
