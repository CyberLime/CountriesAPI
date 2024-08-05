export async function fetchCountries({ signal, id }) {
  const response = await fetch('https://cyberlime.github.io/CountriesDataJson/data.json', { signal });

  if (!response.ok) {
    throw new Error("Could not fetch countries!");
  }

  const data = await response.json();

  if (id) {
    return data.find((country) => country.name.toLowerCase() === id);
  }

  return data;
}
