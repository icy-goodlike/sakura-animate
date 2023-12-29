// 路由类型
export type RouteType = {
  label: string;
  path: string;
  Component: any;
  redirect?: string;
  children?: any[];
  [key: string]: any;
};
