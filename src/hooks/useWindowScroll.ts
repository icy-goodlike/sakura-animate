import { useState } from "react";

export function useWindowScroll() {
  // 获取初始滚动距离
  const [y, setY] = useState(0);
  window.onscroll = () => {
    const top = document.documentElement.scrollTop || document.body.scrollTop;
    setY(top);
  };

  return [y];
}
