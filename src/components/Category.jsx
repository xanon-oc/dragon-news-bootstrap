import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "./NewsCard";

const Category = () => {
  const categoryNews = useLoaderData();
  const { id } = useParams();
  console.log(categoryNews);
  return (
    <div>
      {id && (
        <h6 className="mb-2">This is the category {categoryNews.length}</h6>
      )}
      {categoryNews.map((news) => (
        <NewsCard news={news} key={news._id} />
      ))}
    </div>
  );
};

export default Category;
