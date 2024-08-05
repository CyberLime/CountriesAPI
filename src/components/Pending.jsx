import LoadingIndicator from "./LoadingIndicator";

const Pending = ({ text }) => {
  return (
    <div className="font-bold text-xl text-[--text] text-center mt-24">
      <p className="">
        {text}
      </p>
      <LoadingIndicator />
    </div>
  );
};

export default Pending;
