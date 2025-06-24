"use client";

import NavBar, { ToggleDrawer } from "./navbar";
export const Logo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function Navigation() {
  // menu items -> Home, Rooms, Prices, Voucers, Contact

  return (
    <div className="sticky top-0 z-50 flex flex-row items-center justify-between px-4 h-16 bg-gray-800">
      <Logo />
      <NavBar />
      <ToggleDrawer />
      <button className="bg-amber-900 h-full px-8 cursor-pointer">ENG</button>
    </div>
  );
}
