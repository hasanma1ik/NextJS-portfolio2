import Head from "next/head";
import { BsFillMoonStarsFill } from 'react-icons/bs';
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillFacebook
} from 'react-icons/ai'
import { useState } from "react";
import Image from 'next/legacy/image';

const myLoader = ({ src, width, quality }) => {
  return `http://localhost:3000//${src}?w=${width}&q=${quality || 75}`;
};






export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ""}>
      <Head>
        <title>Hasan M Malik Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <nav>
        <ul className="flex justify-center space-x-4 py-4">

        <li>
            <a href="#Home" style={{ fontSize: '20px' }}> Home</a>
          </li>

          <li>
            <a href="#skills" style={{ fontSize: '20px' }}> Skills</a>
          </li>
          <li>
            <a href="#projects" style={{ fontSize: '20px' }}>Projects</a>
          </li>
          <li>
            <a href="#interests" style={{ fontSize: '20px' }}>Interests</a>
          </li>
  
        </ul>
      </nav>
      
      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
      <section id="Home" className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between dark:text-white">
  <div className="flex items-center">
    
    <h1 className="text-xl font-burtons"><b> HM<sup className="text-sm bottom-0 right-0">2</sup></b></h1>
  </div>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl" />
              </li>
              <li>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="https://docs.google.com/document/d/1-JjwCS9BN7afON_-no7VV9-9ocn9D51NQRGci40zwTQ/edit">Resume</a>
              </li>
            </ul>
          </nav>
          <div className="container mx-auto flex flex-wrap items-center">
            <div className="w-full lg:w-1/2">
          <div className="text-left p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Hasan M Malik</h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">Full Stack Developer</h3>

            <div className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white">I&apos;m
 a dedicated and versatile full stack developer, equipped with a diverse skill set, problem-solving abilities, and a passion for delivering high-quality web applications. I&apos;m excited to contribute my expertise to help businesses and users thrive in the digital world.</div>

            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600  dark:text-white">
  <a href="https://www.instagram.com/hasanma1ik/" target="_blank" rel="noopener noreferrer">
    <AiFillInstagram/>
  </a>
  <a href="https://www.linkedin.com/in/hasan-malik-109386118/" target="_blank" rel="noopener noreferrer">
    <AiFillLinkedin />
  </a>
  <a href="https://www.facebook.com/malikhasankhan/" target="_blank" rel="noopener noreferrer">
    <AiFillFacebook />
  </a>
</div>
</div>
</div>

            ...
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96 ">
              <img src="/images/11.jpeg" alt="Image description" />
            </div>
            ... </div>
            
            
        </section>

        <section id="skills" className="">
  <div>
    <h3 className="text-4xl text-center py-1 dark:text-white"><b>Technical Skills</b></h3>
  </div>
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    <div className="bg-white shadow-md rounded-lg p-4">
      <h4 className="text-lg font-medium">Programming</h4>
      <ul className="list-disc list-inside mt-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>R Studio</li>
      </ul>
    </div>
    <div className="bg-white shadow-md rounded-lg p-4">
      <h4 className="text-lg font-medium">Frameworks/Libraries</h4>
      <ul className="list-disc list-inside mt-2">
        <li>React.js</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>Bootstrap</li>
        <li>Tailwind CSS</li>
      </ul>
    </div>
    <div className="bg-white shadow-md rounded-lg p-4">
      <h4 className="text-lg font-medium">Database</h4>
      <ul className="list-disc list-inside mt-2">
        <li>MongoDB</li>
      </ul>
    </div>
    <div className="bg-white shadow-md rounded-lg p-4">
      <h4 className="text-lg font-medium">Tools</h4>
      <ul className="list-disc list-inside mt-2">
        <li>REST API</li>
        <li>Git</li>
        <li>GitHub</li>
      </ul>
    </div>
  </div>
</section>

