// Full program content translations keyed by locale then slug.
// Fields: name, tagline, categoryLabel, hero{heading,sub}, what{heading,body},
//         stats (locale-specific where relevant), formats, covered, steps, faq
// Swedish (sv) content stays in programs.js as the base.

const t = {

  // ─── ENGLISH ────────────────────────────────────────────────────────────────
  en: {
    'europeiska-solidaritetskaren': {
      name: 'European Solidarity Corps',
      tagline: 'Volunteer, run a solidarity project or take part in humanitarian action — funded by the EU.',
      categoryLabel: 'Volunteering',
      hero: { heading: 'Do something that truly matters', sub: 'The European Solidarity Corps lets you volunteer abroad, start your own project at home or take part in humanitarian action — fully funded by the EU. No experience required.' },
      what: { heading: 'The EU pays — you change the world', body: 'The European Solidarity Corps (ESC) is the EU\'s programme for young people who want to make a difference. You can volunteer in another European country, launch your own solidarity project at home, or take part in humanitarian action outside the EU — all with financial support from the EU.\n\nThe programme has a total budget of €1.01 billion for 2021–2027 and pursues two main goals: to offer young people accessible opportunities for solidarity activities, and to improve their skills and employability.' },
      formats: [
        { icon: '🌍', title: 'Individual volunteering', duration: '2 weeks – 12 months', description: 'Work alone at a host organisation in another European country. Full-time (30–38 hours/week).', bullets: ['Accommodation, food and travel covered', 'Monthly pocket money', 'Free language course (OLS)', 'EU insurance included'] },
        { icon: '👥', title: 'Group volunteering', duration: '2 weeks – 2 months', description: 'Work alongside volunteers from at least 2 countries (min. 5 volunteers). Focused on shared European challenges.', bullets: ['International team', 'Accommodation and travel covered', 'Pocket money and insurance', 'Youthpass certificate'] },
        { icon: '💡', title: 'Solidarity Projects', duration: '2–12 months', description: 'Create your own project in your home community together with at least 5 friends. You choose the topic — part-time.', bullets: ['€630 per month for the project', 'Apply directly without an organisation', 'You decide the focus', 'Coach support included'] },
      ],
      covered: [
        { icon: '✈️', title: 'Travel', desc: 'Return travel to and from the project is covered.' },
        { icon: '🏠', title: 'Accommodation', desc: 'The host organisation arranges accommodation throughout your stay.' },
        { icon: '🍽️', title: 'Food', desc: 'Daily meals or a food allowance are included.' },
        { icon: '💶', title: 'Pocket money', desc: 'Monthly pocket money adjusted for the cost of living in your host country.' },
        { icon: '🌐', title: 'Language course', desc: 'Free online language courses via OLS in all official EU languages.' },
        { icon: '🛡️', title: 'Insurance', desc: 'EU insurance covers health and accidents throughout the project.' },
        { icon: '📜', title: 'Youthpass', desc: 'Certificate documenting your competences and learning outcomes.' },
      ],
      steps: [
        { n: '01', title: 'Create your profile', desc: 'Set up an EU Login account and complete your profile on the European Youth Portal. Takes about 10 minutes.' },
        { n: '02', title: 'Find a project', desc: 'Browse hundreds of projects. Filter by country, topic and duration.' },
        { n: '03', title: 'Contact the organisation', desc: 'Write directly to the organisation via the portal. Tell them who you are and why you want to take part.' },
        { n: '04', title: 'Get accepted', desc: 'If selected, the organisation helps with the practicalities — visas, accommodation and travel.' },
        { n: '05', title: 'Go and make a difference', desc: 'Learn a new language, build a European network and come home with a Youthpass certificate.' },
      ],
      faq: [
        { q: 'Do I need to speak English?', a: 'Not necessarily. Many projects require basic English, but there are projects in other languages too. A free language course is also included.' },
        { q: 'Can I choose which country to go to?', a: 'Yes! You apply to specific projects and choose yourself which countries and organisations to apply to.' },
        { q: 'Do I have to pay anything?', a: 'No. The ESC programme is free for participants. The EU covers accommodation, travel, food and pocket money.' },
        { q: 'Can I go more than once?', a: 'You can take part in multiple projects, but volunteering is capped at 12 months total per person.' },
        { q: 'Does it count on my CV?', a: 'Absolutely. You receive a Youthpass certificate describing what you did and the competences you developed.' },
      ],
      areas: [
        { emoji: '🤝', slug: 'socialt-arbete', title: 'Social work & inclusion', desc: 'Support people in vulnerable situations — in shelters, supported housing or through outreach work with homeless people, those struggling with addiction or people with mental health challenges.', href: 'https://www.omesc.se/omraden/socialt-arbete' },
        { emoji: '🌐', slug: 'migration-integration', title: 'Migration & integration', desc: 'Help newcomers find their place in a new country — language support, cultural orientation, legal guidance and practical day-to-day help.', href: 'https://www.omesc.se/omraden/migration-integration' },
        { emoji: '📚', slug: 'utbildning-ungdom', title: 'Education & youth', desc: 'Inspire the next generation in classrooms, youth centres and informal learning environments — tutoring, mentoring and educational activities.', href: 'https://www.omesc.se/omraden/utbildning' },
        { emoji: '🌿', slug: 'miljo-hallbarhet', title: 'Environment & sustainability', desc: 'Work on climate issues, biodiversity, organic farming, nature conservation and sustainable community development.', href: 'https://www.omesc.se/omraden/miljo-hallbarhet' },
        { emoji: '🎨', slug: 'kultur-konst', title: 'Culture & arts', desc: 'Use creativity as a tool for change — arts, media, theatre, film, cultural heritage, museums and cultural events across Europe.', href: 'https://www.omesc.se/omraden/kultur-konst' },
        { emoji: '💚', slug: 'halsa-omsorg', title: 'Health & care', desc: 'Contribute to well-being — public health work, preventive action, elderly care, palliative care and support for people with disabilities.', href: 'https://www.omesc.se/omraden/halsa-omsorg' },
      ],
    },

    'humanitart-volontararbete': {
      name: 'Humanitarian Volunteering',
      tagline: 'Volunteer in third countries outside the EU for humanitarian action — disaster response, refugee protection and climate.',
      categoryLabel: 'Volunteering',
      hero: { heading: 'Make a difference beyond Europe\'s borders', sub: 'Since 2022 the European Solidarity Corps has offered volunteering placements in third countries. You work on humanitarian operations — from disaster preparedness to refugee protection and food security.' },
      what: { heading: 'Solidarity that reaches the world', body: 'Humanitarian volunteering under the ESC has been offered since 2022 in third countries where humanitarian operations are ongoing.\n\nProjects cover: disaster preparedness and response, gender equality promotion, refugee and internally displaced persons protection, protection of undocumented migrants, climate change mitigation and food security improvement.\n\nImportant: competition is intense. The number of interested candidates greatly exceeds available placements — completing the training does not guarantee a place.' },
      formats: [
        { icon: '🧑', title: 'Individual humanitarian volunteering', duration: '2–12 months', description: 'Full-time (30–38 hours/week). Always cross-border — in a third country where humanitarian operations are under way.', bullets: ['Supports host organisation\'s humanitarian work', 'Accommodation, travel and food covered', 'Complementary insurance', 'Small personal allowance'] },
        { icon: '👥', title: 'Group humanitarian volunteering', duration: '2 weeks – 2 months', description: 'Groups of 5–40 volunteers from at least 2 countries. Full-time.', bullets: ['Selected by sending and host organisations', 'At least 2 countries represented', 'Accommodation and travel covered', 'Complementary insurance'] },
      ],
      covered: [
        { icon: '✈️', title: 'Travel', desc: 'Return travel to and from the project is covered.' },
        { icon: '🏠', title: 'Accommodation', desc: 'Accommodation throughout the stay is arranged by the host organisation.' },
        { icon: '🍽️', title: 'Food', desc: 'Daily meals or a food allowance are included.' },
        { icon: '💶', title: 'Allowance', desc: 'Small personal allowance during the placement.' },
        { icon: '🛡️', title: 'Insurance', desc: 'Complementary insurance covers health and accidents.' },
        { icon: '🌐', title: 'Language support', desc: 'Access to language support in the working language.' },
      ],
      steps: [
        { n: '01', title: 'Register on the ESC portal', desc: 'Create an account and complete your profile. Indicate interest in humanitarian volunteering.' },
        { n: '02', title: 'Start the online training', desc: 'Go to the "Online training" tab in your ESC account and select "Humanitarian aid training". Begin with the self-assessment on EU Academy.' },
        { n: '03', title: 'Pass the online test', desc: 'Complete the mandatory online training and pass the test to be invited to in-person training.' },
        { n: '04', title: 'Attend in-person training', desc: '5 days in groups of ~25 candidates. Training centres in France, Germany, Italy or Spain. Three rounds per year: Feb–March, May–June, Sept–Oct.' },
        { n: '05', title: 'Be selected by a project', desc: 'After completing training you may be selected by a humanitarian volunteering project. Note: places are limited.' },
      ],
      faq: [
        { q: 'Can I participate if I have already done ESC volunteering?', a: 'You can register for the training if you have not previously participated in EU volunteering for more than 6 months in total.' },
        { q: 'How many times can I participate?', a: 'You can only do individual humanitarian volunteering once. Your total EU volunteering (including humanitarian) must not exceed 12 months.' },
        { q: 'Where is the training held?', a: 'The in-person training (5 days) is held at training centres in France, Germany, Italy or Spain — three rounds per year.' },
        { q: 'Are training places guaranteed?', a: 'No. Due to high demand the scheduling system sometimes closes. Check the current status on the EU Academy platform.' },
        { q: 'Which countries can I go to?', a: 'Third countries not associated with the ESC programme, where no armed conflicts are ongoing and where humanitarian operations are being carried out.' },
      ],
    },

    'erasmus-plus': {
      name: 'Erasmus+',
      tagline: 'The EU\'s major education and mobility programme — studies, internships, youth exchanges and more.',
      categoryLabel: 'Education & mobility',
      hero: { heading: 'Europe\'s largest education programme', sub: 'Erasmus+ funds studies abroad, internships, youth exchanges and vocational training. Since 1987 over 16 million people have taken part. Nearly double the budget of its predecessor.' },
      what: { heading: 'Much more than student exchanges', body: 'Erasmus+ is the EU\'s umbrella programme for education, training, youth and sport, with a budget of €26.2 billion for 2021–2027.\n\nIt covers everything from student exchanges in higher education to internships for vocational learners, youth participation activities, DiscoverEU travel for 18-year-olds and mobility for sports professionals. The current programme period focuses on social inclusion, the green and digital transitions, and democratic participation.\n\nNote: Most opportunities require you to apply through a university, training centre or organisation — not directly as an individual.' },
      formats: [
        { icon: '🏫', title: 'Individual mobility (KA1)', duration: 'Varies', description: 'Studies and internships abroad for students, learners, apprentices and staff in education and sport.', bullets: ['Student exchange via institutions', 'Internships abroad', 'Youth participation activities', 'Mobility for sports professionals'] },
        { icon: '🤝', title: 'Cooperation between organisations (KA2)', duration: 'Varies', description: 'Partnerships and projects that organisations can apply for — funding the projects that individuals then participate in.', bullets: ['Cooperation partnerships', 'Small-scale partnerships', 'European Universities', 'Erasmus Mundus joint masters'] },
        { icon: '🏛️', title: 'Jean Monnet actions', duration: 'Varies', description: 'Support for teaching and research on European integration at higher education institutions.', bullets: ['Jean Monnet modules', 'Jean Monnet chairs', 'Centres of Excellence'] },
      ],
      covered: [
        { icon: '✈️', title: 'Travel', desc: 'Grant towards travel costs based on distance and activity type.' },
        { icon: '🏠', title: 'Accommodation', desc: 'Grant towards accommodation during the exchange period.' },
        { icon: '💶', title: 'Scholarship', desc: 'Monthly grant adjusted to the cost of living in the destination country.' },
        { icon: '🌐', title: 'Language support', desc: 'Free access to Erasmus+ Online Language Support (OLS).' },
        { icon: '📜', title: 'Recognition', desc: 'Academic credits and competences recognised via Europass and similar tools.' },
        { icon: '♿', title: 'Inclusion support', desc: 'Additional support for participants with disabilities or fewer opportunities.' },
      ],
      steps: [
        { n: '01', title: 'Contact your organisation', desc: 'Erasmus+ is applied for through your university, school or youth organisation — not directly as an individual.' },
        { n: '02', title: 'Apply through your institution', desc: 'Your institution applies for Erasmus+ funding. Ask your international coordinator about the opportunities available.' },
        { n: '03', title: 'Get nominated', desc: 'Your institution nominates you for an exchange or internship at a partner institution.' },
        { n: '04', title: 'Prepare', desc: 'Apply for a visa if needed, start your language preparation via OLS and arrange accommodation.' },
        { n: '05', title: 'Go and return with recognised credits', desc: 'Your academic results are recognised at home. Competences are documented in Europass.' },
      ],
      faq: [
        { q: 'Can I apply directly as an individual?', a: 'Most opportunities require you to go through a university, training centre or organisation. Contact your institution\'s international office.' },
        { q: 'What is DiscoverEU?', a: 'DiscoverEU is a part of Erasmus+ aimed directly at 18-year-olds. You can apply directly through the European Youth Portal.' },
        { q: 'Does Erasmus+ only apply to students?', a: 'No. Erasmus+ covers education at all levels, vocational training, youth activities (ages 13–30) and sport.' },
        { q: 'How large is the monthly scholarship?', a: 'It varies by destination and activity type. Ask your institution or national Erasmus+ agency for current figures.' },
      ],
    },

    'discovereu': {
      name: 'DiscoverEU',
      tagline: 'Explore Europe for free by rail — exclusively for 18-year-olds.',
      categoryLabel: 'Travel & exploration',
      hero: { heading: 'Explore Europe — the EU pays', sub: 'DiscoverEU gives 18-year-olds the chance to travel across Europe by train, free of charge. 40,000 passes per round. Travel alone or with up to four friends.' },
      what: { heading: 'More than just a rail pass', body: 'DiscoverEU is an Erasmus+ initiative giving 18-year-old Europeans the opportunity to discover the continent. You receive a rail pass with 7 travel days within a one-month period, plus a discount card with benefits at hundreds of partners across Europe — accommodation, museums, local transport and food.\n\nTravel is primarily by train (2nd class). Accommodation, food and insurance are your own responsibility — the pass covers transport only. Participants become DiscoverEU Ambassadors and are encouraged to share their travel experiences.' },
      formats: [
        { icon: '🧑', title: 'Solo travel', duration: '7 travel days within 1 month', description: 'Travel alone as a DiscoverEU participant. You choose countries, route and pace entirely yourself.', bullets: ['Rail pass in 2nd class', 'Up to 4 free seat reservations', 'Discount card with benefits', 'Travel days can be spread out'] },
        { icon: '👥', title: 'Group travel', duration: '7 travel days within 1 month', description: 'Travel together with up to 4 friends. All must meet the eligibility criteria.', bullets: ['Maximum 5 people in the group', 'All must be 18 and eligible', 'Same benefits as solo travel'] },
      ],
      covered: [
        { icon: '🚆', title: 'Rail tickets', desc: 'Rail pass for 2nd class travel. Flights permitted in exceptional cases (islands, remote regions).' },
        { icon: '🎟️', title: 'Discount card', desc: 'Discounts on accommodation, culture, local transport and food across Europe.' },
        { icon: '📌', title: 'Seat reservations', desc: 'Up to 4 free seat reservations included in the rail pass.' },
      ],
      steps: [
        { n: '01', title: 'Check your eligibility', desc: 'You must turn 18 between 1 July 2025 and 30 June 2026 (for the Spring 2026 round). Citizenship in the EU or an associated country.' },
        { n: '02', title: 'Apply via the European Youth Portal', desc: 'Apply directly at youth.europa.eu. Spring 2026 application window: 8–22 April 2026.' },
        { n: '03', title: 'Answer the quiz', desc: '5 multiple-choice questions about the EU + one tie-breaker question. Those with all 5 correct are ranked on the tie-breaker.' },
        { n: '04', title: 'Wait for results', desc: 'Results announced in June 2026. Passes are allocated per country based on a distribution key.' },
        { n: '05', title: 'Activate and travel', desc: 'Activate your pass by 31 August 2026. Travel possible 1 July 2026 – 30 September 2027.' },
      ],
      faq: [
        { q: 'What about accommodation and food?', a: 'You arrange and pay for these yourself. The discount card gives benefits on accommodation, but you fund it out of your own pocket.' },
        { q: 'Can I fly?', a: 'The default is train. Flights are only permitted for residents of outermost regions, overseas territories or if you need to travel more than 18 hours overland.' },
        { q: 'Can I apply again if I was not selected last time?', a: 'Yes, if you still meet the age requirement. But if you already received a pass in a previous round you are not eligible again.' },
        { q: 'What is the DiscoverEU Inclusion Action?', a: 'A version for young people aged 18–21 with fewer opportunities. Applied for through organisations, not directly. Covers organisational support and inclusion grants.' },
        { q: 'Can I cancel if I change my mind?', a: 'The pass is non-refundable and non-transferable. If you do not activate it in time it may be withdrawn and offered to someone on the reserve list.' },
      ],
    },

    'blue-book-traineeship': {
      name: 'Blue Book Traineeship',
      tagline: 'Paid 5-month traineeship at the European Commission in Brussels, Luxembourg or elsewhere in the EU.',
      categoryLabel: 'Internships',
      hero: { heading: 'Work at the heart of the EU', sub: 'The Blue Book gives graduates a paid 5-month traineeship at the European Commission. Work in a multicultural environment and gain insight into how EU policy is shaped — from the inside.' },
      what: { heading: 'The EU\'s most sought-after traineeship', body: 'Twice a year the European Commission offers around 1,000 paid traineeship places for 5 months. Trainees are placed in Commission departments and executive agencies in Brussels, Luxembourg and elsewhere in the EU — including EEAS, FRONTEX, EEA and many more.\n\nThe traineeship comes in two forms: administrative traineeship (ADMIN) for most applicants, and translation traineeship (DGT) at the Directorate-General for Translation. There are approximately three times more candidates than available places.' },
      formats: [
        { icon: '🏢', title: 'Administrative traineeship (ADMIN)', duration: '5 months', description: 'Hands-on experience of EU policy work and administration. Placements across the Commission and its agencies.', bullets: ['€1,538.16/month', 'Requires university degree (EQF 6)', 'C1/C2 in EN, FR or DE + B2 in another EU language', 'Max 6 weeks previous EU experience'] },
        { icon: '🌐', title: 'Translation traineeship (DGT)', duration: '5 months', description: 'Hands-on experience translating documents into your mother tongue. Open to EU citizens only.', bullets: ['€1,538.16/month', 'Mother tongue must be an official EU language', 'Source language 1: EN, FR or DE (C1+)', 'Source language 2: any EU language (B2+)'] },
      ],
      covered: [
        { icon: '💶', title: 'Monthly allowance', desc: '€1,538.16 per month throughout the traineeship.' },
        { icon: '🌍', title: 'International environment', desc: 'Work alongside colleagues from across Europe and the world.' },
        { icon: '📜', title: 'Certificate', desc: 'Official traineeship certificate from the European Commission.' },
      ],
      steps: [
        { n: '01', title: 'Check eligibility', desc: 'You must have a completed 3-year university degree (EQF 6), the right language skills and no more than 6 weeks of previous EU experience.' },
        { n: '02', title: 'Apply online', desc: 'Applications open twice a year: February (for October session) and July–Aug (for March session). Upload all documents in one PDF file.' },
        { n: '03', title: 'Pre-selection process', desc: 'A board verifies the documents. Pre-selected candidates are placed in the "Virtual Blue Book" and can apply to up to 3 posts.' },
        { n: '04', title: 'Interview and offer', desc: 'Recruiting departments may contact candidates and hold interviews. Selection is final when the offer appears in your account.' },
        { n: '05', title: 'Take up your placement', desc: 'Sessions start in October and March respectively. If you decline an offer, no further offers will be made.' },
      ],
      faq: [
        { q: 'Does part-time work at an EU institution count?', a: 'Yes. The exclusion rule is absolute: all experience counts, paid or unpaid, full-time or part-time, consecutive or not — if it exceeds 6 weeks.' },
        { q: 'Can I apply for multiple sessions?', a: 'Yes, but each application is valid for one session only. You may submit one application per session per type of traineeship.' },
        { q: 'What is the difference between ADMIN and DGT?', a: 'ADMIN is open to all EU citizens and some non-EU citizens. DGT is exclusively for EU citizens whose mother tongue is an official EU language.' },
        { q: 'Can I apply as a non-EU citizen?', a: 'Yes, to a limited extent for the ADMIN traineeship — in specific directorates-general depending on available resources.' },
      ],
    },

    'robert-schuman-praktiken': {
      name: 'Robert Schuman Traineeship',
      tagline: 'Paid 5-month traineeship at the European Parliament — Brussels, Strasbourg, Luxembourg or national liaison offices.',
      categoryLabel: 'Internships',
      hero: { heading: 'Learn democracy from the inside', sub: 'The Robert Schuman Traineeship lets you work in the European Parliament\'s Secretariat or directly with an elected Member of Parliament (MEP). Named after Robert Schuman — one of the founding fathers of European integration.' },
      what: { heading: 'Two routes into Parliament', body: 'The European Parliament offers two distinct traineeships under the Schuman programme: traineeship at the Secretariat and traineeship directly with individual MEPs. These are separate programmes with different rules, eligibility requirements and pay levels.\n\nThe monthly allowance for Secretariat traineeships varies by country. A flat-rate travel allowance of €300 is paid to each trainee.\n\nA new programme — the Schuman Recruitment and Development Programme — also gives high-performing trainees the opportunity to continue as contract staff in Parliament.' },
      stats: [
        { value: '€1,889', label: 'Per month (Belgium/Luxembourg base)' },
        { value: '€1,948', label: 'Per month (Germany, approx.)' },
        { value: '€300', label: 'Travel allowance' },
      ],
      formats: [
        { icon: '🏢', title: 'Secretariat traineeship', duration: '5 months (Oct–Feb or Mar–Jul)', description: 'Traineeship in EU policy, finance, law, multilingualism, communications or IT. Apply in May (for October) or October (for March).', bullets: ['€1,889/month in Belgium/Luxembourg, ~€1,948/month in Germany', '€300 travel allowance', 'University degree (EQF 6) or some vocational qualifications required', 'Max 2 months previous EU experience'] },
        { icon: '🧑‍⚖️', title: 'MEP traineeship', duration: '6 weeks – 5 months', description: 'Work directly with an elected Member of the European Parliament. Applied for directly to MEPs — not via the application portal.', bullets: ['€1,133–€1,856/month (full-time)', 'Upper secondary education sufficient', 'Can start at any time of year', 'MEP defines the tasks'] },
      ],
      covered: [
        { icon: '💶', title: 'Monthly allowance', desc: 'Varies by country. Germany: approx. €1,948/month. Base rate: €1,889/month.' },
        { icon: '✈️', title: 'Travel allowance', desc: '€300 flat-rate per trainee.' },
        { icon: '♿', title: 'Disability supplement', desc: 'Up to 50% extra of monthly allowance for long-term disability of 20%+.' },
      ],
      steps: [
        { n: '01', title: 'Choose the type of traineeship', desc: 'Secretariat traineeship or MEP traineeship — they are separate programmes with different rules and application processes.' },
        { n: '02', title: 'Check eligibility', desc: 'At least 18 years old, university degree (EQF 6), EU citizenship or candidate country, max 2 months previous EU experience, clean criminal record.' },
        { n: '03', title: 'Apply for up to 3 posts', desc: 'Applications go through the European Parliament\'s application portal. Max 3 posts per application. No unsolicited applications.' },
        { n: '04', title: 'Pre-selection process', desc: 'Your application is assessed on academic profile, language skills and competences. National quotas apply.' },
        { n: '05', title: 'Take up your placement', desc: 'You receive an official letter of acceptance by e-mail. Traineeship periods start 1 October or 1 March.' },
      ],
      faq: [
        { q: 'How do I contact an MEP for a MEP traineeship?', a: 'Directly via the European Parliament website. Find MEPs by country, party or committee and contact their office.' },
        { q: 'Can I apply for both an MEP and Secretariat traineeship at the same time?', a: 'Yes, they are completely separate programmes. But the eligibility requirements and application processes differ.' },
        { q: 'What is the Schuman Recruitment and Development Programme?', a: 'A new programme where high-performing trainees — recommended by their host DG — can go through a selection process to be hired as contract staff. 25 trainees per period, list valid for 1 year.' },
        { q: 'Is there a supplement for people with disabilities?', a: 'Yes. Via the Positive Action Scheme you can, for a disability of at least 20%, apply for additional payment — up to 50% of the monthly allowance.' },
      ],
    },

    'eures': {
      name: 'EURES',
      tagline: 'The European job-matching network — find work, an internship or training in another European country.',
      categoryLabel: 'Jobs & careers',
      hero: { heading: 'All of Europe — your job market', sub: 'EURES is the EU\'s employment services network in 31 countries. Free advice, CV review, legal guidance and a database of 3 million vacancies. For those who want to work in another European country.' },
      what: { heading: 'More than a job board', body: 'EURES — European Employment Services — is a network of more than 850 advisers who help jobseekers and employers across Europe every day. The network covers the EU\'s 27 member states plus Iceland, Liechtenstein, Norway and Switzerland — 31 countries in total.\n\nSince 2021 EURES has been coordinated by the European Labour Authority (ELA). Services are free and available to all Europeans, regardless of qualification level or profession.' },
      formats: [
        { icon: '🔍', title: 'EURES portal', duration: 'Always available', description: 'Online platform with 3 million vacancies and 1 million CVs. Job and candidate matching.', bullets: ['Search jobs in 31 countries', 'Upload your CV', 'Filter by country, sector and education', 'Free for everyone'] },
        { icon: '👤', title: 'EURES advisers', duration: 'Book an appointment', description: 'Personal advice from 850+ specialist advisers in 270 EURES organisations.', bullets: ['CV review and improvement', 'Legal advice on social security', 'Information on living and working conditions', 'Contact via portal, phone or chat'] },
      ],
      covered: [
        { icon: '🔍', title: 'Job database', desc: '3 million vacancies and 1 million CVs on the EURES portal.' },
        { icon: '📄', title: 'CV support', desc: 'Review, improvement and adaptation of your CV for European employers.' },
        { icon: '⚖️', title: 'Legal advice', desc: 'Information on social security, tax, pensions and health insurance in the destination country.' },
        { icon: '🎪', title: 'Job fairs', desc: 'Access to European Job Days — digital and in-person job fairs.' },
        { icon: '🌍', title: 'Country-by-country information', desc: 'Country-specific guides on living and working in all 31 EURES countries.' },
        { icon: '🚦', title: 'Cross-border workers', desc: 'Specialist support for the nearly 2 million EU citizens who commute daily across borders.' },
      ],
      steps: [
        { n: '01', title: 'Create a profile', desc: 'Go to eures.europa.eu and upload your CV. Choose which country and sector you are interested in.' },
        { n: '02', title: 'Search for jobs', desc: 'Browse 3 million vacancies. Filter by location, type and educational requirements.' },
        { n: '03', title: 'Contact a EURES adviser', desc: 'For personal advice, contact a local adviser via the portal, phone or chat. Free of charge.' },
        { n: '04', title: 'Apply and prepare to move', desc: 'Apply directly to employers via the portal. Advisers help with visas, qualification recognition and practical information.' },
      ],
      faq: [
        { q: 'Is EURES really free?', a: 'Yes. Most services are free of charge for both jobseekers and employers.' },
        { q: 'Does EURES cover countries outside the EU?', a: 'EURES covers the EU\'s 27 countries plus Iceland, Liechtenstein, Norway and Switzerland — 31 countries in total.' },
        { q: 'What is EURES Targeted Mobility?', a: 'A more intensive support programme with funding for language courses, qualification recognition and travel costs. See the dedicated page.' },
        { q: 'I am an employer — can I use EURES?', a: 'Yes. EURES helps employers find qualified candidates from other European countries. Contact a local EURES office.' },
      ],
    },

    'eures-targeted-mobility': {
      name: 'EURES Targeted Mobility',
      tagline: 'Targeted financial support to overcome practical barriers to job-seeking in Europe — language courses, travel and more.',
      categoryLabel: 'Jobs & careers',
      hero: { heading: 'Financial support to take the leap', sub: 'EURES Targeted Mobility helps you if you want to work in another European country but face concrete barriers — costs of language courses, travel or getting your qualifications recognised. Open to everyone, regardless of education level.' },
      what: { heading: 'Support when the barriers are financial', body: 'EURES Targeted Mobility Scheme (TMS) is EURES\'s most substantial support for individuals who want to work abroad in Europe but face concrete financial barriers. It is not a general entitlement but a project-based programme led by national employment services.\n\nThe programme is notably open: no educational requirements, no upper age limit beyond 18, no specific profession required. This sets it clearly apart from the Blue Book and Schuman traineeships.\n\nActive lead projects are run by the employment services in Sweden (Arbetsförmedlingen), Germany (Bundesagentur für Arbeit) and Italy (Ministero del Lavoro).' },
      formats: [
        { icon: '🧑', title: 'Support for jobseekers', duration: 'Varies by project', description: 'Dedicated support from national employment services to remove financial barriers to mobility.', bullets: ['Funding for language courses', 'Qualification recognition support', 'Travel and subsistence grants', 'Matching with employers in other EU countries'] },
        { icon: '🏢', title: 'Support for employers', duration: 'Varies', description: 'Help recruiting motivated EU workers. Financial support for training and integration costs for SMEs.', bullets: ['Recruitment assistance from national employment services', 'Financial support for SMEs', 'Written contract required: 6 months (jobs) or 3 months (internships)', 'Open to all sectors and sizes'] },
      ],
      covered: [
        { icon: '🌐', title: 'Language courses', desc: 'Funding for courses in the destination country\'s language.' },
        { icon: '📜', title: 'Qualification recognition', desc: 'Support for the process of getting your qualifications recognised in the new country.' },
        { icon: '✈️', title: 'Travel and subsistence', desc: 'Grants towards travel and initial living costs in the destination country.' },
      ],
      steps: [
        { n: '01', title: 'Find the current project', desc: 'The three active lead projects are run by Arbetsförmedlingen (SE), Bundesagentur für Arbeit (DE) and Ministero del Lavoro (IT).' },
        { n: '02', title: 'Get in touch', desc: 'Contact the lead organisation or its partners directly via the EURES portal and ask about the application process.' },
        { n: '03', title: 'Matching and job search', desc: 'The lead organisation\'s advisers help you with matching, job searching and recruitment assistance.' },
        { n: '04', title: 'Get support and move', desc: 'Once you have a job, support for language courses, qualification recognition and travel costs is paid out under the project\'s terms.' },
      ],
      faq: [
        { q: 'Which countries can I look for work in via TMS?', a: 'TMS supports job searching in EU countries, Norway and Iceland.' },
        { q: 'Is there a cap on the support?', a: 'Exact amounts are determined within each national project and may vary. Contact the lead organisations for current figures.' },
        { q: 'Can I apply if I am from a country outside the EU?', a: 'Yes, if you are legally resident in an EU country, Norway or Iceland.' },
        { q: 'Is TMS an alternative to the EURES portal?', a: 'TMS complements the portal with more intensive, individual support and financial assistance. Both are free.' },
      ],
    },

    'eurodesk': {
      name: 'Eurodesk',
      tagline: 'The European youth information network — find all opportunities in one place.',
      categoryLabel: 'Information & support',
      hero: { heading: 'Find all opportunities in one place', sub: 'Eurodesk is the European network that helps young people navigate all EU opportunities. 38 centres, 4,000+ local information providers and a database of 200+ programmes.' },
      what: { heading: 'Your guide to EU opportunities', body: 'Eurodesk was founded in Edinburgh in March 1990 as a small regional helpdesk with a simple idea: gather all relevant European information in one place and present it in a youth-friendly way. The initiative was an immediate success.\n\nToday Eurodesk is a European network with 38 national centres linked to more than 4,000 local information providers in 36 countries. The network is funded by Erasmus+ and organised as an international non-profit association (AISBL) under Belgian law, headquartered in Brussels.\n\nEurodesk manages the European Youth Portal and is responsible for its helpdesk — answering thousands of questions a year about travelling abroad with EU programmes.' },
      formats: [
        { icon: '🌐', title: 'Opportunity Finder', duration: 'Always available', description: 'Database of 200+ EU-funded programmes: volunteering, learning, work, change-making and competitions.', bullets: ['Curated by Eurodesk', 'All open to young people in Europe', 'Filter by type and country', 'Free and direct'] },
        { icon: '📚', title: 'Euroclasses', duration: 'In schools and youth settings', description: 'Free non-formal education workshops delivered by Eurodesk multipliers.', bullets: ['Working abroad', 'International volunteering', 'Youth participation', 'Activism in Europe'] },
      ],
      covered: [
        { icon: '🌐', title: 'Opportunity Finder', desc: 'Database of 200+ programmes sorted and curated for young people in Europe.' },
        { icon: '❓', title: 'Helpdesk', desc: 'Answers to your questions about Erasmus+, ESC, volunteering and internships.' },
        { icon: '📰', title: 'EU Youth Portal', desc: 'Eurodesk produces and maintains the content on the European Youth Portal.' },
        { icon: '📣', title: 'Time to Move campaign', desc: 'Europe-wide information campaign every October about opportunities to travel abroad.' },
        { icon: '✍️', title: 'Young journalists', desc: 'Pool of Young Journalists in Europe — 16 young people from across Europe create content on the EU Youth Portal.' },
      ],
      steps: [
        { n: '01', title: 'Visit eurodesk.eu', desc: 'Go to the Opportunity Finder and browse 200+ programmes open to young people in Europe.' },
        { n: '02', title: 'Find your national Eurodesk', desc: 'Every country has its own Eurodesk. They can give personalised advice about opportunities in your own language.' },
        { n: '03', title: 'Ask a question', desc: 'Via the European Youth Portal you can submit questions directly to the Eurodesk network in your own EU language.' },
      ],
      faq: [
        { q: 'Are Eurodesk and Europe Direct the same thing?', a: 'No. Eurodesk focuses specifically on mobility and opportunities for young people (13–30). Europe Direct is the EU\'s general citizen information service for all ages and all EU topics.' },
        { q: 'Can Eurodesk help me apply to Erasmus+?', a: 'Eurodesk informs and guides. Applications go through your institution or the European Youth Portal.' },
        { q: 'What are the Eurodesk Awards?', a: 'Every May Eurodesk celebrates the best projects run by Eurodesk multipliers, with a ceremony in Brussels.' },
      ],
    },

    'europa-direkt': {
      name: 'Europe Direct',
      tagline: 'The EU\'s central citizen contact service — ask anything about the EU, free, in your own language.',
      categoryLabel: 'Information & support',
      hero: { heading: 'A direct line to the EU', sub: 'Europe Direct is the EU\'s open door for all citizens. Call for free, chat or visit one of the 400 local centres — in your own EU language. For any question about the EU: legislation, rights, programmes and funding.' },
      what: { heading: 'The EU close to you', body: 'Europe Direct consists of two parts: a central contact service (Europe Direct Contact Centre) accessible by phone, contact form and chat, and a network of around 400 physical information centres across the EU.\n\nThe centres are run by communications professionals with EU expertise. They organise conferences, debates and events, work with schools and media, and pass citizens\' views on to the European Commission.' },
      formats: [
        { icon: '📞', title: 'Phone and chat', duration: 'Mon–Fri 9am–6pm CET', description: 'Call for free from anywhere in the EU. Answers to all EU questions in any official EU language.', bullets: ['+800 6 7 8 9 10 11 (free within EU)', '+32 22 99 96 96 (from outside EU)', 'Ukrainian and Russian also accepted', 'SMS "call me" for a callback'] },
        { icon: '📍', title: 'Local information centres', duration: 'See individual centre opening hours', description: 'Around 400 centres in all 27 EU member states. Organise events, debates and act as a local bridge to the EU.', bullets: ['Find your nearest centre at european-union.europa.eu', 'Answer questions about EU programmes', 'Work with schools and local partners', 'Listen and pass your voice on'] },
      ],
      covered: [
        { icon: '☎️', title: 'Free phone', desc: '+800 6 7 8 9 10 11. Free from all EU countries, Mon–Fri 9am–6pm CET.' },
        { icon: '✉️', title: 'Written enquiry', desc: 'Via contact form in any EU language. Reply within 3 working days.' },
        { icon: '🗺️', title: 'Local centre', desc: '~400 centres across the EU. Find yours at european-union.europa.eu.' },
      ],
      steps: [
        { n: '01', title: 'Choose how to get in touch', desc: 'Call +800 6 7 8 9 10 11, chat on the website, fill in the contact form or visit a local centre.' },
        { n: '02', title: 'Ask your question', desc: 'You can ask about anything connected to the EU — programmes, rights, legislation or local funding.' },
        { n: '03', title: 'Get an answer', desc: 'Phone: immediate answer in your own EU language. Written enquiry: reply within 3 working days.' },
      ],
      faq: [
        { q: 'Is there a charge to call?', a: 'Free from all EU countries on the number +800 6 7 8 9 10 11. International rates apply from outside the EU on +32 22 99 96 96.' },
        { q: 'Can I ask questions in English?', a: 'Yes. The service responds in all official EU languages, including English.' },
        { q: 'Are the answers legally binding?', a: 'No. The information provided is not legally binding, regardless of how you contact the service.' },
      ],
    },

    'eu-youth-portal': {
      name: 'EU Youth Portal',
      tagline: 'The European Commission\'s and Eurodesk\'s shared portal — all EU information for young people in one place.',
      categoryLabel: 'Information & support',
      hero: { heading: 'Everything about the EU — for young people', sub: 'The EU Youth Portal is the European Commission\'s and Eurodesk\'s joint platform. Here you find information about all EU programmes and opportunities, can apply for DiscoverEU and read about your rights as a young EU citizen.' },
      what: { heading: 'More than a website', body: 'The EU Youth Portal is jointly maintained by the European Commission and the Eurodesk network. It covers 23 official EU languages, and DiscoverEU content is additionally available in Icelandic, Macedonian, Norwegian, Serbian and Turkish.\n\nThe portal is deeply embedded in the EU Youth Strategy 2019–2027 — the framework for EU youth policy cooperation based on the Council resolution of 26 November 2018. The strategy focuses on three core words: Engage, Connect and Empower.' },
      formats: [
        { icon: '✋', title: 'Get involved', duration: 'Always available', description: 'Active citizenship, EU Youth Dialogue, democratic participation, your rights and inclusion.', bullets: ['EU Youth Dialogue', 'Democratic participation', 'Civil rights', 'Inclusion and sustainability'] },
        { icon: '✈️', title: 'Go abroad', duration: 'Always available', description: 'Opportunities for study, volunteering, internships, work, exchanges and travel.', bullets: ['All ESC opportunities', 'DiscoverEU application', 'Erasmus+ information', 'International internships'] },
      ],
      covered: [
        { icon: '🌐', title: 'All official EU programmes', desc: 'Comprehensive information about ESC, Erasmus+, DiscoverEU and more.' },
        { icon: '❓', title: 'Helpdesk', desc: 'Submit questions via the portal — answered by the Eurodesk network.' },
        { icon: '🗳️', title: 'EU Youth Dialogue', desc: 'Your voice to EU decision-makers via the structured youth dialogue.' },
        { icon: '📖', title: 'Stories from young people', desc: 'Articles, news and experiences from young people across Europe.' },
      ],
      steps: [
        { n: '01', title: 'Visit youth.europa.eu', desc: 'The portal is open to everyone without logging in. Browse in your own EU language.' },
        { n: '02', title: 'Explore your opportunities', desc: 'Navigate via "Go abroad" for activities abroad or "Get involved" for active citizenship.' },
        { n: '03', title: 'Apply or ask a question', desc: 'Apply directly to DiscoverEU, or submit a question via the "Questions" button — answered by Eurodesk.' },
      ],
      faq: [
        { q: 'Can I apply for DiscoverEU directly on the portal?', a: 'Yes. During application periods, DiscoverEU applications are made directly at youth.europa.eu.' },
        { q: 'Who is responsible for the content?', a: 'The European Commission and the Eurodesk network jointly maintain the content. Eurodesk manages the helpdesk.' },
        { q: 'What is the EU Youth Strategy?', a: 'The framework for EU youth policy cooperation 2019–2027, with 11 European Youth Goals. The next strategy (post-2027) is being prepared.' },
      ],
    },
  }, // end en

  // ─── SPANISH ──────────────────────────────────────────────────────────────
  es: {
    'europeiska-solidaritetskaren': {
      name: 'Cuerpo Europeo de Solidaridad',
      tagline: 'Haz voluntariado, lleva a cabo un proyecto de solidaridad o participa en acción humanitaria — financiado por la UE.',
      categoryLabel: 'Voluntariado',
      hero: { heading: 'Haz algo que realmente importe', sub: 'El Cuerpo Europeo de Solidaridad te permite hacer voluntariado en el extranjero, poner en marcha tu propio proyecto o participar en acción humanitaria — completamente financiado por la UE. Sin requisitos de experiencia.' },
      what: { heading: 'La UE paga — tú cambias el mundo', body: 'El Cuerpo Europeo de Solidaridad (CES) es el programa de la UE para jóvenes que quieren marcar la diferencia. Puedes hacer voluntariado en otro país europeo, lanzar tu propio proyecto de solidaridad en tu ciudad o participar en acción humanitaria fuera de la UE — todo con apoyo financiero de la UE.\n\nEl programa tiene un presupuesto de 1.010 millones de euros para 2021–2027 y persigue dos objetivos principales: ofrecer a los jóvenes oportunidades accesibles de actividades de solidaridad, y mejorar sus competencias y empleabilidad.' },
      faq: [
        { q: '¿Necesito hablar inglés?', a: 'No necesariamente. Muchos proyectos requieren inglés básico, pero también hay proyectos en otros idiomas. Además, se incluye un curso de idiomas gratuito.' },
        { q: '¿Puedo elegir a qué país ir?', a: '¡Sí! Te presentas a proyectos concretos y eliges tú mismo a qué países y organizaciones quieres solicitar.' },
        { q: '¿Tengo que pagar algo?', a: 'No. El programa CES es gratuito para los participantes. La UE cubre el alojamiento, los viajes, la manutención y el dinero de bolsillo.' },
        { q: '¿Puedo ir más de una vez?', a: 'Puedes participar en varios proyectos, pero el voluntariado está limitado a un máximo de 12 meses en total por persona.' },
        { q: '¿Cuenta en mi currículum?', a: 'Por supuesto. Recibirás un certificado Youthpass que describe lo que has hecho y las competencias que has desarrollado.' },
      ],
      areas: [
        { emoji: '🤝', slug: 'socialt-arbete', title: 'Trabajo social e inclusión', desc: 'Apoya a personas en situaciones vulnerables — en albergues, viviendas tuteladas y con trabajo de calle. Dirigido a personas sin hogar, con adicciones o con problemas de salud mental.', href: 'https://www.omesc.se/omraden/socialt-arbete' },
        { emoji: '🌐', slug: 'migration-integration', title: 'Migración e integración', desc: 'Ayuda a los recién llegados a encontrar su lugar en un nuevo país — apoyo lingüístico, orientación cultural, orientación jurídica y ayuda práctica en la vida cotidiana.', href: 'https://www.omesc.se/omraden/migration-integration' },
        { emoji: '📚', slug: 'utbildning-ungdom', title: 'Educación y juventud', desc: 'Inspira a la próxima generación en aulas, centros juveniles y entornos de aprendizaje informales — clases de apoyo, tutoría y actividades educativas.', href: 'https://www.omesc.se/omraden/utbildning' },
        { emoji: '🌿', slug: 'miljo-hallbarhet', title: 'Medio ambiente y sostenibilidad', desc: 'Trabaja en cuestiones climáticas, biodiversidad, agricultura ecológica, conservación de la naturaleza y desarrollo comunitario sostenible.', href: 'https://www.omesc.se/omraden/miljo-hallbarhet' },
        { emoji: '🎨', slug: 'kultur-konst', title: 'Cultura y arte', desc: 'La creatividad como herramienta de cambio — arte, medios, teatro, cine, patrimonio cultural, museos y eventos culturales en toda Europa.', href: 'https://www.omesc.se/omraden/kultur-konst' },
        { emoji: '💚', slug: 'halsa-omsorg', title: 'Salud y cuidado', desc: 'Contribuye al bienestar — trabajo de salud pública, acción preventiva, cuidado de personas mayores, cuidados paliativos y apoyo a personas con discapacidad.', href: 'https://www.omesc.se/omraden/halsa-omsorg' },
      ],
      formats: [
        { icon: '🌍', title: 'Voluntariado individual', duration: '2 semanas – 12 meses', description: 'Trabaja solo en una organización de acogida en otro país europeo. A jornada completa (30–38 horas/semana).', bullets: ['Alojamiento, comida y viajes cubiertos', 'Dinero de bolsillo mensual', 'Curso de idiomas gratuito (OLS)', 'Seguro cubierto por la UE'] },
        { icon: '👥', title: 'Voluntariado en grupo', duration: '2 semanas – 2 meses', description: 'Trabaja junto a voluntarios de al menos 2 países (mín. 5 voluntarios). Centrado en desafíos europeos comunes.', bullets: ['Equipo internacional', 'Alojamiento y viajes cubiertos', 'Dinero de bolsillo y seguro', 'Certificado Youthpass'] },
        { icon: '💡', title: 'Proyectos de solidaridad', duration: '2–12 meses', description: 'Crea tu propio proyecto en tu comunidad junto con al menos 5 amigos. Eliges el tema — a tiempo parcial.', bullets: ['630 € al mes para el proyecto', 'Solicitud directa sin organización', 'Tú decides el enfoque', 'Apoyo de un coach incluido'] },
      ],
      covered: [
        { icon: '✈️', title: 'Viajes', desc: 'Los billetes de ida y vuelta al proyecto están cubiertos.' },
        { icon: '🏠', title: 'Alojamiento', desc: 'La organización de acogida organiza el alojamiento durante toda tu estancia.' },
        { icon: '🍽️', title: 'Manutención', desc: 'Las comidas diarias o un subsidio de alimentación están incluidos.' },
        { icon: '💶', title: 'Dinero de bolsillo', desc: 'Pago mensual ajustado al coste de vida en tu país de acogida.' },
        { icon: '🌐', title: 'Curso de idiomas', desc: 'Acceso gratuito a cursos en línea a través de OLS en todos los idiomas oficiales de la UE.' },
        { icon: '🛡️', title: 'Seguro', desc: 'El seguro de la UE cubre salud y accidentes durante todo el proyecto.' },
        { icon: '📜', title: 'Youthpass', desc: 'Certificado que documenta tus competencias y resultados de aprendizaje.' },
      ],
      steps: [
        { n: '01', title: 'Crea tu perfil', desc: 'Crea una cuenta en EU Login y completa tu perfil en el Portal Europeo de la Juventud. Tarda unos 10 minutos.' },
        { n: '02', title: 'Encuentra un proyecto', desc: 'Navega entre cientos de proyectos. Filtra por país, temática y duración.' },
        { n: '03', title: 'Contacta con la organización', desc: 'Escríbeles directamente a través del portal. Cuéntales quién eres y por qué quieres participar.' },
        { n: '04', title: 'Sé seleccionado', desc: 'Si te eligen, la organización te ayuda con los trámites — visado, alojamiento y viajes.' },
        { n: '05', title: 'Ve y marca la diferencia', desc: 'Aprende un nuevo idioma, crea una red europea y vuelve con un certificado Youthpass.' },
      ],
    },
    'humanitart-volontararbete': { name: 'Voluntariado Humanitario', tagline: 'Haz voluntariado en terceros países fuera de la UE con acción humanitaria — respuesta a desastres, protección de refugiados y clima.', categoryLabel: 'Voluntariado', hero: { heading: 'Marca la diferencia más allá de las fronteras de Europa', sub: 'Desde 2022, el CES ofrece plazas de voluntariado en terceros países. Trabajas en operaciones humanitarias: desde la preparación ante desastres hasta la protección de refugiados y la seguridad alimentaria.' }, what: { heading: 'Solidaridad que llega al mundo', body: 'El voluntariado humanitario bajo el CES existe desde 2022 en terceros países donde se llevan a cabo operaciones humanitarias.\n\nLos proyectos cubren: preparación ante desastres y respuesta a catástrofes, promoción de la igualdad de género, protección de refugiados y desplazados internos, protección de migrantes indocumentados, mitigación del cambio climático y mejora de la seguridad alimentaria.\n\nImportante: la competencia es intensa. El número de candidatos interesados supera con creces las plazas disponibles — completar la formación no garantiza una plaza.' }, faq: [{ q: '¿Puedo participar si ya he hecho voluntariado CES?', a: 'Puedes inscribirte en la formación si no has participado anteriormente en voluntariado de la UE durante más de 6 meses en total.' }, { q: '¿Cuántas veces puedo participar?', a: 'Solo puedes hacer voluntariado humanitario individual una vez. Tu voluntariado total en la UE (incluido el humanitario) no puede superar los 12 meses.' }, { q: '¿Dónde se celebra la formación?', a: 'La formación presencial (5 días) se celebra en centros de formación en Francia, Alemania, Italia o España — tres convocatorias al año.' }] },
    'erasmus-plus': { name: 'Erasmus+', tagline: 'El gran programa de educación y movilidad de la UE — estudios, prácticas, intercambios juveniles y mucho más.', categoryLabel: 'Educación y movilidad', hero: { heading: 'El mayor programa de educación de Europa', sub: 'Erasmus+ financia estudios en el extranjero, prácticas, intercambios juveniles y formación profesional. Desde 1987 han participado más de 16 millones de personas.' }, what: { heading: 'Mucho más que intercambios de estudiantes', body: 'Erasmus+ es el programa paraguas de la UE para la educación, la formación, la juventud y el deporte, con un presupuesto de 26.200 millones de euros para 2021–2027.\n\nAbarca desde los intercambios de estudiantes en educación superior hasta las prácticas de formación profesional, las actividades de participación juvenil, los viajes DiscoverEU para personas de 18 años y la movilidad de profesionales del deporte.\n\nNota: la mayoría de las oportunidades requieren que solicites a través de una universidad, centro de formación u organización — no directamente como individuo.' }, faq: [{ q: '¿Puedo solicitarlo directamente como individuo?', a: 'La mayoría de las oportunidades requieren que vayas a través de una universidad, centro de formación u organización. Contacta con la oficina internacional de tu institución.' }, { q: '¿Qué es DiscoverEU?', a: 'DiscoverEU es una parte de Erasmus+ dirigida directamente a jóvenes de 18 años. Puedes solicitarlo directamente a través del Portal Europeo de la Juventud.' }] },
    'discovereu': { name: 'DiscoverEU', tagline: 'Explora Europa gratis en tren — exclusivamente para jóvenes de 18 años.', categoryLabel: 'Viajes y exploración', hero: { heading: 'Descubre Europa — la UE paga', sub: 'DiscoverEU da a los jóvenes de 18 años la oportunidad de viajar por Europa en tren, de forma gratuita. 40.000 pases por convocatoria. Viaja solo o con hasta cuatro amigos.' }, what: { heading: 'Mucho más que un bono de tren', body: 'DiscoverEU es una iniciativa de Erasmus+ que ofrece a los jóvenes europeos de 18 años la oportunidad de descubrir el continente. Recibes un bono de tren con 7 días de viaje dentro de un mes, más una tarjeta de descuentos.\n\nLa normativa general es el tren (2ª clase). El alojamiento, la manutención y el seguro son responsabilidad tuya — el bono cubre únicamente el transporte.' }, faq: [{ q: '¿Qué pasa con el alojamiento y la manutención?', a: 'Lo gestionas y pagas tú. La tarjeta de descuentos ofrece ventajas en alojamiento, pero lo financias de tu propio bolsillo.' }, { q: '¿Puedo volver a solicitar si no me seleccionaron la última vez?', a: 'Sí, si todavía cumples el requisito de edad. Pero si ya recibiste un pase en una convocatoria anterior, no eres elegible de nuevo.' }] },
    'blue-book-traineeship': { name: 'Blue Book Traineeship', tagline: 'Prácticas remuneradas de 5 meses en la Comisión Europea en Bruselas, Luxemburgo o en otro lugar de la UE.', categoryLabel: 'Prácticas', hero: { heading: 'Trabaja en el corazón de la UE', sub: 'El Blue Book ofrece a los titulados unas prácticas remuneradas de 5 meses en la Comisión Europea. Trabaja en un entorno multicultural y conoce desde dentro cómo se elabora la política de la UE.' }, what: { heading: 'El programa de prácticas más solicitado de la UE', body: 'Dos veces al año, la Comisión Europea ofrece unas 1.000 plazas de prácticas remuneradas de 5 meses. Los becarios se destinan a los departamentos de la Comisión y sus agencias ejecutivas en Bruselas, Luxemburgo y otros lugares de la UE.\n\nHay aproximadamente tres veces más candidatos que plazas disponibles.' }, stats: [{ value: '1.538 €', label: 'Al mes' }, { value: '~1.000', label: 'Plazas por sesión' }, { value: '2×', label: 'Sesiones al año' }], faq: [{ q: '¿Cuenta el trabajo a tiempo parcial en una institución de la UE?', a: 'Sí. La norma de exclusión es absoluta: toda la experiencia cuenta, remunerada o no, a tiempo completo o parcial.' }, { q: '¿Puedo solicitar varias sesiones?', a: 'Sí, pero cada solicitud es válida para una sola sesión. Puedes presentar una solicitud por sesión y tipo de prácticas.' }] },
    'robert-schuman-praktiken': { name: 'Prácticas Robert Schuman', tagline: 'Prácticas remuneradas de 5 meses en el Parlamento Europeo — Bruselas, Estrasburgo, Luxemburgo u oficinas nacionales de enlace.', categoryLabel: 'Prácticas', hero: { heading: 'Aprende la democracia desde dentro', sub: 'Las prácticas Robert Schuman te permiten trabajar en la Secretaría del Parlamento Europeo o directamente con un eurodiputado. Llevan el nombre de Robert Schuman, uno de los padres fundadores de la integración europea.' }, what: { heading: 'Dos vías para acceder al Parlamento', body: 'El Parlamento Europeo ofrece dos tipos distintos de prácticas: en la Secretaría y directamente con eurodiputados. Son programas separados con reglas, requisitos y niveles retributivos diferentes.\n\nLa retribución varía por país. En España asciende a aproximadamente 1.719 €/mes. Además se abona una compensación de viaje de 300 € por becario.' }, stats: [{ value: '~1.719 €', label: 'Al mes (España, aprox.)' }, { value: '1.889 €', label: 'Al mes (Bélgica/Luxemburgo, base)' }, { value: '300 €', label: 'Compensación de viaje' }], faq: [{ q: '¿Cómo me pongo en contacto con un eurodiputado para unas prácticas MEP?', a: 'Directamente a través del sitio web del Parlamento Europeo. Busca eurodiputados por país, partido o comisión y contacta con su oficina.' }] },
    'eures': { name: 'EURES', tagline: 'La red europea de servicios de empleo — encuentra trabajo, prácticas o formación en otro país europeo.', categoryLabel: 'Empleo y carrera', hero: { heading: 'Toda Europa — tu mercado laboral', sub: 'EURES es la red de servicios de empleo de la UE en 31 países. Asesoramiento gratuito, revisión de currículum, orientación jurídica y una base de datos con 3 millones de vacantes.' }, what: { heading: 'Mucho más que un tablón de empleo', body: 'EURES — Servicios Europeos de Empleo — es una red de más de 850 asesores que ayudan a buscadores de empleo y empleadores en toda Europa. La red cubre los 27 estados miembros de la UE más Islandia, Liechtenstein, Noruega y Suiza — 31 países en total.' }, faq: [{ q: '¿Es EURES realmente gratuito?', a: 'Sí. La mayoría de los servicios son gratuitos tanto para los buscadores de empleo como para los empleadores.' }] },
    'eures-targeted-mobility': { name: 'EURES Movilidad Específica', tagline: 'Apoyo financiero específico para superar barreras concretas en la búsqueda de empleo en Europa — cursos de idiomas, viajes y más.', categoryLabel: 'Empleo y carrera', hero: { heading: 'Apoyo económico para dar el paso', sub: 'EURES Targeted Mobility te ayuda si quieres trabajar en otro país europeo pero te encuentras con barreras concretas — costes de cursos de idiomas, viajes o reconocimiento de tus cualificaciones. Abierto a todos, independientemente del nivel de estudios.' }, what: { heading: 'Apoyo cuando las barreras son económicas', body: 'El EURES Targeted Mobility Scheme (TMS) es el apoyo más sustancial de EURES para las personas que quieren trabajar en el extranjero en Europa pero se enfrentan a barreras económicas concretas. No es un derecho general sino un programa basado en proyectos liderados por los servicios nacionales de empleo.\n\nProyectos activos: Suecia (Arbetsförmedlingen), Alemania (Bundesagentur für Arbeit) e Italia (Ministero del Lavoro).' }, faq: [{ q: '¿En qué países puedo buscar empleo a través del TMS?', a: 'El TMS apoya la búsqueda de empleo en los países de la UE, Noruega e Islandia.' }] },
    'eurodesk': { name: 'Eurodesk', tagline: 'La red europea de información para jóvenes — encuentra todas las oportunidades en un solo lugar.', categoryLabel: 'Información y apoyo', hero: { heading: 'Encuentra todas las oportunidades en un solo lugar', sub: 'Eurodesk es la red europea que ayuda a los jóvenes a orientarse entre todas las oportunidades de la UE. 38 centros, más de 4.000 proveedores locales de información y una base de datos con más de 200 programas.' }, what: { heading: 'Tu guía para las oportunidades de la UE', body: 'Eurodesk se fundó en Edimburgo en marzo de 1990 como un pequeño servicio de asistencia regional con una idea sencilla: reunir toda la información europea relevante en un solo lugar y presentarla de forma accesible para los jóvenes.\n\nHoy Eurodesk es una red con 38 centros nacionales vinculados a más de 4.000 proveedores locales de información en 36 países. Está financiada por Erasmus+ y organizada como asociación internacional sin ánimo de lucro (AISBL) con sede en Bruselas.' }, faq: [{ q: '¿Son lo mismo Eurodesk y Europa Directo?', a: 'No. Eurodesk se centra específicamente en la movilidad y las oportunidades para los jóvenes (13-30 años). Europa Directo es el servicio general de información ciudadana de la UE para todas las edades y todos los temas europeos.' }] },
    'europa-direkt': { name: 'Europa Directo', tagline: 'El servicio central de contacto ciudadano de la UE — pregunta lo que quieras sobre la UE, gratis, en tu propio idioma.', categoryLabel: 'Información y apoyo', hero: { heading: 'Una línea directa con la UE', sub: 'Europa Directo es la puerta abierta de la UE para todos los ciudadanos. Llama gratis, chatea o visita uno de los 400 centros locales — en tu propio idioma europeo.' }, what: { heading: 'La UE cerca de ti', body: 'Europa Directo consta de dos partes: un servicio central de contacto (Centro de Contacto Europa Directo) accesible por teléfono, formulario de contacto y chat, y una red de unos 400 centros de información físicos en toda la UE.' }, faq: [{ q: '¿Hay que pagar para llamar?', a: 'Gratuito desde todos los países de la UE en el número +800 6 7 8 9 10 11. Las tarifas internacionales se aplican desde fuera de la UE en el número +32 22 99 96 96.' }] },
    'eu-youth-portal': { name: 'Portal Europeo de la Juventud', tagline: 'El portal compartido de la Comisión Europea y Eurodesk — toda la información de la UE para los jóvenes en un solo lugar.', categoryLabel: 'Información y apoyo', hero: { heading: 'Todo sobre la UE — para los jóvenes', sub: 'El Portal Europeo de la Juventud es la plataforma conjunta de la Comisión Europea y Eurodesk. Aquí encontrarás información sobre todos los programas y oportunidades de la UE, podrás solicitar DiscoverEU y conocer tus derechos como joven ciudadano europeo.' }, what: { heading: 'Más que un sitio web', body: 'El Portal Europeo de la Juventud es mantenido conjuntamente por la Comisión Europea y la red Eurodesk. Está disponible en 23 idiomas oficiales de la UE, y el contenido de DiscoverEU está además disponible en islandés, macedonio, noruego, serbio y turco.' }, faq: [{ q: '¿Puedo solicitar DiscoverEU directamente en el portal?', a: 'Sí. Durante los períodos de solicitud, las candidaturas a DiscoverEU se presentan directamente en youth.europa.eu.' }] },
  }, // end es

  // ─── ITALIAN ──────────────────────────────────────────────────────────────
  it: {
    'europeiska-solidaritetskaren': { name: 'Corpo Europeo di Solidarietà', tagline: 'Fai volontariato, porta avanti un progetto di solidarietà o partecipa ad azioni umanitarie — finanziato dall\'UE.', categoryLabel: 'Volontariato', hero: { heading: 'Fai qualcosa che conti davvero', sub: 'Il Corpo Europeo di Solidarietà ti permette di fare volontariato all\'estero, avviare il tuo progetto in città o partecipare ad azioni umanitarie — completamente finanziato dall\'UE. Nessuna esperienza richiesta.' }, what: { heading: 'L\'UE paga — tu cambi il mondo', body: "Il Corpo Europeo di Solidarietà (CES) è il programma dell'UE per i giovani che vogliono fare la differenza. Puoi fare volontariato in un altro paese europeo, avviare il tuo progetto di solidarietà in città o partecipare ad azioni umanitarie fuori dall'UE — tutto con il sostegno finanziario dell'UE.\n\nIl programma ha un budget di 1,01 miliardi di euro per il 2021–2027 e persegue due obiettivi principali: offrire ai giovani opportunità accessibili di attività di solidarietà e migliorarne le competenze e l'occupabilità." }, faq: [{ q: 'Devo parlare inglese?', a: 'Non necessariamente. Molti progetti richiedono un inglese di base, ma ci sono progetti anche in altre lingue. È incluso un corso di lingue gratuito.' }, { q: 'Posso scegliere in quale paese andare?', a: 'Sì! Ti candidi a progetti specifici e scegli tu stesso a quali paesi e organizzazioni candidarti.' }, { q: 'Devo pagare qualcosa?', a: 'No. Il programma CES è gratuito per i partecipanti. L\'UE copre alloggio, viaggi, vitto e indennità mensile.' }],
      areas: [
        { emoji: '🤝', slug: 'socialt-arbete', title: 'Lavoro sociale e inclusione', desc: 'Sostieni le persone in situazioni vulnerabili — nei rifugi, negli alloggi assistiti e con il lavoro di prossimità.', href: 'https://www.omesc.se/omraden/socialt-arbete' },
        { emoji: '🌐', slug: 'migration-integration', title: 'Migrazione e integrazione', desc: 'Aiuta i nuovi arrivati a trovare il loro posto in un nuovo paese — supporto linguistico, orientamento culturale, guida legale e aiuto pratico nella vita quotidiana.', href: 'https://www.omesc.se/omraden/migration-integration' },
        { emoji: '📚', slug: 'utbildning-ungdom', title: 'Istruzione e gioventù', desc: 'Ispira la prossima generazione in classi, centri giovanili e ambienti di apprendimento informali — ripetizioni, tutoraggio e attività educative.', href: 'https://www.omesc.se/omraden/utbildning' },
        { emoji: '🌿', slug: 'miljo-hallbarhet', title: 'Ambiente e sostenibilità', desc: 'Lavora su questioni climatiche, biodiversità, agricoltura biologica, conservazione della natura e sviluppo comunitario sostenibile.', href: 'https://www.omesc.se/omraden/miljo-hallbarhet' },
        { emoji: '🎨', slug: 'kultur-konst', title: 'Cultura e arte', desc: "La creatività come strumento di cambiamento — arte, media, teatro, cinema, patrimonio culturale, musei ed eventi culturali in tutta Europa.", href: 'https://www.omesc.se/omraden/kultur-konst' },
        { emoji: '💚', slug: 'halsa-omsorg', title: 'Salute e cura', desc: "Contribuisci al benessere — lavoro di salute pubblica, azione preventiva, assistenza agli anziani, cure palliative e supporto alle persone con disabilità.", href: 'https://www.omesc.se/omraden/halsa-omsorg' },
      ],
      formats: [
        { icon: '🌍', title: 'Volontariato individuale', duration: '2 settimane – 12 mesi', description: "Lavora da solo presso un'organizzazione ospitante in un altro paese europeo. A tempo pieno (30–38 ore/settimana).", bullets: ['Alloggio, vitto e viaggi coperti', 'Indennità mensile', 'Corso di lingue gratuito (OLS)', 'Assicurazione UE inclusa'] },
        { icon: '👥', title: 'Volontariato di gruppo', duration: '2 settimane – 2 mesi', description: 'Lavora con volontari di almeno 2 paesi (min. 5 persone). Focalizzato su sfide europee comuni.', bullets: ['Team internazionale', 'Alloggio e viaggi coperti', 'Indennità e assicurazione', 'Certificato Youthpass'] },
        { icon: '💡', title: 'Progetti di solidarietà', duration: '2–12 mesi', description: 'Crea il tuo progetto nella tua comunità insieme ad almeno 5 amici. Scegli tu il tema — part-time.', bullets: ['630 € al mese per il progetto', 'Candidatura diretta senza organizzazione', 'Decidi tu il tema', 'Supporto di un coach incluso'] },
      ],
      covered: [
        { icon: '✈️', title: 'Viaggi', desc: 'I biglietti di andata e ritorno al progetto sono coperti.' },
        { icon: '🏠', title: 'Alloggio', desc: "L'organizzazione ospitante organizza l'alloggio." },
        { icon: '🍽️', title: 'Vitto', desc: "I pasti quotidiani o un'indennità per il cibo sono inclusi." },
        { icon: '💶', title: 'Indennità mensile', desc: 'Pagamento mensile adattato al costo della vita nel paese ospitante.' },
        { icon: '🌐', title: 'Corso di lingue', desc: 'Accesso gratuito a corsi online tramite OLS in tutte le lingue ufficiali UE.' },
        { icon: '🛡️', title: "Assicurazione", desc: "L'assicurazione UE copre salute e infortuni durante tutto il progetto." },
        { icon: '📜', title: 'Youthpass', desc: 'Certificato che documenta le tue competenze e i risultati di apprendimento.' },
      ],
      steps: [
        { n: '01', title: 'Crea il tuo profilo', desc: "Crea un account EU Login e completa il tuo profilo sul Portale Europeo della Gioventù. Ci vogliono circa 10 minuti." },
        { n: '02', title: 'Trova un progetto', desc: 'Sfoglia centinaia di progetti. Filtra per paese, tema e durata.' },
        { n: '03', title: "Contatta l'organizzazione", desc: 'Scrivile direttamente tramite il portale. Raccontagli chi sei e perché vuoi partecipare.' },
        { n: '04', title: 'Sii selezionato', desc: "Se vieni scelto, l'organizzazione ti aiuta con le pratiche." },
        { n: '05', title: 'Vai e fai la differenza', desc: 'Impara una nuova lingua, costruisci una rete europea e torna con un certificato Youthpass.' },
      ],
    },
    'humanitart-volontararbete': { name: 'Volontariato Umanitario', tagline: 'Fai volontariato in paesi terzi fuori dall\'UE per azioni umanitarie — risposta alle catastrofi, protezione dei rifugiati e clima.', categoryLabel: 'Volontariato', hero: { heading: 'Fai la differenza oltre i confini dell\'Europa', sub: 'Dal 2022 il CES offre posti di volontariato in paesi terzi. Lavori in operazioni umanitarie: dalla preparazione alle catastrofi alla protezione dei rifugiati e alla sicurezza alimentare.' }, what: { heading: 'Solidarietà che raggiunge il mondo', body: 'Il volontariato umanitario sotto il CES è disponibile dal 2022 in paesi terzi dove sono in corso operazioni umanitarie.\n\nImportante: la concorrenza è intensa. Il numero di candidati interessati supera di gran lunga i posti disponibili — completare la formazione non garantisce un posto.' }, faq: [{ q: 'Dove si svolge la formazione?', a: 'La formazione in presenza (5 giorni) si svolge in centri di formazione in Francia, Germania, Italia o Spagna — tre sessioni all\'anno.' }] },
    'erasmus-plus': { name: 'Erasmus+', tagline: 'Il grande programma di istruzione e mobilità dell\'UE — studi, tirocini, scambi giovanili e molto altro.', categoryLabel: 'Istruzione e mobilità', hero: { heading: 'Il più grande programma di istruzione d\'Europa', sub: 'Erasmus+ finanzia gli studi all\'estero, i tirocini, gli scambi giovanili e la formazione professionale. Dal 1987 vi hanno partecipato oltre 16 milioni di persone.' }, what: { heading: 'Molto più degli scambi studenteschi', body: "Erasmus+ è il programma quadro dell'UE per l'istruzione, la formazione, la gioventù e lo sport, con un budget di 26,2 miliardi di euro per il 2021–2027.\n\nNota: la maggior parte delle opportunità richiede che tu faccia domanda attraverso un'università, un centro di formazione o un'organizzazione — non direttamente come individuo." }, faq: [{ q: 'Posso fare domanda direttamente come individuo?', a: 'La maggior parte delle opportunità richiede di passare attraverso un\'università, centro di formazione o organizzazione. Contatta l\'ufficio internazionale della tua istituzione.' }] },
    'discovereu': { name: 'DiscoverEU', tagline: 'Esplora l\'Europa gratuitamente in treno — esclusivamente per i diciottenni.', categoryLabel: 'Viaggi ed esplorazione', hero: { heading: 'Scopri l\'Europa — l\'UE paga', sub: 'DiscoverEU dà ai diciottenni la possibilità di viaggiare in Europa in treno, gratuitamente. 40.000 pass per ciclo. Viaggia da solo o con fino a quattro amici.' }, what: { heading: 'Molto più che un abbonamento ferroviario', body: 'DiscoverEU è un\'iniziativa di Erasmus+ che offre ai giovani europei di 18 anni la possibilità di scoprire il continente. Ricevi un pass ferroviario con 7 giorni di viaggio nell\'arco di un mese, più una carta sconto.\n\nLa regola generale è il treno (2ª classe). L\'alloggio, il vitto e l\'assicurazione sono a tuo carico — il pass copre solo il trasporto.' }, faq: [{ q: 'E per l\'alloggio e il vitto?', a: 'Li organizzi e paghi tu. La carta sconto offre vantaggi sull\'alloggio, ma lo finanzi di tasca tua.' }] },
    'blue-book-traineeship': { name: 'Blue Book Traineeship', tagline: 'Tirocinio retribuito di 5 mesi presso la Commissione europea a Bruxelles, Lussemburgo o altrove nell\'UE.', categoryLabel: 'Tirocini', hero: { heading: 'Lavora nel cuore dell\'UE', sub: 'Il Blue Book offre ai laureati un tirocinio retribuito di 5 mesi presso la Commissione europea. Lavora in un ambiente multiculturale e scopri dall\'interno come si elabora la politica dell\'UE.' }, what: { heading: 'Il programma di tirocinio più ambito dell\'UE', body: 'Due volte all\'anno la Commissione europea offre circa 1.000 posti di tirocinio retribuiti della durata di 5 mesi. I tirocinanti sono collocati nei dipartimenti della Commissione e nelle sue agenzie esecutive a Bruxelles, Lussemburgo e altrove nell\'UE.\n\nCi sono circa tre volte più candidati che posti disponibili.' }, stats: [{ value: '1.538 €', label: 'Al mese' }, { value: '~1.000', label: 'Posti per sessione' }, { value: '2×', label: 'Sessioni all\'anno' }], faq: [{ q: 'Conta il lavoro part-time presso un\'istituzione UE?', a: 'Sì. La regola di esclusione è assoluta: tutta l\'esperienza conta, retribuita o non, a tempo pieno o parziale.' }],
      formats: [
        { icon: '🏢', title: 'Tirocinio amministrativo (ADMIN)', duration: '5 mesi', description: "Esperienza pratica del lavoro politico e amministrativo dell'UE. Collocamenti in tutta la Commissione e nelle sue agenzie.", bullets: ['1.538,16 €/mese', 'Richiede laurea (EQF 6)', 'C1/C2 in EN, FR o DE + B2 in un altra lingua UE', 'Max 6 settimane di precedente esperienza UE'] },
        { icon: '🌐', title: 'Tirocinio di traduzione (DGT)', duration: '5 mesi', description: 'Esperienza pratica nella traduzione di documenti nella tua lingua madre. Aperto solo ai cittadini UE.', bullets: ['1.538,16 €/mese', 'La lingua madre deve essere una lingua ufficiale UE', 'Lingua fonte 1: EN, FR o DE (C1+)', 'Lingua fonte 2: qualsiasi lingua UE (B2+)'] },
      ],
    },
    'robert-schuman-praktiken': { name: 'Tirocinio Robert Schuman', tagline: 'Tirocinio retribuito di 5 mesi al Parlamento europeo — Bruxelles, Strasburgo, Lussemburgo o uffici di collegamento nazionali.', categoryLabel: 'Tirocini', hero: { heading: 'Impara la democrazia dall\'interno', sub: 'Il tirocinio Robert Schuman ti permette di lavorare nella Segreteria del Parlamento europeo o direttamente con un europarlamentare. Prende il nome da Robert Schuman, uno dei padri fondatori dell\'integrazione europea.' }, what: { heading: 'Due percorsi per accedere al Parlamento', body: 'Il Parlamento europeo offre due tipi distinti di tirocinio: presso la Segreteria e direttamente con i deputati (tirocinio MEP). Sono programmi separati con regole, requisiti e livelli retributivi diversi.\n\nLa retribuzione varia per paese. In Italia ammonta a circa 1.899 €/mese. Viene inoltre corrisposta un\'indennità di viaggio forfettaria di 300 € per tirocinante.' }, stats: [{ value: '~1.899 €', label: 'Al mese (Italia, ca.)' }, { value: '1.889 €', label: 'Al mese (Belgio/Lussemburgo, base)' }, { value: '300 €', label: 'Indennità di viaggio' }], faq: [{ q: 'Come contatto un eurodeputato per un tirocinio MEP?', a: 'Direttamente tramite il sito web del Parlamento europeo. Cerca i deputati per paese, partito o commissione e contatta il loro ufficio.' }] },
    'eures': { name: 'EURES', tagline: 'La rete europea dei servizi per l\'impiego — trova lavoro, un tirocinio o una formazione in un altro paese europeo.', categoryLabel: 'Lavoro e carriera', hero: { heading: 'Tutta l\'Europa — il tuo mercato del lavoro', sub: 'EURES è la rete dei servizi per l\'impiego dell\'UE in 31 paesi. Consulenza gratuita, revisione del CV, orientamento giuridico e un database con 3 milioni di offerte di lavoro.' }, what: { heading: 'Molto più che un portale di offerte', body: 'EURES — Servizi europei per l\'impiego — è una rete di oltre 850 consulenti che assistono ogni giorno i candidati e i datori di lavoro in tutta Europa. La rete copre i 27 stati membri dell\'UE più Islanda, Liechtenstein, Norvegia e Svizzera — 31 paesi in totale.' }, faq: [{ q: 'EURES è davvero gratuito?', a: 'Sì. La maggior parte dei servizi è gratuita sia per i candidati che per i datori di lavoro.' }] },
    'eures-targeted-mobility': { name: 'EURES Mobilità Mirata', tagline: 'Sostegno finanziario mirato per superare ostacoli concreti nella ricerca di lavoro in Europa — corsi di lingua, viaggi e altro.', categoryLabel: 'Lavoro e carriera', hero: { heading: 'Sostegno economico per fare il grande passo', sub: 'EURES Targeted Mobility ti aiuta se vuoi lavorare in un altro paese europeo ma incontri ostacoli concreti — costi di corsi di lingua, viaggi o riconoscimento delle tue qualifiche. Aperto a tutti, indipendentemente dal livello di istruzione.' }, what: { heading: 'Supporto quando le barriere sono economiche', body: 'Lo EURES Targeted Mobility Scheme (TMS) è il sostegno più sostanziale di EURES per chi vuole lavorare all\'estero in Europa ma affronta ostacoli economici concreti. Non è un diritto generale ma un programma basato su progetti guidati dai servizi nazionali per l\'impiego.\n\nProgetti attivi: Svezia (Arbetsförmedlingen), Germania (Bundesagentur für Arbeit) e Italia (Ministero del Lavoro).' }, faq: [{ q: 'In quali paesi posso cercare lavoro tramite il TMS?', a: 'Il TMS supporta la ricerca di lavoro nei paesi dell\'UE, Norvegia e Islanda.' }] },
    'eurodesk': { name: 'Eurodesk', tagline: 'La rete europea di informazione giovanile — trova tutte le opportunità in un unico posto.', categoryLabel: 'Informazioni e supporto', hero: { heading: 'Trova tutte le opportunità in un unico posto', sub: 'Eurodesk è la rete europea che aiuta i giovani a orientarsi tra tutte le opportunità dell\'UE. 38 centri, oltre 4.000 fornitori locali di informazioni e un database con oltre 200 programmi.' }, what: { heading: 'La tua guida alle opportunità dell\'UE', body: 'Eurodesk è stata fondata a Edimburgo nel marzo del 1990 come un piccolo helpdesk regionale con un\'idea semplice: raccogliere tutte le informazioni europee rilevanti in un unico posto e presentarle in modo accessibile ai giovani.\n\nOggi Eurodesk è una rete con 38 centri nazionali collegati a oltre 4.000 fornitori locali di informazioni in 36 paesi. È finanziata da Erasmus+ e organizzata come associazione internazionale senza scopo di lucro (AISBL) con sede a Bruxelles.' }, faq: [{ q: 'Eurodesk e Europa Diretta sono la stessa cosa?', a: 'No. Eurodesk si concentra specificamente sulla mobilità e le opportunità per i giovani (13-30 anni). Europa Diretta è il servizio generale di informazione ai cittadini dell\'UE per tutte le età e tutti gli argomenti europei.' }] },
    'europa-direkt': { name: 'Europa Diretta', tagline: 'Il servizio centrale di contatto cittadino dell\'UE — chiedi qualsiasi cosa sull\'UE, gratis, nella tua lingua.', categoryLabel: 'Informazioni e supporto', hero: { heading: 'Una linea diretta con l\'UE', sub: 'Europa Diretta è la porta aperta dell\'UE per tutti i cittadini. Chiama gratuitamente, chatta o visita uno dei 400 centri locali — nella tua lingua europea.' }, what: { heading: 'L\'UE vicino a te', body: 'Europa Diretta è composta da due parti: un servizio centrale di contatto (Centro di Contatto Europa Diretta) accessibile per telefono, modulo di contatto e chat, e una rete di circa 400 centri di informazione fisici in tutta l\'UE.' }, faq: [{ q: 'C\'è un costo per chiamare?', a: 'Gratuito da tutti i paesi dell\'UE al numero +800 6 7 8 9 10 11. Tariffe internazionali si applicano da fuori l\'UE al numero +32 22 99 96 96.' }] },
    'eu-youth-portal': { name: 'Portale Europeo della Gioventù', tagline: 'Il portale condiviso della Commissione europea e di Eurodesk — tutte le informazioni dell\'UE per i giovani in un unico posto.', categoryLabel: 'Informazioni e supporto', hero: { heading: 'Tutto sull\'UE — per i giovani', sub: 'Il Portale Europeo della Gioventù è la piattaforma comune della Commissione europea e di Eurodesk. Qui trovi informazioni su tutti i programmi e le opportunità dell\'UE, puoi candidarti a DiscoverEU e leggere i tuoi diritti come giovane cittadino europeo.' }, what: { heading: 'Più di un sito web', body: 'Il Portale Europeo della Gioventù è gestito congiuntamente dalla Commissione europea e dalla rete Eurodesk. È disponibile in 23 lingue ufficiali dell\'UE.' }, faq: [{ q: 'Posso candidarmi a DiscoverEU direttamente sul portale?', a: 'Sì. Durante i periodi di candidatura, le domande per DiscoverEU vengono presentate direttamente su youth.europa.eu.' }] },
  }, // end it

  // ─── GERMAN ───────────────────────────────────────────────────────────────
  de: {
    'europeiska-solidaritetskaren': { name: 'Europäisches Solidaritätskorps', tagline: 'Leiste Freiwilligendienst, führe ein Solidaritätsprojekt durch oder nimm an humanitären Maßnahmen teil — finanziert von der EU.', categoryLabel: 'Freiwilligendienst', hero: { heading: 'Tu etwas, das wirklich zählt', sub: 'Das Europäische Solidaritätskorps ermöglicht dir Freiwilligendienst im Ausland, die Umsetzung deines eigenen Projekts oder die Teilnahme an humanitären Maßnahmen — vollständig finanziert von der EU. Keine Erfahrung erforderlich.' }, what: { heading: 'Die EU zahlt — du veränderst die Welt', body: 'Das Europäische Solidaritätskorps (ESK) ist das EU-Programm für junge Menschen, die einen Unterschied machen wollen. Du kannst in einem anderen europäischen Land Freiwilligendienst leisten, ein eigenes Solidaritätsprojekt in deiner Heimatstadt starten oder an humanitären Maßnahmen außerhalb der EU teilnehmen — alles mit finanzieller Unterstützung der EU.\n\nDas Programm hat ein Gesamtbudget von 1,01 Milliarden Euro für den Zeitraum 2021–2027 und verfolgt zwei Hauptziele: jungen Menschen zugängliche Möglichkeiten für Solidaritätsaktivitäten zu bieten und ihre Kompetenzen und Beschäftigungsfähigkeit zu verbessern.' }, faq: [{ q: 'Muss ich Englisch können?', a: 'Nicht unbedingt. Viele Projekte erfordern Grundkenntnisse in Englisch, aber es gibt auch Projekte in anderen Sprachen. Außerdem ist ein kostenloser Sprachkurs inklusive.' }, { q: 'Kann ich wählen, in welches Land ich fahre?', a: 'Ja! Du bewirbst dich auf konkrete Projekte und wählst selbst, bei welchen Ländern und Organisationen du dich bewerben möchtest.' }, { q: 'Muss ich etwas bezahlen?', a: 'Nein. Das ESK-Programm ist für Teilnehmende kostenlos. Die EU übernimmt Unterkunft, Reisen, Verpflegung und Taschengeld.' }],
      areas: [
        { emoji: '🤝', slug: 'socialt-arbete', title: 'Sozialarbeit & Inklusion', desc: 'Unterstütze Menschen in vulnerablen Situationen — in Obdachlosenunterkünften, betreutem Wohnen und in der aufsuchenden Arbeit.', href: 'https://www.omesc.se/omraden/socialt-arbete' },
        { emoji: '🌐', slug: 'migration-integration', title: 'Migration & Integration', desc: 'Hilf Neuankömmlingen, ihren Platz in einem neuen Land zu finden — Sprachunterstützung, kulturelle Orientierung, Rechtsberatung und praktische Hilfe im Alltag.', href: 'https://www.omesc.se/omraden/migration-integration' },
        { emoji: '📚', slug: 'utbildning-ungdom', title: 'Bildung & Jugend', desc: 'Inspiriere die nächste Generation in Klassenräumen, Jugendzentren und informellen Lernumgebungen — Nachhilfe, Mentoring und pädagogische Aktivitäten.', href: 'https://www.omesc.se/omraden/utbildning' },
        { emoji: '🌿', slug: 'miljo-hallbarhet', title: 'Umwelt & Nachhaltigkeit', desc: 'Arbeite an Klimafragen, Artenvielfalt, ökologischer Landwirtschaft, Naturschutz und nachhaltiger Gemeinschaftsentwicklung.', href: 'https://www.omesc.se/omraden/miljo-hallbarhet' },
        { emoji: '🎨', slug: 'kultur-konst', title: 'Kultur & Kunst', desc: 'Kreativität als Werkzeug für Veränderung — Kunst, Medien, Theater, Film, Kulturerbe, Museen und kulturelle Veranstaltungen in ganz Europa.', href: 'https://www.omesc.se/omraden/kultur-konst' },
        { emoji: '💚', slug: 'halsa-omsorg', title: 'Gesundheit & Pflege', desc: 'Trage zum Wohlbefinden bei — Volksgesundheitsarbeit, Prävention, Altenpflege, Palliativversorgung und Unterstützung für Menschen mit Behinderungen.', href: 'https://www.omesc.se/omraden/halsa-omsorg' },
      ],
      formats: [
        { icon: '🌍', title: 'Individueller Freiwilligendienst', duration: '2 Wochen – 12 Monate', description: 'Arbeite allein bei einer Aufnahmeorganisation in einem anderen europäischen Land. Vollzeit (30–38 Stunden/Woche).', bullets: ['Unterkunft, Verpflegung und Reisekosten inklusive', 'Monatliches Taschengeld', 'Kostenloser Sprachkurs (OLS)', 'EU-Versicherung inklusive'] },
        { icon: '👥', title: 'Gruppen-Freiwilligendienst', duration: '2 Wochen – 2 Monate', description: 'Arbeite mit Freiwilligen aus mindestens 2 Ländern (mind. 5 Personen). Fokus auf gemeinsame europäische Herausforderungen.', bullets: ['Internationales Team', 'Unterkunft und Reisekosten inklusive', 'Taschengeld und Versicherung', 'Youthpass-Zertifikat'] },
        { icon: '💡', title: 'Solidaritätsprojekte', duration: '2–12 Monate', description: 'Erstelle dein eigenes Projekt in deiner Heimatgemeinschaft mit mindestens 5 Freunden. Teilzeit.', bullets: ['630 € pro Monat für das Projekt', 'Direktbewerbung ohne Organisation', 'Du bestimmst den Schwerpunkt', 'Coach-Unterstützung inklusive'] },
      ],
      covered: [
        { icon: '✈️', title: 'Reisen', desc: 'Die Hin- und Rückreise zum Projekt wird übernommen.' },
        { icon: '🏠', title: 'Unterkunft', desc: 'Die Aufnahmeorganisation organisiert die Unterkunft.' },
        { icon: '🍽️', title: 'Verpflegung', desc: 'Tägliche Mahlzeiten oder ein Verpflegungszuschuss sind inbegriffen.' },
        { icon: '💶', title: 'Taschengeld', desc: 'Monatliches Taschengeld, angepasst an die Lebenshaltungskosten.' },
        { icon: '🌐', title: 'Sprachkurs', desc: 'Kostenloser Online-Sprachkurs über OLS in allen offiziellen EU-Sprachen.' },
        { icon: '🛡️', title: 'Versicherung', desc: 'EU-Versicherung deckt Gesundheit und Unfälle während des gesamten Projekts.' },
        { icon: '📜', title: 'Youthpass', desc: 'Zertifikat, das deine Kompetenzen und Lernergebnisse dokumentiert.' },
      ],
      steps: [
        { n: '01', title: 'Erstelle dein Profil', desc: 'Richte ein EU-Login-Konto ein und vervollständige dein Profil auf dem Europäischen Jugendportal. Dauert etwa 10 Minuten.' },
        { n: '02', title: 'Finde ein Projekt', desc: 'Stöbere in Hunderten von Projekten. Filtere nach Land, Thema und Dauer.' },
        { n: '03', title: 'Kontaktiere die Organisation', desc: 'Schreib ihnen direkt über das Portal. Erkläre, wer du bist und warum du mitmachen möchtest.' },
        { n: '04', title: 'Werde angenommen', desc: 'Wenn du ausgewählt wirst, hilft die Organisation bei den Formalitäten — Visum, Unterkunft und Reisen.' },
        { n: '05', title: 'Fahr hin und mach einen Unterschied', desc: 'Lerne eine neue Sprache, knüpfe ein europäisches Netzwerk und komm mit einem Youthpass-Zertifikat zurück.' },
      ],
    },
    'humanitart-volontararbete': { name: 'Humanitärer Freiwilligendienst', tagline: 'Freiwilligendienst in Drittländern außerhalb der EU für humanitäre Hilfe — Katastrophenhilfe, Flüchtlingsschutz und Klima.', categoryLabel: 'Freiwilligendienst', hero: { heading: 'Mach einen Unterschied jenseits der Grenzen Europas', sub: 'Seit 2022 bietet das ESK Freiwilligenplätze in Drittländern an. Du arbeitest bei humanitären Einsätzen: von der Katastrophenvorsorge über den Flüchtlingsschutz bis hin zur Ernährungssicherheit.' }, what: { heading: 'Solidarität, die die Welt erreicht', body: 'Der humanitäre Freiwilligendienst im Rahmen des ESK ist seit 2022 in Drittländern möglich, in denen humanitäre Einsätze laufen.\n\nWichtig: Der Wettbewerb ist intensiv. Die Zahl der interessierten Bewerber übersteigt die verfügbaren Plätze bei weitem — das Absolvieren der Ausbildung garantiert keinen Platz.' }, faq: [{ q: 'Wo findet die Ausbildung statt?', a: 'Die Präsenzausbildung (5 Tage) findet an Ausbildungszentren in Frankreich, Deutschland, Italien oder Spanien statt — drei Runden pro Jahr.' }] },
    'erasmus-plus': { name: 'Erasmus+', tagline: 'Das große Bildungs- und Mobilitätsprogramm der EU — Studium, Praktika, Jugendaustausch und vieles mehr.', categoryLabel: 'Bildung und Mobilität', hero: { heading: 'Europas größtes Bildungsprogramm', sub: 'Erasmus+ fördert Auslandsstudium, Praktika, Jugendaustausch und Berufsausbildung. Seit 1987 haben über 16 Millionen Menschen teilgenommen.' }, what: { heading: 'Viel mehr als Studentenaustausch', body: 'Erasmus+ ist das EU-Rahmenprogramm für Bildung, Ausbildung, Jugend und Sport mit einem Budget von 26,2 Milliarden Euro für 2021–2027.\n\nHinweis: Die meisten Möglichkeiten erfordern, dass du dich über eine Universität, ein Ausbildungszentrum oder eine Organisation bewirbst — nicht direkt als Einzelperson.' }, faq: [{ q: 'Kann ich mich direkt als Einzelperson bewerben?', a: 'Die meisten Möglichkeiten erfordern, dass du über eine Universität, ein Ausbildungszentrum oder eine Organisation gehst. Wende dich an das Internationale Büro deiner Einrichtung.' }] },
    'discovereu': { name: 'DiscoverEU', tagline: 'Erkunde Europa kostenlos mit dem Zug — exklusiv für 18-Jährige.', categoryLabel: 'Reisen und Entdecken', hero: { heading: 'Europa entdecken — die EU zahlt', sub: 'DiscoverEU gibt 18-Jährigen die Möglichkeit, kostenlos mit dem Zug durch Europa zu reisen. 40.000 Pässe pro Runde. Reise alleine oder mit bis zu vier Freunden.' }, what: { heading: 'Mehr als ein Zugticket', body: 'DiscoverEU ist eine Erasmus+-Initiative, die 18-jährigen Europäern die Möglichkeit gibt, den Kontinent zu entdecken. Du erhältst einen Zugpass mit 7 Reisetagen innerhalb eines Monats sowie eine Rabattkarte.\n\nDie Grundregel ist die Bahn (2. Klasse). Unterkunft, Verpflegung und Versicherung liegen in deiner Verantwortung — der Pass deckt nur den Transport.' }, faq: [{ q: 'Was ist mit Unterkunft und Verpflegung?', a: 'Das organisierst und bezahlst du selbst. Die Rabattkarte bietet Vorteile bei der Unterkunft, aber du finanzierst sie aus eigener Tasche.' }] },
    'blue-book-traineeship': { name: 'Blue Book Traineeship', tagline: 'Bezahltes 5-monatiges Praktikum bei der Europäischen Kommission in Brüssel, Luxemburg oder anderswo in der EU.', categoryLabel: 'Praktika', hero: { heading: 'Arbeite im Herzen der EU', sub: 'Das Blue Book bietet Hochschulabsolventen ein bezahltes 5-monatiges Praktikum bei der Europäischen Kommission. Arbeite in einem multikulturellen Umfeld und erlange Einblick, wie EU-Politik gestaltet wird — von innen.' }, what: { heading: 'Das begehrteste Praktikumsprogramm der EU', body: 'Zweimal pro Jahr bietet die Europäische Kommission rund 1.000 bezahlte Praktikumsplätze für 5 Monate an. Die Praktikanten werden in den Abteilungen der Kommission und ihren Exekutivagenturen in Brüssel, Luxemburg und anderswo in der EU eingesetzt.\n\nEs gibt ungefähr dreimal mehr Bewerber als verfügbare Plätze.' }, stats: [{ value: '1.538 €', label: 'Pro Monat' }, { value: '~1.000', label: 'Plätze pro Session' }, { value: '2×', label: 'Sessions pro Jahr' }], faq: [{ q: 'Zählt Teilzeitarbeit bei einer EU-Institution?', a: 'Ja. Die Ausschlussregel ist absolut: Alle Erfahrungen zählen, bezahlt oder unbezahlt, Vollzeit oder Teilzeit.' }] },
    'robert-schuman-praktiken': { name: 'Robert-Schuman-Praktikum', tagline: 'Bezahltes 5-monatiges Praktikum im Europäischen Parlament — Brüssel, Straßburg, Luxemburg oder nationale Verbindungsbüros.', categoryLabel: 'Praktika', hero: { heading: 'Demokratie von innen erleben', sub: 'Das Robert-Schuman-Praktikum gibt dir die Möglichkeit, im Sekretariat des Europäischen Parlaments oder direkt bei einem gewählten Abgeordneten (MdEP) zu arbeiten. Benannt nach Robert Schuman — einem der Gründungsväter der europäischen Integration.' }, what: { heading: 'Zwei Wege ins Parlament', body: 'Das Europäische Parlament bietet zwei verschiedene Praktikumsarten unter dem Schuman-Programm an: Praktikum beim Sekretariat und Praktikum direkt bei einzelnen Abgeordneten (MdEP-Praktikum). Es sind getrennte Programme mit unterschiedlichen Regeln, Anforderungen und Vergütungsniveaus.\n\nDie monatliche Vergütung variiert je nach Land. In Deutschland beträgt sie ca. 1.948 €/Monat. Zusätzlich wird eine Reisepauschale von 300 € pro Praktikant gezahlt.' }, stats: [{ value: '~1.948 €', label: 'Pro Monat (Deutschland, ca.)' }, { value: '1.889 €', label: 'Pro Monat (Belgien/Luxemburg, Basis)' }, { value: '300 €', label: 'Reisepauschale' }], faq: [{ q: 'Wie kontaktiere ich einen MdEP für ein MdEP-Praktikum?', a: 'Direkt über die Website des Europäischen Parlaments. Suche Abgeordnete nach Land, Partei oder Ausschuss und kontaktiere ihr Büro.' }] },
    'eures': { name: 'EURES', tagline: 'Das europäische Arbeitsvermittlungsnetzwerk — finde Arbeit, ein Praktikum oder eine Ausbildung in einem anderen europäischen Land.', categoryLabel: 'Jobs und Karriere', hero: { heading: 'Ganz Europa — dein Arbeitsmarkt', sub: 'EURES ist das Netzwerk der Arbeitsvermittlungsdienste der EU in 31 Ländern. Kostenlose Beratung, Lebenslaufprüfung, Rechtsberatung und eine Datenbank mit 3 Millionen Stellenangeboten.' }, what: { heading: 'Mehr als eine Jobbörse', body: 'EURES — Europäische Arbeitsvermittlungsdienste — ist ein Netzwerk aus über 850 Beratern, die täglich Jobsuchende und Arbeitgeber in ganz Europa unterstützen. Das Netzwerk umfasst die 27 EU-Mitgliedstaaten sowie Island, Liechtenstein, Norwegen und die Schweiz — insgesamt 31 Länder.' }, faq: [{ q: 'Ist EURES wirklich kostenlos?', a: 'Ja. Die meisten Dienste sind für Jobsuchende und Arbeitgeber kostenlos.' }] },
    'eures-targeted-mobility': { name: 'EURES Gezielte Mobilität', tagline: 'Gezielte finanzielle Unterstützung, um konkrete Hindernisse bei der Jobsuche in Europa zu überwinden — Sprachkurse, Reisen und mehr.', categoryLabel: 'Jobs und Karriere', hero: { heading: 'Finanzielle Unterstützung, um den Schritt zu wagen', sub: 'EURES Targeted Mobility hilft dir, wenn du in einem anderen europäischen Land arbeiten möchtest, aber auf konkrete Hindernisse stößt — Kosten für Sprachkurse, Reisen oder Anerkennung deiner Qualifikationen. Offen für alle, unabhängig vom Bildungsniveau.' }, what: { heading: 'Unterstützung, wenn die Hindernisse finanziell sind', body: 'Das EURES Targeted Mobility Scheme (TMS) ist die umfangreichste Unterstützungsform von EURES für Personen, die im europäischen Ausland arbeiten möchten, aber auf konkrete finanzielle Hindernisse stoßen. Es ist kein allgemeiner Anspruch, sondern ein projektbasiertes Programm, das von nationalen Arbeitsvermittlungen geleitet wird.\n\nAktive Leitprojekte werden von den Arbeitsvermittlungen in Schweden (Arbetsförmedlingen), Deutschland (Bundesagentur für Arbeit) und Italien (Ministero del Lavoro) durchgeführt.' }, faq: [{ q: 'In welchen Ländern kann ich über TMS eine Arbeit suchen?', a: 'TMS unterstützt die Jobsuche in EU-Ländern, Norwegen und Island.' }] },
    'eurodesk': { name: 'Eurodesk', tagline: 'Das europäische Jugend-Informationsnetzwerk — alle Möglichkeiten an einem Ort finden.', categoryLabel: 'Informationen und Unterstützung', hero: { heading: 'Alle Möglichkeiten an einem Ort finden', sub: 'Eurodesk ist das europäische Netzwerk, das jungen Menschen hilft, sich unter allen EU-Möglichkeiten zurechtzufinden. 38 Zentren, 4.000+ lokale Informationsanbieter und eine Datenbank mit 200+ Programmen.' }, what: { heading: 'Dein Wegweiser zu EU-Möglichkeiten', body: 'Eurodesk wurde im März 1990 in Edinburgh als kleines regionales Helpdesk mit einer einfachen Idee gegründet: alle relevanten europäischen Informationen an einem Ort zu sammeln und sie auf eine jugendfreundliche Weise zu präsentieren.\n\nHeute ist Eurodesk ein europäisches Netzwerk mit 38 nationalen Zentren, die mit mehr als 4.000 lokalen Informationsanbietern in 36 Ländern verbunden sind. Es wird von Erasmus+ finanziert und als internationale gemeinnützige Vereinigung (AISBL) mit Sitz in Brüssel organisiert.' }, faq: [{ q: 'Sind Eurodesk und Europe Direct dasselbe?', a: 'Nein. Eurodesk konzentriert sich speziell auf Mobilität und Möglichkeiten für junge Menschen (13-30 Jahre). Europe Direct ist der allgemeine Bürgerinformationsdienst der EU für alle Altersgruppen und alle EU-Themen.' }] },
    'europa-direkt': { name: 'Europe Direct', tagline: 'Der zentrale Bürgerkontaktservice der EU — frage alles über die EU, kostenlos, in deiner eigenen Sprache.', categoryLabel: 'Informationen und Unterstützung', hero: { heading: 'Eine direkte Leitung zur EU', sub: 'Europe Direct ist die offene Tür der EU für alle Bürger. Ruf kostenlos an, chatte oder besuche eines der 400 lokalen Zentren — in deiner eigenen EU-Sprache.' }, what: { heading: 'Die EU in deiner Nähe', body: 'Europe Direct besteht aus zwei Teilen: einem zentralen Kontaktservice (Europe Direct Contact Centre), der per Telefon, Kontaktformular und Chat erreichbar ist, und einem Netzwerk von rund 400 physischen Informationszentren in der gesamten EU.' }, faq: [{ q: 'Kostet es etwas zu telefonieren?', a: 'Kostenlos aus allen EU-Ländern unter der Nummer +800 6 7 8 9 10 11. Internationale Tarife gelten von außerhalb der EU unter +32 22 99 96 96.' }] },
    'eu-youth-portal': { name: 'EU-Jugendportal', tagline: 'Das gemeinsame Portal der Europäischen Kommission und Eurodesk — alle EU-Informationen für junge Menschen an einem Ort.', categoryLabel: 'Informationen und Unterstützung', hero: { heading: 'Alles über die EU — für junge Menschen', sub: 'Das EU-Jugendportal ist die gemeinsame Plattform der Europäischen Kommission und von Eurodesk. Hier findest du Informationen über alle EU-Programme und Möglichkeiten, kannst dich für DiscoverEU bewerben und deine Rechte als junger EU-Bürger nachlesen.' }, what: { heading: 'Mehr als eine Website', body: 'Das EU-Jugendportal wird gemeinsam von der Europäischen Kommission und dem Eurodesk-Netzwerk gepflegt. Es ist in 23 offiziellen EU-Sprachen verfügbar.' }, faq: [{ q: 'Kann ich mich direkt auf dem Portal für DiscoverEU bewerben?', a: 'Ja. Während der Bewerbungszeiträume werden DiscoverEU-Bewerbungen direkt auf youth.europa.eu eingereicht.' }] },
  }, // end de
}

export default t
