/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const HeadingTitle = ({ subHeading, mainHeading }) => {
  return (
    <div className="text-center w-full md:w-1/5 md:mx-auto my-10">
      <p className="text-[#D99904] mb-2 text-xl">--- {subHeading} ---</p>
      <h3 className="text-3xl uppercase  border-y-4 py-5">
        {mainHeading}
      </h3>
    </div>
  );
};

export default HeadingTitle;
