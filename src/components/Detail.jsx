const Detail = ({ title, value }) => {
  return (
    <li className="flex gap-1">
      <span className="text-[--text] text-[14px]">{title}:</span>{" "}
      {typeof value === "string" || typeof value === "number" ? (
        <span className="text-[--value] text-[14px]">{value}</span>
      ) : (
        <ul className="flex gap-1 flex-wrap">
          {value &&
            value.map((valueItem) => (
              <li key={valueItem} className="text-[--value] text-[14px]">
                {valueItem.code ?? valueItem.name ?? valueItem}
                {value.indexOf(valueItem) + 1 !== value.length && ", "}
              </li>
            ))}
        </ul>
      )}
    </li>
  );
};

export default Detail;
