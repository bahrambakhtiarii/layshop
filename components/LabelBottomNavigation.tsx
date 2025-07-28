"use client";
import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import MobileMenu from './navigation/MobileMenu';

export default function LabelBottomNavigation() {
    const [value, setValue] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();

    
    useEffect(() => {
        switch (value){
            case "home":
                router.push("/");
                break;
            case "menu":
                setIsMenuOpen(true);
                break;
            case "cart":
                router.push("/testlink");
                break;
            case "profile":
                router.push("/testlink");
                break;
            default:
                break;
        }
    }, [value, router]);


  return (
    <div className='lg:hidden'>
        {isMenuOpen && value === "menu" &&  (
            <div className="fixed top-0 left-0 w-full h-full bg-white z-50">
                <MobileMenu />
            </div>
        )}
        <BottomNavigation 
            sx={{ color: "#2568CC", position: "fixed", bottom: 0, width: "100%", zIndex: 60 }}
            value={value} 
            onChange={(event, newValue) => setValue(newValue)}
        >


            <BottomNavigationAction 
                sx={{
                    color: "#394867",
                    '&.Mui-selected': {
                        color: '#212A3E',
                    }
                }}
                value="home" 
                icon={<HomeOutlinedIcon />} 
            />

            <BottomNavigationAction
                sx={{
                    color: "#394867",
                    '&.Mui-selected': {
                        color: '#212A3E',
                    }
                }}
                value="menu"
                icon={<WidgetsOutlinedIcon />}
            />
            
        <BottomNavigationAction
            sx={{
                color: "#394867",
                '&.Mui-selected': {
                    color: '#212A3E',
                }
            }}
            value="cart"
            icon={<ShoppingCartOutlinedIcon />}
        />

        <BottomNavigationAction
            value="profile"
            sx={{
                color: "#394867",
                '&.Mui-selected': {
                    color: '#212A3E',
                }
            }}

            icon={<Person2OutlinedIcon />}
        />  
        </BottomNavigation>
    </div>
    
  );
}
