import myself from '../../public/myself-smiling.jpg'
import Image from 'next/image'

const HeroImage = () => {
  return (
    <>
      <Image
        src={myself}
        alt="logo"
        loading="eager"
        priority
        height={1000}
        width={1000}
      />
    </>
  )
}
export default HeroImage
