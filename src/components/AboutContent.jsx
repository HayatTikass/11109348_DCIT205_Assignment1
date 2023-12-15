// import React from "react";

import { Link } from "react-router-dom";

function AboutContent() {
  return (
    <div className="relative isolate overflow-hidden bg-[rgba(0,0,0,0.1)] py-24 sm:py-32">
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            About Us
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            <Link href="#">
              BSc. Information Technology <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link href="#">
              Bsc. Computer Science <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link href="#">
              Msc/ MPhil. Computer Science{" "}
              <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link href="#">
              PHD In Computer Science <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col-reverse">
              <dt className="text-base leading-7 text-gray-300">Lectures</dt>
              <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                20
              </dd>
            </div>
            <div className="flex flex-col-reverse">
              <dt className="text-base leading-7 text-gray-300">
                Sudent & Graduate
              </dt>
              <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                3000+
              </dd>
            </div>
            <div className="flex flex-col-reverse">
              <dt className="text-base leading-7 text-gray-300">
                Modays - Friday
              </dt>
              <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                Open days
              </dd>
            </div>
            <div className="flex flex-col-reverse">
              <dt className="text-base leading-7 text-gray-300">
                Paid time off
              </dt>
              <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                Unlimited
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
