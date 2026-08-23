import React from 'react'
import { useState, useContext, createContext } from 'react'
const DownloadContext = createContext()
 export function DownloadProvider({children}) {
  const data = [
  { id: 1, downloadCount: 0 },
  { id: 2, downloadCount: 0 },
  { id: 3, downloadCount: 0 },
  ]
  const [download, setDownloaded] = useState()

 function handleDownload(id) {
    setDownloaded(prevdownloads =>
      prevdownloads.map(download =>
        download.id === id
          ? { ...download, downloadCount: download.downloadCount + 1 }
          : download
      )
    );
  }
  return (
    <div>
    <DownloadContext.Provider value={{download, handleDownload}}>
               {children}
           </DownloadContext.Provider>  
    </div>
  )
}

  export function useDownload() {
  return useContext(DownloadContext)
}