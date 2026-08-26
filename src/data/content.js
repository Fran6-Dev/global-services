// -----------------------------------------------------------------------
// Central content file — all site copy and image references live here.
// Swap the `img()` calls for your own photos/logo whenever you have them
// (see README.md for instructions). Text was reconstructed from the
// supplied mockup screenshots — double check addresses / phone / email
// before going live.
// -----------------------------------------------------------------------

// Thematic stock placeholder images (loremflickr = keyword-matched photos).
// `lock` pins a specific image so it doesn't change between reloads.
export function img(keywords, w = 1200, h = 800, lock = 1) {
  return `https://loremflickr.com/${w}/${h}/${keywords}?lock=${lock}`
}

export const company = {
  name: 'Global Services',
  phone: '07 85 65 65 00',
  email: 'contact@globalservices.fr',
  address: '7 avenue des Acacias',
  postal: '45790 Corquilleroy',
  hoursWeek: 'Lundi - Vendredi : 7h00 - 18h00',
  hoursSat: 'Samedi : 7h00 - 12h00',
  city: 'Loiret',
}

export const nav = [
  { label: 'Accueil', to: '/' },
  {
    label: 'Nos services',
    to: '/nos-services',
    children: [
      { label: 'Location de bennes', to: '/nos-services/location-de-bennes' },
      { label: 'Terrassement', to: '/nos-services/terrassement' },
      { label: 'Transport / Élevage', to: '/nos-services/transport-elevage' },
      { label: 'Stockage', to: '/nos-services/stockage' },
    ],
  },
  { label: 'À propos', to: '/a-propos' },
  { label: 'Engagements', to: '/engagements' },
  { label: 'Contact', to: '/contact' },
]

export const services = [
  {
    slug: 'location-de-bennes',
    title: 'Location de bennes',
    short: '12 bennes disponibles',
    detail: '5 de 10 m³, 4 de 7 m³, 3 de 20 m³',
    to: '/nos-services/location-de-bennes',
    image: 'https://res.cloudinary.com/jqfwkgp1/image/upload/v1787679525/pexels-jan-van-der-wolf-11680885-33842119.jpg',
    icon: 'benne',
    // used on the /nos-services overview page:
    subtitle: '12 bennes à votre disposition',
    factsText: '5 bennes de 10 m³, 4 bennes de 7 m³, 3 bennes de 20 m³.',
    description: 'Nous acceptons : gravats, DIB, déchets de chantier, déchets issus de travaux et d’évacuation.',
    ctaLabel: 'Demander un devis',
  },
  {
    slug: 'terrassement',
    title: 'Terrassement',
    short: '3 pelles de 3,5 tonnes',
    detail: '1 pelle de 6 tonnes',
    to: '/nos-services/terrassement',
    image: img('excavator,digger,construction', 900, 700, 12),
    icon: 'pelle',
    subtitle: 'Des équipements adaptés à vos travaux',
    factsText: '3 pelles de 3,5 tonnes, 1 pelle de 6 tonnes.',
    description: 'Préparation de terrain, fouilles, nivellement, tranchées et terrassement.',
    ctaLabel: 'Demander un devis',
  },
  {
    slug: 'transport-elevage',
    title: 'Transport / Élevage',
    short: 'Porte-plateau, grue, plateau-remorque',
    detail: 'Remorque bâchée, en pirole',
    to: '/nos-services/transport-elevage',
    image: "https://res.cloudinary.com/jqfwkgp1/image/upload/v1787679524/forestier05.jpg",
    icon: 'transport',
    subtitle: 'Transporter vos engins et votre matériel',
    bulletList: ['Porte-plateau', 'Grue', 'Plateau-remorque', 'Remorque bâchée en pirole'],
    ctaLabel: 'Demander un devis',
  },
  {
    slug: 'stockage',
    title: 'Stockage',
    short: '5 000 m³ de terrain disponible',
    detail: 'Pour vos besoins',
    to: '/nos-services/stockage',
    image: "https://res.cloudinary.com/jqfwkgp1/image/upload/v1787679525/pexels-marcin-jozwiak-199600-2804929.jpg",
    icon: 'stockage',
    subtitle: '5 000 m³ de terrain disponibles',
    description: 'Un espace dédié au stockage de matériel, d’engins, de marchandises ou d’équipement. Solution adaptée aux professionnels et aux particuliers.',
    ctaLabel: 'Nous contacter',
    ctaTo: '/contact',
  },
]

