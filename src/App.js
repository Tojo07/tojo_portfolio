import React, { useEffect, useState } from "react";
import resume from './resume_fall_2024_tojo_tsimalay.pdf';
import './App.css';

function App() {
  const [loaded, setLoaded] = useState(false);
  const text_display_delay = '2000ms';

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section class='h-screen min-h-screen lg:h-screen lg:w-screen bg-[#bab6aa] lg:px-12 lg:py-4 font-main lg:flex lg:flex-col sm:overflow-auto'>
      <div class='h-[10%] w-full bg-[#5d5c5a] text-[#151724] font-normal lg:rounded-md mb-4 flex justify-between lg:animate-show'>
        <div class='h-full w-[20%] flex justify-start place-items-center pl-4 cursor-default'>
          <h1 class={`transition-opacity duration-1000 delay-[${text_display_delay}] ${loaded ? "opacity-100" : "opacity-0"
            } ease-in-out font-normal text-lg`}>Tojo <span class='font-semibold'>Tsimalay</span></h1>
        </div>
        <div class={`h-full w-[20%] flex justify-between px-4 transition-opacity duration-1000 delay-[${text_display_delay}] ${loaded ? "opacity-100" : "opacity-0"
          } ease-in-out text-lg font-normal`}>
          <button class='hover:text-[#2E3042] transition delay-200 ease-in-out'>About</button>
          <button class='hover:text-[#2E3042] transition delay-200 ease-in-out'>Projects</button>
          <button onClick={() => window.open('https://medium.com/@tsimalayheriniainatojo', '_blank')} class='hover:text-[#2E3042] transition delay-200 ease-in-out'>Blog</button>
        </div>
      </div>
      <div class='min-h-full h-full lg:h-[88%] w-full lg:flex'>
        <div class='h-[68%] w-full lg:h-full lg:w-[68%] lg:mr-4 overflow-scroll'>
          <div class='h-[70%] w-full lg:flex lg:mb-4'>
            <div class='relative h-[64%] w-full lg:h-full lg:w-[64%] bg-[#5d5c5a] lg:rounded-md lg:mr-4 animate-show p-4 flex text-center lg:text-start justify-center place-items-center text-[#151724]'
              style={{ '--start-left': '500px' }}>
              <p class={`text-3xl lg:text-5xl font-black leading-tight transition-opacity duration-1000 delay-[${text_display_delay}] ${loaded ? "opacity-100" : "opacity-0"
                } ease-in-out`}>Student Software Engineer and <span class='font-light text-[#DAD3C8] bg-[#151724] p-1 text-2xl lg:text-4xl'>Photography</span> Enthousiast</p>
            </div>
            <div class='relative h-[66%] w-full lg:h-full lg:w-[34%] top-1/2 left-1/2 lg:rounded-md bg-[url("../public/IMG_4259.JPG")] bg-cover bg-top bg-clip-border animate-slide z-50'>
            </div>
          </div>
          <div class='h-[50%] w-full lg:h-[30%] lg:w-full lg:flex lg:pb-2 pb-16'>
            <div class='relative h-full w-full bg-[#5d5c5a] lg:rounded-md animate-show lg:mr-4'
              style={{ '--start-top': '-200px', '--start-left': '500px' }}></div>
            <button onClick={() => { window.open(resume, '_blank') }} class='relative h-full w-full bg-[#151724] lg:rounded-md animate-show transition duration-200 hover:bg-[#2E3042]'
              style={{ '--start-top': '-200px', '--start-left': '100px' }}>
              <div class={`h-[14%] w-full flex justify-end place-items-top p-4 transition-opacity duration-1000 delay-[${text_display_delay}] ${loaded ? "opacity-100" : "opacity-0"
                } ease-in-out`}>
                <svg class='size-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 4C11.4477 4 11 3.55228 11 3C11 2.44772 11.4477 2 12 2L20 2C21.1046 2 22 2.89543 22 4V12C22 12.5523 21.5523 13 21 13C20.4477 13 20 12.5523 20 12V5.39343L3.72798 21.6655C3.33746 22.056 2.70429 22.056 2.31377 21.6655C1.92324 21.2749 1.92324 20.6418 2.31377 20.2512L18.565 4L12 4Z" fill="#DAD3C8"></path> </g></svg>
              </div>
              <div class={`h-[86%] w-full lg:flex justify-center place-items-center text-[#DAD3C8] font-light text-4xl transition-opacity duration-1000 delay-[${text_display_delay}] ${loaded ? "opacity-100" : "opacity-0"
                } ease-in-out`}>
                View My Resume
              </div>
            </button>
          </div>
        </div>

        {/* <div class='h-[32%] w-full lg:h-full lg:w-[32%]'>
          <div class='relative h-[79%] w-full bg-[#5d5c5a] rounded-md mb-4 animate-show lg:px-4'
            style={{ '--start-left': '-300px' }}>
            <div class={`h-[10%] w-full flex justify-between place-items-top pt-4 transition-opacity duration-1000 delay-[${text_display_delay}] ${loaded ? "opacity-100" : "opacity-0"
              } ease-in-out`}>
              <h1 class='text-lg'>Photography</h1>
              <svg class='size-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 4C11.4477 4 11 3.55228 11 3C11 2.44772 11.4477 2 12 2L20 2C21.1046 2 22 2.89543 22 4V12C22 12.5523 21.5523 13 21 13C20.4477 13 20 12.5523 20 12V5.39343L3.72798 21.6655C3.33746 22.056 2.70429 22.056 2.31377 21.6655C1.92324 21.2749 1.92324 20.6418 2.31377 20.2512L18.565 4L12 4Z" fill="#151724"></path> </g></svg>
            </div>
            <div class={`w-full h-[50%] bg-[url("../public/2820EAC3-D075-4B7E-A8E1-7E88DC73B106_1_105_c.jpeg")] bg-cover bg-clip-border bg-center rounded-lg duration-1000 delay-[${text_display_delay}] ${loaded ? "opacity-100" : "opacity-0"
              } ease-in-out`}></div>
            <div class={`h-[40%] py-4 w-full flex flex-col justify-center places-content-center duration-1000 text-2xl delay-[${text_display_delay}] ${loaded ? "opacity-100" : "opacity-0"
              } ease-in-out`}>
              <div class='w-full h-[33%] border-y-2 border-[#151724] flex justify-start place-items-center'>Portrait</div>
              <div class='w-full h-[33%] flex justify-start place-items-center'>Nature</div>
              <div class='w-full h-[34%] border-t-2 border-[#151724] flex justify-start place-items-center'>Lifestyle</div>
            </div>
          </div>
          <div class='relative h-[19%] w-full bg-[#5d5c5a] rounded-md animate-show flex justify-center place-items-center px-4'
            style={{ '--start-top': '-200px', '--start-left': '-300px' }}>
            <div class={`h-full w-[60%] flex justify-between place-items-center transition-opacity duration-1000 delay-[${text_display_delay}] ${loaded ? "opacity-100" : "opacity-0"
              } ease-in-out`}>
              <button onClick={() => window.open('https://github.com/Tojo07', '_blank')}><svg class='size-8 hover:fill-[#2E3042] fill-[#151724] ease-in-out duration-200' viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github</title> <path d="M16 1.375c-8.282 0-14.996 6.714-14.996 14.996 0 6.585 4.245 12.18 10.148 14.195l0.106 0.031c0.75 0.141 1.025-0.322 1.025-0.721 0-0.356-0.012-1.3-0.019-2.549-4.171 0.905-5.051-2.012-5.051-2.012-0.288-0.925-0.878-1.685-1.653-2.184l-0.016-0.009c-1.358-0.93 0.105-0.911 0.105-0.911 0.987 0.139 1.814 0.718 2.289 1.53l0.008 0.015c0.554 0.995 1.6 1.657 2.801 1.657 0.576 0 1.116-0.152 1.582-0.419l-0.016 0.008c0.072-0.791 0.421-1.489 0.949-2.005l0.001-0.001c-3.33-0.375-6.831-1.665-6.831-7.41-0-0.027-0.001-0.058-0.001-0.089 0-1.521 0.587-2.905 1.547-3.938l-0.003 0.004c-0.203-0.542-0.321-1.168-0.321-1.821 0-0.777 0.166-1.516 0.465-2.182l-0.014 0.034s1.256-0.402 4.124 1.537c1.124-0.321 2.415-0.506 3.749-0.506s2.625 0.185 3.849 0.53l-0.1-0.024c2.849-1.939 4.105-1.537 4.105-1.537 0.285 0.642 0.451 1.39 0.451 2.177 0 0.642-0.11 1.258-0.313 1.83l0.012-0.038c0.953 1.032 1.538 2.416 1.538 3.937 0 0.031-0 0.061-0.001 0.091l0-0.005c0 5.761-3.505 7.029-6.842 7.398 0.632 0.647 1.022 1.532 1.022 2.509 0 0.093-0.004 0.186-0.011 0.278l0.001-0.012c0 2.007-0.019 3.619-0.019 4.106 0 0.394 0.262 0.862 1.031 0.712 6.028-2.029 10.292-7.629 10.292-14.226 0-8.272-6.706-14.977-14.977-14.977-0.006 0-0.013 0-0.019 0h0.001z"></path> </g></svg></button>
              <button onClick={() => window.open('https://www.linkedin.com/in/tojo-tsimalay/', '_blank')}><svg class='size-8 hover:fill-[#2E3042] fill-[#151724] ease-in-out duration-200' viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M478.234 600.75V1920H.036V600.75h478.198Zm720.853-2.438v77.737c69.807-45.056 150.308-71.249 272.38-71.249 397.577 0 448.521 308.666 448.521 577.562v737.602h-480.6v-700.836c0-117.867-42.173-140.215-120.15-140.215-74.134 0-120.151 23.55-120.151 140.215v700.836h-480.6V598.312h480.6ZM239.099 0c131.925 0 239.099 107.294 239.099 239.099s-107.174 239.099-239.1 239.099C107.295 478.198 0 370.904 0 239.098 0 107.295 107.294 0 239.099 0Z" fill-rule="evenodd"></path> </g></svg></button>
              <button onClick={() => window.open('https://www.instagram.com/tojo.mg/', '_blank')}><svg class='size-8 hover:fill-[#2E3042] fill-[#151724] ease-in-out duration-200' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"></path> <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"></path> </g></svg></button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default App;
