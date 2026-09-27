// Central clinic data — filled with details verified online
// (clinic's own booking site nathneurocare.myrx.in, Google Maps listing,
//  threebestrated.in, bestdoctorforme.com, Credihealth, MediGence).
// Registered: UP Medical Council Reg. No. 047798.

export const clinic = {
  name: 'Nath Neuro Centre',
  tagline: 'Brain, Spine & Nerve Care — Gorakhpur',
  doctor: {
    name: 'Dr. Rahul Nath Tiwari',
    qualifications: 'MBBS, MS, MCh — Gold Medalist',
    shortName: 'Dr. Tiwari',
    registration: 'UP Medical Council Reg. No. 047798',
    experienceYears: '15+',
  },
  addressLine1: '33, Kasya Road, DIG Bunglow',
  area: 'Judges Colony, Betiahata, Gorakhpur, Uttar Pradesh',
  pin: '273001',
  landmark: 'Opposite DIG Bungalow, Betiahata',
  phone: '+91-8177097788',
  emergencyPhone: '+91-7607004300',
  whatsapp: 'https://wa.me/917607004300',
  email: 'drrahultiwari@gmail.com',
  emailAlt: 'nathneurocentre@gmail.com',
  opdTimings: [
    { day: 'Monday – Saturday', time: '10:00 AM – 09:00 PM', note: 'Consultation OPD' },
    { day: 'Sunday', time: 'Emergency / phone triage only', note: 'Clinic closed' },
  ],
  consultationFee: '₹500 (follow-up ₹400)',
  mapsEmbed:
    'https://maps.google.com/maps?q=Nath%20Neuro%20Centre%20Kasya%20Road%20Betiahata%20Gorakhpur&t=&z=16&ie=UTF8&iwloc=&output=embed',
  directionsLink:
    'https://www.google.com/maps/search/?api=1&query=Nath+Neuro+Centre+Kasya+Road+Betiahata+Gorakhpur',
  photos: {
    portrait: '/images/dr-portrait.jpg',
    consultation: '/images/dr-consultation.jpg',
    alternate: '/images/dr-alternate.jpg',
    thumb: '/images/dr-thumb.jpg',
  },
}

export const hospitalPartner = 'Purvanchal Metro City Hospital, H. N. Singh Chowk, Basharatpur, Medical Road, Gorakhpur'

export const emergencyProtocols = [
  {
    icon: 'Siren',
    title: 'Head injury',
    text: 'After a fall or road accident, never move the patient unnecessarily. Keep the neck steady, control external bleeding with a clean cloth, and call the emergency line right away.',
  },
  {
    icon: 'AlertTriangle',
    title: 'Sudden weakness or slurred speech',
    text: 'These can be early signs of a stroke or brain bleed. Note the exact time it started — it changes the treatment window. Reach emergency care immediately.',
  },
  {
    icon: 'Brain',
    title: 'Severe headache with vomiting',
    text: 'A sudden, worst-of-life headache with vomiting or drowsiness needs urgent review, not sleeping it off at home. This is how many brain bleeds announce themselves.',
  },
]

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about-doctor', label: 'About Doctor' },
  { to: '/services', label: 'Services' },
  { to: '/clinic', label: 'Clinic' },
  { to: '/patient-info', label: 'Patient Info' },
  { to: '/testimonials', label: 'Reviews' },
  { to: '/contact', label: 'Contact' },
]