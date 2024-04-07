import { deleteUser, getallUsers } from '@/api/login';
import { useToast } from '@/components/ui/use-toast';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import React from 'react'

const ManageUsers = () => {
  const {toast} = useToast();
  const { data: allUsers, refetch } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => getallUsers(),
  })
  const mutation = useMutation({
    mutationFn: async(music_id)=>deleteUser(music_id),
    onSuccess:()=>{
      toast({title:"User deleted successfully."})
      refetch();
    }
  })
  
  const handleDelete = (music_id)=>{
    mutation.mutate(music_id);
  }
  return (
    <div className="lg:ml-52 mx-4 mt-4 mb-4">
       <div className="px-8">
       <table className="table-auto w-[700px] border-collapse border-slate-500 ">
          <thead className="border-2">
            <tr>
              <th className="px-4 py-2">Username</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody className="">
          {allUsers?.map((user, index) => (
              // Add conditional check to exclude user with username 'roshan'
              user.username !== 'roshan' && (
                <tr key={index} className="">
                  <td className="border px-4 py-2">{user.username}</td>
                  <td className="border px-4 py-2">{user.email}</td>
                  <td className="border px-4 py-2 text-center">
                    <Button onClick={() => handleDelete(user.id)}>Delete</Button>
                  </td>
                </tr>
              )
            ))}
          </tbody>
        </table>
    </div>
    </div>
  )
}

export default ManageUsers