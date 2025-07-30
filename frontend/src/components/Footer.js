import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";

const activeLinkStyle = {
  borderBottom: "3px solid white",
  textDecoration: "none",
  color: "white",
  fontFamily: "Poppins, sans-serif",
  fontSize: "16px",
};

const defaultLinkStyle = {
  textDecoration: "none",
  color: "white",
  fontFamily: "Poppins, sans-serif",
  fontSize: "16px",
  transition: "all 0.3s ease", // Smooth transition effect
  "&:hover": {
    color: "#e3f2fd",
    transform: "translateY(-2px)",
  },
};

const Footer = () => {
  const location = useLocation();

  const isLandingActive =
    location.pathname === "/" || location.pathname === "/landing";

  return (
    <Box
      className="fade-in-up"
      sx={{
        background: "linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)",
        padding: 2,
        textAlign: "center",
        marginTop: "auto",
        font: "inherit",
        transition: "all 0.3s ease",
        "&:hover": {
          background: "linear-gradient(135deg, #1565c0 0%, #1976d2 100%)",
        },
      }}
    >
      {/* Navigation Links */}
      <Box
        className="fade-in-up"
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 3,
          mb: 2,
          flexWrap: "wrap",
          animation: "fadeInUp 0.8s ease-out",
        }}
      >
        {[
          { to: "/home", label: "Home" },
          { to: "/how-to-use", label: "How to Use" },
          { to: "/documents", label: "Documents" },
          { to: "/profile", label: "Profile" },
          { to: "/login", label: "Login" },
          { to: "/register", label: "Register" },
          { to: "/", label: "Landing", isLanding: true },
          { to: "/privacy-policy", label: "Privacy Policy" },
          { to: "/terms-of-service", label: "Terms of Service" },
        ].map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            style={({ isActive }) =>
              (link.isLanding && isLandingActive) || isActive
                ? activeLinkStyle
                : defaultLinkStyle
            }
            className="nav-link"
          >
            <Typography
              sx={{
                "&:hover": {
                  transform: "scale(1.05)", // Increase size on hover
                },
                transition: "transform 0.2s ease",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              {link.label}
            </Typography>
          </NavLink>
        ))}
      </Box>

      {/* Social Media Icons */}
      <Box 
        className="fade-in-up"
        sx={{ 
          display: "flex", 
          justifyContent: "center", 
          gap: 2, 
          mb: 2,
          animation: "fadeInUp 0.8s ease-out 0.2s",
          animationFillMode: "both",
        }}
      >
        <IconButton
          component="a"
          href="https://github.com/Shlokkotade"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ 
            color: "white",
            transition: "all 0.3s ease",
            "&:hover": {
              color: "#e3f2fd",
              transform: "scale(1.2) translateY(-2px)",
              boxShadow: "0 4px 12px rgba(255, 255, 255, 0.3)",
            },
          }}
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/shlok-kotade-patil-487419288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ 
            color: "white",
            transition: "all 0.3s ease",
            "&:hover": {
              color: "#e3f2fd",
              transform: "scale(1.2) translateY(-2px)",
              boxShadow: "0 4px 12px rgba(255, 255, 255, 0.3)",
            },
          }}
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          component="a"
          href="shlokkotade07@gmail.com"
          sx={{ 
            color: "white",
            transition: "all 0.3s ease",
            "&:hover": {
              color: "#e3f2fd",
              transform: "scale(1.2) translateY(-2px)",
              boxShadow: "0 4px 12px rgba(255, 255, 255, 0.3)",
            },
          }}
        >
          <EmailIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://shlokkotade.github.io/Portfolio/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ 
            color: "white",
            transition: "all 0.3s ease",
            "&:hover": {
              color: "#e3f2fd",
              transform: "scale(1.2) translateY(-2px)",
              boxShadow: "0 4px 12px rgba(255, 255, 255, 0.3)",
            },
          }}
        >
          <LanguageIcon />
        </IconButton>
      </Box>

      {/* Footer Text */}
      <Typography
        variant="body2"
        className="fade-in-up"
        sx={{
          color: "white",
          fontFamily: "Poppins, sans-serif",
          font: "inherit",
          animation: "fadeInUp 0.8s ease-out 0.4s",
          animationFillMode: "both",
          transition: "all 0.3s ease",
          "&:hover": {
            color: "#e3f2fd",
            transform: "scale(1.05)",
          },
        }}
      >
        © {new Date().getFullYear()} DeepThinker. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
