"use client";

import Image from 'next/image';
import React, { useState } from 'react';

const ContactDetail = ({ icon, title, value }: { icon: React.ReactNode, title: string, value: string | React.ReactNode }) => (
  <div className="flex items-start mb-6">
    <div className="text-2xl text-[#4186fd] flex-shrink-0 mr-4 mt-1">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      <div className="text-gray-600">{value}</div>
    </div>
  </div>
);

export default function ContactPage() {

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setErrorMessage(result.error || "Une erreur est survenue.");
        setStatus('error');
      }
    } catch (error) {
      setErrorMessage("Impossible de contacter le serveur.");
      setStatus('error');
    }
  };

  return (
    <div className="flex flex-grow flex-col">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
        
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Prenez contact avec Impulse
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre équipe d`experts est là pour répondre à toutes vos questions sur les formations, les financements ou l`application.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 bg-white p-8 md:p-12 rounded-xl shadow-2xl border border-gray-100">
          
          <div className="lg:col-span-1 bg-gray-50 p-6 rounded-lg shadow-inner">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-3">Informations Clés</h2>
            
            <ContactDetail
              icon={<span>📧</span>} 
              title="Email Professionnel"
              value={<a href="mailto:impulse.ydays@gmail.com" className="hover:text-[#4186fd] transition-colors">impulse.ydays@gmail.com</a>}
            />

            <ContactDetail
              icon={<span>📞</span>} 
              title="Téléphone"
              value={<a href="tel:+33123456789" className="hover:text-[#4186fd] transition-colors">(+33) 1 23 45 67 89</a>}
            />

            <ContactDetail
              icon={<span>📍</span>}
              title="Siège Social"
              value={
                <>
                  12 Rue de l`Impulsion <br/>
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
                Pour une demande d`information rapide ou pour prendre rendez-vous, veuillez utiliser le formulaire ci-dessous.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom complet</label>
                        <input required type="text" id="name" name="name" placeholder="Votre nom" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-[#4186fd] focus:border-[#4186fd] outline-none" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Adresse Email</label>
                        <input required type="email" id="email" name="email" placeholder="votre@email.com" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-[#4186fd] focus:border-[#4186fd] outline-none" />
                    </div>
                </div>
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Sujet de la demande</label>
                    <input required type="text" id="subject" name="subject" placeholder="Ex: Informations sur le CPF" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-[#4186fd] focus:border-[#4186fd] outline-none" />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Votre Message</label>
                    <textarea required id="message" name="message" rows={5} placeholder="Décrivez votre demande..." className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-[#4186fd] focus:border-[#4186fd] outline-none"></textarea>
                </div>

                <div>
                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className={`w-full py-3 px-6 border border-transparent rounded-md shadow-lg text-lg font-semibold text-white transition duration-200 ${
                          status === 'loading' ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#4186fd] hover:bg-blue-600'
                        }`}
                    >
                        {status === 'loading' ? 'Envoi en cours...' : 'Envoyer le message'}
                    </button>
                </div>

                {/* Feedback Messages */}
                {status === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-md">
                    ✅ Votre message a été envoyé avec succès ! Un mail de confirmation vous a été adressé.
                  </div>
                )}
                {status === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-md">
                    ❌ {errorMessage || "Une erreur est survenue lors de l'envoi."}
                  </div>
                )}
            </form>            
          </div>
        </div>
      </div>
    </div>
  );
}