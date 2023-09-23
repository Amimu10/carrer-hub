

const Category = ({ category }) => {
    const { logo, category_name, availability} = category; // Replace 'name' with the actual property you want to display
  
    return (
      <div className="bg-[#9873FF0D] shadow-md p-4 mt-8 mb-14">
          <p><img src={logo} alt="" /></p>
          <h2 className="my-4 text-[#47474] font-extrabold text-xl">{category_name}</h2> 
          <h2 className="text-[#A3A3A3] font-medium">{availability}</h2>
      </div>
    );
  };
  
  export default Category;
  