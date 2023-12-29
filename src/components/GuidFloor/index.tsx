import "./index.scss";

import { poster } from "@/constants/const";

const GuidFloor = (props: { title: string; dataSource?: any[] }) => {
  const {
    title = "精选推荐",
    dataSource = [
      {
        image: poster,
        url: "#",
      },
      {
        image: poster,
        url: "#",
      },
      {
        image: poster,
        url: "#",
      },
      {
        image: poster,
        url: "#",
      },
      {
        image: poster,
        url: "#",
      },
      {
        image: poster,
        url: "#",
      },
    ],
  } = props;

  return (
    <div className="guidFloor-container">
      <div className="title-container">
        <span className="title">{title}</span>
        <span className="view-all">查看全部</span>
      </div>
      <div className="poster-container">
        {dataSource &&
          dataSource?.map((data, index) => {
            return (
              <div className="img-wrapper" key={index}>
                <img src={data?.image} alt="" />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default GuidFloor;
