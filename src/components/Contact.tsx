import React from 'react';

import Divider from './Divider';

const Contact = () => {
  return (
    <section className="bg-background py-8" id="contact">
      <div className="container max-w-5xl mx-auto m-8">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-primary">
          Entre em contato
        </h1>

        <Divider />

        <div className="flex flex-wrap justify-center">
          <div className="w-5/6 sm:w-2/3 p-6 mt-10 text-center">
            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
              Vamos conversar sobre o seu projeto
            </h3>

            <p className="text-gray-600 mb-6">
              Quer tirar uma ideia do papel, evoluir um sistema ou entender como a zCore pode ajudar?
              Envie uma mensagem e retornamos o mais rápido possível.
            </p>

            <p className="text-gray-600">
              E-mail:{' '}
              <a
                href="mailto:contato@zcore.com.br"
                className="font-medium text-primary hover:text-secondary"
              >
                contato@zcore.com.br
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
