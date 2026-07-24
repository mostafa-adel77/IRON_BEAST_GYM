import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../store";

export default function UserMenu({ mobile = false }) {
  const navigate = useNavigate();
  const { userName, isAdmin, logout } = useAuth();
  const adminLink =
    "http://localhost:1337/admin/content-manager/collection-types/api::product.product/create";

  const handleLogout = () => {
    logout();
    toast.success("You Logged Out Successfully!");
    navigate("/login");
  };

  if (mobile) {
    return (
      <>
        <h1 className="text-white text-xl font-semibold uppercase">
          Welcome, <span className="text-red">{userName}</span>
        </h1>

        {isAdmin && (
          <a
            href={adminLink}
            target="_blank"
            rel="noreferrer"
            className="btn bg-red hover:bg-white hover:text-red transition"
          >
            Admin Dashboard
          </a>
        )}

        <button
          onClick={handleLogout}
          className="btn bg-red hover:bg-white hover:text-red transition"
        >
          LOGOUT
        </button>
      </>
    );
  }

  return (
    <div className="hidden md:flex items-center gap-4">
      <h1 className="text-xl text-white font-semibold uppercase">
        Welcome, <span className="text-red">{userName}</span>
      </h1>

      {isAdmin && (
        <a
          href={adminLink}
          target="_blank"
          rel="noreferrer"
          className="btn bg-red hover:bg-white hover:text-red transition"
        >
          Admin Dashboard
        </a>
      )}

      <button
        onClick={handleLogout}
        className="btn bg-red hover:bg-white hover:text-red transition"
      >
        LOGOUT
      </button>
    </div>
  );
}
