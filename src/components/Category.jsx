import PropTypes from "prop-types";


const Category = ({category}) => {
  const {logo,category_name,availability} = category;
  return (
    <div className="primary-bg p-8 rounded-md space-y-2 hover:scale-105 transition-all border-2 hover:border-primary">
      <figure className="mb-6 h-[70px] w-[70px]">
        <img
          className="w-full h-full"
          src={logo}
          alt={category_name}
        />
      </figure>
      <h4 className="text-xl font-extrabold">{category_name}</h4>
      <p className="text-[#A3A3A3] font-medium">{availability}</p>
    </div>
  );
};
Category.propTypes = {
  category: PropTypes.object.isRequired,
};
export default Category;
