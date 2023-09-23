import { useEffect, useState } from "react";
import Category from "./Category/Category";
// Import other necessary dependencies if needed

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch data from your API endpoint or JSON file
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching data:", error)); 
  }, []);

  return (
    <div>
      <h2 className="lg:text-5xl  text-3xl text-center text-[#1A1919] font-extrabold mb-4">
        Job Category List
      </h2>
      <p className="text-[#757575] font-medium text-base text-center my-4">
        Explore thousands of job opportunities with all the information you need. It's your future
      </p>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;