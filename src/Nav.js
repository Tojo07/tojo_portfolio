import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Nav(props) {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const navigate = useNavigate();
    return (
        <div className={`h-[${props.h}] lg:h-[${props.lg_h}] w-full bg-[#5d5c5a] text-[#151724] font-normal lg:rounded-md lg:mb-4 flex justify-between ${props.animate}`}>
            <div className='h-full w-[30%] flex justify-start place-items-center pl-4 cursor-default'>
                <a href="/" className={`transition-opacity duration-1000 delay-[${props.text_display_delay}] ${props.loaded ? "opacity-100" : "opacity-0"
                    } ease-in-out font-normal lg:text-lg text-sm`}>Tojo <span className='font-semibold'>Tsimalay</span></a>
            </div>
            {640 >= window.innerWidth ? (
                <div className={`h-full w-[20%] flex justify-center place-items-center transition-opacity duration-1000 delay-[${props.text_display_delay}] ${props.loaded ? "opacity-100" : "opacity-0"
                    } ease-in-out text-lg font-normal`}>
                    {isNavOpen ? (
                        <div className="w-full min-h-full bg-[#5d5c5a] flex flex-col gap-y-2 text-sm z-50 pt-16">
                            <button onClick={() => {
                                setIsNavOpen(false);
                                navigate(`${props.href_one}`)
                            }} className='hover:text-[#2E3042] transition delay-200 ease-in-out'>{props.button_one}</button>
                            <button onClick={() => {
                                setIsNavOpen(false);
                                window.open(`${props.href_two}`, '_blank')
                            }} className='hover:text-[#2E3042] transition delay-200 ease-in-out'>{props.button_two}</button>
                            <button onClick={() => {
                                setIsNavOpen(false);
                                window.open('https://medium.com/@tsimalayheriniainatojo', '_blank')
                            }} className='hover:text-[#2E3042] transition delay-200 ease-in-out'>Blog</button>
                        </div>
                    ) :
                        <button className="w-[50%] h-[50%]" onClick={() => { setIsNavOpen(true) }}>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="2"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="#151724" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        </button>
                    }

                </div>
            )
                :
                <div className={`h-full w-[20%] flex justify-between px-4 transition-opacity duration-1000 delay-[${props.text_display_delay}] ${props.loaded ? "opacity-100" : "opacity-0"
                    } ease-in-out text-lg font-normal`}>
                    <button onClick={() => navigate(`${props.href_one}`)} className='hover:text-[#2E3042] transition delay-200 ease-in-out'>{props.button_one}</button>
                    <button onClick={() => window.open(`${props.href_two}`, '_blank')} className='hover:text-[#2E3042] transition delay-200 ease-in-out'>{props.button_two}</button>
                    <button onClick={() => window.open('https://medium.com/@tsimalayheriniainatojo', '_blank')} className='hover:text-[#2E3042] transition delay-200 ease-in-out'>Blog</button>
                </div>
            }
        </div>
    )
}