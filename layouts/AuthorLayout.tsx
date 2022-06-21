import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import { ReactNode } from 'react'
import { AuthorFrontMatter } from 'types/AuthorFrontMatter'

interface Props {
  children: ReactNode
  frontMatter: AuthorFrontMatter
}

export default function AuthorLayout({ children, frontMatter }: Props) {
  const { name, avatar, company, email, linkedin, github } = frontMatter

  return (
    <>
      <PageSEO title={`Sobre nós - ${name} Blog`} description={`Sobre nós - ${name}`} />
      <div className="mt-10 divide-y divide-gray-600">
        {/* <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className=" text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Lorem Ipsum dolor amet
          </h1>
        </div> */}
        <div className="items-start space-y-2  xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8">
            <span className="dark:invert">
              <Image
                src={avatar}
                alt="avatar"
                width="178px"
                height="192px"
                className="h-48 w-48 "
              />
            </span>
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight text-black dark:text-gray-100">
              {name}
            </h3>
            <div className="text-center text-brandSubTitle dark:text-gray-400">{company}</div>
            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
            </div>
          </div>
          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">{children}</div>
        </div>
      </div>
    </>
  )
}
