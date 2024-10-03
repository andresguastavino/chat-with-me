export const Button = ({ label, clickHandler, bgColor, otherStyles }) => {
  
  return (
    <div className={`w-full flex flex-wrap justify-center rounded-none py-4 font-bold ${ bgColor } ${ otherStyles?.join(' ') } `}>
    <button type="button" onclick={clickHandler}>{label}</button>
  </div>
  );
}