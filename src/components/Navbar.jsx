import { useState } from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

function Navbar() {
  const [active, setActive] = useState("Home");
  return (
    <Stack
      direction="row"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        px: "20px",
        justifyContent: "none",
      }}>
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{
            width: "48px",
            height: "48px",
            margin: "0 20px",
          }}
        />
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontFamily="Alegreya"
        fontSize="24px"
        alignItems="flex-end">
        <Link
          to="/"
          className={`${active === "Home" ? "active" : ""}`}
          onClick={() => setActive("Home")}
          style={{
            textDecoration: "none",
            color: "#3A1212",
          }}>
          Home
        </Link>
        <a
          className={`${active === "Exercises" ? "active" : ""}`}
          onClick={() => setActive("Exercises")}
          href="#exercises"
          style={{
            textDecoration: "none",
            color: "#3A1212",
          }}>
          Exercise
        </a>
      </Stack>
    </Stack>
  );
}

export default Navbar;
