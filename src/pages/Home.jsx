import { useSelector } from "react-redux";

import Header from "../components/Header";
import Countries from "../components/Countries";

const HomePage = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div
      id="content"
      className={`${theme} min-h-[100vh] w-[100%] bg-[--bg] font-nunito transition-all`}
    >
      <Header />
      <main className="px-7 mt-8">
        <Countries />
      </main>
    </div>
  );
};

export default HomePage;
