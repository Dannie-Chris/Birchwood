import "./TopBar.css";

const TopBar: React.FC = () => {
  return (
    <div className="topbar">
      <p>Call Us: +254 700 000 000</p>
      <div className="socials">
        <span>FB</span>
        <span>IG</span>
        <span>WA</span>
      </div>
    </div>
  );
};

export default TopBar;