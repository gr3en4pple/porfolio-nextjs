import React from 'react'

const List = [
  'A Sport Enthusiast',
  'A Stoic person',
  'An Owner of two 🐕',
  'An Adventurous guy',
  'A part-time Social Guy',
  'A Sport Enthusiast'
]

function TextRotator() {
  return (
    <div className="py-4  rounded-md flex flex-col justify-center items-center overflow-hidden">
      <div className="font-poppins text-base sm:text-2xl [text-wrap:balance] text-gray-700">
        I am a Software Developer &
        <span className="inline-flex ml-2 flex-col h-[calc(theme(fontSize.lg)*theme(lineHeight.tight))] sm:h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] overflow-hidden">
          <ul className="block text-left font-rubik text-lg sm:text-3xl leading-tight [&_li]:block animate-text-slide">
            {List.map((e, index) => (
              <li key={index} className="text-[#2f7df4]">
                {e}
              </li>
            ))}
          </ul>
        </span>
      </div>
    </div>
  )
}

export default TextRotator
