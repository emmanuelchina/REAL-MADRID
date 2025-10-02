import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Cristiano Ronaldo',
    description:
      'All-time top scorer, 4 Champions League titles with Real Madrid, 4 Ballon dOr awards at the club'
      ,
    icon: LockClosedIcon,
  },
  {
    name: 'Alfredo Di Stéfano',
    description: 'Led Real Madrid to 5 consecutive European Cups, 8 La Liga titles, considered a club legend..',
    icon: LockClosedIcon,
  },
  {
    name: 'Raúl González',
    description: 'Former all-time top scorer, 3 Champions League titles, 6 La Liga titles.',
    icon: LockClosedIcon,
  },
   {
    name: 'Sergio Ramos',
    description: 'Captained the team to multiple Champions League and La Liga titles, known for leadership and crucial goals.',
    icon: LockClosedIcon,
  },

]

export default function Content() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-600"></h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                GREATEST PLAYERS
              </p>
              <p className="mt-6 text-lg/8 text-gray-700">
              Founded in 1902, it is one of the most successful and popular football clubs in the world. Real Madrid has won numerous domestic and international titles, including a record number of UEFA Champions League trophies and La Liga championships..
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-600" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Real madrid"
            src="/image/football-1873612_1280.jpg"
            width={1000}
            height={1000}
            className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  )
}