export const whyUs = [
  {
    title: 'Priorité',
    text: 'Une entreprise implantée localement, proche de ses clients.',
    icon: 'priorite',
  },
  {
    title: 'Réactivité',
    text: 'Des réponses rapides et des solutions adaptées à chaque demande.',
    icon: 'reactivite',
  },
  {
    title: 'Expérience',
    text: '15 à 18 ans d’expérience cumulée des fondateurs.',
    icon: 'experience',
  },
  {
    title: 'Polyvalence',
    text: 'Bennes, terrassement, transport et stockage : plusieurs solutions réunies.',
    icon: 'polyvalence',
  },
  {
    title: 'Pour tous',
    text: 'Des solutions adaptées aux particuliers et aux professionnels.',
    icon: 'pourtous',
  },
]

export const homeStats = [
  { label: 'Nouvelle entreprise', icon: 'star' },
  { label: '15 - 18 ans d’expérience cumulée', icon: 'clock' },
  { label: '5 000 m³ de stockage disponible', icon: 'box' },
  { label: 'Partout en France', icon: 'pin' },
]

export const aboutStats = [
  { label: 'Nouvelle entreprise', icon: 'star' },
  { label: '15 - 18 ans d’expérience cumulée', icon: 'clock' },
  { label: 'Loiret et partout en France', icon: 'pin' },
  { label: 'Particuliers et professionnels', icon: 'users' },
]

export const values = [
  { title: 'Priorité', text: 'Une entreprise implantée localement, proche de ses clients.', icon: 'priorite' },
  { title: 'Réactivité', text: 'Des réponses rapides et des solutions adaptées à chaque demande.', icon: 'reactivite' },
  { title: 'Expérience', text: '15 à 18 ans d’expérience cumulée des fondateurs.', icon: 'experience' },
  { title: 'Fiabilité', text: 'Respect des engagements pris et des délais annoncés.', icon: 'fiabilite' },
  { title: 'Polyvalence', text: 'Bennes, terrassement, transport et stockage disponibles pour plusieurs solutions réunies.', icon: 'polyvalence' },
]

export const engagements = [
  {
    title: 'Sécurité',
    text: 'La sécurité de nos équipes et de nos clients est au cœur de toutes nos interventions.',
    icon: 'securite',
  },
  {
    title: 'Qualité',
    text: 'Nous mettons un point d’honneur à la qualité de nos prestations et de nos équipements.',
    icon: 'qualite',
  },
  {
    title: 'Respect des délais',
    text: 'Nous nous engageons à respecter les délais convenus pour chaque intervention.',
    icon: 'delais',
  },
  {
    title: 'Transparence',
    text: 'Des devis clairs, précis et sans surprise pour chacune de vos demandes.',
    icon: 'transparence',
  },
  {
    title: 'Environnement',
    text: 'Une gestion responsable et raisonnée des déchets et du matériel utilisé.',
    icon: 'environnement',
  },
]

export const wasteAccepted = [
  { label: 'Gravats', icon: 'gravats' },
  { label: 'DIB', icon: 'dib' },
  { label: 'Déchets de chantier', icon: 'chantier' },
  { label: 'Déchets issus de travaux', icon: 'chantier' },
  { label: 'Déchets d’évacuation', icon: 'evacuation' },
]

export const bennesSizes = [
  { size: '5 × 10 m³', text: 'Pour les volumes importants de déchets issus de vos chantiers.' },
  { size: '4 × 7 m³', text: 'Le format le plus polyvalent, adapté à la majorité des besoins.' },
  { size: '3 × 20 m³', text: 'Pour les gros chantiers nécessitant une plus grande capacité.' },
]

export const excavators = [
  { count: '3 pelles', size: '3,5 tonnes', text: 'Pour différents travaux de préparation de terrain.' },
  { count: '1 pelle', size: '6 tonnes', text: 'Pour les travaux nécessitant davantage de puissance et de capacité.' },
]

