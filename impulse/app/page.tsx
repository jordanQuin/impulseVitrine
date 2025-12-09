import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="flex flex-grow flex-col h-full">
      <section className="flex-grow mx-auto w-full h-full text-center flex flex-col justify-center">
        <h1 className="text-5xl font-nunito font-bold text-[#4186fd] mb-6">
          Bienvenue chez Impulse
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Nous proposons des formations professionnelles et personnelles en lien avec le sport, adaptées à vos besoins.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/formations"
            className="bg-[#4186fd] text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            Découvrir nos formations
          </a>
          <a
            href="/contact"
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg shadow-md hover:bg-gray-300 transition"
          >
            Nous contacter
          </a>
        </div>
      </section>
      {/* Footer will be placed here */}
    </div>
  );
}
