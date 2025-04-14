import Footer from "@/Pages/Shared/Footer";
import Navbar from "@/Pages/Shared/Navbar";
import React, { useEffect } from "react";

const MainLayout = ({ children }) => {
    useEffect(() => {
        // Ensure no horizontal scrolling
        document.documentElement.style.overflowX = "hidden";
        document.body.style.overflowX = "hidden";
    
        return () => {
          document.documentElement.style.overflowX = "";
          document.body.style.overflowX = "";
        };
      }, []);
    return (
        <div>
            <Navbar />
            <div >
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;
