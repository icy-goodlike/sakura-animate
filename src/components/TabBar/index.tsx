import "./index.scss";

import { NavLink } from "react-router-dom";
import {
  homeTab,
  homeTabActive,
  rank,
  rankActive,
  my,
  myActive,
} from "../../constants/const";
import { RouteType } from "@/type";

const TabBar = (props: { routes: RouteType[] }) => {
  const {
    routes = [
      {
        path: "/home",
        label: "首页",
        icon: homeTab,
        activeIcon: homeTabActive,
      },
      {
        path: "/rank",
        label: "排行榜",
        icon: rank,
        activeIcon: rankActive,
      },
      {
        path: "/user",
        label: "我的",
        icon: my,
        activeIcon: myActive,
      },
    ],
  } = props;

  return (
    <>
      <div className="tab-bar-container">
        {routes.map((route: any) => {
          if (route?.path !== "*") {
            return (
              <div key={route?.path} className="tab-bar-item">
                <NavLink to={route?.path === "/" ? "/home" : route?.path}>
                  {({ isActive }) => {
                    return (
                      <div>
                        <img
                          src={isActive ? route?.activeIcon : route?.icon}
                          alt=""
                          className="tab-img"
                        />
                        <div>{route?.label}</div>
                      </div>
                    );
                  }}
                </NavLink>
              </div>
            );
          } else return null;
        })}
      </div>
      {/* 占位 */}
      <div style={{ height: "45px" }} />
    </>
  );
};

export default TabBar;
