import React from 'react'
import { useDownload } from './Download'
import { data } from 'react-router'

function DashboardStatistics({id}) {
    
     const { download, handleDownload } = useDownload()
     
  return (
    <section className="mt-24 w-full min-w-0 bg-[#F8FAFB] px-4 py-8 sm:px-8 md:mt-0 md:px-12">
      <div className="grid min-w-0 grid-cols-1 gap-8 xl:grid-cols-2">
        <div className="min-w-0 rounded-2xl border border-gray-200 bg-white px-4 py-4 sm:px-6">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3 p-2 sm:p-4">
            <h3 className="font-[Plus Jakarta Sans] text-[20px] font-bold text-[#4A5568]">
              Last 7 Days
            </h3>
            <span className="rounded-full bg-[#2EC5BC33]/30 px-3 py-2">
              <p className="font-[Plus Jakarta Sans] text-[11px] font-bold text-[#2EC5BC]">
                Live Activity
              </p>
            </span>
          </div>

          <div className="grid min-w-0 grid-cols-2 gap-3 sm:gap-4">
            <div className="min-w-0 rounded-3xl bg-[#F2F4F5] p-4 sm:p-6">
              <h3 className="text-[32px] font-extrabold text-[#2EC5BC]">2</h3>
              <p className="font-[Plus Jakarta Sans] text-[14px] text-[#6B7280]">
                Total Purchases
              </p>
            </div>
            <div className="min-w-0 rounded-3xl bg-[#F2F4F5] p-4 sm:p-6">
              <h3 className="text-[32px] font-extrabold text-[#2EC5BC]">5</h3>
              <p className="font-[Plus Jakarta Sans] text-[14px] text-[#6B7280]">
                Downloads
              </p>
            </div>
          </div>
        </div>

        <div className="min-w-0 rounded-2xl border border-gray-200 bg-white px-4 py-4 sm:px-6">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3 p-2 sm:p-4">
            <h3 className="font-[Plus Jakarta Sans] text-[20px] font-bold text-[#4A5568]">
              Last 28 Days
            </h3>
            <span className="rounded-full bg-[#91B0FA33]/30 px-3 py-2">
              <p className="font-[Plus Jakarta Sans] text-[11px] font-bold text-[#002F71]">
                Monthly Recap
              </p>
            </span>
          </div>

          <div className="grid min-w-0 grid-cols-2 gap-3 sm:gap-4">
            <div className="min-w-0 rounded-3xl bg-[#F2F4F5] p-4 sm:p-6">
              <h3 className="text-[32px] font-extrabold text-[#002F71]">8</h3>
              <p className="font-[Plus Jakarta Sans] text-[14px] text-[#6B7280]">
                Total Purchases
              </p>
            </div>
            <div className="min-w-0 rounded-3xl bg-[#F2F4F5] p-4 sm:p-6">
              <h3 className="text-[32px] font-extrabold text-[#002F71]">12</h3>
              <p className="font-[Plus Jakarta Sans] text-[14px] text-[#6B7280]">
                Downloads
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashboardStatistics;