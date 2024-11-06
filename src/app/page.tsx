import SocialLinks from '@/components/SocialLinks'
import HeroTexts from '@/components/HeroTexts'
import HeroImage from '@/components/HeroImage'
import DownLoadResumeBtn from '@/components/DownLoadResumeBtn'
import FramerWrapper from '@/components/animation/FramerWrapper'

export const siteConfig = {
  name: 'Giang Nguyen',
  description: 'I am a Passionate Frontend Developer',
  ogImage:
    'https://lh3.googleusercontent.com/fife/ALs6j_HJSZrxB71yO1jToIoaCAF283dJKpOKqkjA9WMj9T5H85n1GFhUbcZU1_C_INFINQJtTEPPfUaUwdDeoD3VJZGeFPx3bkNgVzTWE3EsPZPgmxrZ6WPwAR2mnkemxJlFOpFlAZzo_ZNfeou9FM8JkepNfUVm6kAddDTPS676LotkNfq2krb3U45tWQM7Mpoi8dieKgWdQFo8rSO7UaPjxlt0MUIU7S2rOsfKfmi9g3ren83e9O2Yk4QA-4gP0kKK4FUa3B02PnbEYGCZMhRY8bire0TWsvF_B475SLiIN_5j9FXh9NvoVj4hYzZam-mt_jmaXwuE2o377ovQKkGE9clFySc0jZHgQFH66yoIdYLCUZSea-QLIESH-mLP0IkcwScG3hjwJPiErDx-LzENsSth7rHVz8JhKAvMedBL7NtuQCTfsYffn9_vzWA2X9YNb__AIx1iUKQCP9oqjhC_uWhscJ1bBnEZh--XXXY0fYyd3Z-W4G40OXwYquj_ZuYn3hYtAvELh49xRZjQjfTD6PjakdcaALQ-P2gRi4xc9hLw5znN7yNmTsl2tNF1owxoq9QPTpm3JvzsOqjzDY5TzEXz2dhGqwXYSGCs-2Tjy3cChYnXOM4cWSu4WYhm0DCuRGe6siF8TgMXzJTOqluhly-rR7w4c85NSq2bGDg6jPXMpO8oqRAHIgpqGDFT6r9KaBYyUzUE6bWYookXhI3TePo_WLJck0pOYYLd7mwOGF8zNEuCzSAZL8VQ1O497mh4-SE2wMTbC1yJEhUAg3nnLeyOp-FrX9x6yJP-2BAeEl1p_W0Eofpd1hZcoNpGCrf5sMjAlY-kH7YEJ5135sWcBS-r6VuUHSlhjD9wsqDIvF6yFbVp8e3aXQSoeprSbfUhkc6V3lF5zYPUW7HBopb_iTqKqUKjUIpuWVcbFZ9JTn3L_lLpSmUOK-32dH7HU4JRdl-8qN4b4YDLfPZQwlp3pFm1WvPcouIB8Ta5FPn1eCOpJkqMaqg7WHgv5ESZufSQB0k6ic6ASddynHJleZbl5RWWWrVzVHtIsSsNZwa6zgFgQT-qljGW8uJz7FGGrfYxts4Vv_YetpYYME6-THWj_TPe4JzLvuoyY-dIX_qo6dHYJJ3meuOMKPPyNie53EKqCV6qesAfl1d5hQj7io4B7bYIi2LBxjJJn0bJTULq7bt6A2phmf-xgDb1L9YoEJmYB14rzfi4FkXskaXiS1FfSlS4ykMvpj1mYopkdiD5vTy9cTwYes-HgwmL4IUocp6PLqPmKUyzj5pTkT--VoPF7wBmeezz6u-G85LIkUZIZdv8NWo6dztQyLZe73l8TfL14q6DRoYe1hQ_aFQnIqzSeCtdmB4rQxdjBDEkr-kffNQDD2-bJ_H9LKk-CHJxfvhXRfbJrSNx6UHYRD-aJhyUekPZm7PWUx_gPZ90-UWvAGggOGRJ-gQFA5JSOXRzWn6ke1CSQkzNBmzfNzlTZ2CIFZE-SrvECpoNbFbxZkiPGHqYSMK9VBgviycpra0RXAtiNjdcLzAQCsQg2OeXydt_EhnzmxOBLapMBhj6OPcBFn70il-435Wp_sarL5vgAtNh0P6KDvtO5RtbihuewPJAJNDNGk67MU12KwCfuHxCFFwcQaoGfYXeSckUxSwGyaY00BoQEWYgxrCgzfUjzmOyOw=w1000?authuser=0',
  url: ''
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
