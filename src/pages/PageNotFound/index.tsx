import { img404 } from "@/constants/const";
import "./index.scss";

function PageNotFound() {
  return (
    <div className="not-found">
      page404 页面找不到了，已黑化
      <img src={img404} alt="" />
    </div>
  );
}
export default PageNotFound;
