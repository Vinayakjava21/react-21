import HOTEL_PNG from  "../utils/links";
const Header = () => {
  return (
    <div className="header">
    <div className="logo">
      <img
        src={HOTEL_PNG}
        width="200"
        alt="logo"
      />
      <h2>Food App</h2>
    </div>
    <div className="nav">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
    </div>
    </div>
  );
};

export default Header;