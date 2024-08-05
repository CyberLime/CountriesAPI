import { useQuery } from "@tanstack/react-query";

import Pending from "./Pending";
import { fetchCountries } from "../http";
import { Link } from "react-router-dom";
import { stringShortener } from "../util/formatter";

const BorderCountries = ({ countryBorders }) => {
  const {
    data: countries,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["countries"],
    queryFn: fetchCountries,
  });

  let content;

  if (isPending) {
    content = <Pending text="Fetching Border Countries..." />;
  }

  if (isError) {
    content = <p>{error}</p>;
  }

  if (countryBorders && countries) {
    content = (
      <ul className="flex gap-2 flex-wrap">
        {countryBorders.map((border) => (
          <Link
            to={`../${countries
              .find((country) => country.alpha3Code === border)
              .name.toLowerCase()}`}
            key={border}
            className="flex items-center justify-center text-[--value] text-[14px] bg-[--element] w-28 h-8 rounded-md hover:shadow-lg shadow-[--input] transition-shadow"
          >
            {stringShortener(
              countries.find((country) => country.alpha3Code === border).name,
              12
            )}
          </Link>
        ))}
      </ul>
    );
  }

  return <>{content}</>;
};

export default BorderCountries;
