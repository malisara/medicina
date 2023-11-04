import Testemonials from "./homepage/Testemonials";
import Hero from "./homepage/Hero";
import Presentation from "./homepage/Presentation";
import ProductsOverview from "./homepage/ProductsOverview";

function Home(): JSX.Element {
  return (
    <>
      <Hero />
      <Presentation />
      <ProductsOverview />
      <Testemonials />
    </>
  );
}

export default Home;
