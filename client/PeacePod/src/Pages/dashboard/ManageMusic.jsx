import { getAllMusic } from "@/api/music"
import { FullPageLoader } from "@/components/ui/Loader"
// import { DataTable } from "@/components/musictable/data-table"
import { useQuery } from "@tanstack/react-query"
import React, { useState } from "react"
import { Suspense } from "react"
import { Button } from "@/components/ui/button"


const ManageMusic = () => {
  const { data: allMusic, refetch } = useQuery({
    queryKey: ["allmusic"],
    queryFn: async () => getAllMusic(),
  })
  
  const handleDelete = ()=>{
    
  }

  return (
    <div className="lg:ml-52 mx-4 mt-4 mb-4">
       <div className="px-8">
       <table className="table-auto w-[700px] border-collapse border-slate-500 ">
          <thead className="border-2">
            <tr>
              <th className="px-4 py-2">Music</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody className="">
             {
              allMusic?.map((music, index) => (
                <tr key={index} className="">
                  <td className="border px-4 py-2">{music}</td>
                  <td className="border px-4 py-2 text-center">
                    <Button onClick={handleDelete}>
                      Delete
                    </Button>
                  </td>
                </tr>
              ))
              }
          </tbody>
        </table>
    </div>
    </div>
  )
}

export default ManageMusic
