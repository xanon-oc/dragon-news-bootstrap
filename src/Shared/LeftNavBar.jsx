import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavBar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5200/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => {
        console.error(error.message);
      });
  }, []);
  return (
    <div className="pt-5">
      {categories.map((a) => (
        <p key={a.id}>
          <NavLink className="left-nav" to={`/categories/${a.id}`}>
            {a.name}
          </NavLink>
        </p>
      ))}
    </div>
  );
};

export default LeftNavBar;
