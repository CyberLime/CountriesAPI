import { useSelector } from "react-redux";

import Header from "../components/Header";

const ErrorPage = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div
      id="content"
      className={`${theme} min-h-[100vh] w-[100%] bg-[--bg] font-nunito transition-all`}
    >
      <Header />
      <main className="flex items-center justify-center px-7 mt-8 min-h-[50vh] text-3xl text-[--text]">
        <h1>Something went wrong...</h1>
      </main>
    </div>
  );
};

export default ErrorPage;
