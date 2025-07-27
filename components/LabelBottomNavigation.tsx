"use client";
import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ color: "#2568CC" }} value={value} onChange={handleChange}>


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
  );
}
