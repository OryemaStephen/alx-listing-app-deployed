const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-semibold">${price}/night</h3>
      <div className="mt-4">
        <label>Check-in</label>
        <input type="date" className="w-full p-2 mt-2 border" />
      </div>
      <div className="mt-4">
        <label>Check-out</label>
        <input type="date" className="w-full p-2 mt-2 border" />
      </div>

      {/* Total payment */}
      <div className="mt-4">
        <p>Total payment: <strong>${price * 7}</strong></p>
      </div>

      {/* Reserve button */}
      <button className="px-4 py-2 mt-4 text-white bg-green-500 rounded-md">Reserve now</button>
    </div>
  );
};

export default BookingSection;