<section id="projects" className="mt-10">
  <div>
    <h3 className="text-4xl text-center py-1 dark:text-white"><b>Projects</b></h3>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="bg-white shadow-md rounded-lg p-4">
      <h4 className="text-lg font-medium">
        <a href="https://example.com/snake-game" className="text-blue-500 hover:underline">Interactive Snake Game</a>
      </h4>
      <ul className="list-disc list-inside text-gray-800 mt-2">
        <li>Created an engaging version of the vintage Snake game using HTML, CSS and Javascript</li>
        <li>Incorporated key game components such as scoring system, varying levels of speed and detecting collision to enhance player experience</li>
      </ul>
    </div>
    <div className="bg-white shadow-md rounded-lg p-4">
      <h4 className="text-lg font-medium">
        <a href="https://example.com/calculator-app" className="text-blue-500 hover:underline">Calculator Application</a>
      </h4>
      <ul className="list-disc list-inside text-gray-800 mt-2">
        <li>Developed a web-based calculator using HTML, CSS and Javascript.</li>
        <li>Created a user-friendly design, handling user input, and performing mathematical functions operations.</li>
        <li>Debugged and tested the functionality for accuracy.</li>
      </ul>
    </div>
    <div className="bg-white shadow-md rounded-lg p-4">
      <h4 className="text-lg font-medium">
        <a href="https://example.com/pdf-merger" className="text-blue-500 hover:underline">PDF Merger</a>
      </h4>
      <ul className="list-disc list-inside text-gray-800 mt-2">
        <li>Developed an intutive web application using HTML, CSS, and JavaScript</li>
        <li>Merges multiple PDF files into a single document</li>
        <li>Implemented a processing function through Javascript which provides a single downloadable file</li>
      </ul>
    </div>
    <div className="bg-white shadow-md rounded-lg p-4">
      <h4 className="text-lg font-medium">
        <a href="https://example.com/news-app" className="text-blue-500 hover:underline">NewsApp</a>
      </h4>
      <ul className="list-disc list-inside text-gray-800 mt-2">
        <li>Using React, created a news application that provides user with real-time news and updates from various sources.</li>
        <li>Utilised Axios for asynchronous API requests to fetch accurate news data from from reliable API</li>
        <li>User-friendly interface for reading and searching news articles</li>
      </ul>
    </div>
    <div className="bg-white shadow-md rounded-lg p-4">
      <h4 className="text-lg font-medium">
        <a href="https://example.com/text-utils-app" className="text-blue-500 hover:underline">Text Utils App</a>
      </h4>
      <ul className="list-disc list-inside text-gray-800 mt-2">
        <li>Developed a Text Utility App using React that offers various functions such text formatting, word count and more</li>
        <li>This app is useful for SEO optimization and daily text editing purposes</li>
        
      </ul>
    </div>
  </div>
</section>

<section id="interests" className="mt-8">
              <div>
                <h4 className="text-4xl text-center py-1 dark:text-white"><b>Interests and Hobbies</b></h4>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-2 mb-10 gap-8">
                <div className="bg-white shadow-md rounded-lg p-4">
                  <h4 className="text-lg font-medium">Sports</h4>
                  <div className="text-gray-800 mt-2">
                    After engaging in prolonged coding sessions, I find it rejuvenating to participate in various sporting activities, it keeps my mind fresh and promotes overall well-being. My favorite sports include:
                    <li>Cricket</li>
                    <li>Mixed Martial Arts</li>
                    <li>Table-Tennis</li>
                 </div>
                </div>
                <div className="bg-white shadow-md rounded-lg p-4">
                  <h5 className="text-lg font-medium">Travelling</h5>
                  <div className="text-gray-800 mt-2">
                    Exploring new places and experiencing different cultures is a passion of mine. I love traveling to both popular destinations and off-the-beaten-path locations, which broadens my perspective and fuels my creativity.
                 </div>
                </div>
                </div>

                

                
                <div className="image1">
                <Image src="/images/33.jpg" alt=""  width="650" height="900" />
                <div className="text-gray-800 mt-2 dark:text-white">Hunza Valley, Northern Areas Pakistan</div>
                </div>
                <div className="image2">
                <Image src="/images/00.jpg" alt="" width="800" height="600" />
                <div className="text-gray-800 mt-2 dark:text-white">Gooseberry Falls State Park, Minnesota, USA</div>
                </div>

                <div className="image3">
                <Image src="/images/44.jpg" alt="" width="550" height="750" />
                <div className="text-gray-800 mt-2 dark:text-white">Mukhspuri Peak, Northern Areas Pakistan</div>
                </div>
               
                </section>
      </main>
    </div>


  );
}

    // mt-20 will push image donw