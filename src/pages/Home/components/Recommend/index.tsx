import "./index.scss";
import GuidFloor from "@/components/GuidFloor";

import { Carousel } from "antd";
import { pcBg } from "@/constants/const";

function Recommend() {
  const bannerList = [
    {
      image: pcBg,
      text: "最新公告:icy姐姐醉厉害啦",
    },
    {
      image: pcBg,
      text: "最新公告:鬼灭怎么还不更新啊",
    },
    {
      image: pcBg,
      text: "最新公告:最新好热啊",
    },
  ];
  const floorList = [
    {
      floorName: "精选新番",
      dataSource: [],
    },
    {
      floorName: "精选日漫",
      dataSource: [],
    },
    {
      floorName: "精选国漫",
      dataSource: [],
    },
  ];
  return (
    <div>
      <Carousel autoplay>
        {bannerList.map((item) => {
          return (
            <div className="banner-container" key={item?.text}>
              <img src={item?.image} alt="" />
              <div className="banner-text">{item?.text}</div>
            </div>
          );
        })}
      </Carousel>
      {floorList &&
        floorList?.map((floor) => {
          return <GuidFloor title={floor?.floorName} key={floor?.floorName} />;
        })}
    </div>
  );
}
export default Recommend;
