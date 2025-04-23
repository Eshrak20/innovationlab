import DynamicBanner from "@/Components/MyComponents/DynamicBanner";
import videoSrc from "@/../../public/reactAssets/videos/bluevideo.mp4";
import Form from "./Form/Form";
import MainLayout from "@/Layouts/MainLayout";
import Visit from "./Visit/Visit";
import HeadLine2 from "@/Components/MyComponents/HeadLine2";

const Contact = ({ contactInfo }) => {
    const baseUrl = import.meta.env.VITE_APP_BASE_URL;

    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
    return (
        <>
            <MainLayout>
                <DynamicBanner
                    title={`Lets \n work Together`}
                    description={`Need a software ? Let us know or visit our office.`}
                    videoSrc={videoSrc}
                />
                <Visit contactInfo={contactInfo} />
                <div className="max-w-full lg:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto  md:py-10 2xl:py-20 lg:px-24 xl:px-28 2xl:px-20 gap-10 lg:gap-16 xl:gap-20 2xl:gap-32">
                    <HeadLine2 title="Message US" text="text-gray-900" />
                    <Form />
                </div>
            </MainLayout>
        </>
    );
};

export default Contact;
