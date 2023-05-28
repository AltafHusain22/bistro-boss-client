/* eslint-disable react/prop-types */
const Cover = ({ img1, mainHeading, subText }) => {
  return (
    <div
      className="hero min-h-screen md:h-[600px]"
      style={{ backgroundImage: `url("${img1}")` }}
    >
      <div className="hero bg-opacity-60"></div>
      <div className="bg-black opacity-60 w-2/3 mx-auto h-80 flex justify-center items-center">
        <div className="text-center">
          <h2 className="text-5xl text-white font-bold">{mainHeading}</h2>
          <p className="text-white mt-5 text-xl">{subText}</p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