export const transportSolutions = [
  {
    title: 'Porte-plateau',
    text: 'Pour le transport d’engins et d’équipements lourds nécessitant un plateau adapté.',
    icon: 'porteplateau',
    image: img('flatbed,truck,machinery', 700, 500, 21),
  },
  {
    title: 'Grue',
    text: 'Pour le chargement, le déchargement et le transport de certains équipements.',
    icon: 'grue',
    image: img('crane,truck,lifting', 700, 500, 22),
  },
  {
    title: 'Plateau-remorque',
    text: 'Polyvalent et adapté au transport de différentes charges.',
    icon: 'plateauremorque',
    image: img('trailer,truck,cargo', 700, 500, 23),
  },
  {
    title: 'Remorque bâchée',
    text: 'Pour le transport de matériel nécessitant une protection contre les intempéries.',
    icon: 'remorquebachee',
    image: img('tarp,trailer,truck', 700, 500, 24),
  },
  {
    title: 'En pirole',
    text: 'Solution de transport adaptée à certains matériels spécifiques.',
    icon: 'pirole',
    image: img('livestock,trailer,truck', 700, 500, 25),
  },
]

export const stockageFeatures = [
  { label: '5 000 m² de terrain', icon: 'surface' },
  { label: 'Accès facile', icon: 'acces' },
  { label: 'Surface plate', icon: 'plate' },
  { label: 'Solution flexible : ponctuelle ou régulière', icon: 'flexible' },
]

export const satisfactionPoints = [
  { title: 'Sécurité', text: 'La sécurité de nos équipes et de nos clients avant toute chose sur chaque intervention.', icon: 'securite' },
  { title: 'Qualité', text: 'Des prestations et des équipements soignés, à la hauteur de vos attentes.', icon: 'qualite' },
  { title: 'Respect des délais', text: 'Des interventions planifiées et tenues, sans mauvaise surprise.', icon: 'delais' },
  { title: 'Transparence', text: 'Des devis clairs, précis et sans surprise pour chacune de vos demandes.', icon: 'transparence' },
  { title: 'Environnement', text: 'Une gestion responsable et raisonnée des déchets et du matériel utilisé.', icon: 'environnement' },
]

export const galleryCategories = ['Tous', 'Bennes', 'Terrassement', 'Transport', 'Stockage']

export const galleryItems = [
  { id: 1, category: 'Bennes', image: img('dumpster,container,site', 700, 550, 31), title: 'Évacuation de gravats' },
  { id: 2, category: 'Terrassement', image: img('excavator,digging,soil', 700, 550, 32), title: 'Préparation de terrain' },
  { id: 3, category: 'Transport', image: img('truck,convoy,road', 700, 550, 33), title: 'Transport de matériel' },
  { id: 4, category: 'Bennes', image: img('waste,container,yard', 700, 550, 34), title: 'Bennes sur chantier' },
  { id: 5, category: 'Terrassement', image: img('excavator,yellow,dirt', 700, 550, 35), title: 'Travaux de terrassement' },
  { id: 6, category: 'Stockage', image: img('storage,lot,trucks', 700, 550, 36), title: 'Espace de stockage' },
]

export const heroImage = img('excavator,dumptruck,construction,site', 1600, 1000, 1)
export const servicesHeroImage = img('construction,site,machinery', 1600, 700, 2)
export const aboutHeroImage = img('workers,helmet,construction,team', 1600, 700, 3)
export const realisationsHeroImage = img('construction,site,aerial', 1600, 700, 4)
export const engagementsHeroImage = "https://res.cloudinary.com/jqfwkgp1/image/upload/v1787679525/pexels-matreding-9669807.jpg"
export const contactHeroImage = img('handshake,agreement,business', 1600, 700, 6)
export const devisHeroImage = img('excavator,construction,site', 1600, 700, 7)
export const aboutTeamImage = "https://res.cloudinary.com/jqfwkgp1/image/upload/v1787679524/pexels-kindelmedia-8487733.jpg"
export const stockageYardImage = "https://res.cloudinary.com/jqfwkgp1/image/upload/v1787679525/pexels-marcin-jozwiak-199600-2804929.jpg"
export const bennesImage = "https://res.cloudinary.com/jqfwkgp1/image/upload/v1787679525/pexels-jan-van-der-wolf-11680885-33842119.jpg"
export const terrassementImage = img('excavator,digger,construction,site', 1000, 800, 15)
export const transportImage = "https://res.cloudinary.com/jqfwkgp1/image/upload/v1787679524/forestier05.jpg"
