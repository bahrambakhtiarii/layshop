'use client';
import {useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import DesktopMegaMenu from './DesktopMegaMenu';
import { motion, AnimatePresence } from "framer-motion";



const DesktopMenu = () => {

    const [isHover, setIsHover] = useState(false);

    return (

    

        <nav className='hidden lg:flex items-center gap-10 bg-white h-17 p-4'>
            <div
                className='relative'
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)} 
            >
                <div className='flex items-center gap-2 w-[215px] border-l-2'>
                    <motion.div
                        animate={{ rotate: isHover ? 90 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <MenuIcon 
                            sx={{ color: "#212A3E" }}
                            fontSize="large"
                            
                        />
                    </motion.div>
                    <h3 
                        className='text-[20px] font-bold cursor-pointer pr-2 hover:border-b-3 border-[#14274E]'
                        
                    >
                        دسته بندی کالا ها
                    </h3>
                    <AnimatePresence>
                        {isHover && (
                            <motion.div 
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className='absolute top-full right-0 z-50'
                            >
                                <DesktopMegaMenu />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>            

            <div className='flex items-center gap-7 font-medium text-[19px] '>
                <a href='http://localhost:3000/testlink' className='hover:border-b-3 border-[#14274E] cursor-pointer'>محصولات تخفیف خورده</a>
                <a href='http://localhost:3000/testlink' className='hover:border-b-3 border-[#14274E] cursor-pointer'>پیگیری سفارش</a>
            </div>
        </nav>
    )
}

export default DesktopMenu