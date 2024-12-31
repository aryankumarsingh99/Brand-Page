const Navigation = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src="/images/brand_logo.png" alt="logo" />
      </div>
      <ul>
        <li href="#">Home</li>
        <li href="#">Location</li>
        <li href="#">Account</li>
        <li href="#">Contact</li>
        <li href="#">My Order</li>
        <input class="form-control me-2" type="search" placeholder="Search Items" aria-label="Search"/>
      </ul>

      <button>login</button>
    </nav>
  );
};

export default Navigation;