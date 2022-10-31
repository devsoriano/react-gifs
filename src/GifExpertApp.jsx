import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball Z"]);

  const onAddCategory = (newCategorty) => {
    if (categories.includes(newCategorty)) return;
    setCategories([newCategorty, ...categories]);
  };

  return (
    <>
      <h1>Gif Expert App</h1>

      <AddCategory onNewCategorty={onAddCategory} />

      {categories.map((category) => (
        <GifGrid {...{ category }} key={category} />
      ))}
    </>
  );
};
