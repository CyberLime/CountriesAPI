import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

import Header from "../components/Header";
import CountryDetail from "../components/CountryDetail";

const CountryDetailsPage = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div
      id="content"
      className={`${theme} min-h-[100vh] w-[100%] bg-[--bg] font-nunito transition-all`}
    >
      <Header />
      <main className="px-8 mt-8">
        <Link
          to=".."
          relative="route"
          className="flex items-center justify-center gap-2 text-[--text] bg-[--element] w-32 h-8 rounded-md hover:shadow-lg shadow-[--input] transition-shadow"
        >
          <FaArrowLeft />
          Back
        </Link>
        <CountryDetail />
      </main>
    </div>
  );
};

export default CountryDetailsPage;
