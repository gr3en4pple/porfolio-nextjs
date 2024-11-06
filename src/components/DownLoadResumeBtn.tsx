import { cn } from '@/lib/utils'
import { Download } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'
import HackerBtn from './animation/HackerBtn'
import ViewResumeBtn from './ViewResumeBtn'

function DownLoadResumeBtn() {
  return (
    <div className="h-fit flex flex-col md:flex-row gap-4 mt-2 py-2 px-4">
      <HackerBtn label="Download Resume" />
      <ViewResumeBtn />
    </div>
  )
}

export default DownLoadResumeBtn
