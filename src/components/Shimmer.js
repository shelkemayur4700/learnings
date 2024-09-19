const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      {Array(10)
        ?.fill("")
        ?.map((e, index) => (
          <div
            key={index}
            className="bg-gray-300 w-[220px] h-96 m-4 rounded-lg"
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
