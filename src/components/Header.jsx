import { Link } from "react-router-dom";
import { FaMoon } from "react-icons/fa6";
import { useDispatch } from "react-redux";

import { themeActions } from "../store";

const Header = () => {
  const dispatch = useDispatch();

  function handleChangeTheme() {
    dispatch(themeActions.changeTheme());
  }

  return (
    <header className="bg-[--element] flex items-center justify-between px-12 py-4">
      <Link to="/CountriesAPI/" className="text-[--text] text-xl font-bold">Where in the world?</Link>
      <button
        onClick={handleChangeTheme}
        className="bg-[--element] flex items-center gap-2"
      >
        <FaMoon className="text-[--text]" />
        <span className="text-[--text]">Dark Mode</span>
      </button>
    </header>
  );
};

export default Header;
