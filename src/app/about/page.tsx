import Aboutfooter from '@/components/Aboutfooter'
import FramerWrapper from '@/components/animation/FramerWrapper'
import Heading from '@/components/Heading'
import { Badge } from '@/components/ui/badge'
import { Circle, Heart, User2 } from 'lucide-react'

const Hobbies = [
  { hobby: 'Coding' },
  { hobby: 'Researching and learning new technologies' },
  { hobby: 'Reading books' },
  { hobby: 'Running, Trekking, Soccer' },
  { hobby: 'Playing music' }
]

const page = () => {
  return (
    // ABOUT PAGE
    <div className="relative flex flex-col items-start w-full h-full gap-5 my-10 overflow-hidden md:my-0">
      <Badge className="gap-2 ">
        <User2 className="w-5 h-5" />
        About me
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>Web Developer, Based In Saigon.</Heading>

        <FramerWrapper y={0} x={100}>
          <p className="w-full text-base font-poppins md:text-xl text-primary max-sm:text-lg">
            I am a Frontend Web Developer from Saigon, Vietnam. I love crafting
            cool web projects and creating fancy animation. My biggest
            achievement lies in my mastery of JavaScript and CSS, ensuring
            pixel-perfect designs that captivate users. With a keen eye for
            detail and a commitment to delivery speed, I excel at creating
            seamless and responsive interfaces that leave a lasting impression.
          </p>
        </FramerWrapper>
      </div>
      <FramerWrapper
        className="flex flex-row justify-between w-full max-lg:flex-col "
        y={100}
        delay={0.3}
      >
        <Aboutfooter />
      </FramerWrapper>
      <FramerWrapper className="block" y={100} delay={0.31}>
        <h1 className="relative flex gap-2 text-3xl font-semibold font-poppins text-primary icon_underline max-sm:text-2xl">
          {' '}
          <Heart className="w-6 h-6 md:h-8 md:w-8 " /> Hobbies
        </h1>
        <div className="flex flex-row justify-between w-full p-2 mt-3 h-fit gap-7 max-lg:flex-col">
          {Hobbies.map((val, indx) => {
            return (
              <div
                key={indx}
                className="flex flex-row items-center justify-center gap-2 md:text-xl text-primary max-lg:justify-start "
              >
                <Circle className="w-3 h-3" /> {val.hobby}
              </div>
            )
          })}
        </div>
      </FramerWrapper>
    </div>
  )
}

export default page
