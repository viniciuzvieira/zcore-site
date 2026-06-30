import React from 'react';

import config from '../config/index.json';

const MainHero = () => {
  const { mainHero } = config;
  const titleLines = mainHero.titleLines?.length
    ? mainHero.titleLines
    : [mainHero.title];

  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-5xl xl:text-5xl">
          {titleLines.map((line, index) => (
            <span
              key={line}
              className={index === 0 ? 'block lg:whitespace-nowrap' : 'block'}
            >
              {line}
            </span>
          ))}
          <span className="block lg:whitespace-nowrap text-primary">
            {mainHero.subtitle}
          </span>
        </h1>
        <p className="mt-4 max-w-xl pr-4 text-base leading-relaxed text-gray-500 sm:mx-auto sm:pr-0 sm:text-lg md:mt-5 md:text-xl lg:mx-0">
          {mainHero.description}
        </p>
      </div>
    </main>
  );
};

export default MainHero;
