import Image from "next/image";

const MapBox = () => {
    return (
        <div className="max-[539px] min-w-[539px] h-full">
            <Image className="w-full h-full object-cover" alt="map" height={872} width={539} src={"/images/Map.png"} />
        </div>
    );
};

export default MapBox;