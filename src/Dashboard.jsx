
import DashboardAside from "./DashboardAside"
import DashboardNav from "./DashboardNav"
import DashboardHeader from "./DashboardHeader"
import DashboardStatistics from "./DashboardStatistics"
import DasshboardCard from "./DasshboardCard"
import { DownloadProvider } from "./Download"
import DashboardStar from "./DashboardStar"
import DashboardFooter from "./DashboardFooter"
function Dashboard() {
  return (
    <div >
          <DashboardNav/>
          <div className="grid ">
          <DashboardAside/>
          </div>
          <div className="max-w-[90px] w-full mx-78 px-2">
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