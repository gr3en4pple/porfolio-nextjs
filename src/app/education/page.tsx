import FramerWrapper from '@/components/animation/FramerWrapper'
import Heading from '@/components/Heading'
import { Badge } from '@/components/ui/badge'
import { Briefcase, GraduationCap } from 'lucide-react'

const educationPage = () => {
  return (
    // ABOUT PAGE
    <div className="relative flex flex-col items-start w-full h-full gap-5 overflow-hidden">
      <Badge className="gap-2 ">
        <GraduationCap className="w-5 h-5" />
        Education
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Education</Heading>
      </div>
      <div className="flex flex-col w-full h-fit">
        <div className="flex w-full h-fit">
          <FramerWrapper
            y={0}
            x={-100}
            delay={0.35}
            className="flex items-center w-1/4 md:text-lg font-rubik justify-evenly "
          >
            2017 - 2021
          </FramerWrapper>
          <FramerWrapper
            y={0}
            x={100}
            delay={0.35}
            className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point "
          >
            <div className="text-xl md:text-2xl font-rubik">
              Bachelor of Computer Networking, <br /> University of Science Ho
              Chi Minh City
            </div>
            <p className="w-full text-sm md:text-base font-poppins text-primary">
              The reason I chose Computer Networking as my major was to gain a
              deeper understanding of how Internet systems work, and I was
              excited to learn how to operate a network system. During my
              studies, I learned how to set up a network for small to medium
              systems, gained more knowledge about Linux, and studied protocols
              in depth, such as HTTP, HTTPS, and TCP/IP. These fundamental
              skills have been very helpful to me when I have encountered
              different areas in my career.
            </p>
          </FramerWrapper>
        </div>
      </div>
    </div>
  )
}

export default educationPage
