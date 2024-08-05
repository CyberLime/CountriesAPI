import { useState } from "react";

import { FaSearch } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";

import { fetchCountries } from "../http";
import Country from "./Country";
import Pending from "./Pending";

const REGIONS = ["Africa", "America", "Asia", "Europe", "Oceania"];

const Countries = () => {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [searchedCountry, setSearchedCountry] = useState("");

  const {
    data: countries,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["countries"],
    queryFn: fetchCountries,
  });

  function handleSelectedRegion(event) {
    setSelectedRegion(event.target.value);
  }

  function handleSearchedCountry(event) {
    setSearchedCountry(event.target.value);
  }

  let content;

  if (isPending) {
    content = <Pending text="Fetching Countries..." />;
  }

  if (isError) {
    content = <p>{error}</p>;
  }

  if (countries) {
    content = countries
      .filter(
        (country) =>
          country.region.includes(selectedRegion) &&
          country.name.toLowerCase().startsWith(searchedCountry.toLowerCase())
      )
      .map((country) => (
        <Country key={country.numericCode} country={country} />
      ));
  }

  return (
    <>
      <div className="flex justify-between flex-wrap gap-6 text-sm">
        <div className="flex items-center w-[100vw] max-w-96">
          <div className="absolute bg-[--element] w-8 rounded-md h-8 flex items-center justify-end">
            <FaSearch className="text-[--text]" />
          </div>
          <input
            onChange={(event) => handleSearchedCountry(event)}
            className="bg-[--element] border-none outline-none rounded-md h-8 w-[100%] px-7 placeholder:text-[--text] text-[--text] ml-4"
            placeholder="Search for a country..."
          />
        </div>
        <select
          onChange={(event) => handleSelectedRegion(event)}
          className="px-4 w-36 h-8 box-content border-none outline-none rounded-md bg-[--element] text-[--text]"
        >
          <option disabled className="hidden" selected>
            Filter by Region
          </option>
          {REGIONS.map((region) => (
            <option key={region}>{region}</option>
          ))}
        </select>
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-6">{content}</div>
    </>
  );
};

export default Countries;
