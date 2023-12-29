import TabBar from "@/components/TabBar";
import { m_routeList } from "@/router/routeList";
function User() {
  return (
    <div>
      users
      <TabBar routes={m_routeList} />
    </div>
  );
}

export default User;
