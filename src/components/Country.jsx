import { Link } from "react-router-dom";

import { stringShortener } from "../util/formatter";
import Detail from "./Detail";

const Country = ({ country }) => {
  return (
    <Link
      to={country.name.toLowerCase()}
      className="mb-8 bg-[--element] h-80 rounded-md overflow-hidden hover:shadow-lg shadow-[--input] transition-shadow"
    >
      <img
        src={country.flags.png}
        className="max-w-[260px] h-[160px] w-[90vw]"
      />
      <h1 className="text-[--text] font-bold ml-4 mt-4">
        {stringShortener(country.name, 25)}
      </h1>
      <ul className="text-[--text] text-[14px] ml-4 mt-3">
        <Detail title="Population" value={country.population} />
        <Detail title="Region" value={country.region} />
        <Detail title="Capital" value={country.capital} />
      </ul>
    </Link>
  );
};

export default Country;
