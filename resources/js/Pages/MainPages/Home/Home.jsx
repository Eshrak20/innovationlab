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

const Home = ({ stats, profileData, blog, service }) => {
    return (
        <>
            <MainLayout>
                <BannerHome stats={stats} />
                <HomeAbout baseUrl={baseUrl} stats={stats} />
                <div className="">
                    {service?.map((item, index) => (
                        <TextImage
                            key={item.id}
                            title={item.title}
                            description={item.short_description}
                            imageUrl={`/storage/${item.image}`}
                            border={`border`}
                            reverse={index % 2 !== 0} // alternate layout
                            buttonText="Read More"
                            link={`/service/${item.id}`}
                        />
                    ))}
                </div>
                <Tech baseUrl={baseUrl} />
                <HomeTeam profileData={profileData} />
                <HomeBlog blog={blog} />
                <HomeClient />
            </MainLayout>
        </>
    );
};

export default Home;
