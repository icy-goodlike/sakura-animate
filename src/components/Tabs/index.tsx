import "./index.scss";
import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { RouteType } from "@/type";
function Tabs(props: { routes: RouteType[] }) {
  const {
    routes = [
      {
        label: "推荐",
        path: "/home/recommend",
      },
      {
        label: "新番",
        path: "/home/new-animate",
      },
      {
        label: "日漫",
        path: "/home/japan-animate",
      },
      {
        label: "国漫",
        path: "/home/chinese-animate",
      },
    ],
  } = props;
  const tabRef = useRef(null);
  useEffect(() => {
    window.onscroll = () => {
      console.log(111);
    };
  }, []);
  return (
    <div className="flex-tabs">
      {routes.map((tab) => {
        return (
          <div key={tab?.label} className="tab-item" ref={tabRef}>
            <NavLink to={tab.path}>
              <span>{tab.label}</span>
            </NavLink>
          </div>
        );
      })}
    </div>
  );
}
export default Tabs;
