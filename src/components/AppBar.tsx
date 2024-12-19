'use client';
import { AppBar as MuiAppBar, Toolbar, Container, Box, Button } from '@mui/material';
import Link from 'next/link';

export function AppBar() {
  const menuItems = [
    { label: 'SHOP', path: '/shop' },
    { label: 'RECIPES', path: '/recipes' },
    { label: 'LEARN', path: '/learn' },
    { label: 'ABOUT', path: '/about' },
    { label: 'BLOG', path: '/blog' },
  ];

  const subMenuItems = [
    { label: 'CATEGORIES', path: '/categories' },
    { label: 'COLLECTIONS', path: '/collections' },
    { label: 'RESOURCES', path: '/resources' },
  ];

  return (
    <MuiAppBar position="static" color="default" elevation={0}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
          <Link href="/">
            <Box component="img" 
                 src="/logo.png" 
                 alt="Logo" 
                 sx={{ height: 50, mr: 4 }} />
          </Link>
          <Box sx={{ display: 'flex', gap: 2 }}>
            {menuItems.map((item) => (
              <Link key={item.label} href={item.path}>
                <Button color="inherit">{item.label}</Button>
              </Link>
            ))}
          </Box>
        </Box>
      </Toolbar>
      <Toolbar sx={{ background: '#f5f5f5' }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          {subMenuItems.map((item) => (
            <Link key={item.label} href={item.path}>
              <Button color="inherit" size="small">{item.label}</Button>
            </Link>
          ))}
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
}