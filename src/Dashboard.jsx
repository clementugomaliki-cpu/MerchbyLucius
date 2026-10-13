import DashboardNav from "./DashboardNav"
import DashboardHeader from "./DashboardHeader"
import DashboardStatistics from "./DashboardStatistics"
import DasshboardCard from "./DasshboardCard"
import { DownloadProvider } from "./Download"
import DashboardStar from "./DashboardStar"
import DashboardFooter from "./DashboardFooter"
import PagesHeader from "./Components/PagesHeader"
import Sidebar from "./Components/Sidebar"
import "./Dashboard.css"

function Dashboard() {
  return (
    <div className="dashboard-page">
      <PagesHeader />

      <div className="dashboard-layout">
        <aside className="dashboard-sidebar">
          <Sidebar />
        </aside>

        <main className="dashboard-content">
          <DashboardHeader />
          <DownloadProvider>
            <DashboardStatistics />
            <DasshboardCard />
            <DashboardStar />
            <DashboardFooter />
          </DownloadProvider>
        </main>
      </div>
    </div>
  )
}

export default Dashboard