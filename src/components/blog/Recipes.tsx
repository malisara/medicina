import { imageCoverStyle } from "../homepage/Hero";
import { recipes } from "../../blogText/recipes";

const subtytleSyle = "text-xl font-bold text-secondaryPurple py-6 md:py-7";

function Recipes(): JSX.Element {
  return (
    <>
      {recipes.map((recipe, i) => (
        <div
          className="border-2 w-[90%] md:w-[60%] lg:w-[60%] xl:w-[40%] 
         shadow-2xl p-5 border-primaryPurple my-[4rem] mx-auto"
          key={i}
        >
          {/* Image */}
          <div className="w-full h-[20rem] md:h-[30rem]">
            <img src={recipe.image} className={imageCoverStyle} />
          </div>

          {/* Title */}
          <p
            className="text-center text-3xl font-bold
           text-secondaryPurple py-7"
          >
            {recipe.title}
          </p>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="order-2 lg:order-1 px-2 lg:w-[60%]">
              {/* Steps */}
              <p className={`${subtytleSyle} text-justify`}>Postopek</p>
              {recipe.steps.map((step, i) => (
                <p key={i} className="pb-6 leading-6">
                  {step}
                </p>
              ))}
            </div>

            {/* Ingredients */}
            <div
              className="lg:bg-primaryPurple px-3 
              order-1 lg:order-2 lg:w-[40%]"
            >
              <p className={`${subtytleSyle} lg:text-center`}>Sestavine</p>

              {recipe.ingredients.map((ingredient) => (
                <ul key={ingredient} className="py-3">
                  <input
                    type="checkbox"
                    className="w-4 h-4 roundedfocus:ring-2 
                    lg:accent-primaryPurple accent-white"
                  />
                  <span className="pl-2">{ingredient}</span>
                </ul>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Recipes;
