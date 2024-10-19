import { useState } from "react";
import "./exploreContent.css";
import { NavLink } from "react-router-dom";

const ExploreContent = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="pageBackgroundColor">
      <div className="wrapper90 explore">
        <p className="border-bottom">explore</p>
        <div className="contextText">
          <p>
            embrace your journey of unlearning in any order you feel comfortable
            with.
          </p>
        </div>
        <i className="fa-solid fa-magnifying-glass position-absolute"></i>
        <input type="text" name="search" className="position-relative" />
        <ul className="categories d-flex">
          <li className="active">all</li>
          <li>article</li>
          <li>document</li>
          <li>event</li>
          <li>podcast</li>
          <li>video</li>
          <li className="dropdown">
            <div onClick={toggleDropdown} className="dropdownToggle">
              our worlds <i className="fa-solid fa-caret-down"></i>
            </div>
            {dropdownOpen && (
              <ul className="dropdownMenu">
                <NavLink to="/horizontal">
                <li>planet-earth</li>
                </NavLink>
                <li>co-creators</li>
              </ul>
            )}
          </li>
        </ul>
        <div className="search">
          <button>search</button>
        </div>
      </div>
    </div>
  );
};

export default ExploreContent;
