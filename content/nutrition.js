// content/nutrition.js
// Batch: B11-life-skills-I
// Last updated: 2026-10-15 by SPRINT W1
//
// Topics from data.js: macros, micronutrients, balanced_diet, hydration

window.CONTENT = window.CONTENT || {};
window.CONTENT.nutrition = {
  subjectId: 'nutrition',
  version: 1,
  lastUpdated: '2026-10-15',
  curator: 'SPRINT W1',
  topics: {

    macros: {
      id: 'macros',
      name: 'Macronutrients',
      level: 'Beginner',
      dek: 'The three big buckets — protein, fat, and carbohydrate — that supply the calories every cell runs on.',
      readTime: '10 min',

      sections: ['Protein', 'Fat — the long rehabilitation', 'Carbohydrate', 'How much, in practice'],
      body: [
        { type: 'lead', text: 'In 1827, the English physician William Prout drew a chart with three columns — saccharinous, oleaginous, albuminous — and proposed that almost everything humans eat is built from these three classes of substance. Two centuries of biochemistry have refined his terms but not his structure. The macronutrients still do most of the work.' },
        { type: 'h2', text: 'Protein' },
        { type: 'p', text: 'Protein is what the body uses to build and repair itself: muscle, organ tissue, skin, hair, every enzyme that catalyzes every reaction. The body cannot store it the way it stores fat or glycogen, which is why eating it across the day matters more than eating a heroic quantity once. Most healthy adults need somewhere between 0.8 and 1.6 grams per kilogram of body weight per day, with the higher end appropriate for older adults and those doing serious resistance training. Animal sources contain all nine essential amino acids; plant eaters get the same result by combining a few different plant sources across the day.' },
        { type: 'h2', text: 'Fat — the long rehabilitation' },
        { type: 'p', text: 'For thirty years, between roughly 1970 and 2000, dietary fat was treated as the principal villain of the American diet. The case has not held up. The major intervention trials, including the Women\'s Health Initiative, found no clear benefit from cutting fat in isolation; what mattered was what the calories were replaced with. Olive oil and nuts are now linked to lower cardiovascular risk in the strongest dietary trials, including PREDIMED. Saturated fat is still treated cautiously, trans fats have been banned almost everywhere, and the consensus has settled on a relatively quiet middle: most fats are fine, ultra-processed fried things are not.' },
        { type: 'h2', text: 'Carbohydrate' },
        { type: 'p', text: 'Carbohydrate is the body\'s preferred fuel — easily broken down to glucose, easily burned. The honest distinction is not between carbohydrate and not, but between intact whole foods (oats, beans, fruit, potatoes) and ultra-processed concentrates (soda, white bread, candy). The first feed the body slowly and come bundled with fiber and micronutrients; the second produce the blood-sugar spikes and cravings that low-carb diets correctly identify as a problem. The diet that works is mostly the first kind, modestly of the second.' },
        { type: 'h2', text: 'How much, in practice' },
        { type: 'p', text: 'For nearly all healthy adults the simple instruction is: hit your protein, eat plants and minimally processed staples for the rest, drink water, and stop counting. Counting calories accurately for more than a few weeks is psychologically expensive and most studies show that, after a year, the people who counted weighed about the same as the people who did not. Habits beat arithmetic. The macronutrient table is most useful as a way to make sure protein is not being ignored.' },
        { type: 'callout', text: 'A pound of body fat stores about 3,500 calories. The math suggests rapid loss; the body has spent two million years learning to defeat the math. Slow change is the only kind that lasts.' },
      ],

      keyTerms: ['protein', 'amino acid', 'saturated fat', 'unsaturated fat', 'glucose', 'fiber', 'glycemic index', 'caloric density', 'satiety'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@HealthcareTriage',
            title: 'Healthcare Triage — full channel',
            channel: 'Healthcare Triage',
            duration: 'variable',
            featured: true,
            why: 'Aaron Carroll, professor of pediatrics at Indiana University, runs the most reliable health-news show on YouTube. The diet and nutrition playlists are calm, evidence-graded, and free of supplement marketing.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@nutritionmadesimple',
            title: 'Nutrition Made Simple — full channel',
            channel: 'Gil Carvalho, MD/PhD',
            duration: 'variable',
            featured: true,
            why: 'A research scientist with a clinical background reading the actual papers and explaining what they mean. The clearest single voice on nutrition science online.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=CrxqLgrXuO4',
            title: 'Sugar: The Bitter Truth',
            channel: 'University of California Television',
            duration: '1:29:27',
            featured: true,
            why: 'Robert Lustig\'s 2009 lecture that started the modern conversation about added sugar. Long, controversial in spots, and still essential.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@HubermanLab',
            title: 'Huberman Lab — Nutrition episodes',
            channel: 'Andrew Huberman',
            duration: 'variable',
            featured: false,
            why: 'A Stanford neurobiologist\'s long-form interviews. Use the nutrition episodes; treat the supplement segments with skepticism.',
          },
        ],
        books: [
          {
            title: 'In Defense of Food',
            author: 'Michael Pollan',
            year: 2008,
            url: 'https://en.wikipedia.org/wiki/In_Defense_of_Food',
            why: 'Seven words: "Eat food. Not too much. Mostly plants." The book is the slow argument behind the slogan.',
          },
          {
            title: 'How Not to Die',
            author: 'Michael Greger',
            year: 2015,
            url: 'https://en.wikipedia.org/wiki/Michael_Greger',
            why: 'A plant-forward physician\'s reading of the literature. Argumentative, heavily cited; you can disagree with the conclusion and still profit from the citations.',
          },
          {
            title: 'Why We Get Sick',
            author: 'Benjamin Bikman',
            year: 2020,
            url: 'https://en.wikipedia.org/wiki/Insulin_resistance',
            why: 'A clear modern primer on insulin resistance — the metabolic story behind most chronic disease in rich countries.',
          },
        ],
        articles: [
          {
            title: 'Nutrient',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Nutrient',
            why: 'Comprehensive reference for the chemistry of macros and micros.',
            year: null,
          },
          {
            title: 'The Nutrition Source',
            source: 'Harvard T.H. Chan School of Public Health',
            url: 'https://nutritionsource.hsph.harvard.edu/',
            why: 'The most trustworthy free nutrition resource on the web. Updated continuously, written by people who read the trials.',
            year: null,
          },
          {
            title: 'Dietary Guidelines for Americans',
            source: 'USDA / HHS',
            url: 'https://www.dietaryguidelines.gov/',
            why: 'The federal recommendations, revised every five years. Useful as a baseline; read the criticism alongside.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Stanford Introduction to Food and Health',
            provider: 'Coursera (Stanford)',
            url: 'https://www.coursera.org/learn/food-and-health',
            free: true,
            why: 'Maya Adam\'s short, lucid course. Audit free; clarifies the gap between what we know and what we are sold.',
          },
        ],
        tools: [
          {
            title: 'NIH Dietary Reference Intakes',
            url: 'https://ods.od.nih.gov/HealthInformation/Dietary_Reference_Intakes.aspx',
            why: 'The reference numbers — RDAs, ULs, AIs — for every nutrient, in one place.',
          },
        ],
      },

      seeAlso: ['micronutrients', 'biochem', 'cooking'],
      prereqs: [],
      leadsTo: ['micronutrients'],
      chapterActivity: 'A monthly potluck at a Harlem community kitchen, organized around one macronutrient at a time — beans-and-rice for protein in February, olive-oil tasting in May.',
      sources: [
        'https://en.wikipedia.org/wiki/Nutrient',
        'https://nutritionsource.hsph.harvard.edu/',
        'https://www.dietaryguidelines.gov/',
      ],
      verifiedAt: '2026-04-23',
    },

    micronutrients: {
      id: 'micronutrients',
      name: 'Micronutrients',
      level: 'Intermediate',
      dek: 'Vitamins and minerals — present in trace amounts, indispensable, and where most modern diets quietly fall short.',
      readTime: '11 min',

      sections: ['What they do', 'The deficiencies that still matter', 'Supplements — when and when not', 'Eating across the rainbow'],
      body: [
        { type: 'lead', text: 'In 1747 the Scottish naval surgeon James Lind ran what is widely called the first controlled clinical trial. He divided twelve scurvy-stricken sailors into six pairs and gave each pair a different treatment. The pair that got two oranges and a lemon a day was, within a week, fit for duty. Vitamin C had not been isolated; the word vitamin would not exist for another century and a half. But the principle was clear — that some substances, in tiny amounts, are the difference between life and a slow, ugly death.' },
        { type: 'h2', text: 'What they do' },
        { type: 'p', text: 'There are thirteen recognized vitamins and a longer list of essential minerals. None of them provide energy in the calorie sense; their job is to make the machinery of metabolism run. Iron carries oxygen in red blood cells. Calcium and vitamin D build bone. The B vitamins are co-factors in dozens of reactions; deficiencies show up as fatigue, anemia, neurological symptoms. Iodine, a trace element, is the reason American salt is iodized — adding it ended endemic goiter in the Great Lakes "goiter belt" within a single generation.' },
        { type: 'h2', text: 'The deficiencies that still matter' },
        { type: 'p', text: 'In rich countries, scurvy is rare and beriberi rarer still — but several deficiencies remain common. Vitamin D is widely low in anyone who works indoors at high latitude. Iron is commonly low in menstruating women and in vegetarians. B12 is reliably low in vegans without supplementation, because plants do not make it. Magnesium and potassium are widely under-consumed. The recommended dietary allowances were set conservatively to prevent disease, not to optimize health, but most of the population still does not meet them.' },
        { type: 'h2', text: 'Supplements — when and when not' },
        { type: 'p', text: 'Supplements are useful for documented deficiencies and a short list of common ones — D in winter, B12 for vegans, folate in early pregnancy, iron when blood work shows low ferritin. They are mostly useless or actively harmful for everyone else. Beta-carotene supplements raised lung-cancer risk in smokers in the CARET trial; vitamin E supplementation has shown small but real harms in several trials. The supplement industry is barely regulated; the labels are often inaccurate. Buy from a brand audited by USP or NSF if you must.' },
        { type: 'h2', text: 'Eating across the rainbow' },
        { type: 'p', text: 'The simplest practical rule is the one your grandmother gave you: eat a wide variety of plants in many colors. The colors are pigments — anthocyanins in berries, lycopene in tomatoes, beta-carotene in carrots — and they correlate roughly with the micronutrient profile. The Mediterranean and Okinawan diets have the longest record of population-level health for almost identical reasons: lots of plants, lots of variety, modest portions of everything else. The micronutrients come along for the ride.' },
        { type: 'callout', text: 'The half-life of vitamin C is about thirty minutes. The body uses what it can and excretes the rest. A megadose of vitamin C is mostly an investment in expensive urine.' },
      ],

      keyTerms: ['vitamin', 'mineral', 'co-factor', 'deficiency', 'recommended dietary allowance', 'fortification', 'phytochemical', 'bioavailability', 'antioxidant'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@nutritionmadesimple',
            title: 'Nutrition Made Simple — Vitamins & Minerals playlist',
            channel: 'Gil Carvalho, MD/PhD',
            duration: 'variable',
            featured: true,
            why: 'Carvalho\'s deep dives on D, B12, magnesium, iron — each video summarizing the trials behind the supplement aisle.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@HealthcareTriage',
            title: 'Healthcare Triage — full channel',
            channel: 'Healthcare Triage',
            duration: 'variable',
            featured: true,
            why: 'Aaron Carroll\'s short videos on what supplements actually do — and what they do not.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@PhysionicOfficial',
            title: 'Physionic — full channel',
            channel: 'Physionic',
            duration: 'variable',
            featured: true,
            why: 'Nicolas Verhoeven walks through individual nutrition papers in detail. Slower than other channels — that is the value.',
          },
        ],
        books: [
          {
            title: 'The Vitamin Cure',
            author: 'Andrew W. Saul',
            year: 2008,
            url: 'https://en.wikipedia.org/wiki/Orthomolecular_medicine',
            why: 'Read for the orthomolecular perspective and the bibliography; read with the skepticism modern trials warrant.',
          },
          {
            title: 'Vitamania',
            author: 'Catherine Price',
            year: 2015,
            url: 'https://en.wikipedia.org/wiki/Vitamania_(book)',
            why: 'The history of how vitamins became cultural objects — and why the supplement industry is what it is.',
          },
          {
            title: 'Modern Nutrition in Health and Disease',
            author: 'Catharine Ross et al.',
            year: 2020,
            url: 'https://en.wikipedia.org/wiki/Nutrition',
            why: 'The standard graduate-level textbook. The reference clinicians and dietitians actually cite.',
          },
        ],
        articles: [
          {
            title: 'Vitamin',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Vitamin',
            why: 'Comprehensive reference, well sourced, with the discovery history of each vitamin.',
            year: null,
          },
          {
            title: 'Vitamins and Minerals',
            source: 'Harvard T.H. Chan School of Public Health',
            url: 'https://nutritionsource.hsph.harvard.edu/vitamins/',
            why: 'Plain-English summary of every vitamin and mineral, with food sources and warning signs.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Stanford Introduction to Food and Health',
            provider: 'Coursera (Stanford)',
            url: 'https://www.coursera.org/learn/food-and-health',
            free: true,
            why: 'Free audit. Maya Adam covers the major micronutrient questions in the second half.',
          },
        ],
        tools: [
          {
            title: 'NIH Office of Dietary Supplements — Fact Sheets',
            url: 'https://ods.od.nih.gov/factsheets/list-all/',
            why: 'A short, careful fact sheet for every common supplement. Always read this before you take anything.',
          },
        ],
        primarySources: [
          {
            title: 'James Lind, A Treatise of the Scurvy (1753)',
            url: 'https://archive.org/details/treatiseonscurvy00lind',
            why: 'The book that founded clinical nutrition — one of the great primary documents in medicine.',
          },
        ],
      },

      seeAlso: ['macros', 'biochem', 'medicine'],
      prereqs: ['macros'],
      leadsTo: [],
      chapterActivity: 'A late-summer farmers-market walk in Union Square: pick a different colored vegetable each week, learn its phytochemical profile.',
      sources: [
        'https://en.wikipedia.org/wiki/Vitamin',
        'https://nutritionsource.hsph.harvard.edu/vitamins/',
        'https://ods.od.nih.gov/factsheets/list-all/',
      ],
      verifiedAt: '2026-04-23',
    },

    balanced_diet: {
      id: 'balanced_diet',
      name: 'Eating a Balanced Diet',
      level: 'Beginner',
      dek: 'Half the plate in vegetables and fruit, the rest in grains and protein: balance you can see.',
      readTime: '6 min',

      sections: ['What balanced means', 'Building the plate', 'Variety and moderation', 'Balance over a week'],
      body: [
        { type: 'lead', text: 'A dinner plate is a pie chart you can eat. The Healthy Eating Plate, drawn by nutrition experts at Harvard, divides it into three regions: vegetables and fruits fill half the plate, whole grains fill one quarter, and protein fills the last quarter. No counting, no weighing. The plate itself does the arithmetic, at every meal, in any kitchen.' },
        { type: 'h2', text: 'What balanced means' },
        { type: 'p', text: 'A balanced diet is not a list of forbidden foods. International guidance describes a healthy diet with four principles: adequate, diverse, balanced, and moderate. Adequate means enough of the nutrients the body needs. Diverse means many different foods, since no single food carries everything. Balanced means the proportions among food groups stay roughly right. Moderate means not too much of the things that crowd out the rest. Reference summaries of World Health Organization guidance suggest at least 400 grams of fruit and vegetables a day, free sugars under 10 percent of energy intake, salt under 5 grams a day, and fat at no more than 30 percent of total energy.' },
        { type: 'h2', text: 'Building the plate' },
        { type: 'p', text: 'The Harvard plate adds quality rules to the proportions. Vegetables and fruits should be varied and colorful, and potatoes pointedly do not count as a vegetable on this plate, because of their effect on blood sugar. The grain quarter should be whole grains, such as whole wheat bread, brown rice, oats, and quinoa, which keep their fiber and nutrients. The protein quarter favors fish, poultry, beans, and nuts, with red meat limited and processed meats largely avoided. Healthy plant oils, such as olive oil, belong in the cooking and on the salad, in moderation. To drink, the plate says water, coffee, or tea, and it tells you to skip sugary drinks.' },
        { type: 'h2', text: 'Variety and moderation' },
        { type: 'p', text: 'Why does variety matter so much? Because nutrients are distributed unevenly across foods, and a rotating cast covers gaps that any single menu leaves open. A dietitian\'s version of the same idea sorts food into groups: fruits and vegetables; grains and cereals for energy; protein rich foods for growth and repair; and milk and dairy, nuts, and seeds. Eat across the groups, in proportions suited to your own needs, and balance takes care of itself most days.' },
        { type: 'callout', text: 'Balance is a property of the whole diet, not of any single meal. One celebratory dinner does not unbalance a diet, and one virtuous salad does not balance it.' },
        { type: 'h2', text: 'Balance over a week' },
        { type: 'p', text: 'Judged across a week rather than a meal, balance becomes forgiving. A day heavy on grains can lean on vegetables the next. A feast day can sit inside an ordinary week without breaking anything, because the proportions the plate teaches are averages, not commandments. That is the quiet genius of the plate as a teacher: it turns an abstract science into a picture you can hold in your head at the market and at the stove. Half vegetables and fruit, a quarter of grains, a quarter of protein, and water in the glass.' },
      ],

      keyTerms: ['balanced diet', 'food groups', 'whole grains', 'portion', 'nutrient density', 'free sugars', 'variety', 'moderation'],
      resources: {
        videos: [
          {
            id: 'IL7ZH9baqyE',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=IL7ZH9baqyE',
            title: 'Healthy Plate, illustrating balanced portions of veggies, fruits, grains, proteins, and healthy oils',
            channel: 'YouTube',
            duration: 'variable',
            why: 'A walk through the Healthy Eating Plate section by section, with the reasoning behind each proportion.',
          },
          {
            id: 'iqIvFFu4GiY',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=iqIvFFu4GiY',
            title: '5 Food Groups for a Healthy Life',
            channel: 'Aakash Healthcare',
            duration: 'variable',
            why: 'Dietitian Ginni Kalra explains the five food groups and how to build everyday meals from them.',
          },
          {
            id: 'yrBQDvAmIvU',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=yrBQDvAmIvU',
            title: 'Balanced Diet is the Foundation of Good Health',
            channel: 'YouTube',
            duration: 'variable',
            why: 'An Eatwell style tour of the food groups, from fruit and vegetables to oils and spreads.',
          },
        ],
        books: [
          {
            title: 'In Defense of Food: An Eater\'s Manifesto',
            author: 'Michael Pollan',
            year: 2008,
            url: '',
            why: 'The case for eating food, not too much, mostly plants, and for judging diets by whole foods rather than nutrients.',
          },
          {
            title: 'Food Rules: An Eater\'s Manual',
            author: 'Michael Pollan',
            year: 2009,
            url: '',
            why: 'Sixty four short rules for eating well, gathered from doctors, dietitians, and grandmothers. A pocket companion to this lesson.',
          },
          {
            title: 'How Not to Die',
            author: 'Michael Greger',
            year: 2015,
            url: '',
            why: 'A physician\'s tour of the evidence on diet and the leading causes of death, with the studies cited chapter by chapter.',
          },
        ],
        articles: [
          {
            title: 'Healthy Eating Plate',
            source: 'Harvard T.H. Chan School of Public Health',
            url: 'https://nutritionsource.hsph.harvard.edu/healthy-eating-plate/',
            why: 'The plate itself, with Harvard\'s guidance on each section, on drinks, and on healthy oils.',
            year: null,
          },
          {
            title: 'Healthy diet',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Healthy_diet',
            why: 'A survey of international dietary guidance: the FAO and WHO principles and the headline numbers.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Stanford Introduction to Food and Health',
            provider: 'Stanford Online (Coursera)',
            url: 'https://www.coursera.org/learn/food-and-health',
            free: true,
            why: 'Maya Adam\'s beginner friendly course on making sensible food choices amid modern food culture.',
          },
        ],
      },

      seeAlso: ['macros', 'micronutrients', 'public_health'],
      prereqs: ['macros'],
      leadsTo: [],

      chapterActivity: 'A market exercise: fill a basket that matches the plate, half produce, a quarter grains, a quarter protein, then cook it together.',

      sources: [
        'https://nutritionsource.hsph.harvard.edu/healthy-eating-plate/',
        'https://en.wikipedia.org/wiki/Healthy_diet',
      ],
      verifiedAt: '2026-10-15',
    },

    hydration: {
      id: 'hydration',
      name: 'Water & Hydration',
      level: 'Beginner',
      dek: 'The body runs on water: what it does, how much you need, and how thirst keeps accounts.',
      readTime: '6 min',

      sections: ['The body\'s water', 'How much is enough', 'Losing water: dehydration', 'Plain water, safe water'],
      body: [
        { type: 'lead', text: 'Set a glass of water on the table and consider that the person reaching for it is, by weight, between 55 and 60 percent water. It is the medium every cell lives in, the solvent of the blood, the coolant of the skin. The body keeps no reservoir of it. What leaves in breath, sweat, and urine must be replaced, day after day, which is why the oldest dietary advice in the world is also the simplest: drink.' },
        { type: 'h2', text: 'The body\'s water' },
        { type: 'p', text: 'Water has two great jobs. The first is transport and chemistry: nutrients, gases, and wastes move dissolved in it, and the reactions of metabolism happen in it. The second is temperature: sweating spends water to carry heat away. The kidneys regulate the total with help from a hormone called ADH. When water runs low, ADH rises and aquaporin channels in the kidney pull water back into the body instead of letting it leave as urine. Food quietly helps. Roughly 22 percent of the water Americans take in comes from food rather than drink, one reason fruit, vegetables, and soups all count toward the day\'s total.' },
        { type: 'h2', text: 'How much is enough' },
        { type: 'p', text: 'Britain\'s Eatwell Guide gives the most usable answer in ordinary language: aim to drink 6 to 8 cups or glasses of fluid a day. Water is the first choice, but the guide counts lower fat milk and lower sugar drinks, including tea and coffee, toward the total. The simplest gauge is built in. Urine should be a clear pale yellow. Darker urine, thirst, and a dry mouth are the body\'s early notices that the account is running low.' },
        { type: 'callout', text: 'Coffee and tea count. The Eatwell Guide counts tea and coffee toward the daily 6 to 8 cups, along with water and lower fat milk.' },
        { type: 'h2', text: 'Losing water: dehydration' },
        { type: 'p', text: 'Dehydration is a lack of total body water severe enough to disrupt the metabolic processes that depend on it. Most people tolerate a decrease of 3 to 4 percent of total body water without difficulty or noticeable harm. A decrease of 5 to 8 percent can cause fatigue and dizziness. Beyond that the stakes climb quickly, because blood volume, temperature control, and the kidneys are all drawing on the same shrinking supply. The lesson of the numbers is not to fear water loss but to respect its slope: the body forgives the first few percent, and protests the next few.' },
        { type: 'h2', text: 'Plain water, safe water' },
        { type: 'p', text: 'For most of human history the harder problem was not drinking enough but drinking safely. Nearly 800 million people still do not have regular access to clean water, and telling safe water from contaminated water is a matter of treatment and testing, not of taste. The glass on the table closes the loop this lesson opened with: a body more than half water, refilled a few cups at a time, 6 to 8 glasses across an ordinary day.' },
      ],

      keyTerms: ['hydration', 'dehydration', 'total body water', 'ADH', 'aquaporin', 'electrolyte', 'fluid balance', 'thirst'],
      resources: {
        videos: [
          {
            id: '9iMGFqMmUFs',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=9iMGFqMmUFs',
            title: 'What would happen if you didn\'t drink water?',
            channel: 'TED-Ed',
            duration: 'variable',
            why: 'Mia Nacamulli follows water through the body and shows what falters, in order, when it runs out.',
          },
          {
            id: 'G244Q4AGJ7U',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=G244Q4AGJ7U',
            title: 'When is water safe to drink?',
            channel: 'TED-Ed',
            duration: 'variable',
            why: 'Mia Nacamulli on contamination and treatment, and why clean water remains out of reach for nearly 800 million people.',
          },
          {
            id: 'oGtnphj69UA',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=oGtnphj69UA',
            title: 'HYDRATION',
            channel: 'YouTube',
            duration: 'variable',
            why: 'A short primer on how the body loses and replaces water, and which everyday foods carry water with them.',
          },
        ],
        books: [
          {
            title: 'Waterlogged: The Serious Problem of Overhydration in Endurance Sports',
            author: 'Timothy Noakes',
            year: 2012,
            url: '',
            why: 'A sports scientist argues that drinking too much can be as dangerous as too little, and traces how the advice changed.',
          },
          {
            title: 'Quench',
            author: 'Dana Cohen and Gina Bria',
            year: 2018,
            url: '',
            why: 'A physician and an anthropologist on the water hidden in food, and what traditional cultures know about staying hydrated.',
          },
          {
            title: 'The Big Thirst: The Secret Life and Turbulent Future of Water',
            author: 'Charles Fishman',
            year: 2011,
            url: '',
            why: 'How cities, farms, and industries get their water, and why the era of cheap, invisible water is ending.',
          },
        ],
        articles: [
          {
            title: 'Water, drinks and hydration',
            source: 'NHS',
            url: 'https://www.nhs.uk/live-well/eat-well/food-guidelines-and-food-labels/water-drinks-nutrition/',
            why: 'The Eatwell Guide page on fluids: 6 to 8 cups a day, what counts toward it, and the pale yellow test.',
            year: null,
          },
          {
            title: 'Dehydration',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Dehydration',
            why: 'The physiology of water loss, from ADH and aquaporins to the percentages at which symptoms begin.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Stanford Introduction to Food and Health',
            provider: 'Stanford Online (Coursera)',
            url: 'https://www.coursera.org/learn/food-and-health',
            free: true,
            why: 'For the food half of hydration: how whole foods, many of them mostly water, fit a healthy pattern of eating and drinking.',
          },
        ],
      },

      seeAlso: ['macros', 'micronutrients', 'physiology'],
      prereqs: ['macros'],
      leadsTo: [],

      chapterActivity: 'A one day fluid log: tally every cup and glass, note your urine color at midday, and compare the total with the Eatwell 6 to 8.',

      sources: [
        'https://www.nhs.uk/live-well/eat-well/food-guidelines-and-food-labels/water-drinks-nutrition/',
        'https://en.wikipedia.org/wiki/Dehydration',
        'https://www.youtube.com/watch?v=9iMGFqMmUFs',
        'https://www.youtube.com/watch?v=G244Q4AGJ7U',
      ],
      verifiedAt: '2026-10-15',
    },


    daily_water: {
      id: 'daily_water',
      name: 'How Much Water a Day, Really',
      level: 'Beginner',
      dek: 'The National Academies set total water at 3.7 liters a day for men and 2.7 for women.',
      readTime: '4 min',

      sections: ['Total water, not glasses', 'Where the rest comes from', 'The 8 glasses rule'],
      body: [
        { type: 'lead', text: 'The reference figures used in the United States come from the National Academies\' Dietary Reference Intakes: an adequate intake of total water of about 3.7 liters a day for adult men and 2.7 liters a day for adult women. The key word is total. The figures count water from everything you eat and drink, not water alone.' },
        { type: 'h2', text: 'Where the rest comes from' },
        { type: 'p', text: 'In a typical American diet, about 20 percent of daily water arrives in food. Fruit, vegetables, yogurt, rice, even bread carry water. The rest comes from all beverages combined, including coffee and tea, not from plain water alone. Subtract the food share and the drinking target lands near 3 liters for men and 2.2 liters for women spread across everything in the cup.' },
        { type: 'p', text: 'Need moves with heat, exercise, fever, pregnancy, and age, and thirst is a working guide for most healthy adults. The adequate intake is a population reference point, the median intake of healthy people, not a prescription to force down a quota.' },
        { type: 'h2', text: 'The 8 glasses rule' },
        { type: 'p', text: 'The famous eight 8 ounce glasses, about 1.9 liters, is not the National Academies\' figure and has no study behind it as a universal rule. It survives because it is easy to remember and roughly harmless for many people. The honest version is less tidy and more useful: count all fluids and food, aim near the reference totals, drink to thirst, and drink more when it is hot or you are active or ill.' },
        { type: 'callout', text: 'Stated with its source: National Academies, Dietary Reference Intakes for Water (2005): adequate total water intake 3.7 liters per day for men, 2.7 for women, food included.' },
      ],

      keyTerms: ['adequate intake', 'total water', 'Dietary Reference Intakes', 'National Academies', 'hydration', 'thirst'],

      resources: {
        articles: [
          {
            title: 'Regulation of Water Balance (Nutrition 100)',
            source: 'Penn State University (open textbook, citing the Institute of Medicine DRI)',
            url: 'https://psu.pb.unizin.org/nutr100/chapter/11-17-regulation-of-water-balance/',
            why: 'A university nutrition text stating the National Academies figures plainly: 3.7 liters for men, 2.7 for women, all sources counted, about 20 percent from food.',
            year: null,
          },
        ],
      },

      seeAlso: ['reading_food_labels', 'sleep_needs', 'safe_cooking_temperatures'],

      sources: [
        'https://psu.pb.unizin.org/nutr100/chapter/11-17-regulation-of-water-balance/',
      ],
      verifiedAt: '2026-10-15',
    },

    reading_food_labels: {
      id: 'reading_food_labels',
      name: 'Reading a Food Label: The Percent Trick',
      level: 'Beginner',
      dek: 'The FDA\'s label shortcut: five percent of daily value is low, twenty percent or more is high.',
      readTime: '4 min',

      sections: ['Start with servings', 'The 5 and 20 rule', 'What to hunt, what to limit'],
      body: [
        { type: 'lead', text: 'Every Nutrition Facts label carries a built in shortcut, and the Food and Drug Administration teaches it in two numbers: 5 percent of the Daily Value or less, per serving, is low for a nutrient. 20 percent or more is high. The rule works for anything on the label, fiber and vitamin D on one side, sodium and saturated fat on the other.' },
        { type: 'h2', text: 'Start with servings' },
        { type: 'p', text: 'Every number on the label describes one serving, and the top of the label states the serving size and how many servings the package holds. A bottle with two and a half servings multiplies everything by two and a half for the person who drinks the bottle, which is most people. Serving size is the label\'s quietest line and its most important one.' },
        { type: 'p', text: 'The Daily Value percentages are calculated for a general 2,000 calorie a day diet. Your own needs differ, but the percentages still work as a comparison tool between two products side by side, which is the job the FDA designed them for.' },
        { type: 'h2', text: 'What to hunt, what to limit' },
        { type: 'p', text: 'Hunt the highs among dietary fiber, vitamin D, calcium, iron, and potassium, the nutrients Americans tend to under eat. Limit the highs among saturated fat, sodium, and added sugars, which the label now lists separately from total sugars. With the 5 and 20 rule, one glance per nutrient sorts a product: low, middle, or high, and the choice between two jars of sauce takes five seconds.' },
        { type: 'callout', text: 'The FDA states the rule on its label guide: 5 percent DV or less is low, 20 percent DV or more is high. Keep those two numbers and the label reads itself.' },
      ],

      keyTerms: ['Nutrition Facts', 'Daily Value', 'serving size', 'added sugars', 'sodium', 'FDA'],

      resources: {
        articles: [
          {
            title: 'How to Understand and Use the Nutrition Facts Label',
            source: 'U.S. Food and Drug Administration',
            url: 'https://www.fda.gov/food/nutrition-facts-label/whats-nutrition-facts-label',
            why: 'The FDA\'s own guide to its label, including the 5 percent low and 20 percent high rule for percent Daily Value.',
            year: null,
          },
        ],
      },

      seeAlso: ['daily_water', 'safe_cooking_temperatures', 'emergency_savings'],

      sources: [
        'https://www.fda.gov/food/nutrition-facts-label/whats-nutrition-facts-label',
      ],
      verifiedAt: '2026-10-15',
    },
  },
};
