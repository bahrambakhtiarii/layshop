import React from 'react'


type Feature = {
  id: number
  title: string;
  description: string;
};

type Props = {
  features: Feature;
}

const ImFeatures: React.FC<Props> = ({ features }) => {
  return (
    <div className='bg-[#DDE3EC] rounded-[10px] 
      w-[130px] min-h-[45px] md:w-[180px] md:min-h-[60px]
      text-sm
       my-1
    '>
        <div className='p-2.5'>
          <div className='text-[#394867] pb-2'>{features.title}</div>
          <div>{features.description}</div>
        </div>
    </div>
  )
}

export default ImFeatures
