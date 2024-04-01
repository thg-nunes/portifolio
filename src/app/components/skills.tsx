'use client'
import { TbBrandNextjs } from 'react-icons/tb'
import { FaSass } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import {
  SiExpress,
  SiStyledcomponents,
  SiJest,
  SiStorybook,
  SiTailwindcss,
  SiTestinglibrary,
  SiReacthookform,
} from 'react-icons/si'
import { TfiHtml5 } from 'react-icons/tfi'
import { IoLogoCss3 } from 'react-icons/io5'
import { PiPhosphorLogoFill } from 'react-icons/pi'

import {
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoGit,
  BiLogoFigma,
} from 'react-icons/bi'

export const Skills = (): JSX.Element => {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-3 grid-rows-5 justify-items-center gap-8 text-blue-950 lg:grid-cols-5 lg:grid-rows-4">
      <section className="flex w-max animate-floating flex-col items-center px-2">
        <TfiHtml5 className="h-10 w-10 text-orange-600 md:w-14 lg:h-14 lg:w-14" />
        <p className="text-xs lg:text-base">HTML5</p>
      </section>
      <section className="flex w-max animate-floating flex-col items-center px-2">
        <IoLogoCss3 className="h-10 w-10 text-blue-500 md:w-14 lg:h-14 lg:w-14" />
        <p className="text-xs lg:text-base">CSS3</p>
      </section>
      <section className="flex w-max animate-floating flex-col items-center px-2">
        <BiLogoJavascript className="h-10 w-10 text-[#ffd600] md:w-14 lg:h-14 lg:w-14" />
        <p className="text-xs lg:text-base">JavaScript</p>
      </section>
      <section className="flex w-max animate-floating flex-col items-center px-2">
        <TbBrandNextjs className="h-10 w-10 text-blue-950 md:w-14 lg:h-14 lg:w-14" />
        <p className="text-xs lg:text-base">NextJs</p>
      </section>
      <section className="flex w-max animate-floating flex-col items-center px-2">
        <FaSass className="h-10 w-10 text-[#e5628b] md:w-14 lg:h-14 lg:w-14" />
        <p className="text-xs lg:text-base">Sass</p>
      </section>
      <section className="flex w-max animate-floating flex-col items-center px-2">
        <SiExpress className="h-10 w-10 text-blue-950 md:w-14 lg:h-14 lg:w-14" />
        <p className="text-xs lg:text-base">Express</p>
      </section>
      <section className="flex w-max animate-floating flex-col items-center px-2">
        <AiFillGithub className="h-10 w-10 text-blue-950 md:w-14 lg:h-14 lg:w-14" />
        <p className="text-xs lg:text-base">Github</p>
      </section>
      <section className="flex w-max animate-floating flex-col items-center px-2">
        <SiJest className="h-10 w-10 text-[#15c213] md:w-14 lg:h-14 lg:w-14" />
        <p className="text-xs lg:text-base">Jest</p>
      </section>
      <section className="flex w-max animate-floating flex-col items-center px-2">
        <PiPhosphorLogoFill className="h-10 w-10 text-black md:w-14 lg:h-14 lg:w-14" />
        <p className="text-xs lg:text-base">Phosphor Logo</p>
      </section>
      <section className="flex w-max animate-floating flex-col items-center px-2">
        <SiTestinglibrary className="h-10 w-10 text-red-500 md:w-14 lg:h-14 lg:w-14" />
        <p className="text-xs lg:text-base">Testing Library</p>
      </section>
      <section className="flex w-max animate-floating flex-col items-center px-2">
        <div className="rounded-md bg-pink-700 px-2 py-3">
          <SiReacthookform className="size-10 h-10 w-10 text-white md:w-14" />
        </div>
        <p className="text-xs lg:text-base">React hook form</p>
      </section>
      <section className="flex w-max animate-floating flex-col items-center px-2">
        <SiStorybook className="h-10 w-10 text-[#fd4a85] md:w-14 lg:h-14 lg:w-14" />
        <p className="text-xs lg:text-base">StoryBook</p>
      </section>
      <section className="flex w-max animate-floating flex-col items-center px-2">
        <SiTailwindcss className="h-10 w-10 text-[#34bdf9] md:w-14 lg:h-14 lg:w-14" />
        <p className="text-xs lg:text-base">Tailwindcss</p>
      </section>
      <section className="flex w-max animate-floating flex-col items-center px-2">
        <BiLogoTypescript
          className="md:4-12 md:4-12 h-10 w-10 text-[#3176c1] lg:h-14 lg:w-14"
          color="#3176c1"
          size={60}
        />
        <p className="text-xs lg:text-base">TypeScript</p>
      </section>
      <section className="flex w-max animate-floating flex-col items-center px-2">
        <BiLogoReact className="h-10 w-10 text-[#2071ab] md:w-14 lg:h-14 lg:w-14" />
        <p className="text-xs lg:text-base">ReactJs</p>
      </section>
      <section className="flex w-max animate-floating flex-col items-center px-2">
        <BiLogoNodejs className="h-10 w-10 text-[#629c4c] md:w-14 lg:h-14 lg:w-14" />
        <p className="text-xs lg:text-base">Nodejs</p>
      </section>
      <section className="flex w-max animate-floating flex-col items-center px-2">
        <BiLogoGit className="h-10 w-10 text-[#f34f1f] md:w-14 lg:h-14 lg:w-14" />
        <p className="text-xs lg:text-base">Git</p>
      </section>
      <section className="flex w-max animate-floating flex-col items-center px-2">
        <BiLogoFigma className="h-10 w-10 text-[#e5628b] md:w-14 lg:h-14 lg:w-14" />
        <p className="text-xs lg:text-base">Figma</p>
      </section>
      <section className="flex w-max animate-floating flex-col items-center px-2">
        <SiStyledcomponents className="h-10 w-10 text-[#ffd600] md:w-14 lg:h-14 lg:w-14" />
        <p className="text-xs lg:text-base">Styled-Components</p>
      </section>
    </div>
  )
}
