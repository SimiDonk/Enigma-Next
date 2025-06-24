"use client";

import LocationPinIcon from "@mui/icons-material/LocationPin";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneIcon from "@mui/icons-material/Phone";

export default function Header() {
  return (
    <header className="hidden md:flex flex-row justify-center gap-8 py-3 text-sm font-bold bg-black">
      <div>
        <PhoneIcon
          sx={{ color: "skyblue" }}
          fontSize="small"
          className="mx-1"
        />
        +36 20 559 8143
      </div>
      <div>
        <LocationPinIcon
          sx={{ color: "skyblue" }}
          fontSize="small"
          className="mx-1"
        />
        1134 Budapest, Csángó utca 13.
      </div>
      <div>
        <p className="flex-1">
          <AlternateEmailIcon
            sx={{ color: "skyblue" }}
            fontSize="small"
            className="mx-1"
          />{" "}
          info@szabadulosjatek.com
        </p>
      </div>
    </header>
  );
}
