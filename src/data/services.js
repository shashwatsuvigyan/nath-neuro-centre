export const services = [
  {
    id: 'brain-tumor-surgery',
    icon: 'Brain',
    title: 'Brain Tumor Surgery & Micro-Neurosurgery',
    short:
      'Careful, image-guided removal of brain tumours using microsurgical technique — aiming for maximal safety, not just maximal removal.',
    conditions: [
      'Brain tumours (meningioma, glioma, pituitary lesions)',
      'Cerebellar & intraventricular lesions',
      'Brain cysts & colloid cysts',
      'Metastatic brain lesions',
      'CSF leak repair & skull base approaches',
    ],
    approach: [
      'Complete pre-operative imaging review with the patient and family on-screen',
      'Microsurgical instruments and magnification to protect surrounding tissue',
      'Slow, honest discussion of risks — nothing hidden, nothing exaggerated',
      'Clear recovery roadmap before you leave for surgery',
    ],
    urgentSigns: 'New seizures, worsening headache, or weakness on one side of the body — review early.',
  },
  {
    id: 'minimally-invasive-spine',
    icon: 'Activity',
    title: 'Minimally Invasive Spine Surgery & Slip Disc Treatment',
    short:
      'For the back and legs that heavy pain has taken over — smaller incisions, less tissue damage, and a faster return to normal life.',
    conditions: [
      'Lumbar & cervical slip disc (prolapsed intervertebral disc)',
      'Spinal stenosis & nerve root compression',
      'Spondylolisthesis',
      'Sciatica not responding to medicines',
      'Spine tumours & infections',
    ],
    approach: [
      'Medicines, physiotherapy and lifestyle first whenever they genuinely work',
      'Surgery only when scans and symptoms clearly demand it',
      'Minimally invasive routes with less muscle cutting where suitable',
      'Step-by-step mobilisation plan to get you walking sooner',
    ],
    urgentSigns: 'Difficulty passing urine or sudden numbness between the legs — this is an emergency, come in immediately.',
  },
  {
    id: 'head-injury-emergency',
    icon: 'Siren',
    title: 'Head Injury & Brain Hemorrhage Emergency Care',
    short:
      'Road accidents and falls are a daily reality on our highways. Rapid triage, early treatment and a working emergency line can change everything.',
    conditions: [
      'Road traffic accident head injuries',
      'Extradural & subdural bleeds (blood clots over the brain)',
      'Brain haemorrhage after sudden rise in blood pressure',
      'Depressed skull fractures',
      'Penetrating injuries',
    ],
    approach: [
      'Phone triage first — we guide you on whether to move the patient and how',
      'Coordinated imaging and blood-pressure stabilisation',
      'Emergency surgery without unnecessary delay when the scan demands it',
      'Family kept informed at every step in plain language',
    ],
    urgentSigns: 'Loss of consciousness, repeated vomiting, blood from ear or nose, unequal pupils — do not wait.',
  },
  {
    id: 'stroke-paralysis',
    icon: 'HeartPulse',
    title: 'Stroke Paralysis & Nerve Compression Management',
    short:
      'Recovery after stroke is built on speed, structure and patience. We work to save the brain tissue that can be saved, then rebuild what remains.',
    conditions: [
      'Ischaemic stroke (blockage) & haemorrhagic stroke (bleed)',
      'Bell’s palsy & facial nerve problems',
      'Carpal tunnel syndrome & ulnar nerve compression',
      'Trigeminal neuralgia (facial pain)',
      'Peripheral nerve injuries',
    ],
    approach: [
      'Stabilisation in the golden window to limit brain damage',
      'Coordinated physiotherapy and speech therapy referrals',
      'Nerve decompression and microsurgical repair where eligible',
      'Long-term monitoring of stroke risk factors: BP, sugar, cholesterol',
    ],
    urgentSigns: 'Facial droop, arm weakness, slurred speech — note the time, call immediately.',
  },
  {
    id: 'spondylosis-pain',
    icon: 'ShieldCheck',
    title: 'Spondylosis & Chronic Back / Neck Pain Management',
    short:
      'Not every back problem needs surgery. A careful assessment told people the truth, and a sensible plan — conservative or surgical — gets them moving again.',
    conditions: [
      'Cervical & lumbar spondylosis (age-related wear)',
      'Chronic neck pain from desk and phone posture',
      'Degenerative disc disease',
      'Failed conservative care elsewhere',
      'Osteoporosis-related spine issues',
    ],
    approach: [
      'Examination over assumptions — scans are read with your symptoms, not in isolation',
      'Structured physiotherapy, lifestyle correction and targeted medicines',
      'Epidural / nerve root blocks where they genuinely help',
      'Surgery only when it will clearly improve quality of life',
    ],
    urgentSigns: 'Dropping things, tripping, or changing toilet habits with back pain need urgent review.',
  },
  {
    id: 'pediatric-neuro',
    icon: 'Baby',
    title: 'Hydrocephalus & Pediatric Nervous System Care',
    short:
      'Big problems in small patients, handled gently. From fluid on the brain to head growth concerns in infants — parents are guided, never abandoned.',
    conditions: [
      'Hydrocephalus (fluid accumulation in the brain)',
      'Head circumference concerns in infants',
      'Spina bifida & congenital abnormalities',
      'Neural tube defect counselling',
      'Early childhood head injuries',
    ],
    approach: [
      'Baby-friendly, low-stress consultation environment',
      'Clear explanations of shunts and follow-up schedules',
      'Counselling before planning and support after it',
      'Coordinated developmental monitoring with paediatricians',
    ],
    urgentSigns: 'Excessive head growth, sunset eyes, poor feeding or lethargy in an infant — urgent review.',
  },
]

export const serviceIcons = {
  Brain: 'brain-tumor-surgery',
  Activity: 'minimally-invasive-spine',
  Siren: 'head-injury-emergency',
  HeartPulse: 'stroke-paralysis',
  ShieldCheck: 'spondylosis-pain',
  Baby: 'pediatric-neuro',
}