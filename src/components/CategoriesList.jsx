import Category from "./Category";

const CategorisList = () => {
  return (
    <>
      <div className="my-16 max-w-[1280px] mx-auto">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-extrabold">Job Category List</h1>
          <p className="text-[#757575] text-base font-medium">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <Category />
          <Category />
          <Category />
          <Category />
        </div>
      </div>
    </>
  );
};

export default CategorisList;
