import { useState } from "react";
import PagesHeader from "./Components/PagesHeader";
import Sidebar from "./Components/Sidebar";
import avatar from "./images/User Avatar.png";
import { ImPencil } from "react-icons/im";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineSecurity, MdOutlineLock, MdOutlineScreenLockPortrait, MdOutlineCreditCard, MdOutlineMoreVert, MdAddCircleOutline } from "react-icons/md";

export default function Settings() {
  const [modal, setModal] = useState(false);
    
  return (
    <div>
      <PagesHeader/>
      <div className="bg-[#F8FAFB] flex gap-6">
        <Sidebar/>
        <div className="flex-1 min-h-screen mt-24 md:ml-68 px-4 sm:px-8 md:px-12 py-8">
          <h2 className="font-extrabold text-2xl text-[#4A5568]">Account Settings</h2>
          <p className="text-base/6 text-[#6B7280]">Manage your profile, security, and preferences.</p>
          
          
          <div className="bg-white p-8 gap-6 mt-6 sm:mt-10 rounded-xl">
            <div className="md:flex items-center justify-between space-y-2 md:space-y-0 mb-6">
              <div className="flex  gap-2 text-[#002F71]">
                <FaRegUser/>
                <p className="font-bold text-base ">Profile Information</p>
              </div>
              <button className="px-6 py-2 text-white bg-[#2EC5BC] rounded-full text-base font-bold">Save Changes</button>
            </div>
              <div className="md:flex gap-6">
                <div className="relative flex flex-col items-start md:items-center gap-2">
                  <img src={avatar} alt="User profile photo" />
                  <div className="h-[30.5px] w-[26.5px] rounded-full py-3 px-2 bg-[#2EC5BC] flex items-center absolute translate-y-27 translate-x-28 md:translate-x-14"><ImPencil/></div>
                <button className="text-base font-[400] text-[#6B7280] cursor-pointer">Change Avatar</button>
                </div>
              
              <form className="flex-1 flex-col">
                <div className="md:flex flex-col gap-8">
                <div className="grid lg:grid-cols-2 gap-6 md:gap-4 my-8 md:my-0">
                  <label htmlFor="name">FULL NAME
                    <input type="text" name="name" id="name" className="block bg-[#F2F4F5] rounded-xl px-4 py-3 w-full outline-none" />
                  </label>
                  <label htmlFor="name">EMAIL ADDRESS
                    <input type="email" name="name" id="name" className="block bg-[#F2F4F5] rounded-xl px-4 py-3 w-full outline-none" />
                  </label>
                </div>
                <label htmlFor="bio">BIO
                  <textarea  name="bio" id="bio" className="block bg-[#F2F4F5] rounded-xl px-4 py-3 w-full resize-none h-[96px] outline-none" />
                </label>
                </div>
              </form>
          </div>
         </div> 
        
        
        <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl p-8 gap-6 mt-10">
          <div className="flex flex-col gap-2 text-[#002F71]">
            <div className="flex items-center gap-2 font-bold text-[#002F71] text-base">
               <MdOutlineSecurity className="text-xl"/>
              <p>Account Security</p>
            </div>
            <div className="rounded-xl bg-[#F2F4F5] flex justify-between p-4">
                <div className="flex items-center gap-3 font-bold text-base text-[#4A5568]">
                <MdOutlineLock className="text-xl"/>
                  <div className="flex flex-col">  
                    <span className="">Password</span>
                    <span className="font-[400] text-[#191C1D]">{`Last changed ${3} months ago`}</span>
                  </div>
                </div>
                <button className="text-[#2EC5BC] cursor-pointer font-bold text-base">Change</button>
              
            </div>

             <div className="rounded-xl bg-[#F2F4F5] flex justify-between p-4 mt-5">
                <div className="flex items-center gap-3 font-bold text-base text-[#4A5568]">
                <MdOutlineScreenLockPortrait className="text-xl"/>
                  <div className="flex flex-col">  
                    <span className="">2FA</span>
                    <span className="font-[400] text-[#191C1D]">{`Disabled`}</span>
                  </div>
                </div>
                <div className="flex items-center"><button className="text-[#2EC5BC] cursor-pointer px-4 py-1 font-bold text-base bg-[#2EC5BC]/20 rounded-full">Enable</button></div>
              
            </div>

          </div>
        </div>
        <div className="bg-white rounded-xl p-8 gap-6 flex flex-col mt-3 lg:mt-10">
          <div className="flex flex-col gap-2 text-[#002F71]">
            <div className="flex items-center gap-2 font-bold text-[#002F71] text-base">
               <MdOutlineCreditCard className="text-xl"/>
              <p>Saved Billing</p>
            </div>
            <div className="rounded-xl bg-white border border-[#BBC9C7]/50 flex justify-between items-center p-4">
                <div className="flex items-center gap-3 font-bold text-base text-[#4A5568]">
                <div className="text-[10px] text-[#191C1D] font-extrabold bg-[#F2F4F5] px-2 pt-[10px] pb-[6.5px]">VISA</div>
                  <div className="flex flex-col">  
                    <span className="">....4242</span>
                    <span className="font-[400] text-[#191C1D]">{`Expires ${"12/26"}`}</span>
                  </div>
                </div>
                <MdOutlineMoreVert className="cursor-pointer text-xl"/>
              
            </div>
                <button onClick={()=>setModal(!modal)}
                className="flex items-center gap-2 font-bold text-[#4A5568] cursor-pointer rounded-xl mt-5 border-3 border-[#BBC9C7]/50 justify-center bg-white p-4 w-full border-dashed">
                    <MdAddCircleOutline className="text-xl"/>
                    <span className="">Add Payment Method</span>
                </button>  
                {modal && (
                  <div className="flex fixed inset-0 bg-black/50 z-50 items-center justify-center" onClick={()=>setModal(false)}>
                    <div className="flex flex-col bg-white rounded-md px-6" onClick={(e)=>e.stopPropagation()}>
                      <h4 className="font-bold text-2xl text-[#002F71] py-8">Add Payment Method</h4>
                      <div className="flex flex-col gap-2">
                          <span className="text-[10px] text-[#3C4948] font-[400]">CARDHOLDER NAME</span>
                          <input type="text" className="px-4 pt-[13px] pb-[14px] bg-[#F2F4F5] rounded-md outline-none" />
                      </div>
                      <div className="flex flex-col gap-2 pt-6">
                          <span className="text-[10px] text-[#3C4948] font-[400]">CARD NUMBER</span>                          
                            <div className="px-4 pt-[13px] pb-[14px] bg-[#F2F4F5] rounded-md flex items-center gap-2">
                              <MdOutlineCreditCard className="text-xl"/>
                              <input placeholder="0000 0000 0000 0000" className="outline-none flex-1"/>
                            </div>   
                      </div>
                      <div className="grid grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2 pt-6">
                          <span className="text-[10px] text-[#3C4948] font-[400]">EXPIRY DATE</span>                          
                            <input className="px-4 pt-[13px] pb-[14px] bg-[#F2F4F5] rounded-md flex items-center gap-2 outline-none" placeholder="MM/YY"/>
                            
                      </div>
                      <div className="flex flex-col gap-2 pt-6">
                          <span className="text-[10px] text-[#3C4948] font-[400]">CVV</span>                          
                            <input className="px-4 pt-[13px] pb-[14px] bg-[#F2F4F5] rounded-md flex items-center gap-2 outline-none" placeholder="123"/>  
                      </div>
                      </div>
                      <div className="flex gap-2 text-[#3C4948] font-[400] pt-6 items-center">
                        <input type="checkbox" className="w-5 h-5 rounded-[4px] border border-[#6C7A78]" />
                        Set as default payment method
                      </div>
                      <button onClick={()=>setModal(!modal)} 
                        className="text-white font-bold py-2 px-4 rounded-full bg-[#2EC5BC] mt-6 cursor-pointer">Add Card</button>
                      <button onClick={()=>setModal(!modal)} className="my-6 font-bold text-[#3C4948] cursor-pointer">Cancel</button>
                    </div>
                  </div>
                )}            
          </div>

        </div>
        </div>



         <div className="bg-white rounded-xl p-8 gap-6 flex flex-col mt-10">
          <span className="font-bold text-[#002F71]">Notification Preferences</span>
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-0">
            <div className="flex gap-4 items-start max-w-[306px]">
              <input type="checkbox" className="border my-2"/>
              <div>
                <h6 className="font-bold text-[#4A5568]">New Arrivals</h6>
                <p className="font-[400] text-base/6 text-[#191C1D]">Be the first to know when we release new educational merch collections.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start max-w-[273px]">
              <input type="checkbox" className="border text-[#2EC5BC] my-2"/>
              <div>
                <h6 className="font-bold text-[#4A5568]">Partner Deals</h6>
                <p className="font-[400] text-base/6 text-[#191C1D]">Exclusive discounts from our trusted partners.</p>
              </div>
            </div>
          </div>
        </div>



      
      </div>
      
    </div>
    
    </div>
  )
}