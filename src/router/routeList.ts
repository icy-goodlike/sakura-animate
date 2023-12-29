import { lazy } from "react";

import { USER_ROLES } from "@/constants/userRank";
import {
  homeTab,
  homeTabActive,
  rank,
  rankActive,
  my,
  myActive,
} from "@/constants/const";
// 手机端路由配置列表
export const m_routeList = [
  {
    label: "首页",
    path: "/",
    Component: lazy(() => import("@/pages/Home")),
    roles: [USER_ROLES.ADMIN, USER_ROLES.TEST],
    redirect: "/home/recommend",
    icon: homeTab,
    activeIcon: homeTabActive,
    children: [
      {
        label: "推荐",
        path: "home/recommend",
        Component: lazy(() => import("@/pages/Home/components/Recommend")),
        roles: [USER_ROLES.ADMIN],
      },
      {
        label: "新番",
        path: "home/new-animate",
        Component: lazy(() => import("@/pages/Home/components/NewAnimate")),
      },
      {
        label: "日漫",
        path: "home/japan-animate",
        Component: lazy(() => import("@/pages/Home/components/JapenAnimate")),
      },
      {
        label: "国漫",
        path: "home/chinese-animate",
        Component: lazy(() => import("@/pages/Home/components/ChineseAnimate")),
      },
    ],
  },
  {
    label: "排行",
    path: "/rank",
    Component: lazy(() => import("@/pages/About")),
    children: [],
    icon: rank,
    activeIcon: rankActive,
  },
  {
    label: "我的",
    path: "/user",
    Component: lazy(() => import("@/pages/User")),
    children: [],
    icon: my,
    activeIcon: myActive,
  },
  {
    key: "404",
    label: "404页面",
    path: "*",
    Component: lazy(() => import("@/pages/PageNotFound")),
    children: [],
  },
];
// // pc端路由配置
// export const pc_routeList = [
//   {
//     label: "首页",
//     path: "/",
//     Component: lazy(() => import("@/pages/PcTips")),
//     roles: [USER_ROLES.ADMIN, USER_ROLES.TEST],
//     redirect: "/home/recommend",
//   },
// ];
