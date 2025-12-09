import Image from 'next/image';
import Link from 'next/link';

export default function QuiSommesNousPage() {
  const primaryColor = '#4186fd';

  return (
    <div className="flex flex-grow flex-col">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* 4. PRÉSENTATION DE L'ÉQUIPE */}
        <section className="py-12 mb-12">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
                Rencontrez les Experts derrières Impulse
            </h2>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-10">
                Impulse est dirigée par des professionnels passionnés : des coachs certifiés, des experts en nutrition et des pédagogues.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                    
                    <Image src="/team-member-1.jpg" alt="Alexandre Dubois" width={150} height={150} className="rounded-full mx-auto mb-3 object-cover" />
                    <h4 className="font-semibold text-lg">Alexandre Dubois</h4>
                    <p className={`text-sm ${primaryColor}`}>Fondateur & Expert Coaching</p>
                </div>
                 <div className="text-center">
                    
                    <Image src="/team-member-2.jpg" alt="Sophie Leclerc" width={150} height={150} className="rounded-full mx-auto mb-3 object-cover" />
                    <h4 className="font-semibold text-lg">Sophie Leclerc</h4>
                    <p className={`text-sm ${primaryColor}`}>Directrice Pédagogique</p>
                </div>
                 <div className="text-center">
                    
                    <Image src="/team-member-3.jpg" alt="Marc Vidal" width={150} height={150} className="rounded-full mx-auto mb-3 object-cover" />
                    <h4 className="font-semibold text-lg">Marc Vidal</h4>
                    <p className={`text-sm ${primaryColor}`}>Responsable Relation Client</p>
                </div>
                 <div className="text-center">
                    
                    <Image src="/team-member-4.jpg" alt="Julie Fournier" width={150} height={150} className="rounded-full mx-auto mb-3 object-cover" />
                    <h4 className="font-semibold text-lg">Julie Fournier</h4>
                    <p className={`text-sm ${primaryColor}`}>Nutritionniste Sportive</p>
                </div>
            </div>
        </section>

      </div>
    </div>
  );
}