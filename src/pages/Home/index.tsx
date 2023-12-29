import "./index.scss";

import TabBar from "@/components/TabBar";
import Tabs from "@/components/Tabs";
import { Outlet } from "react-router-dom";
import SearchBar from "@/components/SearchBar/index";
import { m_routeList } from "@/router/routeList";

function Home() {
  return (
    <div>
      <div className="home">
        <SearchBar />
        <Tabs routes={m_routeList?.[0]?.children} />
        <Outlet />
        <TabBar routes={m_routeList} />
      </div>
    </div>
  );
}
export default Home;
