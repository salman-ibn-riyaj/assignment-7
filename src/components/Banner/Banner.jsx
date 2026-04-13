const Banner = () => {
  return (
    <div className="p-2">
      <div className="space-y-2 text-center mt-20 mb-9">
        <h2 className="text-3xl text-[#244D3F] font-bold">
          Friends to keep close in your life
        </h2>
        <p className="text-gray-600">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br /> relationships that matter most.
        </p>
        <button className="btn bg-[#244D3F] text-white">+Add a Friend</button>
      </div>

      {/* banner card div starts from here bro!  */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9 container mx-auto">
        <div className="text-center shadow p-2">
          <h3 className="font-semibold text-xl">10</h3>
          <p className="text-gray-700">Total Friends</p>
        </div>
        <div className="text-center shadow p-2">
          <h3 className="font-semibold text-xl">3</h3>
          <p className="text-gray-700">On Track</p>
        </div>
        <div className="text-center shadow p-2">
          <h3 className="font-semibold text-xl">6</h3>
          <p className="text-gray-700">Need Attention</p>
        </div>
        <div className="text-center shadow p-2">
          <h3 className="font-semibold text-xl">12</h3>
          <p className="text-gray-700">Interactions This Month</p>
        </div>
        
      </div>
      <hr className="text-gray-200 mt-8 mb-3 container mx-auto" />
      
    </div>
  );
};

export default Banner;
