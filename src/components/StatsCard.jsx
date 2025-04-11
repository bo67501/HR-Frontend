export default function StatsCard() {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
        <div className="bg-white rounded-xl p-4 shadow text-center">
          <h3 className="text-lg font-semibold">Employees</h3>
          <p className="text-2xl font-bold text-blue-600">24</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow text-center">
          <h3 className="text-lg font-semibold">Departments</h3>
          <p className="text-2xl font-bold text-green-600">4</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow text-center">
          <h3 className="text-lg font-semibold">On Leave</h3>
          <p className="text-2xl font-bold text-red-600">2</p>
        </div>
      </div>
    );
  }
  