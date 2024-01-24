import { useState } from "react";
import Announcements from "./Announcements";
import Recipes from "./Recipes";

const baseBtnStyle =
  "border border-secondaryPurple rounded-sm py-2 px-4 uppercase";
const chosenBtnStyle = "bg-secondaryPurple text-white hover:opacity-80";
const otherBtnStyle = "hover:bg-secondaryPurple text-gray-500 hover:text-white";

function Blog() {
  const [recipesChosen, setRecipesChosen] = useState(true);
  return (
    // buttons
    <div>
      <div className="flex justify-center gap-5 mt-9">
        <button
          className={`${baseBtnStyle} ${
            recipesChosen ? chosenBtnStyle : otherBtnStyle
          }`}
          onClick={() => setRecipesChosen(true)}
        >
          recepti
        </button>
        <button
          className={`${baseBtnStyle} ${
            !recipesChosen ? chosenBtnStyle : otherBtnStyle
          }`}
          onClick={() => setRecipesChosen(false)}
        >
          obvestila
        </button>
      </div>

      {/* Content */}
      {recipesChosen ? <Recipes /> : <Announcements />}
    </div>
  );
}

export default Blog;
