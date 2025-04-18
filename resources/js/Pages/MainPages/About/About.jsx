import MainLayout from "@/Layouts/MainLayout";
import Gallery from "./Gallery/Gallery";
import Leader from "./Leader/Leader";
import Management from "./Management/Management";
import Mission from "./Mission/Mission";
import Vision from "./Vision/Vision";
import DynamicBanner from "@/Components/MyComponents/DynamicBanner";
import videoSrc from "@/../../public/reactAssets/videos/bluevideo.mp4";
const About = ({profileData}) => {
    const baseUrl = import.meta.env.VITE_APP_BASE_URL;

    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
    return (
        <>
            <MainLayout>
                <DynamicBanner
                    videoSrc={videoSrc}
                    title="About Us"
                    breadcrumb="Home / About Us"
                />
                <div className="max-w-full lg:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12">
                    <Mission />
                    <Vision
                        title="Become the most preferred technology"
                        description={`Become the most preferred technology integrator and service provider with \n multiplatform, vendor independent information and communication \n technology solutions for both local and global market.`}
                        imageUrl={`reactAssets/images/AboutBoxAbout/2.png`}
                    />
                    <Vision
                        title="To develop a sustainable information Technology"
                        description={`To develop a sustainable information Technology infra. & design the most \n Scalable IT solutions enabling Clients to reach their business goals.`}
                        imageUrl={`reactAssets/images/AboutBoxAbout/1.png`}
                        reverse={true}
                    />
                    <Leader profiles={profileData} />
                    <Gallery />
                    <Management />
                </div>
            </MainLayout>
        </>
    );
};

export default About;
