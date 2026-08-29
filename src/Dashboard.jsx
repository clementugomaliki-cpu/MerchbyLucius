
// import DashboardAside from "./DashboardAside"
import DashboardNav from "./DashboardNav"
import DashboardHeader from "./DashboardHeader"
import DashboardStatistics from "./DashboardStatistics"
import DasshboardCard from "./DasshboardCard"
import { DownloadProvider } from "./Download"
import DashboardStar from "./DashboardStar"
import DashboardFooter from "./DashboardFooter"
import PagesHeader from "./Components/PagesHeader"
import Sidebar from "./Components/Sidebar"
function Dashboard() {
  return (
    <div >
          <PagesHeader/>
          <div>
          <Sidebar/>
          </div>
          <div>
             <DashboardHeader/>
             <DownloadProvider>
            <DashboardStatistics/> 
            <DasshboardCard/> 
            <DashboardStar/> 
            <DashboardFooter/>
            </DownloadProvider> 
          </div>
        </div>

  )
}
export default Dashboard