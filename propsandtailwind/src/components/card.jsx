const Card = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white w-80 rounded-2xl shadow-xl overflow-hidden">
        <img
          className="w-full h-48 object-cover"
          src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
          alt="card"
        />

        <div className="p-5">
          <h2 className="text-2xl font-bold text-gray-800">Nature Card</h2>

          <p className="text-gray-500 mt-3">
            Beautiful mountains and peaceful environment for relaxing and
            travel.
          </p>

          <button className="mt-5 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
