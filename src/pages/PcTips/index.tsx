import "./index.scss";
import { pcBg } from "@/constants/const";
import { useEffect, useRef } from "react";

const PcTips = () => {
  useEffect(() => {
    document.title = "pc端还在建设中...";
    document.body.style.backgroundImage = `url(${pcBg})`;
    document.body.style.minHeight = `${window.innerHeight}px`;
  }, []);
  const tipRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    tipRef.current && (tipRef.current.style.width = `500px`);
  }, []);

  return (
    <div className="pc-wrapper" ref={tipRef}>
      <span>抱歉,pc端还在建设中...</span>
    </div>
  );
};

export default PcTips;
