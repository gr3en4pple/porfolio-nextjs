import Heading from '@/components/Heading'
import SkillsFooter from '@/components/SkillsFotter'
import { Badge } from '@/components/ui/badge'
import { Briefcase, Lightbulb } from 'lucide-react'
import html from '../../../public/html.png'
import css from '../../../public/css.png'
import scss from '../../../public/scss.png'
import js from '../../../public/js.png'
import ts from '../../../public/ts.png'
import react from '../../../public/react.png'
import nextjs from '../../../public/nextjs.jpeg'
import tailwind from '../../../public/tailwindcss.webp'
import socketIo from '../../../public/socket-io.png'
import redux from '../../../public/redux.png'
import swr from '../../../public/swr.png'
import styled from '../../../public/styled.png'

import FramerWrapper from '@/components/animation/FramerWrapper'
import { TooltipProvider } from '@/components/ui/tooltip'

const language = [
  { alt: 'js', img: js, description: 'Javascript, ES5, ES6' },
  { alt: 'ts', img: ts, description: 'Typescript' },
  { alt: 'html', img: html, description: 'HTML, HTML5' },
  { alt: 'css', img: css, description: 'CSS' }
]
const framework = [
  { alt: 'react', img: react, description: 'ReactJS' },
  { alt: 'nextjs', img: nextjs, description: 'NextJS' },
  { alt: 'scss', img: scss, description: 'SCSS' },
  { alt: 'tailwind', img: tailwind, description: 'Tailwind CSS' },
  { alt: 'styled', img: styled, description: 'Styled Components' },

  { alt: 'socketIo', img: socketIo, description: 'SocketIO' },
  { alt: 'redux', img: redux, description: 'Redux' },
  { alt: 'swr', img: swr, description: 'SWR' }
]

const skillPage = () => {
  return (
    // SKILLS PAGE

    <TooltipProvider>
      <div className="relative flex flex-col items-start w-full h-full gap-5 my-10 overflow-hidden md:my-0">
        <Badge className="gap-2 ">
          <Briefcase className="w-5 h-5" />
          My Skills
        </Badge>
        <div className="flex flex-col gap-3">
          <Heading>My Self as a Frontend Dev.</Heading>
          <FramerWrapper y={0} x={200}>
            <p className="w-full md:text-xl font-poppins text-primary max-sm:text-lg">
              A skilled frontend developer with 3 years of hands-on experience
              in building and optimizing complex user interfaces. Proficient in{' '}
              <span className="text_underline">JavaScript</span>,{' '}
              <span className="text_underline">ReactJS</span>,{' '}
              <span className="text_underline">NextJS</span>, with a deep
              understanding of modern frontend practices and the ability to
              deliver seamless, engaging user experiences. Known for leveraging
              <span className="text_underline"> Tailwind CSS </span>
              to create visually appealing, consistent, and scalable designs
              across multiple platforms. Dedicated to enhancing UI performance,
              ensuring cross-browser compatibility.
            </p>
          </FramerWrapper>

          <FramerWrapper className="block" y={100} delay={0.32}>
            <h1 className="relative flex gap-2 text-lg font-semibold md:text-2xl font-poppins text-primary max-sm:text-xl">
              Framework/Libraries
            </h1>
            <div className="flex flex-wrap items-center justify-between w-full h-fit">
              <SkillsFooter items={framework} />
            </div>
          </FramerWrapper>
          <FramerWrapper y={100} delay={0.3} className="block">
            <h1 className="relative flex gap-2 text-lg font-semibold md:text-2xl font-poppins text-primary max-sm:text-xl">
              Programming Languages
            </h1>
            <div className="flex flex-row items-center justify-between w-full h-fit">
              <SkillsFooter items={language} />
            </div>
          </FramerWrapper>
        </div>
      </div>
    </TooltipProvider>
  )
}

export default skillPage
