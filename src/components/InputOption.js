import "./InputOption.css";

const InputOption = ({ Icon, title, color }) => {
  return (
    <div className="inputOption">
      <Icon style={{ color: color }} className="icon" />
      <h5>{title} </h5>
    </div>
  );
};

export default InputOption;
