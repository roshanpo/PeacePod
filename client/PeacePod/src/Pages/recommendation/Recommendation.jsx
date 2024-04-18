import { useModalStates } from '@/Modal/useModalStore';
import { getCategoryMusic } from '@/api/music';
import RecommendedCard from '@/components/RecommendedCard';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react'

function Recommendation() {
  
  const sentiment = useModalStates((state)=>state.sentiment);
  const [recommendType, setRecommendType] = useState();
  console.log(sentiment);

  useEffect(() => {
    if(sentiment === 'positive'){
        setRecommendType('Happy')
    }
    else if(sentiment === 'negative'){
      setRecommendType('Calm')
    }
    else{
      setRecommendType('Instrumental')
    }
  }, [sentiment])
  

  const {data:recommended} = useQuery({
    queryKey: ["recommendedmusica",sentiment],
    queryFn: async()=>getCategoryMusic(recommendType)
  
  })

  return (
    <>
    <div className='lg:ml-56 text-center'>
      <h1 className='text-[20px] font-bold text-center my-4'>Recommended For you</h1>
      {/* <h2>{sentiment}</h2> */}
      <div className='grid grid-cols-4 gap-4 space-x-4 pace-y-4 mb-8'>
      {
        recommended?.slice(0,9).map((item)=>{
          if(!item){
            return null
          }
          return(
            <div key={item}>
              <RecommendedCard music_name={item} />
            </div>
          )
        })
      }
      </div>
    </div>
  </>
  )
}

export default Recommendation