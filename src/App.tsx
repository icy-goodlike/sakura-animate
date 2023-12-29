import { Routes } from "react-router-dom";
import { m_routeList } from "@/router/routeList";
import { renderRoutes } from "@/utils";

function App() {
  return <Routes>{renderRoutes(m_routeList)}</Routes>;
}

export default App;
