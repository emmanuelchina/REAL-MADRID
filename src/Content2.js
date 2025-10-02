import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Jude Bellingham (Midfielder)',
    description:
      'A dynamic English midfielder, key to Madrid’s attack and midfield control.',
    icon: LockClosedIcon,
  },
  {
    name: 'Vinícius Júnior (Forward) ',
    description:
      'A fast, skillful winger known for his dribbling and goal-scoring.',
    icon: LockClosedIcon,
  },
  {
    name: 'Rodrygo Goes (Forward)',
    description:
      ' A versatile Brazilian attacker, important for goals and assists.',
    icon: LockClosedIcon,
  },
  {
    name: 'Aurélien Tchouaméni (Midfielder)',
    description:
      'A powerful French midfielder, excellent at breaking up play and distributing the ball.',
    icon: LockClosedIcon,
  },
  {
    name: 'Thibaut Courtois (Goalkeeper)',
    description:
      'One of the world’s top goalkeepers, crucial for Madrid’s defense.',
    icon: LockClosedIcon,
  },
 
]

export default function Content2() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600"></h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Real Madrid Current Best Players
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
           The team plays its home matches at the Santiago Bernabéu Stadium. Real Madrid is known for its all-white kit and has a historic rivalry with FC Barcelona, known as "El Clásico".
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
