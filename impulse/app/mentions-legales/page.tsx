"use client";

export default function MentionsLegales() {
  const primaryColor = "#4186fd";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* En-tête */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900">Mentions Légales</h1>
          <p className="mt-4 text-lg text-gray-600">
            Informations légales et conditions d'utilisation du site Impulse
          </p>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Section 1 : Éditeur */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            <span style={{ color: primaryColor }} className="font-semibold">
              1.
            </span>{" "}
            Éditeur du site
          </h2>
          <div className="bg-white rounded-lg shadow-sm p-6 border-l-4" style={{ borderColor: primaryColor }}>
            <p className="text-gray-700 mb-2">
              <strong>Raison sociale :</strong> Impulse
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Type :</strong> Agence digitale spécialisée sport
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Adresse :</strong> 12 Rue de l`Impulsion
75000 Paris, France
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Téléphone :</strong> (+33) 1 23 45 67 89
            </p>
            <p className="text-gray-700">
              <strong>Email :</strong> impulse.ydays@gmail.com
            </p>
          </div>
        </section>

        {/* Section 2 : Hébergeur */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            <span style={{ color: primaryColor }} className="font-semibold">
              2.
            </span>{" "}
            Hébergeur
          </h2>
          <div className="bg-white rounded-lg shadow-sm p-6 border-l-4" style={{ borderColor: primaryColor }}>
            <p className="text-gray-700 mb-2">
              <strong>Société :</strong> Vercel Inc.
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Adresse :</strong> 440 N Barranca Ave, Covina, CA 91723, USA
            </p>
            <p className="text-gray-700">
              <strong>Site Web :</strong>{" "}
              <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" style={{ color: primaryColor }} className="hover:underline">
                www.vercel.com
              </a>
            </p>
          </div>
        </section>

        {/* Section 3 : Conditions d'utilisation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            <span style={{ color: primaryColor }} className="font-semibold">
              3.
            </span>{" "}
            Conditions d'utilisation
          </h2>
          <div className="bg-white rounded-lg shadow-sm p-6 border-l-4" style={{ borderColor: primaryColor }}>
            <p className="text-gray-700 mb-4">
              L'utilisateur s'engage à utiliser le site de manière conforme à la loi et à ne pas procéder à des actes pouvant porter 
              préjudice à Impulse ou à ses partenaires. Entre autres, l'utilisateur s'engage à ne pas :
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Reprocher le contenu du site de manière frauduleuse ou illégitime</li>
              <li>Utiliser le site à des fins commerciales non autorisées</li>
              <li>Télé-charger ou propager des virus informatiques ou tout code nuisible</li>
              <li>Troubler le bon fonctionnement du site</li>
              <li>Violer les droits de tiers (propriété intellectuelle, droit à l'image)</li>
            </ul>
          </div>
        </section>

        {/* Section 4 : Propriété intellectuelle */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            <span style={{ color: primaryColor }} className="font-semibold">
              4.
            </span>{" "}
            Propriété intellectuelle
          </h2>
          <div className="bg-white rounded-lg shadow-sm p-6 border-l-4" style={{ borderColor: primaryColor }}>
            <p className="text-gray-700">
              L'ensemble des contenus du site (textes, images, vidéos, logos, graphiques, etc.) sont la propriété exclusive 
              d'Impulse ou de ses partenaires et sont protégés par les lois applicables en matière de propriété intellectuelle. 
              Toute reproduction, modification ou exploitation du contenu sans autorisation préalable est strictement interdite.
            </p>
          </div>
        </section>

        {/* Section 5 : Limitation de responsabilité */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            <span style={{ color: primaryColor }} className="font-semibold">
              5.
            </span>{" "}
            Limitation de responsabilité
          </h2>
          <div className="bg-white rounded-lg shadow-sm p-6 border-l-4" style={{ borderColor: primaryColor }}>
            <p className="text-gray-700 mb-4">
              Impulse met en œuvre des efforts raisonnables pour assurer que les informations fournies sur le site sont exactes 
              et à jour. Cependant, Impulse ne peut pas garantir l'exactitude, l'exhaustivité ou l'adéquation des informations 
              fournies sur le site.
            </p>
            <p className="text-gray-700">
              Impulse n'est pas responsable des dommages directs ou indirects resultant de l'accès ou de l'utilisation du site.
            </p>
          </div>
        </section>

        {/* Section 6 : Données personnelles */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            <span style={{ color: primaryColor }} className="font-semibold">
              6.
            </span>{" "}
            Protection des données personnelles
          </h2>
          <div className="bg-white rounded-lg shadow-sm p-6 border-l-4" style={{ borderColor: primaryColor }}>
            <p className="text-gray-700 mb-4">
              En conformité avec le Règlement Général sur la Protection des Données (RGPD), Impulse s'engage à protéger 
              vos données personnelles.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Collecte des données :</strong> Les données personnelles sont collectées lors de votre utilisation du site, 
              notamment via notre formulaire de contact ou nos services.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Utilisation :</strong> Vos données sont utilisées pour vous fournir nos services, communiquer avec vous et 
              améliorer notre offre.
            </p>
            <p className="text-gray-700">
              <strong>Droits :</strong> Vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données. 
              Pour exercer ces droits, contactez-nous à : impulse.ydays@gmail.com
            </p>
          </div>
        </section>

        {/* Section 7 : Cookies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            <span style={{ color: primaryColor }} className="font-semibold">
              7.
            </span>{" "}
            Cookies
          </h2>
          <div className="bg-white rounded-lg shadow-sm p-6 border-l-4" style={{ borderColor: primaryColor }}>
            <p className="text-gray-700 mb-4">
              Le site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic. Les cookies sont des 
              petits fichiers stockés sur votre appareil.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Types de cookies :</strong> Cookies de session, cookies de préférences et cookies d'analyse
            </p>
            <p className="text-gray-700">
              Vous pouvez contrôler les cookies via les paramètres de votre navigateur.
            </p>
          </div>
        </section>

        {/* Section 8 : Liens externes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            <span style={{ color: primaryColor }} className="font-semibold">
              8.
            </span>{" "}
            Liens externes
          </h2>
          <div className="bg-white rounded-lg shadow-sm p-6 border-l-4" style={{ borderColor: primaryColor }}>
            <p className="text-gray-700">
              Le site contient des liens vers d'autres sites Web. Impulse n'est pas responsable du contenu de ces sites tiers. 
              L'accès à ces liens se fait à vos risques et périls.
            </p>
          </div>
        </section>

        {/* Section 9 : Modification des conditions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            <span style={{ color: primaryColor }} className="font-semibold">
              9.
            </span>{" "}
            Modification des conditions
          </h2>
          <div className="bg-white rounded-lg shadow-sm p-6 border-l-4" style={{ borderColor: primaryColor }}>
            <p className="text-gray-700">
              Impulse se réserve le droit de modifier à tout moment les présentes mentions légales. Les modifications entreront 
              en vigueur dès leur publication sur le site.
            </p>
          </div>
        </section>

        {/* Section 10 : Contact */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            <span style={{ color: primaryColor }} className="font-semibold">
              10.
            </span>{" "}
            Contact
          </h2>
          <div className="bg-white rounded-lg shadow-sm p-6 border-l-4" style={{ borderColor: primaryColor }}>
            <p className="text-gray-700 mb-2">
              Pour toute question ou réclamation concernant ces mentions légales, veuillez nous contacter :
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Email :</strong> impulse.ydays@gmail.com
            </p>
            <p className="text-gray-700">
              <strong>Formulaire de contact :</strong>{" "}
              <a href="/contact" style={{ color: primaryColor }} className="hover:underline">
                Cliquez ici
              </a>
            </p>
          </div>
        </section>

        {/* Date */}
        <div className="text-center text-gray-500 text-sm border-t pt-8">
          <p>Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}</p>
        </div>
      </div>
    </div>
  );
}
