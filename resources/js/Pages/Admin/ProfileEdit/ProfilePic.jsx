import React, { useState } from "react";
import Cropper from "react-easy-crop";
import { FaPlus, FaSave } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProfilePic = ({ fullName, getInitials, profilePhoto, onFileChange }) => {
    const [imageToCrop, setImageToCrop] = useState(null);
    const [croppedImage, setCroppedImage] = useState(null);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    const [cropping, setCropping] = useState(false);
    const [previewUrl, setPreviewUrl] = useState("");

    const base64ToFile = (base64, filename = "profile.jpg") => {
        const arr = base64.split(",");
        const mime = arr[0].match(/:(.*?);/)[1];
        const binary = atob(arr[1]);
        const uArray = new Uint8Array(binary.length);
        for (let i = 0; i < binary.length; i++) {
            uArray[i] = binary.charCodeAt(i);
        }
        return new File([uArray], filename, { type: mime });
    };

    const getProfilePhotoUrl = (photoPath) => {
        if (!photoPath) return "/default-avatar.png";
        if (photoPath instanceof File) return URL.createObjectURL(photoPath);
        if (photoPath.startsWith('http')) return photoPath;
        return `/reactAssets/images/ProfileImages/${photoPath}`;
    };

    const handleProfilePhotoUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 3 * 1024 * 1024) {
                toast.error("Profile photo must be less than 3MB.");
                return;
            }

            const reader = new FileReader();
            reader.onload = () => {
                setImageToCrop(reader.result);
                setCropping(true);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleCropComplete = async () => {
        if (!croppedAreaPixels) {
            toast.error("Failed to load image properly for cropping.");
            return;
        }

        try {
            const cropped = await getCroppedImage(imageToCrop, croppedAreaPixels);
            setCroppedImage(cropped);
            setCropping(false);

            const croppedFile = base64ToFile(cropped);
            setPreviewUrl(URL.createObjectURL(croppedFile));
            onFileChange(croppedFile);

            toast.success("Image cropped successfully!");
        } catch (error) {
            toast.error("Something went wrong while cropping.");
        }
    };

    const getCroppedImage = (imageSrc, crop) => {
        return new Promise((resolve, reject) => {
            const image = new Image();
            image.src = imageSrc;
            image.onload = () => {
                const canvas = document.createElement("canvas");
                canvas.width = crop.width;
                canvas.height = crop.height;
                const ctx = canvas.getContext("2d");

                ctx.drawImage(
                    image,
                    crop.x,
                    crop.y,
                    crop.width,
                    crop.height,
                    0,
                    0,
                    crop.width,
                    crop.height
                );

                resolve(canvas.toDataURL("image/jpeg"));
            };
            image.onerror = reject;
        });
    };

    return (
        <div className="relative flex-shrink-0">
            <div className="relative">
                <input
                    type="file"
                    id="profilePhotoInput"
                    accept="image/*"
                    className="hidden"
                    onChange={handleProfilePhotoUpload}
                />

                {cropping ? (
                    <div className="crop-container w-56 h-56 border-2 border-blue-500 rounded-lg shadow-lg overflow-hidden">
                        <Cropper
                            image={imageToCrop}
                            crop={crop}
                            zoom={zoom}
                            aspect={1}
                            onCropChange={setCrop}
                            onZoomChange={setZoom}
                            onCropComplete={(_, areaPixels) => setCroppedAreaPixels(areaPixels)}
                        />
                    </div>
                ) : previewUrl || profilePhoto ? (
                    <img
                        className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-blue-500 cursor-pointer transform transition-all hover:scale-105 hover:shadow-lg"
                        src={previewUrl || getProfilePhotoUrl(profilePhoto)}
                        alt="Profile"
                        onClick={() => document.getElementById("profilePhotoInput").click()}
                    />
                ) : (
                    <div
                        className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-blue-500 flex items-center justify-center bg-blue-50 text-blue-600 text-5xl lg:text-7xl font-bold cursor-pointer transform transition-all hover:scale-105 hover:shadow-lg"
                        onClick={() => document.getElementById("profilePhotoInput").click()}
                    >
                        {fullName ? getInitials(fullName) : "?"}
                    </div>
                )}

                {!cropping && (
                    <div
                        className="absolute bottom-3 right-7 bg-blue-600 text-white rounded-full p-2 cursor-pointer transform transition-all hover:scale-110 hover:shadow-lg"
                        style={{ transform: "translate(50%, 50%)" }}
                        onClick={() => document.getElementById("profilePhotoInput").click()}
                    >
                        <FaPlus size={18} />
                    </div>
                )}
            </div>

            {cropping && (
                <div className="flex justify-center mt-6">
                    <button
                        type="button"
                        className="flex items-center gap-2 bg-blue-500 text-white px-8 py-3 rounded-lg shadow-md transform transition-all hover:shadow-xl hover:bg-blue-600"
                        onClick={handleCropComplete}
                    >
                        <span>Crop Photo</span>
                        <FaSave size={20} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProfilePic;