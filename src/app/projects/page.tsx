import FramerWrapper from '@/components/animation/FramerWrapper'
import Heading from '@/components/Heading'
import ProjectCards from '@/components/ProjectsCard'
import { Badge } from '@/components/ui/badge'
import { FolderGit2, Layers } from 'lucide-react'

const projectsPage = () => {
  // PROJECTS DATA
  const Projects = [
    {
      title: "Nami Foundation official's Website",
      description:
        'The official landing page of Nami Foundation, an organization aiming to create an equal and transparent economic environment in the financial sector through Blockchain.',
      tags: ['Nextjs', 'Typescript', 'TailwindCSS', 'Framer motion'],
      link: 'https://nami.foundation'
    },

    {
      title: 'Nami Exchange - Cryptocurrencies exchange',
      description:
        "A safe and secure centralized cryptocurrencies exchange of spot and futures trading in the Nami Foundation's Ecosystem",
      tags: ['Nextjs', 'Redux', 'SWR', 'TailwindCSS', 'SCSS', 'SocketIO'],
      link: 'https://nami.exchange'
    },
    {
      title:
        'Winery Finance - A dApp running on BSC Network.',
      description:
        'A decentralized application during the Web3 explosive time. It includes key features such as AMM Swap, IDO, NFT Marketplace, and Lottery.',
      tags: [
        'Reactjs',
        'Typescript',
        'Styled Components',
        'Web3.js',
        'web3-react'
      ],
      link: 'https://winery.finance'
    }
  ]

  return (
    // PROJECT PAGE
    <div className="relative flex flex-col items-start w-full gap-5 my-10 overflow-hidden md:my-0">
      <Badge className="gap-2 ">
        <FolderGit2 className="w-5 h-5" />
        Projects
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Projects</Heading>
        <FramerWrapper y={0} x={200}>
          <p className="w-full text-lg font-poppins text-primary max-sm:text-base">
            I have been involved in building and working on projects from the
            initial stages to completion and product launch. These projects have
            teams ranging from 3 to 10 members, with the team size corresponding
            to the complexity of the project. I have been fortunate to work on
            various projects related to Cryptocurrency, Blockchain, and Finance.
            However, I am also capable of handling projects in other industries.{' '}
            <br />
            Here is a list of various projects that i have worked on. Feel free
            to have a quick look around of my projects.
          </p>
        </FramerWrapper>
      </div>

      <div className="flex flex-row flex-wrap w-full gap-3 max-lg:flex-col">
        {Projects.map((val, indx) => {
          return <ProjectCards key={indx} value={val} num={indx} />
        })}
      </div>
    </div>
  )
}

export default projectsPage
