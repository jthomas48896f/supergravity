// content/medicine.js
// Batch: B03-life-sciences
// Last updated: 2026-10-15 by SPRINT W1
//
// Topics this subject must cover (from data.js):
//   Core: physiology, pharmacology, public_health, vaccines, antibiotics, epidemics
//
// Editorial note: medicine lessons are educational, not clinical advice.
// The prose stays at the level of history and mechanism; no dosing,
// no diagnosis, no "consult your doctor" disclaimers inside the text.

window.CONTENT = window.CONTENT || {};
window.CONTENT.medicine = {
  subjectId: 'medicine',
  version: 1,
  lastUpdated: '2026-10-15',
  curator: 'SPRINT W1',
  topics: {

    // ——— PHYSIOLOGY ———
    physiology: {
      id: 'physiology',
      name: 'Physiology',
      level: 'Intermediate',
      dek: 'How the body works — the study of function, from the squeeze of a single muscle cell to the sweep of the circulation.',
      readTime: '13 min',

      sections: ['Harvey and the circulation', 'Homeostasis', 'From cells to systems', 'The organ systems', 'What goes wrong'],
      body: [
        { type: 'lead', text: 'In 1628 an English physician named William Harvey, then 50 and personal doctor to Charles I, published a short Latin treatise called De Motu Cordis — On the Motion of the Heart and Blood. In seventy-two pages, with plates drawn from his own dissections of some eighty species, he overturned Galen\'s fifteen-hundred-year-old claim that blood was consumed at the tissues and generated afresh in the liver. Harvey showed instead that blood circulates in a closed loop, pushed by the heart as a mechanical pump, recirculated through the body perhaps a thousand times a day. Physiology as a quantitative science begins with that book — the first to apply measurement and simple hydraulic logic to a living system.' },
        { type: 'h2', text: 'Homeostasis, the idea Bernard named' },
        { type: 'p', text: 'In the 1860s the French physiologist Claude Bernard, working in a cluttered laboratory at the Collège de France, argued that animals maintain a stable internal environment — what he called the milieu intérieur — even as the outside world changes. Blood glucose stays within a narrow band whether you have just eaten or fasted for a day. Body temperature sits at 37°C in a blizzard and in a sauna. In 1926 Walter Cannon at Harvard gave the idea its current name, homeostasis, and showed that it is the work of nested feedback loops: temperature, glucose, pH, fluid volume, osmolality, blood pressure, and a hundred other variables are all held within narrow ranges by control systems that run without conscious attention, most of them operating on timescales of seconds to minutes.' },
        { type: 'interactive', key: 'ecg' },
        { type: 'h2', text: 'From cells to systems' },
        { type: 'p', text: 'A single cardiac muscle cell contracts because calcium enters through a voltage-gated L-type channel, which triggers a larger calcium release from the sarcoplasmic reticulum, which binds troponin, which unlocks actin-myosin crossbridges. Billions of those cells, electrically coupled through gap junctions and paced by a cluster of specialized cells in the sinoatrial node at the top of the right atrium, produce the heartbeat — about a hundred thousand contractions every day, two and a half billion over an average life. The heart, plumbed into arteries and veins and regulated by the autonomic nervous system, produces the circulation. Physiology is the practice of moving between these scales — from the channel protein to the organism — without losing either the molecule or the whole animal.' },
        { type: 'h2', text: 'The organ systems, in brief' },
        { type: 'p', text: 'A medical physiology course usually walks, in order, through the cardiovascular, respiratory, renal, gastrointestinal, endocrine, reproductive, and nervous systems. Each is a study in mechanism — how the kidney concentrates urine through a countercurrent multiplier in the loop of Henle, how the lung exchanges gas across an alveolar membrane about a single cell thick (the total alveolar surface area in an adult is roughly the size of a tennis court), how the stomach maintains a pH of about 1.5 without digesting itself. The recurring lesson is that structure and function are the same question asked at different scales, and that what we call the body is actually forty or fifty nested control systems running in parallel.' },
        { type: 'h2', text: 'What goes wrong' },
        { type: 'p', text: 'Pathophysiology is physiology in the presence of disease. Heart failure is the circulation running out of reserve — a ventricle that used to pump 65 percent of its volume each beat is now pumping 30, and compensatory mechanisms that helped in acute shock have become maladaptive in chronic failure. Diabetes is the failure of glucose homeostasis — sometimes because the pancreas stops producing insulin, sometimes because the tissues stop listening to it. Asthma is an inappropriate immune reaction narrowing the airways. A clinician who has learned physiology well can read a disease as a deviation from a known normal, and work backwards from a patient\'s vital signs and labs to a short list of mechanisms that could produce this exact pattern — which is almost the whole of internal medicine.' },
        { type: 'callout', text: 'The modern physiology textbook is mostly an inventory of feedback loops. Every time something in the body stays almost constant while everything around it changes, a loop is keeping it there. Learning to see the loops is half of becoming a clinician.' },
        { type: 'quote', text: 'The constancy of the internal environment is the condition of free and independent life.', cite: 'Claude Bernard, Leçons sur les phénomènes de la vie (1878)' },
        { type: 'interactive', key: 'rich-physiology' },
      ],

      keyTerms: ['homeostasis', 'feedback loop', 'circulation', 'action potential', 'nephron', 'hormone', 'autonomic nervous system', 'pathophysiology'],

      resources: {
        videos: [
          {
            id: 'uBGl2BujkPQ',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=uBGl2BujkPQ',
            title: 'Introduction to Anatomy & Physiology: Crash Course A&P #1',
            channel: 'CrashCourse',
            duration: '10:19',
            why: 'Hank Green on the basic vocabulary and organization of human physiology. The first of a 47-part series that tracks a typical undergraduate A&P course.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/user/armandohasudungan',
            title: 'Armando Hasudungan — medical physiology',
            channel: 'Armando Hasudungan',
            duration: 'variable',
            why: 'Hand-drawn, patient, and genuinely clear — an Australian physician-illustrator whose whiteboard videos are used by medical students worldwide.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/channel/UCG-iSMVtWbbwDDXgXXypARQ',
            title: 'MedCram — Medical Lectures Explained Clearly',
            channel: 'MedCram',
            duration: 'variable',
            why: 'Dr. Roger Seheult and colleagues take one clinical topic at a time and explain the physiology behind it with restraint and care.',
          },
        ],
        books: [
          {
            title: 'Guyton and Hall Textbook of Medical Physiology',
            author: 'John E. Hall and Michael E. Hall',
            year: 2020,
            url: '',
            why: 'The standard medical-school physiology textbook for sixty years. Still single-author in style, still the cleanest narrative of how the body works.',
          },
          {
            title: 'Vander\'s Human Physiology: The Mechanisms of Body Function',
            author: 'Eric P. Widmaier et al.',
            year: 2022,
            url: '',
            why: 'The standard undergraduate physiology text — clearer than Guyton for a beginner, with better figures.',
          },
          {
            title: 'How We Die: Reflections on Life\'s Final Chapter',
            author: 'Sherwin B. Nuland',
            year: 1994,
            url: '',
            why: 'National Book Award-winning essays by a Yale surgeon on the physiology of dying — heart attack, stroke, sepsis, cancer. The most humane companion to a textbook ever written.',
          },
        ],
        articles: [
          {
            title: 'Merck Manual — Professional Version',
            source: 'Merck & Co.',
            url: 'https://www.merckmanuals.com/professional',
            why: 'The reference physicians have used for more than 125 years. Free online, with careful sections on the physiology of every organ system.',
            year: null,
          },
          {
            title: 'Merck Manual — Consumer Version',
            source: 'Merck & Co.',
            url: 'https://www.merckmanuals.com/home',
            why: 'The same authority, rewritten for a general reader. Useful alongside the professional version when a section gets too technical.',
            year: null,
          },
          {
            title: 'Physiology',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Physiology',
            why: 'Broad, well-cited overview with a good history section and links into the physiology of each organ system.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Human Physiology (Khan Academy)',
            provider: 'Khan Academy',
            url: 'https://www.khanacademy.org/science/health-and-medicine/human-anatomy-and-physiology',
            free: true,
            why: 'Paced, visual, with checks. A solid pre-class review or refresher.',
          },
          {
            title: 'Principles of Biochemistry (MIT 7.05)',
            provider: 'MIT OpenCourseWare',
            url: 'https://ocw.mit.edu/courses/7-05-general-biochemistry-spring-2020/',
            free: true,
            why: 'MIT undergraduate biochemistry — the molecular foundations a physiology student needs. Full lecture notes and problem sets.',
          },
        ],
        tools: [
          {
            title: 'Osmosis video library (free tier)',
            url: 'https://www.osmosis.org/',
            why: 'Short, animated explainers on physiology and pathophysiology, written by medical professionals. A free tier covers the essentials.',
          },
        ],
        primarySources: [
          {
            title: 'Harvey, The Anatomical Exercises: De Motu Cordis and De Circulatione Sanguinis (English translation)',
            url: 'https://archive.org/details/anatomicalexerci0000harv',
            why: 'Harvey\'s original argument for the circulation, translated into English. The Dover reprint of the first English translation, free on the Internet Archive.',
          },
        ],
      },

      interactive: { kind: 'circulation' },
      seeAlso: ['anatomy', 'pharmacology', 'cell', 'neuro'],
      prereqs: ['anatomy', 'cell'],
      leadsTo: ['pharmacology', 'public_health'],

      chapterActivity: 'A monthly physiology-and-movement walking tour along the Hudson River — heart-rate variability and breathing mechanics explained at a pace anyone can sustain.',

      sources: [
        'https://en.wikipedia.org/wiki/Physiology',
        'https://www.merckmanuals.com/professional',
        'https://archive.org/details/anatomicalexerci0000harv',
      ],
      verifiedAt: '2026-04-22',
    },

    // ——— PHARMACOLOGY ———
    pharmacology: {
      id: 'pharmacology',
      name: 'Pharmacology',
      level: 'Advanced',
      dek: 'What drugs do, how they do it, and why the dose that cures is often close to the dose that kills.',
      readTime: '13 min',

      sections: ['Paracelsus, and the dose', 'What the body does to a drug', 'What the drug does to the body', 'The therapeutic window', 'The long pipeline'],
      body: [
        { type: 'lead', text: 'In the early sixteenth century a Swiss-German physician named Philippus Aureolus Theophrastus Bombastus von Hohenheim — who renamed himself Paracelsus, "beyond Celsus," to signal his rejection of the Roman authority — burned a copy of Galen in the town square at Basel and announced a new way of thinking about medicines. His most famous line, often paraphrased, is the opening sentence of modern pharmacology: all things are poisons, for there is nothing without poisonous qualities; it is only the dose that makes a thing not a poison. Every pharmacology course since has been, in effect, a commentary on that claim.' },
        { type: 'h2', text: 'What the body does to a drug' },
        { type: 'p', text: 'Pharmacokinetics is the study of how a drug is absorbed, distributed, metabolized, and excreted — the acronym ADME that appears on every first-year pharmacology exam. A drug taken by mouth must survive the stomach\'s acid, cross the gut wall, pass through the portal vein and the liver\'s first-pass metabolism (where much of the dose may be destroyed before it ever reaches the general circulation), and arrive at its site of action in high enough concentration to matter. The half-life of a drug — the time for its plasma concentration to drop by half — determines dosing frequency. A drug with a two-hour half-life needs to be taken four times a day; one with a forty-hour half-life can be taken once.' },
        { type: 'h2', text: 'What the drug does to the body' },
        { type: 'p', text: 'Pharmacodynamics is the other half: how the drug produces its effect once it has arrived. Most drugs work by binding to a specific protein — a receptor, an enzyme, a transporter, an ion channel — and altering its behavior. An agonist turns the protein on; an antagonist blocks it; a partial agonist does some of both, badly. The fit is usually approximate rather than perfect, which is why almost every drug has side effects: it is also binding, at lower affinity, to other proteins in the body. Citalopram is "selective" for the serotonin transporter, but it is not only selective; most SSRIs bind a dozen other proteins at clinical doses, which is why their side-effect profiles are what they are.' },
        { type: 'interactive', key: 'dose-response' },
        { type: 'h2', text: 'Therapeutic window' },
        { type: 'p', text: 'Pharmacologists speak of the therapeutic index, the ratio between the dose that treats and the dose that harms. Drugs like acetaminophen have a wide window in therapeutic use (though at four grams a day the liver gives out). Warfarin and digoxin and lithium have narrow windows and require regular blood monitoring — a dose that controls atrial fibrillation can, in the same patient on a slightly different week, cause a fatal bleed. Toxicology is pharmacology with the dose turned up. Pediatric dosing is pharmacology with the patient scaled down and the hepatic enzymes not yet fully mature. Geriatric dosing is pharmacology with the kidneys slowly letting go. The underlying mathematics is the same.' },
        { type: 'h2', text: 'The long pipeline' },
        { type: 'p', text: 'A new drug today takes, on average, about ten to fifteen years and somewhere between 1 and 2.6 billion dollars to move from target identification through high-throughput screening, preclinical animal studies, three phases of human trials, and regulatory review. Roughly nine in ten candidates that enter clinical trials never reach a prescription pad. The aspirin in your cupboard is descended from a willow-bark preparation in Hippocratic medicine, Edward Stone\'s 1763 report to the Royal Society on its use for fevers, and a German dye-chemistry program in the 1890s. Bayer\'s Felix Hoffmann acetylated salicylic acid in 1897; Aspirin went on sale two years later. The history of any drug, pulled on far enough, is long.' },
        { type: 'callout', text: 'Alexander Fleming noticed that a mold contaminating one of his staphylococcus plates in September 1928 was killing the bacteria around it. It took another twelve years and the wartime work of Howard Florey and Ernst Chain at Oxford to turn that observation into an injectable drug. The first American patient was a dying police officer in New Haven; they ran out of penicillin before curing him.' },
        { type: 'interactive', key: 'rich-pharmacology' },
      ],

      keyTerms: ['dose-response', 'pharmacokinetics', 'pharmacodynamics', 'receptor', 'agonist', 'antagonist', 'half-life', 'therapeutic index', 'ADME'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/user/armandohasudungan',
            title: 'Armando Hasudungan — pharmacology lectures',
            channel: 'Armando Hasudungan',
            duration: 'variable',
            why: 'Hand-drawn, paced, student-friendly walkthroughs of drug classes — cardiovascular agents, antibiotics, antiepileptics — used in medical schools worldwide.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/c/SpeedPharmacology',
            title: 'Speed Pharmacology — channel',
            channel: 'Speed Pharmacology',
            duration: 'variable',
            why: 'Compact, focused videos on the mechanisms of common drug classes. A standard supplement to Katzung or Goodman & Gilman.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/channel/UCG-iSMVtWbbwDDXgXXypARQ',
            title: 'MedCram — pharmacology explanations',
            channel: 'MedCram',
            duration: 'variable',
            why: 'Roger Seheult on clinical pharmacology — steroid mechanics, antivirals, the respiratory drugs. Slower and more careful than most YouTube explainers.',
          },
        ],
        books: [
          {
            title: 'Goodman & Gilman\'s The Pharmacological Basis of Therapeutics',
            author: 'Laurence Brunton et al. (eds.)',
            year: 2022,
            url: '',
            why: 'First published in 1941 and now in its fourteenth edition. The standard pharmacology reference cited in almost every clinical paper.',
          },
          {
            title: 'Basic & Clinical Pharmacology',
            author: 'Bertram G. Katzung (ed.)',
            year: 2023,
            url: '',
            why: 'The standard first-pass textbook for medical students — clearer and more concise than Goodman & Gilman, updated every two to three years.',
          },
          {
            title: 'Bad Pharma: How Drug Companies Mislead Doctors and Harm Patients',
            author: 'Ben Goldacre',
            year: 2012,
            url: '',
            why: 'A British physician-epidemiologist\'s careful argument about publication bias, trial design, and the gap between the evidence base and the prescription pad.',
          },
        ],
        articles: [
          {
            title: 'DailyMed',
            source: 'NIH National Library of Medicine',
            url: 'https://dailymed.nlm.nih.gov/dailymed/',
            why: 'The official U.S. drug label database — every prescription and non-prescription drug approved by the FDA, with its full package insert.',
            year: null,
          },
          {
            title: 'Merck Manual — Clinical Pharmacology chapters',
            source: 'Merck & Co.',
            url: 'https://www.merckmanuals.com/professional/clinical-pharmacology',
            why: 'Overview chapters on pharmacokinetics, pharmacodynamics, and drug interactions, written for working clinicians.',
            year: null,
          },
          {
            title: 'Pharmacology',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Pharmacology',
            why: 'Broad overview with good sections on history, the ADME framework, and drug development.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Drug Commercialization (Coursera, University of California San Diego)',
            provider: 'Coursera',
            url: 'https://www.coursera.org/learn/drug-commercialization',
            free: true,
            why: 'The business and regulatory side of pharmacology — how a candidate molecule becomes a prescribed drug. Free to audit.',
          },
          {
            title: 'Principles of Biochemistry (HarvardX)',
            provider: 'edX',
            url: 'https://www.edx.org/learn/biochemistry/harvard-university-principles-of-biochemistry',
            free: true,
            why: 'A strong prerequisite for pharmacology — how enzymes and receptors actually work at the molecular level. Audit is free.',
          },
        ],
        tools: [
          {
            title: 'DrugBank',
            url: 'https://go.drugbank.com/',
            why: 'Open, searchable database of drug targets, mechanisms, and interactions — used by clinicians, researchers, and students alike.',
          },
        ],
      },

      interactive: { kind: 'dose-response' },
      seeAlso: ['physiology', 'biochem', 'public_health', 'clinical'],
      prereqs: ['physiology', 'biochem'],
      leadsTo: ['public_health'],

      chapterActivity: 'A quarterly reading group at the NYU Health Sciences Library working through a recent New England Journal clinical trial — what was given, to whom, and what it showed.',

      sources: [
        'https://en.wikipedia.org/wiki/Pharmacology',
        'https://www.merckmanuals.com/professional/clinical-pharmacology',
        'https://dailymed.nlm.nih.gov/dailymed/',
      ],
      verifiedAt: '2026-04-22',
    },

    // ——— PUBLIC HEALTH ———
    public_health: {
      id: 'public_health',
      name: 'Public Health',
      level: 'Intermediate',
      dek: 'Medicine practiced at the scale of a population — the discipline that gave us clean water, vaccines, and cigarette warnings.',
      readTime: '13 min',

      sections: ['Snow\'s pump', 'Populations, not patients', 'The social determinants', 'The methods', 'What has actually worked'],
      body: [
        { type: 'lead', text: 'In the last week of August 1854 a cholera outbreak killed more than five hundred people in a few Soho streets around Golden Square in London. A physician named John Snow, who lived nearby and had argued for years that cholera was waterborne rather than miasmatic, walked the neighborhood with a map and a notebook, plotted each death as a black bar beside the house where it had occurred, and found the cases clustered around a single public water pump on Broad Street. He persuaded the parish Board of Guardians to remove the pump\'s handle on 8 September. The outbreak ended. It would take another three decades — and the 1883 work of Robert Koch in Egypt — to identify the bacterium Vibrio cholerae that caused the disease. Snow had already given public health its founding method.' },
        { type: 'h2', text: 'A shift in the unit of analysis' },
        { type: 'p', text: 'Clinical medicine treats individuals one at a time. Public health treats populations. The shift changes almost everything: the evidence base is epidemiological rather than anecdotal, the interventions are policies and programs rather than prescriptions, the outcomes are measured in life-years added or infections prevented rather than in a single patient\'s chart, and the ethics are substantially different — a public-health intervention often trades small inconveniences to many for large benefits to a few. A well-run public-health program can add more years to more lives than any specialist clinic. Childhood vaccination and clean water are, between them, arguably the two interventions that have saved more human lives than anything else in history.' },
        { type: 'interactive', key: 'sir' },
        { type: 'h2', text: 'The social determinants' },
        { type: 'p', text: 'Most of what shapes a population\'s health is not clinical. The WHO Commission on Social Determinants of Health, reporting in 2008 under Michael Marmot, estimated that zip code is a better predictor of life expectancy than genome. Housing, education, income, clean water, clean air, access to nutritious food, political stability, racial discrimination, and early-life adversity together explain most of the variance in health outcomes across countries and neighborhoods. Life expectancy can vary by fifteen years between neighborhoods a few subway stops apart in the same city. Any theory of disease that ignores these facts is, at population scale, incomplete.' },
        { type: 'h2', text: 'The methods, in brief' },
        { type: 'p', text: 'Epidemiology is the study of how diseases move through populations — who gets sick, where, when, why, and what to do about it. Biostatistics quantifies that movement. Environmental health asks what in the air, water, and soil is making people sick. Health policy studies what the state can do about it. Global health is public health across borders, with the inequality turned up. A graduate program in public health teaches all five, plus a little of everything else — behavioral science, health economics, implementation research, disaster preparedness, communications. The Master of Public Health is deliberately a generalist degree.' },
        { type: 'h2', text: 'What has actually worked' },
        { type: 'p', text: 'In the twentieth century, public health roughly doubled human life expectancy in the developed world — more than any advance in clinical medicine, by a large margin. The list of wins is specific: vaccination (smallpox eradicated in 1980, polio reduced by more than 99 percent), sanitation (urban sewer systems, the single largest intervention), occupational safety, tobacco control, fluoridated water, motor-vehicle seat belts, and the slow decline of maternal and infant mortality from around 900 per 100,000 births in 1900 to about 20 today in wealthy countries. The list of ongoing fights is equally specific: obesity, opioid overdose, firearm injury, climate-related disease, antibiotic resistance, the next pandemic. The COVID-19 response used tools Snow would have recognized — case tracking, contact tracing, isolation — alongside tools he could not have imagined, most notably mRNA vaccines designed from a published genome sequence in forty-eight hours.' },
        { type: 'callout', text: 'Educational and medical reminder only: nothing on this page is clinical advice. Decisions about your own medicines, vaccines, or care belong with your own clinician and the primary literature, not with a summary like this one.' },
        { type: 'quote', text: 'It was an experimentum crucis.', cite: 'John Snow, on the Broad Street pump (On the Mode of Communication of Cholera, 1855)' },
        { type: 'interactive', key: 'rich-public_health' },
      ],

      keyTerms: ['epidemiology', 'incidence', 'prevalence', 'social determinants of health', 'herd immunity', 'vaccination', 'health policy', 'global health'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/playlist?list=PL8dPuuaLjXtPjQj_LcJ0Zvj-VI3sslJyF',
            title: 'Crash Course Public Health — full playlist',
            channel: 'CrashCourse',
            duration: 'variable',
            why: 'Vanessa Hill\'s ten-episode run with the American Public Health Association — social determinants, global health, health systems. Clear and short.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/channel/UCG-iSMVtWbbwDDXgXXypARQ',
            title: 'MedCram — public-health and epidemiology topics',
            channel: 'MedCram',
            duration: 'variable',
            why: 'Working clinicians on vaccine mechanics, epidemic curves, and evidence appraisal — careful, paced, evidence-based.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/channel/UC07-dOwgza1IguKA86jqxNA',
            title: 'World Health Organization — official channel',
            channel: 'World Health Organization',
            duration: 'variable',
            why: 'WHO\'s own videos — outbreak updates, global-health explainers, interviews with named public-health scientists.',
          },
        ],
        books: [
          {
            title: 'The Ghost Map: The Story of London\'s Most Terrifying Epidemic',
            author: 'Steven Johnson',
            year: 2006,
            url: '',
            why: 'A superb narrative of John Snow, the 1854 cholera outbreak, and the birth of modern epidemiology. The single best general-audience introduction to the field.',
          },
          {
            title: 'The Great Influenza: The Story of the Deadliest Pandemic in History',
            author: 'John M. Barry',
            year: 2004,
            url: '',
            why: 'The 1918 flu, the founding of modern American public health, and the institutional scaffolding that COVID-19 tested a century later.',
          },
          {
            title: 'Spillover: Animal Infections and the Next Human Pandemic',
            author: 'David Quammen',
            year: 2012,
            url: '',
            why: 'A science journalist\'s careful reporting on zoonotic disease — Ebola, SARS, Nipah, and by extension COVID-19. Written nearly a decade before the last pandemic; astonishingly prescient.',
          },
        ],
        articles: [
          {
            title: 'Centers for Disease Control and Prevention — homepage',
            source: 'U.S. CDC',
            url: 'https://www.cdc.gov/',
            why: 'The primary U.S. source for outbreak reporting, vaccine recommendations, and surveillance data. MMWR (their weekly report) is essential reading.',
            year: null,
          },
          {
            title: 'World Health Organization — homepage',
            source: 'WHO',
            url: 'https://www.who.int/',
            why: 'The global counterpart to the CDC. Fact sheets, emergency updates, and the Global Health Observatory data repository.',
            year: null,
          },
          {
            title: 'Public health',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Public_health',
            why: 'Careful, well-cited overview of the field with strong sections on history, methods, and institutions.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Epidemiology in Public Health Practice (Coursera, Johns Hopkins)',
            provider: 'Coursera (Johns Hopkins)',
            url: 'https://www.coursera.org/specializations/professional-epidemiology',
            free: true,
            why: 'Johns Hopkins Bloomberg School specialization on the core methods of public-health epidemiology — outbreak investigation, data systems, disease burden. Free to audit.',
          },
          {
            title: 'Outbreaks and Epidemics (Coursera, Johns Hopkins)',
            provider: 'Coursera (Johns Hopkins)',
            url: 'https://www.coursera.org/learn/outbreaks-epidemics',
            free: true,
            why: 'A short, beginner-friendly course on how outbreaks are identified, reported, and contained. Good entry point to the specialization above.',
          },
        ],
        tools: [
          {
            title: 'Our World in Data',
            url: 'https://ourworldindata.org/',
            why: 'Oxford-based, public-domain data and charts on global health, disease, and development. The best free visualization of long-run public-health data on the web.',
          },
        ],
        primarySources: [
          {
            title: 'John Snow, On the Mode of Communication of Cholera (1855)',
            url: 'https://archive.org/details/b28985266',
            why: 'Snow\'s own second edition, on the Internet Archive — the founding text of field epidemiology.',
          },
        ],
      },

      interactive: { kind: 'sir' },
      seeAlso: ['physiology', 'pharmacology', 'ecology', 'nutrition'],
      prereqs: ['physiology'],
      leadsTo: ['nutrition'],

      chapterActivity: 'A walking tour of Lower Manhattan\'s public-health history — Typhoid Mary\'s quarantine on North Brother Island, the 1832 cholera cemetery under Washington Square, the 1918 influenza wards at Bellevue.',

      sources: [
        'https://en.wikipedia.org/wiki/Public_health',
        'https://www.cdc.gov/',
        'https://www.who.int/',
        'https://www.coursera.org/specializations/professional-epidemiology',
      ],
      verifiedAt: '2026-04-22',
    },

    // --- VACCINES ---
    vaccines: {
      id: 'vaccines',
      name: 'Vaccines & Immunity',
      level: 'Beginner',
      dek: 'How a harmless rehearsal teaches the immune system to defeat a disease it has never met.',
      readTime: '6 min',

      sections: ['How vaccines train the immune system', 'The main kinds of vaccine', 'Herd immunity', 'The record so far'],
      body: [
        { type: 'lead', text: 'In 1798 the English physician Edward Jenner published a short work with a strange title, Inquiry into the Variolae vaccinae, his name for cowpox. In it he reported that material from cowpox could protect a person against smallpox, one of the deadliest diseases of his century, and he gave the procedure a name taken from the cow: vaccination. The idea inside that pamphlet still runs the world. Give the immune system a safe rehearsal, and it will remember the real performance.' },
        { type: 'h2', text: 'How vaccines train the immune system' },
        { type: 'p', text: 'A vaccine is a biological preparation that provides active acquired immunity to a particular infectious disease. Most vaccines contain an agent that resembles the microorganism that causes the disease, made from weakened or killed forms of the microbe, from its toxins, or from one of its surface proteins. The immune system treats that agent as an invader and builds a defense against it, including antibodies and memory cells, without the risks of the full illness. The Centers for Disease Control and Prevention describes the process as imitating an infection. The imitation is far less dangerous than the real infection, and the adaptive response it trains takes about one to two weeks to develop fully. If the real microbe arrives months or years later, the body answers from memory, faster and in greater strength.' },
        { type: 'h2', text: 'The main kinds of vaccine' },
        { type: 'p', text: 'Vaccine makers stage the same rehearsal by several routes. Attenuated vaccines use a living microbe weakened in the laboratory. Inactivated vaccines use microbes that have been killed. Toxoid vaccines train the body against a toxin the microbe produces, rendered harmless in advance. Subunit and conjugate vaccines use only selected pieces of the microbe, such as a surface protein. The newest genetic vaccines deliver instructions rather than the agent itself: viral vector, RNA, and DNA vaccines carry code for a microbial protein and let the body build the rehearsal prop. A finished vaccine also contains small amounts of practical ingredients: stabilizers that protect its potency, adjuvants such as aluminum salts that strengthen the immune response, and preservatives in vials that hold more than one dose.' },
        { type: 'h2', text: 'Herd immunity' },
        { type: 'p', text: 'The protection does not stop with the person vaccinated. When enough of a population is immune, whether through vaccination or through surviving the disease, a microbe struggles to find new hosts, and its spread slows and can stop altogether. This indirect shield is called herd immunity, and it guards exactly the people vaccination cannot reach: newborns, people in treatment that suppresses the immune system, and the minority in whom a vaccine does not take. That minority is real. Depending on the vaccine and the person, an estimated 2 to 10 percent of recipients do not respond fully. Herd immunity is the community level answer to that gap.' },
        { type: 'callout', text: 'The word vaccine comes from Jenner\'s variolae vaccinae, his term for cowpox. In 1881 Louis Pasteur proposed that the words vaccine and vaccination be extended to every protective inoculation, in Jenner\'s honor.' },
        { type: 'h2', text: 'The record so far' },
        { type: 'p', text: 'The first entry in the record is smallpox itself, the disease Jenner worked on: vaccination campaigns eventually eradicated it, the first human disease wiped out worldwide. The World Health Organization describes the present scale of the tool. Immunization currently prevents 3.5 million to 5 million deaths every year, and vaccines now exist to prevent more than 30 life-threatening diseases. Jenner promised that a mild encounter could stand between a person and a deadly one. The pamphlet of 1798 has become a routine appointment in clinics on every continent, and the memory it leaves in the immune system remains one of the most reliable protections medicine has.' },
      ],

      keyTerms: ['vaccine', 'immunity', 'antigen', 'antibody', 'herd immunity', 'attenuated vaccine', 'inactivated vaccine', 'adjuvant'],
      resources: {
        videos: [
          {
            id: 'rb7TVW77ZCs',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=rb7TVW77ZCs',
            title: 'How do vaccines work?',
            channel: 'TED-Ed',
            duration: 'variable',
            why: 'Kelwalin Dhanasarnsombut explains, in one short animation, how a vaccine trains the immune system before the real microbe arrives.',
          },
          {
            id: '34UWTlxK6Ks',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=34UWTlxK6Ks',
            title: 'How Vaccines Work, Herd Immunity, Types of Vaccines, Animation',
            channel: 'Alila Medical Media',
            duration: 'variable',
            why: 'An animated tour of the main vaccine types and of the herd immunity that protects people who cannot be vaccinated.',
          },
          {
            id: 'uVUf_pt7Sh0',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=uVUf_pt7Sh0',
            title: 'Antibiotics, Antivirals, and Vaccines',
            channel: 'Amoeba Sisters',
            duration: 'variable',
            why: 'Places vaccines beside antibiotics and antivirals and shows what each tool can and cannot do.',
          },
        ],
        books: [
          {
            title: 'Vaccinated: One Man\'s Quest to Defeat the World\'s Deadliest Diseases',
            author: 'Paul A. Offit',
            year: 2007,
            url: '',
            why: 'A biography of Maurice Hilleman, the scientist behind more vaccines than any other, and a clear history of how they are made.',
          },
          {
            title: 'On Immunity: An Inoculation',
            author: 'Eula Biss',
            year: 2014,
            url: '',
            why: 'A short, searching essay on vaccination, fear, and the shared body of a community.',
          },
          {
            title: 'Vaccines: What Everyone Needs to Know',
            author: 'Kristen A. Feemster',
            year: 2017,
            url: '',
            why: 'A pediatrician answers the standard questions about how vaccines work and how they are tested, in plain language.',
          },
        ],
        articles: [
          {
            title: 'Vaccine Basics',
            source: 'CDC',
            url: 'https://www.cdc.gov/vaccines/basics/',
            why: 'The CDC account of how vaccines imitate an infection and what each of their ingredients does.',
            year: null,
          },
          {
            title: 'Vaccines and Immunization',
            source: 'World Health Organization',
            url: 'https://www.who.int/health-topics/vaccines-and-immunization',
            why: 'The WHO topic page: what vaccines are, what they prevent, and the global numbers behind immunization.',
            year: null,
          },
          {
            title: 'Vaccine',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Vaccine',
            why: 'A broad, well cited survey of vaccine types, history, and development.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'How Vaccines Work',
            provider: 'Imperial College London (Coursera)',
            url: 'https://www.coursera.org/learn/how-vaccines-work',
            free: true,
            why: 'A short Imperial College course on immune responses to vaccines and how the different vaccine types are built.',
          },
        ],
      },

      seeAlso: ['physiology', 'pharmacology', 'public_health'],
      prereqs: ['physiology'],
      leadsTo: ['public_health'],

      chapterActivity: 'A visit to a local pharmacy during flu season: read a vaccine information sheet end to end and note every ingredient and its job.',

      sources: [
        'https://en.wikipedia.org/wiki/Vaccine',
        'https://www.who.int/health-topics/vaccines-and-immunization',
        'https://www.cdc.gov/vaccines/basics/',
      ],
      verifiedAt: '2026-10-15',
    },

    // --- ANTIBIOTICS ---
    antibiotics: {
      id: 'antibiotics',
      name: 'Antibiotics & Resistance',
      level: 'Intermediate',
      dek: 'How mold juice became medicine, and how bacteria are learning to defeat it gene by gene.',
      readTime: '6 min',

      sections: ['From mold to medicine', 'How antibiotics work', 'How resistance spreads', 'The stakes'],
      body: [
        { type: 'lead', text: 'In 1928 Alexander Fleming discovered modern day penicillin from the mold Penicillium, and medicine quietly changed direction. Substances that kill bacteria, or stop them growing, had existed in nature for ages, made by microbes warring with each other. Fleming\'s discovery turned one of them into a tool. Within a generation, infections that had routinely killed became routinely survivable, and the antibiotic era had begun.' },
        { type: 'h2', text: 'From mold to medicine' },
        { type: 'p', text: 'Fleming\'s penicillin was a discovery before it was a drug. The first sulfonamide, Prontosil, was developed by the team of Gerhard Domagk in 1932 or 1933, and the decades after brought a pipeline of new classes, each aimed at a different part of the bacterial machinery. Antibiotics became the quiet infrastructure of modern medicine: surgery, cancer chemotherapy, and organ transplantation all lean on the assumption that bacterial infection can be controlled.' },
        { type: 'h2', text: 'How antibiotics work' },
        { type: 'p', text: 'Antibiotics are medicines that kill bacteria or inhibit their growth. Different classes attack different targets. Some break the construction of the bacterial cell wall, others jam the machinery that builds proteins, and others interfere with the copying of DNA or with essential chemistry such as folate synthesis. Because those targets belong to bacteria, antibiotics are not effective against viruses, which have none of these structures. A cold or the flu will not answer to an antibiotic, no matter how miserable it feels.' },
        { type: 'h2', text: 'How resistance spreads' },
        { type: 'p', text: 'Resistance is evolution at high speed. Within a bacterial population, a few cells may carry a trait that lets them survive an antibiotic, through a spontaneous mutation or through a gene picked up from another bacterium. Horizontal gene transfer passes such genes between bacteria, sometimes across species. When antibiotics are used, in medicine or in agriculture, they create selective pressure: susceptible bacteria die, resistant ones multiply. Microbes that resist several drugs at once are called multidrug resistant, and in the headlines, superbugs.' },
        { type: 'callout', text: 'Resistance is not the patient becoming immune to the drug. It is the bacteria becoming immune to the drug, and passing that immunity to their descendants and their neighbors.' },
        { type: 'h2', text: 'The stakes' },
        { type: 'p', text: 'The accounting has begun. Bacterial antimicrobial resistance was directly responsible for 1.27 million deaths in 2019, and it was associated with nearly 5 million deaths in the same year. The mold Fleming found in 1928 opened an era. Whether the era continues depends on how carefully its medicines are used, and on whether science keeps finding new ones before the old ones fail.' },
      ],

      keyTerms: ['antibiotic', 'penicillin', 'antimicrobial resistance', 'horizontal gene transfer', 'selective pressure', 'superbug', 'bactericidal', 'bacteriostatic'],
      resources: {
        videos: [
          {
            id: 'znnp-Ivj2ek',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=znnp-Ivj2ek',
            title: 'What causes antibiotic resistance?',
            channel: 'TED-Ed',
            duration: 'variable',
            why: 'Kevin Wu explains how use and overuse turn ordinary bacteria into resistant strains.',
          },
          {
            id: 'uVUf_pt7Sh0',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=uVUf_pt7Sh0',
            title: 'Antibiotics, Antivirals, and Vaccines',
            channel: 'Amoeba Sisters',
            duration: 'variable',
            why: 'Sorts out which tool works on bacteria, which on viruses, and why the distinction matters.',
          },
          {
            id: 'FE0nEupH7dY',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=FE0nEupH7dY',
            title: 'How Do Antibiotics Work? How They\'re Made and How They Were Discovered',
            channel: 'YouTube',
            duration: 'variable',
            why: 'A documentary history from Fleming\'s penicillin to industrial fermentation, ending with the rise of resistance.',
          },
        ],
        books: [
          {
            title: 'Superbug: The Fatal Menace of MRSA',
            author: 'Maryn McKenna',
            year: 2010,
            url: '',
            why: 'The story of one resistant bacterium and the hospitals, farms, and communities it moved through.',
          },
          {
            title: 'Missing Microbes: How the Overuse of Antibiotics Is Fueling Our Modern Plagues',
            author: 'Martin J. Blaser',
            year: 2014,
            url: '',
            why: 'A microbiologist argues that antibiotics reshape the human microbiome, with costs beyond resistance.',
          },
          {
            title: 'I Contain Multitudes: The Microbes Within Us and a Grander View of Life',
            author: 'Ed Yong',
            year: 2016,
            url: '',
            why: 'The bacterial world antibiotics act on, described with wonder: symbiosis, warfare, and constant gene trading.',
          },
        ],
        articles: [
          {
            title: 'Antibiotic',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Antibiotic',
            why: 'History, mechanisms, and classes of antibiotics, from Fleming and Prontosil onward.',
            year: null,
          },
          {
            title: 'Antimicrobial resistance',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Antimicrobial_resistance',
            why: 'How resistance arises and spreads, and the global mortality estimates behind the headlines.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Antimicrobial Resistance (Part 1)',
            provider: 'Global Health Learning Center',
            url: 'https://www.globalhealthlearning.org/course/antimicrobialresistancepart-1-0',
            free: true,
            why: 'A free introductory course on what drives resistance and how health programs respond to it.',
          },
        ],
      },

      seeAlso: ['pharmacology', 'physiology', 'public_health'],
      prereqs: ['pharmacology'],
      leadsTo: ['public_health'],

      chapterActivity: 'A slow read of a hospital\'s published antibiogram, the chart showing which local bacteria still answer to which drugs.',

      sources: [
        'https://en.wikipedia.org/wiki/Antibiotic',
        'https://en.wikipedia.org/wiki/Antimicrobial_resistance',
      ],
      verifiedAt: '2026-10-15',
    },

    // --- EPIDEMICS ---
    epidemics: {
      id: 'epidemics',
      name: 'Epidemics & Pandemics',
      level: 'Intermediate',
      dek: 'When disease outruns its neighborhood: the mathematics, history, and human habits behind epidemics and pandemics.',
      readTime: '6 min',

      sections: ['Outbreak, epidemic, pandemic', 'How epidemics travel', 'A founding scene: London cholera', 'How epidemics end'],
      body: [
        { type: 'lead', text: 'In the middle of the 14th century, the Black Death swept across Europe and killed up to half of its population. No one alive then had a word for an event at that scale. We do now, several words in fact, and the words matter, because each one describes a different size of fire, and a different response.' },
        { type: 'h2', text: 'Outbreak, epidemic, pandemic' },
        { type: 'p', text: 'The vocabulary is a ladder of scale. An epidemic, in the definition used by the Centers for Disease Control and Prevention, is an increase, often sudden, in the number of cases of a disease above what is normally expected in that population in that area. Grow the map and the epidemic becomes a pandemic: an epidemic that has spread across a large region, sometimes worldwide, affecting a substantial portion of the population. The rungs are practical, not poetic. For meningococcal disease, specialists treat an attack rate above 15 cases per 100,000 people for two consecutive weeks as an epidemic signal.' },
        { type: 'h2', text: 'How epidemics travel' },
        { type: 'p', text: 'A disease can only become an epidemic if it can move. The main roads are well mapped: through the air, through water and food by the fecal oral route, through insect and animal vectors, and through sexual contact. Each road shapes the response. A waterborne disease yields to clean water and sanitation. An airborne one yields, slowly, to distance, ventilation, and immunity. Epidemics also ride human networks: trade routes carried plague across continents, and a single infected traveler can now board a plane and carry a virus across an ocean.' },
        { type: 'h2', text: 'A founding scene: London cholera' },
        { type: 'p', text: 'In 1854 a cholera outbreak struck the Broad Street neighborhood of London. The physician John Snow mapped the cases and traced them to a contaminated water supply, and removing that supply helped mitigate the outbreak. The episode is now regarded as the founding event of epidemiology, the study of how diseases spread through populations and how that spread can be interrupted. Snow had no microscope evidence and no germ theory to lean on. He had a map, a count, and a pattern that pointed at water.' },
        { type: 'callout', text: 'An epidemic is not defined by how deadly a disease is, but by how far its numbers rise above what is normally expected in that place.' },
        { type: 'h2', text: 'How epidemics end' },
        { type: 'p', text: 'Epidemics end when a disease runs out of reachable hosts: when enough people are immune, when behavior cuts its roads, or when the conditions that fed it are removed. The 1918 influenza pandemic, an H1N1 outbreak described as the deadliest pandemic in history, burned through a world with no vaccine against it. In May 2025 the World Health Assembly adopted a Pandemic Agreement, an attempt to write the lessons of past pandemics into shared rules before the next one. The Black Death killed up to half of Europe in a world where nothing stood ready. The long work of epidemiology, from Snow\'s map to that agreement, is the work of making sure something does.' },
      ],

      keyTerms: ['epidemic', 'pandemic', 'outbreak', 'epidemiology', 'attack rate', 'transmission', 'vector', 'endemic'],
      resources: {
        videos: [
          {
            id: 'UG8YbNbdaco',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=UG8YbNbdaco',
            title: 'How pandemics spread',
            channel: 'TED-Ed',
            duration: 'variable',
            why: 'Mark Honigsbaum traces how pandemics have moved through history and what has stopped them.',
          },
          {
            id: 'rjT3arJJ9Kc',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=rjT3arJJ9Kc',
            title: 'The Complete Story Of The Deadliest Pandemic In History',
            channel: 'The World History Channel',
            duration: 'variable',
            why: 'A documentary account of the 1918 influenza pandemic, drawn from the BBC programme The Flu That Killed 50 Million.',
          },
          {
            id: 'EeBdKTlIEvQ',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=EeBdKTlIEvQ',
            title: 'The Pandemic Worse Than COVID-19 That Killed 50 Million',
            channel: 'YouTube',
            duration: 'variable',
            why: 'The 1918 pandemic in the United States, including the very different fates of Philadelphia and St. Louis.',
          },
        ],
        books: [
          {
            title: 'The Great Influenza',
            author: 'John M. Barry',
            year: 2004,
            url: '',
            why: 'The standard narrative history of the 1918 pandemic and of the medical science it forced into being.',
          },
          {
            title: 'Pale Rider: The Spanish Flu of 1918 and How It Changed the World',
            author: 'Laura Spinney',
            year: 2017,
            url: '',
            why: 'A global telling of 1918, strong on the pandemic\'s long shadow over politics, art, and public health.',
          },
          {
            title: 'Pandemics: A Very Short Introduction',
            author: 'Christian W. McMillen',
            year: 2016,
            url: '',
            why: 'Oxford\'s pocket survey of pandemics from plague to HIV, compact enough to read in a weekend.',
          },
        ],
        articles: [
          {
            title: 'Pandemic',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Pandemic',
            why: 'Definitions, the major pandemics of history, and current preparedness, including the 2025 Pandemic Agreement.',
            year: null,
          },
          {
            title: 'Epidemic',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Epidemic',
            why: 'The CDC definition, attack rates, transmission routes, and the Broad Street cholera outbreak.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Outbreaks and Epidemics',
            provider: 'Johns Hopkins University (Coursera)',
            url: 'https://www.coursera.org/learn/outbreaks-epidemics',
            free: true,
            why: 'A beginner level Johns Hopkins course on how outbreaks are detected, investigated, and answered.',
          },
        ],
      },

      seeAlso: ['public_health', 'physiology', 'pharmacology'],
      prereqs: ['public_health'],
      leadsTo: [],

      chapterActivity: 'A walk to a 1918 influenza memorial, a pandemic era plaque, or a closed cholera era cemetery in your own city, its dates read aloud with the group.',

      sources: [
        'https://en.wikipedia.org/wiki/Pandemic',
        'https://en.wikipedia.org/wiki/Epidemic',
        'https://www.youtube.com/watch?v=UG8YbNbdaco',
      ],
      verifiedAt: '2026-10-15',
    },


    women_clinical_trials: {
      id: 'women_clinical_trials',
      name: 'Women in Clinical Trials: The 1993 Law',
      level: 'Beginner',
      dek: 'A 1993 American law required women and minorities to be included in government funded medical research.',
      readTime: '4 min',

      sections: ['Research on men, prescribed to everyone', 'What the law requires', 'Why it still matters'],
      body: [
        { type: 'lead', text: 'Until 1993, American medical research could legally leave women out, and often did. The NIH Revitalization Act of 1993, Section 492B of Public Law 103-43, made inclusion the rule: women and members of minority groups must be included in all clinical research funded by the National Institutes of Health, unless a clear and compelling reason shows inclusion is inappropriate.' },
        { type: 'h2', text: 'What the law requires' },
        { type: 'p', text: 'The policy is stronger than a head count. For NIH-defined Phase III clinical trials, studies must be designed so that the results can be validly analyzed for differences between groups, by sex and by race and ethnicity, and researchers must report enrollment and those analyses by group. A trial that enrolls some women but is too small to learn anything about them does not meet the standard.' },
        { type: 'p', text: 'The same law also wrote the NIH Office of Research on Women\'s Health into statute. The office had been created administratively in 1990 after government audits showed how unevenly women were included in the research their taxes paid for.' },
        { type: 'h2', text: 'Why it still matters' },
        { type: 'p', text: 'Dose, safety, and side effects can differ between bodies. Drugs tested mostly on men have repeatedly turned out to work differently, or carry different risks, in women. Inclusion is how those differences get found in a trial instead of in the public.' },
        { type: 'callout', text: 'The exception is narrow by design: exclusion requires a clear and compelling justification tied to the health of the subjects or the purpose of the research, not convenience or habit.' },
      ],

      keyTerms: ['clinical trial', 'NIH', 'Phase III', 'inclusion', 'Public Law 103-43', 'women\'s health research'],

      resources: {
        articles: [
          {
            title: 'NIH policy: Inclusion of Women and Minorities in Clinical Research',
            source: 'National Institutes of Health (grants.nih.gov)',
            url: 'https://grants.nih.gov/grants/guide/rfa-files/RFA-MD-11-001.html',
            why: 'An NIH funding announcement stating the policy in full and naming its source: Section 492B of Public Law 103-43, the NIH Revitalization Act of 1993.',
            year: null,
          },
        ],
      },

      seeAlso: ['maternal_health', 'menopause_basics', 'how_vaccines_work'],

      sources: [
        'https://grants.nih.gov/grants/guide/rfa-files/RFA-MD-11-001.html',
      ],
      verifiedAt: '2026-10-15',
    },

    maternal_health: {
      id: 'maternal_health',
      name: 'Maternal Health: The Deaths That Can Be Prevented',
      level: 'Beginner',
      dek: 'About 260,000 women died in pregnancy and childbirth in 2023, most from preventable causes, says WHO.',
      readTime: '4 min',

      sections: ['The count', 'Where the risk sits', 'What saves lives'],
      body: [
        { type: 'lead', text: 'About 260,000 women died during and following pregnancy and childbirth in 2023, according to the World Health Organization. That is over 700 women a day, a maternal death almost every two minutes, and most of these deaths could have been prevented.' },
        { type: 'h2', text: 'Where the risk sits' },
        { type: 'p', text: 'Just over 90 percent of all maternal deaths in 2023 occurred in low and lower middle income countries. Sub-Saharan Africa and southern Asia together accounted for around 87 percent of the estimated total. Where a woman gives birth changes her risk of dying by more than a hundredfold between the safest and the least safe settings.' },
        { type: 'p', text: 'There is real progress in the same figures. The global maternal mortality ratio, deaths per 100,000 live births, dropped by about 40 percent between 2000 and 2023. Eastern Europe and southern Asia cut their ratios by about three quarters and about seven tenths over that span.' },
        { type: 'h2', text: 'What saves lives' },
        { type: 'p', text: 'The WHO\'s plain statement of the remedy is care by skilled health professionals before, during, and after childbirth. The main killers, severe bleeding, infection, high blood pressure conditions such as pre-eclampsia, and complications of delivery, are survivable where trained care, blood, and medicine are within reach in time.' },
        { type: 'callout', text: 'These figures are the current edition of the WHO fact sheet. Its earlier edition reported 287,000 deaths for 2020; the series is revised as new estimates are published, which is why the year is always named beside the number.' },
      ],

      keyTerms: ['maternal mortality', 'maternal mortality ratio', 'skilled birth attendant', 'pre-eclampsia', 'World Health Organization', 'preventable'],

      resources: {
        articles: [
          {
            title: 'Maternal mortality',
            source: 'World Health Organization (fact sheet)',
            url: 'https://www.who.int/news-room/fact-sheets/detail/maternal-mortality',
            why: 'The WHO fact sheet itself: about 260,000 deaths in 2023, over 700 a day, the ratio down about 40 percent since 2000, just over 90 percent of deaths in low and lower middle income countries.',
            year: null,
          },
        ],
      },

      seeAlso: ['women_clinical_trials', 'menopause_basics', 'hand_hygiene'],

      sources: [
        'https://www.who.int/news-room/fact-sheets/detail/maternal-mortality',
      ],
      verifiedAt: '2026-10-15',
    },

    menopause_basics: {
      id: 'menopause_basics',
      name: 'Menopause Basics',
      level: 'Beginner',
      dek: 'Menopause usually comes between forty five and fifty five, when periods stop for good, says the NHS.',
      readTime: '4 min',

      sections: ['What it is', 'The ages that matter', 'Symptoms and support'],
      body: [
        { type: 'lead', text: 'Menopause is the stage when periods stop permanently because the ovaries stop releasing eggs and hormone levels fall. It is confirmed in hindsight: a person is in menopause once they have had no period for 12 months. In the UK it usually happens between the ages of 45 and 55, at an average age of 51.' },
        { type: 'h2', text: 'The ages that matter' },
        { type: 'p', text: 'Menopause between 40 and 45 is called early menopause. When ovarian function is lost before the age of 40 it is called premature ovarian insufficiency, or POI, and it affects about 1 in 100 women. POI can also follow surgery or treatments such as chemotherapy, and unlike natural menopause it can sometimes be intermittent, with ovarian activity returning for a time.' },
        { type: 'p', text: 'The years leading up to the final period are called perimenopause. Hormone levels fluctuate, periods become irregular, and symptoms can begin years before periods stop altogether.' },
        { type: 'h2', text: 'Symptoms and support' },
        { type: 'p', text: 'Common symptoms include hot flushes, night sweats, broken sleep, brain fog, low mood and anxiety, joint aches, and vaginal dryness. Over the long term, low oestrogen raises the risk of bone thinning and of heart and circulation problems. Symptoms vary widely in strength and length, and help exists at every level, from lifestyle changes to hormone therapy, which a clinician can weigh with the patient.' },
        { type: 'callout', text: 'Menopause is a normal life stage, not an illness. This page is general information only, not medical advice; symptoms that worry you are a reason to see a clinician, not to self diagnose.' },
      ],

      keyTerms: ['menopause', 'perimenopause', 'oestrogen', 'premature ovarian insufficiency', 'hot flush', 'hormone therapy'],

      resources: {
        articles: [
          {
            title: 'Menopause: Definition and background information',
            source: 'NICE Clinical Knowledge Summaries',
            url: 'https://cks.nice.org.uk/topics/menopause/background-information/definition/',
            why: 'The clinical definition used across the NHS: usually 45 to 55, UK mean age 51, early menopause 40 to 45, POI before 40.',
            year: null,
          },
          {
            title: 'What is the Menopause? (patient information leaflet)',
            source: 'Manchester University NHS Foundation Trust',
            url: 'https://mft.nhs.uk/app/uploads/sites/4/2024/04/SMPIL-24-008-What-is-the-Menopause.pdf',
            why: 'An NHS hospital\'s plain language leaflet: average age 51 in the UK, the 45 to 55 range, and what perimenopause means.',
            year: 2024,
          },
        ],
      },

      seeAlso: ['women_clinical_trials', 'maternal_health', 'sleep_needs'],

      sources: [
        'https://cks.nice.org.uk/topics/menopause/background-information/definition/',
        'https://mft.nhs.uk/app/uploads/sites/4/2024/04/SMPIL-24-008-What-is-the-Menopause.pdf',
      ],
      verifiedAt: '2026-10-15',
    },

    nightingale: {
      id: 'nightingale',
      name: 'Florence Nightingale: Nursing Meets Statistics',
      level: 'Beginner',
      dek: 'At Scutari, Nightingale\'s sanitation drive cut the hospital death rate from forty five percent to two.',
      readTime: '4 min',

      sections: ['Scutari, 1854', 'The numbers as evidence', 'What she built afterward'],
      body: [
        { type: 'lead', text: 'Florence Nightingale arrived at the British military hospital at Scutari in November 1854 with 38 nurses, in the middle of the Crimean War. The hospital was filthy, overcrowded, and short of everything. Through sanitation, cleanliness, and better diets, she and her nurses helped drive the hospital\'s death rate down from 45 percent to 2 percent.' },
        { type: 'h2', text: 'The numbers as evidence' },
        { type: 'p', text: 'Nightingale\'s second weapon was statistics. She collected careful records of how soldiers died and showed that far more were dying of preventable disease in hospital than of wounds in battle. She presented the figures in striking diagrams, including her famous polar area charts, so that officials who would not read tables could not avoid the picture.' },
        { type: 'p', text: 'Her evidence persuaded the government to act. A Royal Commission on the health of the army followed, and reforms in sanitation, ventilation, and record keeping spread through military and civilian hospitals.' },
        { type: 'h2', text: 'What she built afterward' },
        { type: 'p', text: 'Nightingale became famous as the Lady with the Lamp, from her rounds of the wards at night. She spent the fame deliberately: on nurse training, hospital design, and the professional standing of nursing as skilled work. The lamp is the symbol people remember. The data is the reason the reforms lasted.' },
        { type: 'callout', text: 'Britannica records the Scutari figures directly: a death rate falling from 45 percent to 2 percent as sanitation, diets, and cleanliness took hold. The figures are the hospital\'s rates before and after her reforms, and they were the evidence her later campaigns ran on.' },
      ],

      keyTerms: ['Scutari', 'Crimean War', 'sanitation', 'statistics', 'Royal Commission', 'Lady with the Lamp'],

      resources: {
        articles: [
          {
            title: 'Florence Nightingale',
            source: 'Britannica Kids (Encyclopaedia Britannica)',
            url: 'https://kids.britannica.com/students/article/Florence-Nightingale/276097',
            why: 'Britannica\'s account: arrival at Scutari with 38 nurses in 1854, and the death rate cut from 45 percent to 2 percent.',
            year: null,
          },
        ],
      },

      seeAlso: ['hand_hygiene', 'germ_theory', 'women_clinical_trials'],

      sources: [
        'https://kids.britannica.com/students/article/Florence-Nightingale/276097',
      ],
      verifiedAt: '2026-10-15',
    },

    how_vaccines_work: {
      id: 'how_vaccines_work',
      name: 'How Vaccines Work',
      level: 'Beginner',
      dek: 'A vaccine trains the immune system to recognize a germ before the real infection ever arrives.',
      readTime: '4 min',

      sections: ['Training, not infection', 'What is inside', 'The population effect'],
      body: [
        { type: 'lead', text: 'A vaccine works by training. It shows the immune system a safe version of a germ, or just the part of the germ the body needs to recognize, or the instructions for making that part. The immune system learns to make antibodies against it, so when the real germ arrives, the defense is already built. Immunization prevents an estimated 3.5 to 5 million deaths every year, according to the World Health Organization.' },
        { type: 'h2', text: 'What is inside' },
        { type: 'p', text: 'Different vaccines train the body in different ways. Some contain a killed or weakened form of the germ itself. Some contain only the antigen, the identifying part of the germ. Newer designs deliver the blueprint, instructions the body\'s own cells use briefly to make the antigen, which the immune system then learns on.' },
        { type: 'p', text: 'The training happens without causing the disease. A sore arm or a day of feeling unwell can follow, which is the immune system practicing, not the illness itself taking hold.' },
        { type: 'h2', text: 'The population effect' },
        { type: 'p', text: 'Because a vaccinated person is far less likely to catch and pass on an infection, vaccination protects more than the person vaccinated. It slows the spread through a community and shelters people who cannot be vaccinated, including newborns and people whose immune systems are weakened by illness or treatment.' },
        { type: 'callout', text: 'The WHO puts it plainly: vaccines train your immune system to create antibodies, just as it does when it is exposed to a disease, but without causing the disease.' },
      ],

      keyTerms: ['vaccine', 'immune system', 'antibody', 'antigen', 'immunization', 'herd protection'],

      resources: {
        articles: [
          {
            title: 'Vaccines and immunization: What is vaccination?',
            source: 'World Health Organization',
            url: 'https://www.who.int/news-room/questions-and-answers/item/vaccines-and-immunization-what-is-vaccination',
            why: 'The WHO\'s question and answer page, including the estimate that immunization prevents 3.5 to 5 million deaths annually.',
            year: null,
          },
          {
            title: 'How do vaccines work?',
            source: 'World Health Organization',
            url: 'https://www.who.int/news-room/feature-stories/detail/how-do-vaccines-work',
            why: 'The WHO\'s illustrated explanation of antigens, antibodies, and immune memory.',
            year: null,
          },
        ],
      },

      seeAlso: ['germ_theory', 'hand_hygiene', 'antimicrobial_resistance'],

      sources: [
        'https://www.who.int/news-room/questions-and-answers/item/vaccines-and-immunization-what-is-vaccination',
        'https://www.who.int/news-room/feature-stories/detail/how-do-vaccines-work',
      ],
      verifiedAt: '2026-10-15',
    },

    antimicrobial_resistance: {
      id: 'antimicrobial_resistance',
      name: 'Antimicrobial Resistance: When Medicines Stop Working',
      level: 'Intermediate',
      dek: 'Drug resistant bacteria were directly linked to 1.27 million deaths in 2019 across 204 countries.',
      readTime: '4 min',

      sections: ['The 2019 count', 'How resistance spreads', 'What slows it'],
      body: [
        { type: 'lead', text: 'In 2019, bacterial antimicrobial resistance was directly responsible for an estimated 1.27 million deaths worldwide, and played a role in 4.95 million deaths in total. Those figures come from the Global Research on Antimicrobial Resistance study, published in The Lancet, covering 204 countries and 23 bacterial pathogens.' },
        { type: 'h2', text: 'How resistance spreads' },
        { type: 'p', text: 'Resistance is evolution at speed. When an antibiotic kills the bacteria it can kill, the few that survive by chance are the ones that resist it. They multiply, and they can share their resistance genes with other bacteria. Every unnecessary course of antibiotics, in people and in livestock, runs this selection again and sharpens the resistant strains.' },
        { type: 'p', text: 'The result is infections that once cleared with a standard prescription now needing stronger drugs, longer hospital stays, or, in the worst cases, having no effective treatment left. Routine surgery and cancer care depend on working antibiotics to keep infection risk down, so resistance reaches far beyond infectious disease wards.' },
        { type: 'h2', text: 'What slows it' },
        { type: 'p', text: 'The count itself points to the levers: clean water and sanitation, vaccination, and infection control cut the number of infections that need treating at all. Careful prescribing, using antibiotics when they are needed and not when they are not, slows the selection. And new drugs and diagnostics are needed for the infections that remain.' },
        { type: 'callout', text: 'One study, one year: 1.27 million deaths directly attributable to bacterial resistance in 2019, more than HIV/AIDS or malaria caused that year, with 4.95 million deaths associated overall.' },
      ],

      keyTerms: ['antimicrobial resistance', 'antibiotic', 'pathogen', 'selection pressure', 'The Lancet', 'stewardship'],

      resources: {
        articles: [
          {
            title: 'Global burden of bacterial antimicrobial resistance in 2019: a systematic analysis',
            source: 'The Lancet (GRAM study)',
            url: 'https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(22)00087-3/fulltext',
            why: 'The study itself: 1.27 million deaths directly attributable and 4.95 million associated, across 204 countries and 23 pathogens.',
            year: 2022,
          },
        ],
      },

      seeAlso: ['germ_theory', 'how_vaccines_work', 'hand_hygiene'],

      sources: [
        'https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(22)00087-3/fulltext',
      ],
      verifiedAt: '2026-10-15',
    },

    germ_theory: {
      id: 'germ_theory',
      name: 'Germ Theory and Louis Pasteur',
      level: 'Beginner',
      dek: 'Pasteur\'s swan neck flasks killed the idea that life appears from nowhere, and germ theory followed.',
      readTime: '4 min',

      sections: ['The swan neck experiment', 'Fermentation, then disease', 'Pasteurization and vaccines'],
      body: [
        { type: 'lead', text: 'For most of history, people believed broth left standing could generate life by itself, a doctrine called spontaneous generation. Louis Pasteur disproved it with a flask. His swan neck flasks let air in but trapped dust and microbes in the curve of the neck, and the broth inside stayed sterile. Break the neck, and growth began. Life came from life, carried in the air.' },
        { type: 'h2', text: 'Fermentation, then disease' },
        { type: 'p', text: 'Pasteur showed that microorganisms cause fermentation, the souring of wine and beer that French industry paid him to fix, and then that microorganisms cause disease in animals and people. This is the germ theory of disease: specific microbes, not bad air or imbalance, behind specific infections. Once the cause was a living thing that could be killed or blocked, prevention became practical: sterilize, isolate, wash, heat.' },
        { type: 'p', text: 'Joseph Lister built antiseptic surgery on Pasteur\'s work, and Nightingale\'s sanitation statistics showed the same truth from the hospital side. Mortality fell wherever the germ idea was applied, before most specific cures existed.' },
        { type: 'h2', text: 'Pasteurization and vaccines' },
        { type: 'p', text: 'Heating wine and milk to kill harmful microbes became pasteurization, still printed on every carton. Pasteur then turned to deliberate weakening of microbes to make vaccines, producing working vaccines against chicken cholera, anthrax, and rabies. The rabies vaccine of 1885, given to a boy bitten by a rabid dog, made him famous worldwide.' },
        { type: 'callout', text: 'Britannica\'s summary of the career is exact: microorganisms cause fermentation and disease, disproof of spontaneous generation, pasteurization, and vaccines for anthrax and rabies.' },
      ],

      keyTerms: ['germ theory', 'spontaneous generation', 'microorganism', 'pasteurization', 'fermentation', 'antiseptic'],

      resources: {
        articles: [
          {
            title: 'Louis Pasteur',
            source: 'Encyclopaedia Britannica',
            url: 'https://www.britannica.com/biography/Louis-Pasteur',
            why: 'Britannica\'s biography: the swan neck experiments, germ theory, pasteurization, and the anthrax and rabies vaccines.',
            year: null,
          },
        ],
      },

      seeAlso: ['how_vaccines_work', 'hand_hygiene', 'nightingale'],

      sources: [
        'https://www.britannica.com/biography/Louis-Pasteur',
      ],
      verifiedAt: '2026-10-15',
    },

    sleep_needs: {
      id: 'sleep_needs',
      name: 'How Much Sleep Adults Need',
      level: 'Beginner',
      dek: 'Adults need seven or more hours of sleep a night, and a third report getting less, says CDC.',
      readTime: '4 min',

      sections: ['The seven hour line', 'What the surveys show', 'Reading your own sleep'],
      body: [
        { type: 'lead', text: 'Adults need 7 or more hours of sleep per night for the best health and wellbeing, according to the Centers for Disease Control and Prevention. Sleeping less than 7 hours on a regular basis is what the CDC counts as insufficient sleep, and it is associated with worse health outcomes across a long list of conditions.' },
        { type: 'h2', text: 'What the surveys show' },
        { type: 'p', text: 'More than a third of adults in the United States report getting less sleep than the recommended amount. The CDC tracks the figures state by state through its behavioral risk surveys, and the pattern is steady: short sleep is common, not exceptional, and it clusters with shift work, long hours, and untreated sleep disorders.' },
        { type: 'p', text: 'The need is not identical for everyone. Age matters, illness matters, and a minority of people genuinely function on less. But the population guidance is a floor, not an average: regularly below 7 hours is the zone where measurable risks, including obesity, diabetes, heart disease, and depression, climb.' },
        { type: 'h2', text: 'Reading your own sleep' },
        { type: 'p', text: 'The useful test is daytime function. Needing an alarm to wake, falling asleep in quiet moments, and relying on caffeine to stay level are signs the night is too short, whatever the clock said. Loud snoring, gasping, or long pauses in breathing are signs to raise with a clinician, because sleep apnea is common and treatable.' },
        { type: 'callout', text: 'This page is general information, not medical advice. The CDC figure is a population floor for adults: 7 or more hours, with less than 7 counted as insufficient.' },
      ],

      keyTerms: ['insufficient sleep', 'CDC', 'sleep duration', 'sleep apnea', 'circadian', 'health outcomes'],

      resources: {
        articles: [
          {
            title: 'Adult Sleep Facts and Stats',
            source: 'Centers for Disease Control and Prevention',
            url: 'https://www.cdc.gov/sleep/data-research/facts-stats/adults-sleep-facts-and-stats.html',
            why: 'The CDC\'s adult sleep data page: 7 or more hours recommended, less than 7 counted as insufficient, more than a third of adults below the line.',
            year: null,
          },
        ],
      },

      seeAlso: ['menopause_basics', 'daily_water', 'cpr_basics'],

      sources: [
        'https://www.cdc.gov/sleep/data-research/facts-stats/adults-sleep-facts-and-stats.html',
      ],
      verifiedAt: '2026-10-15',
    },
  },
};
