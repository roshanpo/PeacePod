import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { deleteMusic, getAllMusic } from "@/api/music"
import { useMutation, useQuery } from "@tanstack/react-query"
import React from "react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

import UpdateMusic from "./UpdateMusic"

const ManageMusic = () => {
  const { toast } = useToast()
  const { data: allMusic, refetch } = useQuery({
    queryKey: ["allmusic"],
    queryFn: async () => getAllMusic(),
  })

  const mutation = useMutation({
    mutationFn: async (music_id) => deleteMusic(music_id),
    onSuccess: () => {
      toast({ title: "Music deleted successfully." })
      refetch()
    },
  })

  const handleDelete = (music_id) => {
    mutation.mutate(music_id)
  }

  
  return (
    
    <div className="lg:ml-52 mx-4 mt-4 mb-4">
      <div className="px-8">
        <table className="table-auto w-[700px] border-collapse border-slate-500 ">
          <thead className="border-2">
            <tr>
              <th className="px-4 py-2">Music</th>
              <th className="px-4 py-2">Delete</th>
            </tr>
          </thead>
          <tbody className="">
            {allMusic?.map((music, index) => (
              <tr key={index} className="">
                <td className="border px-4 py-2">{music.title}</td>
                
                <td className="border px-4 py-2 text-center">
                  <Button onClick={() => handleDelete(music.id)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManageMusic
