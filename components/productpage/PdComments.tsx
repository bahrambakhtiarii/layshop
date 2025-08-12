import React from 'react'

const PdComments = () => {
  return (
    <div className="overflow-x-auto m-15 pt-5 border-t-2 border-[rgba(155,164,180,0.3)]">
        <h3 className='text-sm md:text-[16px] font-semibold mb-5 border-b-2 border-[#14274E] w-fit pb-3'>
        نظرات کاربران
        </h3>

        <div>
            <h4 className='mb-5'>اولین نظر را شما بنویسید!</h4>
            <div>
                <div className='felx'>
                    <input type="text" className='border border-slate-900 m-2' />
                    <input type="email" className='border border-slate-900 m-2'/>
                </div>
                <textarea name="" id="" className='border border-slate-900 mt-10 p-20'>

                </textarea>
            </div>
        </div>
      
    </div>
  )
}

export default PdComments
