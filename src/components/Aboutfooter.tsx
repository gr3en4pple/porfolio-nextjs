import { Circle, Dna, Globe2, Languages } from 'lucide-react'
const items = [
  {
    name: 'Language',
    answer: 'Vietnamese, English',
    icon: <Languages className="w-6 h-6 md:h-11 md:w-11" />
  },
  {
    name: 'Nationality',
    answer: 'Vietnam 🇻🇳',
    icon: <Globe2 className="w-6 h-6 md:h-8 md:w-8" />
  },
  { name: 'Gender', answer: 'Male ', icon: <Dna className="w-6 h-6 md:h-8 md:w-8" /> }
]
const Aboutfooter = () => {
  return (
    <>
      {items.map((val, indx) => {
        return (
          <div className="relative p-1 w-fit" key={indx}>
            <h1 className="relative flex gap-2 text-xl font-semibold md:text-3xl font-poppins text-primary icon_underline max-sm:text-2xl">
              {val.icon}
              {val.name}
            </h1>
            <div className="flex flex-row items-center justify-center gap-2 pt-3 md:text-xl text-primary max-lg:justify-start">
              <Circle className="w-3 h-3" /> {val.answer}
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Aboutfooter
