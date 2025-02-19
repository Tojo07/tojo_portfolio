import React from "react";
import Nav from "./Nav";

function About() {
    return (

        <section className='h-screen  lg:h-screen lg:w-screen bg-[#bab6aa] lg:px-12 lg:py-4 font-main  lg:flex lg:flex-col'>
            <Nav text_display_delay="0ms" h="6%" lg_h="10%" loaded={true} animate="" />
            <div className="h-[90%] min-h-[100vh] lg:min-h-[88%] lg:h-[88%] w-full lg:flex overflow-scroll lg:overflow-hidden">
                <div className="h-full w-[64%]">
                    <h1 className="text-6xl text-center font-main font-extrabold">I am Tojo Tsimalay</h1>
                </div>
                <div className="h-full w-[36%] flex justify-end">
                    <div className={`h-[90%] rounded-lg w-[80%] bg-[url("../public/IMG_5300.jpg")] bg-cover bg-no-repeat bg-center bg-clip-border`}></div>
                </div>

            </div>
        </section>

    );
}

export default About;