import { Link, Outlet } from "react-router-dom";
import { FaHome } from 'react-icons/fa';
import { VscAccount } from 'react-icons/vsc';
import { FiLogOut } from 'react-icons/fi';


const Dashboard = () => {
  return (
<div className="flex">
 <div className="flex h-screen flex-col justify-between border-e bg-white w-2/12 mr-10">
  <div className="px-4 py-6">
    <nav aria-label="Main Nav" className="mt-6 flex flex-col space-y-1">
      {/* user logOut */}
      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary
          className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          <div className="flex items-center gap-2">
            <VscAccount className="text-2xl"></VscAccount>
            <span className="font-medium">Account</span>
          </div>
        </summary>

        <nav aria-label="Account Nav" className="mt-2 flex flex-col px-4">
        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
    <a href="#" className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
      <img
        alt="Man"
        src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        className="h-10 w-10 rounded-full object-cover"
      />

      <div>
        <p className="text-xs">
          <strong className="block font-medium">Eric Frusciante</strong>

          <span>eric@frusciante.com</span>
        </p>
      </div>
    </a>
  </div>
           <form action="/logout">
            <button
              type="submit"
              className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
          <FiLogOut></FiLogOut>
              <span className="text-sm font-medium">Logout</span>
            </button>
          </form>
        </nav>
      </details>
      {/* user logOut end  */}
      <Link
        to={'/'}
        className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
      >
        <FaHome className="text-2xl"></FaHome>
        <span className="font-medium">User Home</span>
      </Link>
    </nav>
  </div>
</div>
{/* outlet */}
<div>
  <Outlet></Outlet>
</div>
    </div>
  );
};

export default Dashboard;