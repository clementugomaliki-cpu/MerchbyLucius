
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
    <>
          <DashboardNav/>
   <div className="flex min-h-screen w-full">

          <DashboardAside/>
          <div className="flex-1 min-w-0 overflow-hidden">
             <DashboardHeader/>
             <DownloadProvider>
            <DashboardStatistics/> 
            <DasshboardCard/> 
            <DashboardStar/> 
            <DashboardFooter/>
            </DownloadProvider> 
          </div>
   </div>
        </>

  )
}

export default Dashboard