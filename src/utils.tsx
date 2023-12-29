import { Suspense } from "react";

import { Route, Navigate } from "react-router-dom";
import { Spin } from "antd";
import { RouteType } from "./type";
// 渲染路由配置的方法
export const renderRoutes = (routes: RouteType[]) => {
  if (routes && routes?.length > 0) {
    return routes?.map(({ path, Component, redirect, children }) => {
      return children && children?.length > 0 ? (
        <Route
          key={path}
          path={path}
          element={
            <Suspense fallback={<Spin style={{ margin: "20px" }} />}>
              <Component />
            </Suspense>
          }
        >
          {/* 递归渲染子路由 */}
          {renderRoutes(children)}
          {/* 重定向以及重定向的兜底 */}
          {redirect ? (
            <>
              <Route path={path} element={<Navigate to={redirect} />}></Route>
              <Route
                path={children[0].path.split("/")[0]}
                element={<Navigate to={redirect} />}
              />
            </>
          ) : (
            <>
              <Route
                path={path}
                element={<Navigate to={children[0].path} />}
              ></Route>
              <Route
                path={children[0].path.split("/")[0]}
                element={<Navigate to={children[0].path.split("/")[1]} />}
              />
            </>
          )}
        </Route>
      ) : (
        <Route
          key={path}
          path={path}
          element={
            <Suspense fallback={<div>加载中</div>}>
              <Component />
            </Suspense>
          }
        />
      );
    });
  }
};

// 判断浏览器端型
export const isMobile = () => {
  let flag = navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  );
  return flag;
};
