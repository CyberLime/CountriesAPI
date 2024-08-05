import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";

import { fetchCountries } from "../http";
import Detail from "./Detail";
import Pending from "./Pending";
import BorderCountries from "./BorderCountries";

const CountryDetail = () => {
  const params = useParams();
  const {
    data: country,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["countries", params.countryName],
    queryFn: ({ signal }) => fetchCountries({ signal, id: params.countryName }),
  });

  let content;

  if (isPending) {
    content = <Pending text="Fetching Country Details..." />;
  }

  if (isError) {
    content = <p>{error}</p>;
  }

  if (country) {
    content = (
      <div className="mt-8 w-[100%] flex justify-between gap-8 max-[920px]:flex-wrap max-[920px]:justify-center">
        <div className="flex justify-center self-start">
          <img
            className="max-h-[333px] max-w-[520px] h-[48vw] w-[78vw]"
            src={country.flags.png}
          />
        </div>
        <div className="max-w-[520px] w-[78vw] mt-6">
          <h1 className="text-2xl text-[--text] font-bold tracking-wide">
            {country.name}
          </h1>
          <div className="flex mt-4 justify-between flex-wrap gap-4">
            <ul>
              <Detail title="Native Name" value={country.nativeName} />
              <Detail title="Population" value={country.population} />
              <Detail title="Region" value={country.region} />
              <Detail title="Sub Region" value={country.subregion} />
              <Detail title="Capital" value={country.capital} />
            </ul>
            <ul>
              <Detail title="Top Level Domain" value={country.topLevelDomain} />
              <Detail title="Currencies" value={country.currencies} />
              <Detail title="Languages" value={country.languages} />
            </ul>
          </div>
          <div className="flex mt-8 flex-wrap gap-2 mb-8">
            <h2 className="text-[--text]">Border Countries:</h2>
            <BorderCountries countryBorders={country.borders} />
          </div>
        </div>
      </div>
    );
  }

  return <>{content}</>;
};

export default CountryDetail;
