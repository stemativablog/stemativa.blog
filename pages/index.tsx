import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { PostFrontMatter } from 'types/PostFrontMatter'
// import NewsletterForm from '@/components/NewsletterForm'
import Image from '@/components/Image'
import SectionHero from '@/components/SectionHero'

const MAX_DISPLAY = 9

export const getStaticProps: GetStaticProps<{ posts: PostFrontMatter[] }> = async () => {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <SectionHero />
      <div className=" divide-gray-200 dark:divide-gray-700">
        <div className="my-4 flex flex-col">
          <span className="title-font text-3xl">Novos Posts</span>
          <span className="mb-4 inline-block h-0.5 w-20 rounded bg-accent"></span>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {!posts.length && 'Nenhum post encontrado.'}

          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, draft, summary, tags, images } = frontMatter

            const postStatus = draft

            if (!postStatus) {
              return (
                <div
                  key={slug}
                  className="bg-day dark:bg-night group w-full bg-opacity-50 dark:bg-opacity-50"
                >
                  <Link
                    className="c-card block transform overflow-hidden rounded-lg bg-transparent transition duration-500 group-hover:scale-105"
                    href={`/blog/${slug}`}
                  >
                    <div className="relative max-h-4 overflow-hidden rounded-lg pb-60">
                      <figure>
                        <Image
                          alt={title}
                          layout="fill"
                          placeholder="blur"
                          blurDataURL={`${images}`}
                          src={`${images}`}
                          className="absolute inset-0 h-full w-full transform object-cover opacity-80 transition duration-700 group-hover:scale-110 group-hover:opacity-100 dark:opacity-70"
                        />
                      </figure>
                    </div>
                    <div className="py-4">
                      <span className="inline-flex w-full items-center justify-between">
                        <div className="flex flex-wrap">
                          {tags.map((tag) => (
                            <Tag key={tag} text={tag} />
                          ))}
                        </div>
                        <time
                          className="text-sm font-semibold text-brandSubTitle dark:text-gray-300"
                          dateTime={date}
                        >
                          {formatDate(date)}
                        </time>
                      </span>
                      <h2 className="mt-2 mb-2 font-bold text-brandTitle dark:text-white md:text-xl">
                        {title}
                      </h2>
                      <p className="text-sm tracking-wider text-brandSubTitle dark:text-gray-300">
                        {summary}
                      </p>
                    </div>
                  </Link>
                </div>
              )
            }
          })}
        </div>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="my-8 flex justify-end text-xl font-medium leading-6">
          <Link className="hover:text-primary-600 dark:hover:text-primary-400" href="/blog">
            Todos Posts →
          </Link>
        </div>
      )}
      {/* <div className="grid grid-cols-1 space-y-10 py-10 sm:space-y-5 sm:py-24 xl:grid-cols-5">
        <div className="col-span-3 justify-center space-y-5 align-middle sm:space-y-2">
          <h1 className="text-xl font-bold leading-9 tracking-tight text-brandTitle dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-snug">
            Hi, Lorem ipsum
          </h1>
          <p className="text-lg leading-7 text-brandSubTitle dark:text-gray-400 sm:pr-6">
            Welcome to my Digital Garden – I am a <span className="font-bold">Data Scientist</span>{' '}
            by training and <span className="font-bold">Full-Stack Developer</span> by profession.
            In my free time, I like developing{' '}
            <Link href="/projects" className="text-primary-500 underline underline-offset-4">
              <a>side projects</a>
            </Link>{' '}
            and{' '}
            <Link href="/blog" className="text-primary-500 underline underline-offset-4">
              <a>blogging</a>
            </Link>{' '}
            about my journey as an Entrepreneur. Have a good read!
          </p>
        </div>
        {siteMetadata.newsletter.provider !== '' && (
          <div className="col-span-2 flex xl:items-center xl:justify-center xl:pl-6">
            <NewsletterForm />
          </div>
        )}
      </div> */}
    </>
  )
}
