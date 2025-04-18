import React from "react";
import BannerHome from "./Banner/BannerHome";
import MainLayout from "@/Layouts/MainLayout";
import HomeAbout from "./HomeAbout/HomeAbout";
import Tech from "./Tech/Tech";
import HomeClient from "./HomeClient/HomeClient";
import HomeTeam from "./HomeTeam/HomeTeam";
import HomeBlog from "./HomeBlog/HomeBlog";
import TextImage from "@/Components/MyComponents/TextImage";
const baseUrl = import.meta.env.VITE_APP_BASE_URL;

const Home = ({ stats, profileData }) => {
    console.log(profileData);

    return (
        <>
            <MainLayout>
                <BannerHome stats={stats} />
                <HomeAbout baseUrl={baseUrl} stats={stats} />
                <div className="px-4">
                    <TextImage
                        title="Custom Software Development"
                        description={`Custom Software Development focuses on creating tailored solutions designed specifically for your business needs. It enhances efficiency, streamlines processes, and offers flexibility to scale as your business grows. With personalized features and seamless integration, it ensures optimal performance and user satisfaction.`}
                        buttonText="Explore More"
                        imageUrl={`reactAssets/images/HomeBoxAbout/csd2.png`}
                        border={`border`}
                        link={`/service/12`}
                    />

                    <TextImage
                        title="Mobile Apps Development"
                        description={`Crafting intuitive and feature-rich mobile applications that enhance user engagement and drive business growth. We focus on creating seamless, user-friendly experiences across iOS and Android platforms, tailored to meet your specific goals. From concept to deployment, our apps are designed for performance, scalability, and long-term success, helping your business stay ahead in the mobile-first world.`}
                        buttonText="Exlpore More"
                        imageUrl={`reactAssets/images/HomeBoxAbout/mobile1.png`}
                        reverse={true}
                        border={`border`}
                        link={`/service/4`}
                    />
                    <TextImage
                        title="UI/UX Development"
                        description={`Crafting intuitive and feature-rich mobile applications that enhance user engagement and drive business growth. We focus on creating seamless, user-friendly experiences across iOS and Android platforms, tailored to meet your specific goals. From concept to deployment, our apps are designed for performance, scalability, and long-term success, helping your business stay ahead in the mobile-first world.`}
                        buttonText="Exlpore More"
                        imageUrl={`reactAssets/images/HomeBoxAbout/ux1.png`}
                        border={`border`}
                        link={`/service/4`}
                    />
                    <TextImage
                        title="Web Application Dev"
                        description={`Innovation and evolution drive the web application landscape, and we are at the cutting edge. Our web development team embraces change, continuously integrating new features and technologies as the web ecosystem expands. We understand how web platforms, browsers, and frameworks work together, and we know how to leverage their strengths to create robust, scalable solutions that span the full spectrum of modern web applications.`}
                        buttonText="Exlpore More"
                        imageUrl={`reactAssets/images/HomeBoxAbout/web1.png`}
                        reverse={true}
                        border={`border`}
                        link={`/service/1`}
                    />
                </div>
                <Tech baseUrl={baseUrl} />
                <HomeTeam profileData={profileData} />
                <HomeBlog />
                <HomeClient />
            </MainLayout>
        </>
    );
};

export default Home;
