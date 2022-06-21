import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-gray-400 dark:border-gray-700">
      <div className="my-8 flex flex-row flex-wrap items-center justify-center md:justify-between">
        <div className="mr-4 mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>
            {`© ${new Date().getFullYear()}`} {siteMetadata.author}
          </div>
          <div> • </div>
          <Link href="/">Blog</Link>
        </div>
        <div className="flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
        </div>
      </div>
    </footer>
  )
}
