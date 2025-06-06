import MainLayout from "@/Layouts/MainLayout";
import Gallery from "./Gallery/Gallery";
import Leader from "./Leader/Leader";
import Management from "./Management/Management";
import Mission from "./Mission/Mission";
import Vision from "./Vision/Vision";
import DynamicBanner from "@/Components/MyComponents/DynamicBanner";
const About = ({ profileData, managementData, missionData }) => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
    return (
        <>
            <MainLayout>
                <DynamicBanner
                    title="About Us"
                    breadcrumb="Home / About Us"
                />
                <div className="max-w-full mt-20 lg:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto md:px-8 lg:px-12">
                    <Mission missionData={missionData} />
                    <Vision
                        title="Become the most preferred technology"
                        description={`Become the most preferred technology integrator and service provider with \n multiplatform, vendor independent information and communication \n technology solutions for both local and global market.`}
                        imageUrl={`reactAssets/images/AboutBoxAbout/2.png`}
                    />
                    <Vision
                        title="To develop sustainable Technology"
                        description={`To develop a sustainable information Technology infra. & design the most \n Scalable IT solutions enabling Clients to reach their business goals.`}
                        imageUrl={`reactAssets/images/AboutBoxAbout/1.png`}
                        reverse={true}
                        buttonTrue={false}
                    />
                    <Leader profiles={profileData} />
                    <Gallery />
                    <Management managementData={managementData} />
                </div>
            </MainLayout>
        </>
    );
};

export default About;
