import Image from 'next/image';

const ContactDetail = ({ icon, title, value }: { icon: React.ReactNode, title: string, value: string | React.ReactNode }) => (
  <div className="flex items-start mb-6">
    <div className={`text-2xl text-[#4186fd] flex-shrink-0 mr-4 mt-1`}>
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      <p className="text-gray-600">{value}</p>
    </div>
  </div>
);

export default function ContactPage() {
  const primaryColor = '#4186fd';

  return (
    <div className="flex flex-grow flex-col">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
        
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Prenez contact avec Impulse
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre équipe d'experts est là pour répondre à toutes vos questions sur les formations, les financements ou l'application.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 bg-white p-8 md:p-12 rounded-xl shadow-2xl border border-gray-100">
          
          <div className="lg:col-span-1 bg-gray-50 p-6 rounded-lg shadow-inner">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-3">Informations Clés</h2>
            
            <ContactDetail
              icon={<span>📧</span>} 
              title="Email Professionnel"
              value={<a href="mailto:contact@impulse.com" className={`hover:text-[${primaryColor}]`}>contact@impulse.com</a>}
            />

            <ContactDetail
              icon={<span>📞</span>} 
              title="Téléphone"
              value={<a href="tel:+33123456789" className={`hover:text-[${primaryColor}]`}>(+33) 1 23 45 67 89</a>}
            />

            <ContactDetail
              icon={<span>📍</span>}
              title="Siège Social"
              value={
                <>
                  12 Rue de l'Impulsion <br/>
                  75000 Paris, France
                </>
              }
            />

            <ContactDetail
              icon={<span>⏰</span>} 
              title="Heures d'ouverture"
              value="Lundi au Vendredi : 9h00 - 18h00"
            />
            
            <div className="mt-8">
                <h3 className="font-bold text-gray-800 mb-3">Nous trouver :</h3>
                <div className="h-40 bg-gray-200 rounded-lg flex items-center justify-center text-sm text-gray-500 border border-gray-300">
                    <Image
                        src="/map.png"
                        alt="Carte du siège social Impulse"
                        width={200}
                        height={120}
                        className="object-contain h-full w-auto"
                        priority
                    />
                </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Envoyez-nous un message</h2>
            <p className="text-gray-600 mb-8">
                Pour une demande d'information rapide ou pour prendre rendez-vous, veuillez utiliser le formulaire ci-dessous.
            </p>
            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom complet</label>
                        <input type="text" id="name" name="name" placeholder="Votre nom" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-[#4186fd] focus:border-[#4186fd]" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Adresse Email</label>
                        <input type="email" id="email" name="email" placeholder="votre@email.com" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-[#4186fd] focus:border-[#4186fd]" />
                    </div>
                </div>
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Sujet de la demande</label>
                    <input type="text" id="subject" name="subject" placeholder="Ex: Informations sur le CPF" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-[#4186fd] focus:border-[#4186fd]" />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Votre Message</label>
                    <textarea id="message" name="message" rows={5} placeholder="Décrivez votre demande..." className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-[#4186fd] focus:border-[#4186fd]"></textarea>
                </div>
                <div>
                    <button
                        type="submit"
                        className={`w-full py-3 px-6 border border-transparent rounded-md shadow-lg text-lg font-semibold text-white bg-[${primaryColor}] hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4186fd] transition duration-200`}
                    >
                        Envoyer le message
                    </button>
                </div>

            </form>            
          </div>
        </div>
      </div>
    </div>
  );
}