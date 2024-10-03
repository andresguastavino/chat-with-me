export const Button = ({ label, clickHandler, bgColor, otherStyles }) => {
  
  return (
    <button
      type="button"
      onClick={clickHandler}
      className={`w-full flex flex-wrap justify-center rounded-none py-4 font-bold ${ bgColor } ${ otherStyles?.join(' ') } `}
    >
      {label}
    </button>
  );

}