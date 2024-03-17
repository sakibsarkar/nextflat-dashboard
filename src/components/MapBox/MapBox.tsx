import Image from "next/image";

const MapBox = () => {
    return (
        <div className="w-full h-full">
            <Image className="w-full h-full object-cover" alt="map" height={872} width={539} src={"/images/Map.png"} />
        </div>
    );
};

export default MapBox;