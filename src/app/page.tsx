import SocialLinks from '@/components/SocialLinks'
import HeroTexts from '@/components/HeroTexts'
import HeroImage from '@/components/HeroImage'
import DownLoadResumeBtn from '@/components/DownLoadResumeBtn'
import FramerWrapper from '@/components/animation/FramerWrapper'

export const siteConfig = {
  name: 'Giang Nguyen',
  description: 'I am a Passionate Frontend Developer',
  ogImage:
    'https://ntgiang-portfolio.vercel.app/myself-smiling.jpg',
  url: 'https://ntgiang-portfolio.vercel.app'
}
export default function Home() {
  return (
    <>
      {/* LEFT SIDE  */}
      <FramerWrapper
        className="my-10 md:my-0 h-full w-auto flex flex-col justify-start gap-4"
        y={0}
        x={-100}
      >
        <HeroTexts />
        <div className="p-4 ">
          <p className="mb-1 font-bold text-xl">Keep in touch with me 🤙🤙</p>
          <div className="h-fit w-full flex gap-3">
            <SocialLinks />
          </div>
        </div>

        <DownLoadResumeBtn />
      </FramerWrapper>
      {/* RIGHT SIDE image  */}
      <FramerWrapper
        className="h-full w-[47%] relative block   max-lg:hidden"
        y={0}
        x={100}
      >
        {/* IMAGE  */}
        <HeroImage />
      </FramerWrapper>
    </>
  )
}
