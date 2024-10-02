"use client";
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import LoginIcon from '@mui/icons-material/Login'; // Icon for Sign In
import PersonAddIcon from '@mui/icons-material/PersonAdd'; // Icon for Register
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function BottomNavBar() {
  const router = useRouter();
  const pathname = usePathname()
  const [value, setValue] = useState(0);

  // Set the selected tab based on the current route
  useEffect(() => {
    switch (pathname) {
      case '/':
        setValue(0);
        break;
      case '/profil':
        setValue(1);
        break;
      case '/pridat':
        setValue(2);
        break;
      case '/auth/prihlasit':
        setValue(3);
        break;
      case '/auth/registrovat':
        setValue(4);
        break;
      default:
        setValue(-1);
        break;
    }
  }, [pathname]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);

    // Navigate to the corresponding route
    switch (newValue) {
      case 0:
        router.push('/');
        break;
      case 1:
        router.push('/profil');
        break;
      case 2:
        router.push('/pridat');
        break;
      case 3:
        router.push('/auth/prihlasit');
        break;
      case 4:
        router.push('/auth/registrovat');
        break;
      default:
        break;
    }
  };

  return (
    <Paper
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        boxShadow: '0px -2px 10px rgba(0, 0, 0, 0.1)', // Similar to elevation={3} in MUI
      }}
    >
      <BottomNavigation
        value={value}
        onChange={handleChange}
        style={{ display: 'flex', justifyContent: 'space-around' }}
      >
        <BottomNavigationAction
          label="Domov"
          icon={<HomeIcon />}
          style={{ minWidth: 'auto' }} // Remove minWidth to prevent stretching
        />
        <BottomNavigationAction
          label="Profily"
          icon={<AccountCircleIcon />}
          style={{ minWidth: 'auto' }}
        />
        <BottomNavigationAction
          label="Príspevky"
          icon={<AddCircleOutlineIcon />}
          style={{ minWidth: 'auto' }}
        />
        <BottomNavigationAction
          label="Prihlásenie"
          icon={<LoginIcon />}
          style={{ minWidth: 'auto' }}
        />
        <BottomNavigationAction
          label="Registrácia"
          icon={<PersonAddIcon />}
          style={{ minWidth: 'auto' }}
        />
      </BottomNavigation>
    </Paper>
  );
}
