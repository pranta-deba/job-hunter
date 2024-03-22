const Category = () => {
  return (
    <div className="primary-bg p-8 rounded-md space-y-2 hover:scale-105 transition-all border-2 hover:border-primary">
      <figure className="mb-6 h-[70px] w-[70px]">
        <img
          className="w-full h-full"
          src="https://i.postimg.cc/Kjp8v6yg/chip.png"
          alt=""
        />
      </figure>
      <h4 className="text-xl font-extrabold">Account & Finance</h4>
      <p className="text-[#A3A3A3] font-medium">300 Jobs Available</p>
    </div>
  );
};

export default Category;
