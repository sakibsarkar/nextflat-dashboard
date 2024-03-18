"use client";
import { useContext } from "react";
import { StateContext } from "@/provider/ContextProvieder/ContextProvieder";

const MapBox = () => {

    const { showBar } = useContext(StateContext)

    return (
        <div className={`${showBar ? "xl:min-w-[539px] xl:max-w-[539px]" : "xl:min-w-[656px] xl:max-w-[656px]"} duration-[0.3s] w-full min-h-[250px] lg:h-full`}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18410.51623659703!2d90.40782645169578!3d23.70779572256454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9a8bfffffff%3A0xa45f3e221373a14b!2sSadarghat%20Launch%20Terminal!5e0!3m2!1sen!2sbd!4v1710737867885!5m2!1sen!2sbd"
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