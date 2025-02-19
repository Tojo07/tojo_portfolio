import React, { useEffect, useState } from "react";
import resume from './resume_fall_2024_tojo_tsimalay.pdf';
import './App.css';

function App() {
  const [loaded, setLoaded] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [song, setSong] = useState(null);
  const [songTitle, setSongTitle] = useState(null);
  const [songArtist, setSongArtist] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const text_display_delay = '2000ms';

  function shortenStr(input_text, max_length) {
    if (input_text.length < max_length) return input_text;
    return input_text.slice(0, max_length) + "...";
  }

  useEffect(() => {
    fetch("https://getplaylist-r3tcy65wfq-uc.a.run.app")
      .then(response => response.json())
      .then(data => {
        if (data.error) throw new Error(data.error);
        setSong(data);
        setSongArtist(shortenStr(data.artist, 20));
        setSongTitle(shortenStr(data.name, 30));
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);


  useEffect(() => {
    setLoaded(true);
  }, []);

  const lineStyle = {
    fill: "#151724",
    stroke: "#000000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  return (
    <section className='h-screen  lg:h-screen lg:w-screen bg-[#bab6aa] lg:px-12 lg:py-4 font-main  lg:flex lg:flex-col'>
      <div className='h-[6%] lg:h-[10%] w-full bg-[#5d5c5a] text-[#151724] font-normal lg:rounded-md lg:mb-4 flex justify-between lg:animate-show'>
        <div className='h-full w-[30%] flex justify-start place-items-center pl-4 cursor-default'>
          <h1 className={`transition-opacity duration-1000 delay-[${text_display_delay}] ${loaded ? "opacity-100" : "opacity-0"
            } ease-in-out font-normal lg:text-lg text-sm`}>Tojo <span className='font-semibold'>Tsimalay</span></h1>
        </div>
        {640 >= window.innerWidth ? (
          <div className={`h-full w-[20%] flex justify-center place-items-center transition-opacity duration-1000 delay-[${text_display_delay}] ${loaded ? "opacity-100" : "opacity-0"
            } ease-in-out text-lg font-normal`}>
            {isNavOpen ? (
              <div className="w-full min-h-full bg-[#5d5c5a] flex flex-col gap-y-2 text-sm z-50 pt-16">
                <button onClick={() => {
                  setIsNavOpen(false);
                  window.open('https://www.linkedin.com/in/tojo-tsimalay/', '_blank')
                }} className='hover:text-[#2E3042] transition delay-200 ease-in-out'>About</button>
                <button onClick={() => {
                  setIsNavOpen(false);
                  window.open('https://github.com/Tojo07', '_blank')
                }} className='hover:text-[#2E3042] transition delay-200 ease-in-out'>Projects</button>
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
          <div className={`h-full w-[20%] flex justify-between px-4 transition-opacity duration-1000 delay-[${text_display_delay}] ${loaded ? "opacity-100" : "opacity-0"
            } ease-in-out text-lg font-normal`}>
            <button onClick={() => window.open('https://www.linkedin.com/in/tojo-tsimalay/', '_blank')} className='hover:text-[#2E3042] transition delay-200 ease-in-out'>About</button>
            <button onClick={() => window.open('https://github.com/Tojo07', '_blank')} className='hover:text-[#2E3042] transition delay-200 ease-in-out'>Projects</button>
            <button onClick={() => window.open('https://medium.com/@tsimalayheriniainatojo', '_blank')} className='hover:text-[#2E3042] transition delay-200 ease-in-out'>Blog</button>
          </div>
        }
      </div>
      <div className='h-[90%] min-h-[100vh] lg:min-h-[88%] lg:h-[88%] w-full lg:flex overflow-scroll lg:overflow-hidden'>
        <div className='h-[70%] w-full lg:h-full lg:w-[68%] lg:mr-4'>
          <div className='h-[60%] lg:h-[69%] w-full lg:flex lg:mb-4'>
            <div className='relative h-[45%] w-full lg:h-full lg:w-[64%] bg-[#5d5c5a] lg:rounded-md lg:mr-4 animate-show p-4 flex text-center lg:text-start justify-center place-items-center text-[#151724]'
              style={{ '--start-left': '500px' }}>
              <p className={`text-3xl lg:text-5xl font-black leading-tight transition-opacity duration-1000 delay-[${text_display_delay}] ${loaded ? "opacity-100" : "opacity-0"
                } ease-in-out`}>Student Software Engineer and <span className='font-light text-[#DAD3C8] bg-[#151724] p-1 text-2xl lg:text-4xl'>Photography</span> Enthusiast</p>
            </div>
            <div className='relative h-[60%] w-full lg:h-full lg:w-[34%] top-1/2 left-1/2 lg:rounded-md bg-[url("../public/IMG_4259.JPG")] bg-cover bg-top bg-clip-border animate-slide'>
            </div>
          </div>
          <div className='h-[40%] w-full lg:h-[29%] lg:w-full lg:flex lg:pb-2'>
            <button onClick={() => window.open(song.external_url, "_blank")} className='relative h-[50%] lg:h-full w-full bg-[#1db954] hover:bg-[#4ac776] lg:rounded-md animate-show lg:mr-4 transition duration-200'
              style={{ '--start-top': '-200px', '--start-left': '500px' }}>
              <div className="h-full w-full lg:px-4 px-2 text-[#151724]">
                <div className="lg:w-full lg:h-[30%] flex border-b-2 justify-between border-[#151724] place-items-center">
                  <svg fill="#000000" className="lg:size-10 size-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">

                    <g id="SVGRepo_bgCarrier" stroke-width="0" />

                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                    <g id="SVGRepo_iconCarrier">

                      <path d="m17.61 16.906c0-.002 0-.004 0-.007 0-.34-.187-.636-.464-.791l-.005-.002c-1.922-1.131-4.235-1.8-6.703-1.8-.099 0-.197.001-.296.003h.015c-1.598.016-3.142.208-4.626.559l.142-.028c-.373.047-.659.363-.659.746 0 .024.001.047.003.07v-.003.012c0 .205.081.391.212.528.132.14.318.227.525.227.01 0 .021 0 .031-.001h-.001c.225-.034.42-.077.611-.133l-.032.008c1.136-.255 2.444-.407 3.786-.422h.01c.075-.002.164-.003.253-.003 2.193 0 4.246.599 6.005 1.642l-.054-.03c.146.097.323.159.513.172h.003.001c.405 0 .734-.328.734-.734 0-.006 0-.011 0-.017v.001zm1.5-3.36c0-.01 0-.021 0-.032 0-.395-.219-.74-.542-.918l-.005-.003c-2.358-1.387-5.195-2.207-8.223-2.207-.118 0-.237.001-.354.004h.018c-1.686.001-3.316.24-4.858.687l.123-.031c-.432.089-.753.466-.753.919 0 .029.001.057.004.085v-.004.004c0 .516.418.934.934.934h.004c.218-.028.414-.072.603-.131l-.024.007c1.168-.328 2.509-.516 3.894-.516h.027-.001c.099-.002.216-.004.334-.004 2.683 0 5.198.721 7.361 1.979l-.07-.038c.169.108.371.181.588.203h.006.004c.516 0 .934-.418.934-.934 0-.001 0-.003 0-.004zm1.69-3.874c.001-.015.001-.034.001-.052 0-.449-.251-.839-.62-1.039l-.006-.003c-1.32-.758-2.851-1.354-4.472-1.707l-.106-.019c-1.596-.372-3.429-.586-5.312-.586-.017 0-.034 0-.05 0h.003c-.084-.001-.184-.002-.284-.002-1.923 0-3.784.269-5.546.771l.142-.035c-.243.074-.448.214-.6.398l-.002.002c-.15.191-.241.436-.241.702 0 .02 0 .039.001.059v-.003.029c0 .305.122.582.321.784.196.203.471.328.775.328h.032-.002c.23-.02.443-.064.645-.131l-.02.006c1.359-.369 2.919-.58 4.529-.58.095 0 .19.001.285.002h-.014.044c1.699 0 3.352.194 4.939.56l-.147-.029c1.494.313 2.819.827 4.028 1.519l-.067-.035c.178.111.393.18.623.187h.002.01c.304 0 .579-.122.778-.32.205-.194.333-.469.333-.773 0-.012 0-.023-.001-.035v.002zm3.2 2.328v.09c0 2.187-.598 4.234-1.64 5.987l.03-.054c-1.067 1.824-2.544 3.301-4.311 4.337l-.056.03c-1.729 1.012-3.806 1.609-6.024 1.609s-4.295-.597-6.081-1.64l.057.031c-1.824-1.067-3.301-2.544-4.337-4.311l-.03-.056c-1.012-1.729-1.609-3.806-1.609-6.024s.597-4.295 1.64-6.081l-.031.057c1.067-1.824 2.544-3.301 4.311-4.337l.056-.03c1.729-1.012 3.806-1.609 6.024-1.609s4.295.597 6.081 1.64l-.057-.031c1.824 1.067 3.301 2.544 4.337 4.311l.03.056c1.012 1.699 1.61 3.746 1.61 5.933v.096-.005z" />

                    </g>

                  </svg>
                  <h1 className="w-full text-center lg:text-2xl text-xl font-extrabold font-main">
                    Song Of The Day
                  </h1>
                  <svg className='size-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 4C11.4477 4 11 3.55228 11 3C11 2.44772 11.4477 2 12 2L20 2C21.1046 2 22 2.89543 22 4V12C22 12.5523 21.5523 13 21 13C20.4477 13 20 12.5523 20 12V5.39343L3.72798 21.6655C3.33746 22.056 2.70429 22.056 2.31377 21.6655C1.92324 21.2749 1.92324 20.6418 2.31377 20.2512L18.565 4L12 4Z" fill="#151724"></path> </g></svg>
                </div>
                {song && (
                  <div className="lg:h-[70%] lg:w-full flex gap-x-4 justify-center pt-2 place-items-center">
                    <svg className="size-14" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <line style={lineStyle} x1="13.1159" y1="11.7737" x2="13.1159" y2="36.2263" />
                        <line style={lineStyle} x1="8.8039" y1="16.8329" x2="8.8039" y2="31.1671" />
                        <line style={lineStyle} x1="4.5" y1="21.4705" x2="4.5" y2="26.5295" />
                        <line style={lineStyle} x1="17.4569" y1="16.8329" x2="17.4569" y2="31.1671" />
                        <line style={lineStyle} x1="21.9465" y1="21.4705" x2="21.9465" y2="26.5295" />
                      </g>
                      <g>
                        <line style={lineStyle} x1="34.6693" y1="11.7737" x2="34.6693" y2="36.2263" />
                        <line style={lineStyle} x1="30.3573" y1="16.8329" x2="30.3573" y2="31.1671" />
                        <line style={lineStyle} x1="26.0535" y1="21.4705" x2="26.0535" y2="26.5295" />
                        <line style={lineStyle} x1="39.0104" y1="16.8329" x2="39.0104" y2="31.1671" />
                        <line style={lineStyle} x1="43.5" y1="21.4705" x2="43.5" y2="26.5295" />
                      </g>
                    </svg>
                    <img src={song.cover} alt="Album Cover" className="lg:w-24 lg:h-24 w-16 h-16" />
                    <div>
                      <h1 className="text-center font-extrabold lg:text-[120%] text-xl mb-4">{songArtist}</h1>
                      <h1 className="text-center font-semibold lg:text-[96%] text-md">{songTitle}</h1>
                    </div>
                  </div>
                )}
              </div>
            </button>
            <button onClick={() => { window.open(resume, '_blank') }} className='relative h-[50%] lg:h-full w-full bg-[#151724] lg:rounded-md animate-show transition duration-200 hover:bg-[#2E3042]'
              style={{ '--start-top': '-200px', '--start-left': '100px' }}>
              <div className={`h-[14%] w-full flex justify-end place-items-top p-4 transition-opacity duration-1000 delay-[${text_display_delay}] ${loaded ? "opacity-100" : "opacity-0"
                } ease-in-out`}>
                <svg className='size-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 4C11.4477 4 11 3.55228 11 3C11 2.44772 11.4477 2 12 2L20 2C21.1046 2 22 2.89543 22 4V12C22 12.5523 21.5523 13 21 13C20.4477 13 20 12.5523 20 12V5.39343L3.72798 21.6655C3.33746 22.056 2.70429 22.056 2.31377 21.6655C1.92324 21.2749 1.92324 20.6418 2.31377 20.2512L18.565 4L12 4Z" fill="#DAD3C8"></path> </g></svg>
              </div>
              <div className={`h-[86%] w-full lg:flex justify-center place-items-center text-[#DAD3C8] font-light text-4xl transition-opacity duration-1000 delay-[${text_display_delay}] ${loaded ? "opacity-100" : "opacity-0"
                } ease-in-out`}>
                View My Resume
              </div>
            </button>
          </div>
        </div>

        <div className='h-[70%] w-full lg:h-full lg:w-[32%]'>
          <button onClick={() => window.open('https://www.instagram.com/tojo.mg/', '_blank')} className='relative h-[70%] lg:h-[79%] w-full bg-[#5d5c5a] lg:rounded-md lg:mb-4 animate-show lg:px-4 hover:bg-[#2E3042] transition delay-200 ease-in-out'
            style={{ '--start-left': '-300px' }}>
            <div className={`h-[10%] w-full flex justify-between place-items-top pt-4 transition-opacity duration-1000 delay-[${text_display_delay}] ${loaded ? "opacity-100" : "opacity-0"
              } ease-in-out`}>
              <h1 className='text-lg'>Photography</h1>
              <svg className='size-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 4C11.4477 4 11 3.55228 11 3C11 2.44772 11.4477 2 12 2L20 2C21.1046 2 22 2.89543 22 4V12C22 12.5523 21.5523 13 21 13C20.4477 13 20 12.5523 20 12V5.39343L3.72798 21.6655C3.33746 22.056 2.70429 22.056 2.31377 21.6655C1.92324 21.2749 1.92324 20.6418 2.31377 20.2512L18.565 4L12 4Z" fill="#151724"></path> </g></svg>
            </div>
            <div className={`w-full h-[50%] bg-[url("../public/2820EAC3-D075-4B7E-A8E1-7E88DC73B106_1_105_c.jpeg")] bg-cover bg-clip-border bg-center lg:rounded-lg duration-1000 delay-[${text_display_delay}] ${loaded ? "opacity-100" : "opacity-0"
              } ease-in-out`}></div>
            <div className={`h-[40%] py-4 w-full flex flex-col justify-center places-content-center duration-1000 text-2xl delay-[${text_display_delay}] ${loaded ? "opacity-100" : "opacity-0"
              } ease-in-out`}>
              <div className='w-full h-[33%] border-y-2 border-[#151724] flex justify-start place-items-center'>Portrait</div>
              <div className='w-full h-[33%] flex justify-start place-items-center'>Nature</div>
              <div className='w-full h-[34%] border-t-2 border-[#151724] flex justify-start place-items-center'>Lifestyle</div>
            </div>
          </button>
          <div className='relative h-[8%] lg:h-[18%] w-full bg-[#5d5c5a] lg:rounded-md animate-show flex justify-center place-items-center px-4'
            style={{ '--start-top': '-200px', '--start-left': '-300px' }}>
            <div className={`h-full w-[60%] flex justify-between place-items-center transition-opacity duration-1000 delay-[${text_display_delay}] ${loaded ? "opacity-100" : "opacity-0"
              } ease-in-out`}>
              <button onClick={() => window.open('https://github.com/Tojo07', '_blank')}><svg className='size-8 hover:fill-[#2E3042] fill-[#151724] ease-in-out duration-200' viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github</title> <path d="M16 1.375c-8.282 0-14.996 6.714-14.996 14.996 0 6.585 4.245 12.18 10.148 14.195l0.106 0.031c0.75 0.141 1.025-0.322 1.025-0.721 0-0.356-0.012-1.3-0.019-2.549-4.171 0.905-5.051-2.012-5.051-2.012-0.288-0.925-0.878-1.685-1.653-2.184l-0.016-0.009c-1.358-0.93 0.105-0.911 0.105-0.911 0.987 0.139 1.814 0.718 2.289 1.53l0.008 0.015c0.554 0.995 1.6 1.657 2.801 1.657 0.576 0 1.116-0.152 1.582-0.419l-0.016 0.008c0.072-0.791 0.421-1.489 0.949-2.005l0.001-0.001c-3.33-0.375-6.831-1.665-6.831-7.41-0-0.027-0.001-0.058-0.001-0.089 0-1.521 0.587-2.905 1.547-3.938l-0.003 0.004c-0.203-0.542-0.321-1.168-0.321-1.821 0-0.777 0.166-1.516 0.465-2.182l-0.014 0.034s1.256-0.402 4.124 1.537c1.124-0.321 2.415-0.506 3.749-0.506s2.625 0.185 3.849 0.53l-0.1-0.024c2.849-1.939 4.105-1.537 4.105-1.537 0.285 0.642 0.451 1.39 0.451 2.177 0 0.642-0.11 1.258-0.313 1.83l0.012-0.038c0.953 1.032 1.538 2.416 1.538 3.937 0 0.031-0 0.061-0.001 0.091l0-0.005c0 5.761-3.505 7.029-6.842 7.398 0.632 0.647 1.022 1.532 1.022 2.509 0 0.093-0.004 0.186-0.011 0.278l0.001-0.012c0 2.007-0.019 3.619-0.019 4.106 0 0.394 0.262 0.862 1.031 0.712 6.028-2.029 10.292-7.629 10.292-14.226 0-8.272-6.706-14.977-14.977-14.977-0.006 0-0.013 0-0.019 0h0.001z"></path> </g></svg></button>
              <button onClick={() => window.open('https://www.linkedin.com/in/tojo-tsimalay/', '_blank')}><svg className='size-8 hover:fill-[#2E3042] fill-[#151724] ease-in-out duration-200' viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M478.234 600.75V1920H.036V600.75h478.198Zm720.853-2.438v77.737c69.807-45.056 150.308-71.249 272.38-71.249 397.577 0 448.521 308.666 448.521 577.562v737.602h-480.6v-700.836c0-117.867-42.173-140.215-120.15-140.215-74.134 0-120.151 23.55-120.151 140.215v700.836h-480.6V598.312h480.6ZM239.099 0c131.925 0 239.099 107.294 239.099 239.099s-107.174 239.099-239.1 239.099C107.295 478.198 0 370.904 0 239.098 0 107.295 107.294 0 239.099 0Z" fill-rule="evenodd"></path> </g></svg></button>
              <button onClick={() => window.open('https://www.instagram.com/tojo.mg/', '_blank')}><svg className='size-8 hover:fill-[#2E3042] fill-[#151724] ease-in-out duration-200' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"></path> <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"></path> </g></svg></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
