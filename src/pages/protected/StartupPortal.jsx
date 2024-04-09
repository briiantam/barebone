import Sidebar from "../../components/protected/Sidebar";
import { Routes, Route, Outlet } from "react-router-dom";
import StartupDashboard from "./StartupDashboard";
import Investors from "./Investors";
import Startups from "./Startups";
import StartupProfile from "./StartupProfile";
import Settings from "./Settings";

const StartupPortal = () => {
  return (
    <div className="bg-white min-h-screen">
      <Sidebar />
      <div>
        <Routes>
          <Route index element={<StartupDashboard />} />
          <Route path="startup-dashboard" element={<StartupDashboard />} />
          <Route path="investors" element={<Investors />} />
          <Route path="startups" element={<Startups />} />
          <Route path="startup-profile" element={<StartupProfile />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default StartupPortal;
