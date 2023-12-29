import "./index.scss";
import { searchIcon } from "@/constants/const";

function SearchBar() {
  return (
    <div className="search-bar-container">
      <div className="input-wrapper">
        <div className="search-icon">
          <img src={searchIcon} alt="" />
        </div>
        <input type="input" placeholder="请输入关键字..." />
      </div>
    </div>
  );
}

export default SearchBar;
