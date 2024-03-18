import Image from "next/image";

const MapBox = () => {
    return (
        <div className="max-[539px] min-w-[539px] h-full">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11136.220492516404!2d4.847375156466058!3d45.75004084415374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea741aa65ab7%3A0xc5394d689b99e3ab!2sSans%20Souci!5e0!3m2!1sen!2sbd!4v1710724945153!5m2!1sen!2sbd"
                style={{ border: "0" }}
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default MapBox;