import React from 'react';

function Client() {
  return (
    <div className="client py-12 px-4 sm:px-6 lg:px-10 bg-white">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h4 className="text-orange-400 text-2xl sm:text-3xl tracking-widest">
          T&nbsp;e&nbsp;s&nbsp;t&nbsp;i&nbsp;m&nbsp;o&nbsp;n&nbsp;i&nbsp;a&nbsp;l
        </h4>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#2D3B36]">Our Clients Say</h1>
      </div>

      {/* Clients Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Client 1 */}
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-4">
            <img className="w-20 h-20 rounded-full" src={require('./img/person.jpg')} alt="Client 1" />
            <div className="ml-4">
              <h4 className="text-lg font-semibold">Client Name</h4>
              <i className="text-sm">Profession</i>
            </div>
          </div>
          <p className="text-sm font-montserrat text-[#2D3B36] hidden sm:block">
            Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem.
            Dolor tempor ipsum sanct clita.
          </p>
        </div>

        {/* Client 2 */}
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-4">
            <img className="w-20 h-20 rounded-full" src={require('./img/person2.jpg')} alt="Client 2" />
            <div className="ml-4">
              <h4 className="text-lg font-semibold">Client Name</h4>
              <i className="text-sm">Profession</i>
            </div>
          </div>
          <p className="text-sm font-montserrat text-[#2D3B36] hidden sm:block">
            Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem.
            Dolor tempor ipsum sanct clita.
          </p>
        </div>

        {/* Client 3 */}
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-4">
            <img className="w-20 h-20 rounded-full" src={require('./img/person3.jpg')} alt="Client 3" />
            <div className="ml-4">
              <h4 className="text-lg font-semibold">Client Name</h4>
              <i className="text-sm">Profession</i>
            </div>
          </div>
          <p className="text-sm font-montserrat text-[#2D3B36] hidden sm:block">
            Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem.
            Dolor tempor ipsum sanct clita.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Client;
