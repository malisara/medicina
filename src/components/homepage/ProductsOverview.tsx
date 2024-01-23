import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import Button from "../Button";
import Title from "../../components/Title";
import { products_urls } from "../../utils/urls";

function ProductsOverview(): JSX.Element {
  return (
    <>
      {/* top part of separator */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#e8d1eb"
          fillOpacity="1"
          d="M0,224L1440,64L1440,320L0,320Z"
        ></path>
      </svg>

      {/* main part */}
      <div className="bg-primaryPurple">
        <Title title="Ponudba" />
        <div
          className="flex flex-wrap justify-center gap-8 mt-10 
          w-[80%] md:w-[60%] mx-auto flex-col md:flex-row"
        >
          {products_urls.map((product_url, index) => {
            return (
              <motion.div
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.3 * (index + 1) }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 40 },
                }}
                className="text-center flex flex-col items-center"
                key={product_url.title}
              >
                <div className="w-[20rem]">
                  <NavLink to={product_url.url}>
                    <img
                      src={product_url.img}
                      alt={product_url.title}
                      className="h-[80vw] sm:h-[20rem] 
                    object-cover md:mt-6 w-full"
                    />
                  </NavLink>
                  <Button text={product_url.title} url={product_url.url} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* bottom part of separator */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#e8d1eb"
          fillOpacity="1"
          d="M0,192L1440,128L1440,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}

export default ProductsOverview;
