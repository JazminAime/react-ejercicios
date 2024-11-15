// eslint-disable-next-line react/prop-types
const Light = ({ color, hacerClick }) => {
  return (
    <div
      onClick={hacerClick}
      style={{
        backgroundColor: color,
        width: "80px",
        height: "80px",
        borderRadius: "50%",
        margin: "10px auto",
        cursor: "pointer",
      }}></div>
  );
};
export default Light;
