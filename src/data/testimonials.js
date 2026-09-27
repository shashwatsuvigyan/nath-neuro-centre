export const testimonials = [
  {
    id: 1,
    name: 'Suresh Yadav',
    area: 'Barhalganj, Gorakhpur',
    condition: 'Severe lumbar slip disc — defeated after 8 months of bed rest',
    rating: 5,
    quote:
      'Eight months I spent lying down because of sciatica. Nobody told me clearly what was wrong. Dr. Tiwari showed my MRI on the screen, marked the exact nerve being pressed, and explained surgery honestly. I walked out of the hospital five days after surgery. Today I have returned to driving my truck to Bahraich.',
    doctorNote:
      'Minimally invasive lumbar discectomy — L4/L5. Home exercise plan continued for 6 weeks.',
    verified: false,
    category: 'Spine Recovery',
  },
  {
    id: 2,
    name: "Rekha Devi's family",
    area: 'Padrauna, Kushinagar',
    condition: 'Traumatic brain injury after a motorcycle accident',
    rating: 5,
    quote:
      'My husband’s head hit the road and he went unconscious. The emergency line picked up on the second ring and guided us clearly — don’t move him, control the bleeding, come straight. In the hospital everything was handled with urgency but nobody shouted at us or made us feel like we were a problem. He talks normally today.',
    doctorNote:
      'Emergency evacuation of extradural haematoma followed by ICU care and gradual neurological recovery.',
    verified: false,
    category: 'Head Injury Emergency',
  },
  {
    id: 3,
    name: 'Anjali Srivastava',
    area: 'Azamgarh',
    condition: 'Meningioma brain tumour — returned to college',
    rating: 5,
    quote:
      'I thought my headaches and one-sided weakness meant the end of my studies. Dr. Tiwari spent forty minutes with my parents explaining the scan, the surgery, and every possible risk in simple Hindustani. The tumour was removed, and I sat my final degree exams eight months later. Faith goes to that whole team.',
    doctorNote:
      'Microsurgical excision of supratentorial meningioma. Post-op physiotherapy and speech review coordinated locally.',
    verified: false,
    category: 'Brain Tumour Journey',
  },
  {
    id: 4,
    name: 'Mohan Paswan',
    area: 'Khalilabad, Sant Kabir Nagar',
    condition: 'Chronic neck pain & cervical spondylosis — surgery avoided',
    rating: 5,
    quote:
      'Two doctors told me my cervical spine needed a big operation. At Nath Neuro Centre they said no — my case could be managed with the right posture, some medicines and physiotherapy. Three months later the pain had settled. A doctor who tells you not to have surgery you do not need earns real trust.',
    doctorNote:
      'Degenerative changes with no surgical compression — treated conservatively with guided physiotherapy.',
    verified: false,
    category: 'Pain Management',
  },
]

export const caseStudies = [
  {
    id: 'case-slip-disc',
    title: 'From eight months in bed to driving again',
    patient: 'Suresh, 41, truck driver — Barhalganj',
    summary:
      'Suresh had been on bed rest for eight months with a suspected slip disc. Pain travelled from his lower back to his right leg, made worse by every attempt to sit or stand. Multiple rounds of injections had given only temporary relief.',
    journey: [
      { stage: 'First consultation', detail: 'MRI Lumbar Spine was reviewed on-screen with the patient. A clear L4/L5 disc herniation compressing the right L5 root was identified and explained to him and his family.' },
      { stage: 'Decision', detail: 'After a straight conversation about what surgery could and could not offer, and a trial period of medication having failed, surgery was planned on mutual agreement.' },
      { stage: 'Surgery', detail: 'Minimally invasive lumbar discectomy — a small incision, minimal muscle stripping, the offending fragment removed under magnification.' },
      { stage: 'Recovery', detail: 'Walking was started the next day. He was discharged on day five with a clear lifting-and-bending protocol and a home exercise sheet.' },
    ],
    outcome:
      'Three months later Suresh returned to long-distance driving. His leg pain resolved; a mild numbness persists that does not limit his work.',
    lesson:
      'A trial of conservative care is only meaningful when the diagnosis is exact. Delaying surgery for the wrong reason is as harmful as hurrying into it.',
  },
  {
    id: 'case-tbi',
    title: 'The road accident that tested a family — and a system',
    patient: 'Family of Raj Verma, 34 — Padrauna, Kushinagar',
    summary:
      'Raj, a farmer, met with a motorbike accident on the Gorakhpur–Padrauna road. He was unconscious for a few minutes, then confused. His family called the emergency line on the advice of a neighbour.',
    journey: [
      { stage: 'Phone triage', detail: 'The team guided them to keep Raj lying still, protect his neck, and bring him straight to the emergency route rather than stopping at an unstaffed clinic.' },
      { stage: 'On arrival', detail: 'A CT head showed an extradural haematoma — a clot pressing on the brain that can turn fatal within hours if untreated.' },
      { stage: 'Surgery', detail: 'Emergency craniotomy and clot evacuation was performed promptly. The family was updated in plain language after the surgery.' },
      { stage: 'Recovery', detail: 'Raj spent two days in ICU, then moved to the ward. Memory and speech returned gradually with speech therapy support.' },
    ],
    outcome:
      'Eight weeks after the accident, Raj manages his farm again. Serial follow-ups confirmed no residual collection.',
    lesson:
      'In head injury, the hours after the event decide the outcome. A working emergency line and a team that does not stall are not luxuries — they are the difference.',
  },
  {
    id: 'case-tumour',
    title: 'A tumour, a scared family, and one clear room',
    patient: 'Anjali, 22, final-year student — Azamgarh',
    summary:
      'Anjali had headaches for months that medicines never quieted, then noticed her left hand becoming clumsier. An MRI showed a meningioma — a usually slow-growing tumour of the brain covering.',
    journey: [
      { stage: 'Consultation', detail: 'Her scan was displayed and walked through with the family: where the tumour sat, what it pressed on, and why surgery was being recommended.' },
      { stage: 'Surgery', detail: 'Microsurgical excision with image guidance, done with the goal of complete but safe removal.' },
      { stage: 'Hospitals days', detail: 'Uniform communication from the team — what to expect each day, when she could start walking and studying again.' },
      { stage: 'Return to life', detail: 'Serial scans have been stable. She resumed classes five months after surgery and now counsels other young patients in anxiety over brain surgery.' },
    ],
    outcome:
      'Complete excision with no neurological deficit. Anjali appeared for her final examinations and passed with distinction.',
    lesson:
      'Most brain tumours are not a death sentence. What families fear most is the unknown — and most of that fear dissolves with the right conversation.',
  },
]