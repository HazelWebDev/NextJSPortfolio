"use client"
import React, {useState, useTransition} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const tabData = [
    {
        title: "Skills",
        id:"skills",
        content: (
            <ul>
                <li>JavaScript</li>
                <li>React.JS</li>
                <li>TailwindCSS</li>
                <li>Bootstrap</li>
                <li>JavaScript Algorithms</li>
            </ul>
        )
    },
    {
        title: "Education",
        id:"education",
        content: (
            <ul>
                <li className='text-lg'>California State University, East Bay</li>
                <li><em>Bachelor's Degree in English</em></li>
                <li className='text-lg mt-4'>Online Courses</li>
                <li><em>Certifications in JavaScript, React, and responsive web development.</em></li>
            </ul>
        )
    },
    {
        title: "Experience",
        id:"experience",
        content: (
            <ul>
                <li className='text-lg'>Infosys</li>
                <li><em>Certified Front-End Developer</em></li>
                <li className='text-lg mt-4'>Code Bootcamp</li>
                <li><em>Full Stack Development</em></li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills")
    const [isPending, startTransition ] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        });
    }

  return (
    <section className='text-white '>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image src="/AnimeGirl.png" width={500} height={500} />
        <div className='mt-4 md:mt-0 text-left'>
            <h2 className='text-4xl font-bold text-pink-400 mb-4'>About Me</h2>
            <p className='text-base md:text-lg'>
                I am a person of many passions, the most favored being art and creativity. This is precisely what called me to
              front-end development: the imaginative synergy between art and technology. The overflowing potential of technology
              collides with creativity, resulting in a truly awesome career which called to me. I jumped toward it with no hesitation!
            </p>
            <div className='flex flex-row mt-8'>
                <TabButton 
                selectTab={() => handleTabChange("skills")} 
                active={tab === "skills"} 
                >
                {" "}
                Skills{" "}
                </TabButton>
                <TabButton 
                selectTab={() => handleTabChange("education")} 
                active={tab === "education"} 
                >
                {" "}
                Education{" "}
                </TabButton>
                <TabButton 
                selectTab={() => handleTabChange("experience")} 
                active={tab === "experience"} 
                >
                {" "}
                Experience{" "}
                </TabButton>
            </div>
            <div className='mt-8'>{tabData.find((t) => t.id === tab).content}</div>
        </div>
        </div>
    </section>
  )
}

export default AboutSection