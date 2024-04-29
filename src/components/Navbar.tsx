import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();
  const removeUser = () => {
    console.log("Removing user");
    localStorage.removeItem("user");
    navigate("/login");
    // window.location.reload();
  };

  return (
    <div className="navbar">
      <div className="flex-1">
        <button onClick={removeUser}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </button>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <button onClick={removeUser}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
