import Link from '@/components/Link'

export default function FourZeroFour() {
  return (
    <div className="flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
      <div className="space-x-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-brandTitle dark:text-gray-100 md:border-r-2 md:px-6 md:text-8xl md:leading-14">
          404
        </h1>
      </div>
      <div className="max-w-md">
        <p className="mb-4 text-xl font-bold leading-normal text-brandTitle dark:text-gray-300 md:text-2xl">
          Desculpe, não conseguimos encontrar esta página.
        </p>
        <p className="mb-8 text-brandSubTitle dark:text-gray-300">
          Mas não se preocupe, você pode encontrar muitas outras coisas em nossa página inicial.
        </p>
        <Link href="/">
          <button className="focus:shadow-outline-blue btn btn-primary mt-5 px-4 py-2 normal-case leading-5 ">
            Voltar à página inicial
          </button>
        </Link>
      </div>
    </div>
  )
}
