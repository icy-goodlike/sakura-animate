import TabBar from "@/components/TabBar";
import { m_routeList } from "@/router/routeList";
function About() {
  return (
    <div>
      about
      <TabBar routes={m_routeList} />
    </div>
  );
}

export default About;
