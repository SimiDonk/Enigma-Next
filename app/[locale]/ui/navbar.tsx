"use client";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import InfoIcon from "@mui/icons-material/Info";
import RedeemIcon from "@mui/icons-material/Redeem";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { useState } from "react";
import Link from "next/link";

const navItems = [
  { name: "Home", icon: HomeIcon, href: "/" },
  { name: "Rooms", icon: MeetingRoomIcon, href: "/#rooms" },
  { name: "Prices", icon: LocalAtmIcon, href: "/#prices" },
  { name: "Info", icon: InfoIcon, href: "/#info" },
  { name: "Vouchers", icon: RedeemIcon, href: "/#vouchers" },
  { name: "Contact", icon: ContactMailIcon, href: "/#contact" },
];

export default function NavBar() {
  return (
    <nav className="hidden md:flex flex-row h-full">
      {navItems.map((item) => (
        <Link
          href={item.href}
          key={item.name}
          className="h-full content-center px-8 text-sm font-medium hover:bg-red-900"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}

export function ToggleDrawer() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <div className="flex flex-col">
      <div className="bg-amber-950 w-full h-20 box-border text-center">
        Enigma
      </div>
      <Box
        sx={{ width: 300 }}
        role="presentation"
        onClick={toggleDrawer(false)}
      >
        <List>
          {navItems.map((item) => (
            <ListItem key={item.name} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <item.icon />
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
      <div className="grow">Telefonszám</div>
      <div>Cím</div>
    </div>
  );

  return (
    <div className="block md:hidden">
      <button onClick={() => setOpen(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
        {DrawerList}
      </Drawer>
    </div>
  );
}
