export default function Sidebar() {
    return (
      <div className="w-64 h-screen bg-gradient-to-b from-blue-600 to-blue-800 text-white fixed">
        <div className="p-4 font-bold text-xl">HR Dashboard</div>
        <ul className="mt-8 space-y-4 p-4">
          <li className="hover:text-yellow-300 cursor-pointer">Dashboard</li>
          <li className="hover:text-yellow-300 cursor-pointer">Employees</li>
          <li className="hover:text-yellow-300 cursor-pointer">Departments</li>
          <li className="hover:text-yellow-300 cursor-pointer">Leaves</li>
        </ul>
      </div>
    );
  }
  