import Title from '../../components/ui/Title';


export default function MentionLegales() {
  return (
    <div>
        <Title text1="Mention Légales" custom1='p-2' />
        <p className='text-red-500 px-10' > *** Ce website est fictif ***</p>
        <section>

        <Title level="3" custom1='p-4 font-bold' text1='1 - Editeur du site' />
        <ul className='px-5'>

            <li>Nom : Adrien Aubourg</li>
            <li>Email : wikibook@wikibook.adrienaubourg.fr</li>
            <li>Responsable de publication : Adrien Aubourg</li>
           
        </ul>
        </section>

        <section>
            <Title level="3" custom1='p-4 font-bold' text1='2- Hébergeur' />
            <ul className='px-5'>

                <li>Nom : O2Switch</li>
                <li>Adresse  : 222 Boulevard Gustave Flaubert, 63000 Clermont-Ferrand, France</li>
                <li>Téléphone : 04 44 44 60 40</li>
                <li>Site web : https://www.o2switch.fr</li>
            </ul>
        </section>

        <section>
             <Title level="3" custom1='p-4 font-bold' text1='3- Propriété intellectuelle' />
             <p className='px-5'>Le contenu du site (textes, images, logos, etc.) est la propriété exclusive de Adrien Aubourg, sauf mention contraire. Toute reproduction est interdite sans autorisation préalable.
                Les illustrastions sont issu de Freepiks :
                <ul>
                    <li> </li>
                    <li> </li>
                    <li> </li>
                    <li> </li>
                    <li> </li>
                </ul>
             </p>
        </section>

        <section>
            <Title level="3" custom1='p-4 font-bold' text1='4- Données personnelles' />
            <p className='px-5'>Les informations collectées via le site ne sont pas distribuées a des tiers et sont conformes au RGPD. Pour toute demande relative à vos données, vous pouvez contacter : wikibook@wikibook.adrienaubourg.fr.</p>
        </section>

        <section className='pb-2'>
        <Title level="3" custom1='p-4 font-bold' text1='5- Cookies' />
        <p className='px-5'>Ce site utilise des cookies et le stockage local pour améliorer l'expérience utilisateur et gérer l'authentification :</p>
        <ul className='px-10 list-disc'>
            <li><span className='font-bold '>Preferences utilisateurs :</span> Nous stockons des informations liées aux filtres sélectionnés (auteur et/ou genres) pour personnaliser les contenus affichés.</li>
            <li><span className='font-bold '>Preferences utilisateurs :</span> Un jeton JWT (JSON Web Token) est enregistré dans le localStorage pour gérer les sessions des utilisateurs connectés.</li>
        </ul>
        </section>


    </div>
  )
}
