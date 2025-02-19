import React from "react";
import Nav from "./Nav";

function About() {
    return (

        <section className='h-screen  lg:h-screen lg:w-screen bg-[#bab6aa] lg:px-12 lg:py-4 font-main text-[#151724]  lg:flex lg:flex-col'>
            <Nav text_display_delay="0ms" h="6%" lg_h="10%" loaded={true} animate="" button_one='Home' href_one='/' button_two='Projects' href_two='https://github.com/Tojo07' />
            <div className="h-[90%] min-h-[100vh] lg:min-h-[88%] lg:h-[88%] w-full lg:flex overflow-scroll lg:overflow-hidden">
                <div className="h-full w-[64%]">
                    <h1 className="text-6xl text-center font-main font-extrabold pb-10">I am Tojo H. Tsimalay</h1>
                    <p className="text-md font-main font-semibold pb-6">I was born and raised in the isnald-country of Madagascar. I am a software engineer with broad range of interest from low level programming to Natural Language Processing, and everything in between. I am currently based in Berea, KY. I am pursuing a degree in Computer and Information Science at Berea College, expecting to graduate in May 2025.</p>

                    <p className="text-md font-main font-semibold pb-6">During summer of 2024, I interned at Meta as a Software Engineer Intern. I worked with the FB Play team, where I built a tool that allows game developers to A/B test different versions of their games. Upon graduating from Berea College, I will be returning to Meta as a full-time Software Engineer.</p>

                    <p className="text-md font-main font-bold pb-6">Over the past three years, I have been a Teaching Assistant for Berea College's Computer Science department. I am in charge of an average of 40 students per semester. I have assisted professors in various classes such as data structures, intro to software design and implementation, compiler design, and programming languages. My main tasks inclued conduting lab, one-on-one tutoring session, assignment grading and assistance during in-class assignments.</p>

                    <p className="text-md font-main font-bold pb-10">Over the corse of my career, I have conducted and led various researches including an Natural Language Processing project at Vanderbilt University, where I automated processing, cleaning, and analysis of large textual data for an Engilsh professor; and a summer research in Berea College where I, in a team of three, built a webapp that allows processors to seamlessly divide students into groups based on preset criteria.</p>
                </div>
                <div className="h-full w-[36%] flex justify-end">
                    <div className={`h-[90%] rounded-lg w-[80%] bg-[url("../public/IMG_5300.jpg")] bg-cover bg-no-repeat bg-center bg-clip-border`}></div>
                </div>

            </div>
        </section>

    );
}

export default About;