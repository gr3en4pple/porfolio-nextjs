import Image from 'next/image'
import React from 'react'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'

interface MyComponentProps {
  items: Array<{ alt: string; img: any; description: string }>
}

const SkillsFooter: React.FC<MyComponentProps> = ({ items }) => {
  return (
    <>
      {items &&
        items.map((val, indx) => {
          return (
            <div className="p-4 w-1/4 lg:w-[12.5%]" key={indx}>
              <Tooltip delayDuration={0.1}>
                <TooltipTrigger asChild>
                  <Image
                    src={val?.img}
                    alt={val?.alt}
                    className="object-cover w-12 h-12 rounded-full md:w-20 md:h-20 border-[0.5px] border-slate-200 max-h-20"
                  />
                </TooltipTrigger>
                <TooltipContent>{val.description}</TooltipContent>
              </Tooltip>
            </div>
          )
        })}
    </>
  )
}

export default SkillsFooter
