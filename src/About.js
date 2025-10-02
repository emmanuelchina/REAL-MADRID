import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Footer from "./Footer";
import Navbar from "./Navbar";

const navigation = [
  { name: "home", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function About() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            aria-hidden="true"
            className="absolute top-0 left-[max(50%,25rem)] h-256 w-512 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-200"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
              width="100%"
              height="100%"
              strokeWidth={0}
            />
          </svg>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base/7 font-semibold text-indigo-600"></p>
                <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl"></h1>
                <p className="mt-6 text-xl/8 text-gray-700">
                  Real Madrid Club de Fútbol, commonly known as Real Madrid, is
                  a professional football club based in Madrid, Spain. Founded
                  in 1902, it is one of the most successful and popular football
                  clubs in the world. Real Madrid has won numerous domestic and
                  international titles, including a record number of UEFA
                  Champions League trophies and La Liga championships
                </p>
              </div>
            </div>
          </div>
          <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              alt=""
              src="/image/soccer-2311841_1280.png" height={500} width={500}
              className="w-3xl max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-100"
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base/7 text-gray-600 lg:max-w-lg">
                <p>
                  The team plays its home matches at the Santiago Bernabéu
                  Stadium. Real Madrid is known for its all-white kit and has a
                  historic rivalry with FC Barcelona, known as "El Clásico." The
                  club is also recognized for its strong financial position and
                  global fanbase.
                </p>
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <ServerIcon
                      aria-hidden="true"
                      className="mt-1 size-5 flex-none "
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        {" "}
                        Alfredo Di Stefano
                      </strong>{" "}
                      Real Madrid is not just a football club, it’s an
                      institution that represents glory, honor, and history.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <ServerIcon
                      aria-hidden="true"
                      className="mt-1 size-5 flex-none "
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Cristiano Ronaldo
                      </strong>{" "}
                      Playing for Real Madrid was a dream, the best chapter of
                      my life
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <ServerIcon
                      aria-hidden="true"
                      className="mt-1 size-5 flex-none "
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Luka Modric
                      </strong>{" "}
                      The Madrid shirt can be spainted with blood, sweat and
                      tears but never with shame.
                    </span>
                  </li>
                </ul>
                <p className="mt-8">
                  "Real Madrid is the best club in the world because it never
                  gives up, no matter the circumstances." –{" "}
                  <strong className="font-semibold text-gray-900">
                    Zinedine Zidane
                  </strong>
                </p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                  No Player? No problem.
                </h2>
                <p className="mt-6">
                  Real Madrid’s greatness goes beyond individual players; it is
                  built on history, culture, and an unshakable winning spirit.
                  Legends may come and go, but the club’s identity remains
                  rooted in excellence, resilience, and ambition. With 15
                  Champions League titles and unmatched consistency, Madrid has
                  proven that no single star defines it—the white shirt itself
                  inspires glory. Every generation produces new heroes, yet the
                  institution stands taller than any individual. Fueled by its
                  fans, its royal heritage, and its relentless pursuit of
                  victory, Real Madrid continues to be the benchmark of world
                  football—an eternal symbol of greatness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
