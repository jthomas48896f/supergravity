// content/finance.js
// Batch: B11-life-skills-I
// Last updated: 2026-04-23 by BATCH B11-life-skills-I
//
// Topics from data.js: budgeting, investing, taxes

window.CONTENT = window.CONTENT || {};
window.CONTENT.finance = {
  subjectId: 'finance',
  version: 1,
  lastUpdated: '2026-04-23',
  curator: 'BATCH B11-life-skills-I',
  topics: {

    budgeting: {
      id: 'budgeting',
      name: 'Budgeting',
      level: 'Beginner',
      dek: 'The household ledger is older than money — and still the bedrock of every financial life.',
      readTime: '9 min',

      sections: ['Knowing where it goes', 'A few systems that work', 'The fixed-and-flex split', 'Why it works'],
      body: [
        { type: 'lead', text: 'A household kept its first written budget thousands of years before it kept written poetry. The clay tablets of Sumerian temple economies — barley in, barley out — are among the earliest pieces of writing humans produced. The point has not changed: knowing where the money goes is the precondition of everything else you might want it to do.' },
        { type: 'h2', text: 'Knowing where it goes' },
        { type: 'p', text: 'Almost everyone underestimates two categories of spending: small recurring charges, and food bought outside the house. The first is invisible because it is automated; the second because it is social. Before you change anything, write down a single honest month. The exercise is uncomfortable — that is the point — and it is also the only step in personal finance that has been shown to work for nearly everyone, regardless of income.' },
        { type: 'h2', text: 'A few systems that work' },
        { type: 'p', text: 'The most durable budgeting systems are the ones simple enough to keep going when life gets busy. The 50/30/20 rule, popularized by Senator Elizabeth Warren in her 2005 book with her daughter, allocates roughly half of after-tax income to needs, thirty percent to wants, twenty percent to savings and debt repayment. Zero-based budgeting, the YNAB approach, gives every dollar a job before the month begins. The envelope method — physical cash divided by category — is the oldest of all and still the most concrete.' },
        { type: 'h2', text: 'The fixed-and-flex split' },
        { type: 'p', text: 'A useful refinement is to separate fixed costs (rent, insurance, the cell phone, the gym) from flexible ones (groceries, transit, going out). Fixed costs are decisions you make once a year; flexible costs are decisions you make every day. Most people who feel out of control financially are actually out of control on the fixed side — they have committed to a level of obligation that leaves the flexible side starving. Pruning a single recurring charge is worth more than refusing a hundred coffees.' },
        { type: 'h2', text: 'Why it works' },
        { type: 'p', text: 'Budgeting is not really about restraint. It is about attention. The act of writing down what you spend changes what you spend, even if you make no rules — a finding so consistent across studies that behavioral economists have a name for it: the measurement effect. The number on the page is a quiet, repeated question: was that worth it? Most people, asked the question carefully, change their answer.' },
        { type: 'callout', text: 'A budget is not a spreadsheet; it is a conversation with your future self. The spreadsheet is just where you write down what you decided.' },
      ],

      keyTerms: ['fixed costs', 'discretionary spending', 'cash flow', 'net worth', 'sinking fund', 'emergency fund', 'zero-based budget', '50/30/20 rule'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@ThePlainBagel',
            title: 'The Plain Bagel — full channel',
            channel: 'The Plain Bagel',
            duration: 'variable',
            featured: true,
            why: 'Richard Coffin, a chartered investment manager, explains household money in calm, evidence-based ten-minute videos. Start with anything labeled "investing 101" or "personal finance basics."',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@TwoCentsPBS',
            title: 'Two Cents (PBS) — full channel',
            channel: 'PBS',
            duration: 'variable',
            featured: true,
            why: 'PBS-produced household finance series. Bright, well-paced, and accurate — the version of money advice that should have been on TV all along.',
          },
          {
            id: null,
            source: 'other',
            url: 'https://www.khanacademy.org/college-careers-more/personal-finance',
            title: 'Personal Finance (full course)',
            channel: 'Khan Academy',
            duration: 'variable',
            featured: true,
            why: 'Free, structured, and complete — budgeting, taxes, retirement, all the way through. Sal Khan plus a roster of working professionals.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@TheRamseyShow',
            title: 'The Ramsey Show — full channel',
            channel: 'Ramsey Solutions',
            duration: 'variable',
            featured: false,
            why: 'Strong opinions, especially about debt. Disagree where you must — the case against credit-card debt is unarguable.',
          },
        ],
        books: [
          {
            title: 'I Will Teach You to Be Rich',
            author: 'Ramit Sethi',
            year: 2009,
            url: 'https://en.wikipedia.org/wiki/I_Will_Teach_You_to_Be_Rich',
            why: 'The best modern book on practical money for someone in their twenties or thirties. Funny, opinionated, automated — the system is the point.',
          },
          {
            title: 'Your Money or Your Life',
            author: 'Vicki Robin & Joe Dominguez',
            year: 1992,
            url: 'https://en.wikipedia.org/wiki/Your_Money_or_Your_Life',
            why: 'The classic. Frames spending as the trade of life-energy for stuff — a question that outlasts any spreadsheet.',
          },
          {
            title: 'The Richest Man in Babylon',
            author: 'George S. Clason',
            year: 1926,
            url: 'https://en.wikipedia.org/wiki/The_Richest_Man_in_Babylon',
            why: 'Six short parables that contain almost everything important about household money. Reads in a single afternoon.',
          },
        ],
        articles: [
          {
            title: 'Budget',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Budget',
            why: 'Broad reference with the history of household and government budgeting.',
            year: null,
          },
          {
            title: 'Budgeting and the Power of Paying Attention',
            source: 'Consumer Financial Protection Bureau',
            url: 'https://www.consumerfinance.gov/consumer-tools/',
            why: 'CFPB has the cleanest free guides — budgets, debt, credit reports — written by a federal agency with no product to sell you.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Personal Finance',
            provider: 'Khan Academy',
            url: 'https://www.khanacademy.org/college-careers-more/personal-finance',
            free: true,
            why: 'Free and complete. The clearest on-ramp in any language.',
          },
        ],
        tools: [
          {
            title: 'YNAB (You Need A Budget)',
            url: 'https://www.ynab.com',
            why: 'The dominant zero-based budgeting tool. Subscription only, but the best at what it does.',
          },
          {
            title: 'Mint alternatives — comparison',
            url: 'https://en.wikipedia.org/wiki/Mint_(software)',
            why: 'Mint shut down in 2024; this page tracks what replaced it for casual budget tracking.',
          },
        ],
      },

      seeAlso: ['investing', 'taxes', 'timemgmt'],
      prereqs: [],
      leadsTo: ['investing', 'taxes'],
      chapterActivity: 'A monthly "money night" at a Brooklyn library: bring a year of bank statements and a calculator; leave with a working budget.',
      sources: [
        'https://en.wikipedia.org/wiki/Budget',
        'https://www.consumerfinance.gov/consumer-tools/',
        'https://www.khanacademy.org/college-careers-more/personal-finance',
      ],
      verifiedAt: '2026-04-23',
    },

    investing: {
      id: 'investing',
      name: 'Investing',
      level: 'Intermediate',
      dek: 'Most of investing is doing very little, very consistently, for a very long time.',
      readTime: '11 min',

      sections: ['Compound interest', 'The case for index funds', 'Asset allocation', 'The behavioral problem'],
      body: [
        { type: 'lead', text: 'In 1974, a Vanguard founder named Jack Bogle ran the numbers and concluded that the stock-picking industry, in aggregate, would underperform the market it was picking from — by exactly the cost of its own fees. He launched the first index fund the next year. Wall Street called it Bogle\'s Folly. The numbers since have been brutal in his favor.' },
        { type: 'h2', text: 'Compound interest' },
        { type: 'p', text: 'Albert Einstein probably did not call compound interest the eighth wonder of the world — that quotation is apocryphal — but the point survives the misattribution. A dollar invested at seven percent doubles in roughly ten years. Doubles again in ten more. The doubling is what people miss. A young person who invests a small amount and forgets about it will, by retirement, have more than someone twice their age who invested ten times as much and started late.' },
        { type: 'h2', text: 'The case for index funds' },
        { type: 'p', text: 'A broad, low-cost index fund — the total US market, say, or the total world market — buys a tiny piece of every public company in the index. You pay essentially nothing in fees. You do not have to know which companies will win. You will own them all, in proportion. Decades of academic work, capped by Eugene Fama\'s Nobel for the efficient-market hypothesis, suggest that for almost all individual investors this is the rational choice. The exceptions, like Warren Buffett, agree publicly that they are exceptions.' },
        { type: 'h2', text: 'Asset allocation' },
        { type: 'p', text: 'The single decision that matters most is the split between stocks and bonds. Stocks rise more over decades and fall harder in bad years; bonds do the reverse. A common rule of thumb is to hold a bond percentage roughly equal to your age, though that is conservative for most modern lives. The actual rule: hold enough bonds that you will not panic-sell stocks in a 2008 or a 2020. Whatever number lets you sleep is the right number for you.' },
        { type: 'h2', text: 'The behavioral problem' },
        { type: 'p', text: 'Most investors lose money not from picking bad investments but from selling at the wrong time. The market drops thirty percent; they sell. It recovers in three years; they buy back in. Repeated quietly across a decade, this trims several points off annual returns. Automating contributions, ignoring the news, and never checking the balance more than once a quarter are not minor optimizations — they are the whole game.' },
        { type: 'quote', text: 'The stock market is a device for transferring money from the impatient to the patient.', cite: 'Warren Buffett' },
      ],

      keyTerms: ['compound interest', 'index fund', 'expense ratio', 'asset allocation', 'diversification', 'efficient-market hypothesis', 'tax-advantaged account', 'rebalancing'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@BenFelixCSI',
            title: 'Common Sense Investing — full channel',
            channel: 'Ben Felix',
            duration: 'variable',
            featured: true,
            why: 'A Canadian portfolio manager translating academic finance into ten-minute videos. The closest thing to a peer-reviewed YouTube channel about money.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@ThePlainBagel',
            title: 'The Plain Bagel — full channel',
            channel: 'The Plain Bagel',
            duration: 'variable',
            featured: true,
            why: 'Richard Coffin\'s investing primers are calm, well-cited, and free of hype.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@RobBerger',
            title: 'Rob Berger — full channel',
            channel: 'Rob Berger',
            duration: 'variable',
            featured: true,
            why: 'Forbes\'s long-time deputy editor for investing. Spreadsheets and live walk-throughs of real portfolio decisions.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@TwoCentsPBS',
            title: 'Two Cents (PBS) — full channel',
            channel: 'PBS',
            duration: 'variable',
            featured: false,
            why: 'PBS\'s personal finance series — accessible, accurate, and short.',
          },
        ],
        books: [
          {
            title: 'A Random Walk Down Wall Street',
            author: 'Burton Malkiel',
            year: 1973,
            url: 'https://en.wikipedia.org/wiki/A_Random_Walk_Down_Wall_Street',
            why: 'The standard text for the case for passive investing — fifty years and thirteen editions later, still the best long argument for index funds.',
          },
          {
            title: 'The Little Book of Common Sense Investing',
            author: 'John C. Bogle',
            year: 2007,
            url: 'https://en.wikipedia.org/wiki/John_C._Bogle',
            why: 'The Vanguard founder\'s short, blunt summary of his life\'s work: own the market, hold it forever, ignore Wall Street.',
          },
          {
            title: 'The Intelligent Investor',
            author: 'Benjamin Graham',
            year: 1949,
            url: 'https://en.wikipedia.org/wiki/The_Intelligent_Investor',
            why: 'The book Warren Buffett calls "by far the best book on investing ever written." For active investors who insist; for the rest of us, useful as moral instruction.',
          },
        ],
        articles: [
          {
            title: 'Index fund',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Index_fund',
            why: 'Origin, mechanics, and the long argument for and against.',
            year: null,
          },
          {
            title: 'Compound interest',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Compound_interest',
            why: 'Math, history, and why the rule of 72 works.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Financial Markets — Robert Shiller',
            provider: 'Yale (Open Yale Courses)',
            url: 'https://oyc.yale.edu/economics/econ-252-11',
            free: true,
            why: 'A Nobel laureate teaching an undergraduate intro to markets. Free, complete, and unhurried.',
          },
        ],
        primarySources: [
          {
            title: 'Berkshire Hathaway shareholder letters',
            url: 'https://www.berkshirehathaway.com/letters/letters.html',
            why: 'Sixty years of Warren Buffett writing one letter a year about how he thinks. Worth more than most MBA syllabi.',
          },
        ],
        tools: [
          {
            title: 'Vanguard',
            url: 'https://investor.vanguard.com',
            why: 'The mutual company Bogle founded. Among the lowest-fee index providers in the world.',
          },
        ],
      },

      seeAlso: ['budgeting', 'taxes', 'macro'],
      prereqs: ['budgeting'],
      leadsTo: [],
      chapterActivity: 'A spring "first index fund" workshop at a Queens community college: open the account live, set up the auto-deposit, leave with the page open.',
      sources: [
        'https://en.wikipedia.org/wiki/Index_fund',
        'https://en.wikipedia.org/wiki/A_Random_Walk_Down_Wall_Street',
        'https://www.berkshirehathaway.com/letters/letters.html',
      ],
      verifiedAt: '2026-04-23',
    },

    taxes: {
      id: 'taxes',
      name: 'Taxes',
      level: 'Intermediate',
      dek: 'The annual chore that funds the country — and rewards anyone willing to spend a Saturday understanding it.',
      readTime: '10 min',

      sections: ['What you actually pay', 'Brackets and the marginal mistake', 'Deductions and credits', 'Why doing it yourself is fine'],
      body: [
        { type: 'lead', text: 'The modern American income tax was born in 1913, the year the Sixteenth Amendment was ratified. The first form was four pages long, including the instructions. The current Form 1040 packet runs over a hundred pages. The tax has grown because the country has — but the underlying machine is still simple, and one Saturday a year is enough to understand your own corner of it.' },
        { type: 'h2', text: 'What you actually pay' },
        { type: 'p', text: 'In the United States your paycheck is reduced by federal income tax, state and sometimes city income tax, and FICA — the Social Security and Medicare payroll taxes. The income tax is progressive: the next dollar you earn is taxed at a higher rate than the first dollar. FICA is flat up to a wage cap. Self-employed people pay both halves of FICA, which is why a freelance gig that pays the same hourly rate as a salaried job actually pays less. Most other countries operate similar machines under different names.' },
        { type: 'h2', text: 'Brackets and the marginal mistake' },
        { type: 'p', text: 'A common confusion: people think a raise can push them into a higher bracket and leave them with less money. It cannot. Brackets work on the marginal dollar. If you cross from the 22% bracket into the 24% bracket, only the dollars above the line are taxed at 24%. Everything below is still taxed at the lower rates. Understanding this single fact resolves a startling fraction of all bad tax decisions.' },
        { type: 'h2', text: 'Deductions and credits' },
        { type: 'p', text: 'A deduction reduces the income on which tax is computed. A credit reduces the tax itself. A thousand-dollar credit is worth a thousand dollars; a thousand-dollar deduction is worth your marginal rate times a thousand — for most people, two or three hundred. Most filers take the standard deduction, which the 2017 reform roughly doubled and which now beats itemizing for the great majority of households. Tax-advantaged accounts — 401(k), IRA, HSA, 529 — each shelter income in a different way and reward people who learn the small differences.' },
        { type: 'h2', text: 'Why doing it yourself is fine' },
        { type: 'p', text: 'For salaried workers with no rental property, no business, and no foreign income, the IRS Free File program — and now the Direct File pilot in many states — handles a return in under an hour. The major paid software is fine, but its core feature is that it makes you feel safer, not that it finds money the free options miss. If your situation is genuinely complicated, hire a CPA. If it is not, the form rewards your time directly.' },
        { type: 'callout', text: 'Filing late is far worse than paying late. The failure-to-file penalty is ten times the failure-to-pay penalty. File on time even if you cannot pay; ask for an installment plan after.' },
      ],

      keyTerms: ['marginal tax rate', 'effective tax rate', 'standard deduction', 'tax credit', 'withholding', 'W-2', '1099', 'capital gains', 'tax-advantaged account'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@TwoCentsPBS',
            title: 'Two Cents — Taxes Explained playlist',
            channel: 'PBS',
            duration: 'variable',
            featured: true,
            why: 'Several short tax explainers from PBS\'s personal finance series — brackets, deductions, the difference between W-2 and 1099, all under ten minutes each.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@ThePlainBagel',
            title: 'The Plain Bagel — full channel',
            channel: 'The Plain Bagel',
            duration: 'variable',
            featured: true,
            why: 'Coffin\'s tax videos focus on retirement-account decisions — the highest-leverage tax planning for most people.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=7Qtr_vA3Prw',
            title: 'How tax brackets actually work',
            channel: 'Vox',
            duration: '5:48',
            featured: true,
            why: 'A short, clear animation of the marginal-rate misunderstanding that costs people the most. Worth showing to anyone who has worried about a raise.',
          },
        ],
        books: [
          {
            title: 'How to Pay Zero Taxes',
            author: 'Jeff Schnepper',
            year: 2024,
            url: 'https://en.wikipedia.org/wiki/Tax_avoidance',
            why: 'A perennial reference — annual editions for nearly forty years. The legal use of every credit and deduction in the code.',
          },
          {
            title: 'Taxes Made Simple',
            author: 'Mike Piper',
            year: 2023,
            url: 'https://obliviousinvestor.com',
            why: 'A CPA writing in plain English. About a hundred pages; covers what most filers actually need.',
          },
          {
            title: 'For Good and Evil: The Impact of Taxes on the Course of Civilization',
            author: 'Charles Adams',
            year: 1993,
            url: 'https://en.wikipedia.org/wiki/Tax',
            why: 'A historian\'s sweep through five thousand years of taxation. Useful perspective when April 15 feels personal.',
          },
        ],
        articles: [
          {
            title: 'Income tax in the United States',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Income_tax_in_the_United_States',
            why: 'Comprehensive reference with current brackets, history, and structure.',
            year: null,
          },
          {
            title: 'IRS — Individuals',
            source: 'irs.gov',
            url: 'https://www.irs.gov/individuals',
            why: 'The actual rules from the actual agency. Search here before you search anywhere else.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Taxes (in Personal Finance)',
            provider: 'Khan Academy',
            url: 'https://www.khanacademy.org/college-careers-more/personal-finance/pf-taxes',
            free: true,
            why: 'Sal Khan plus working CPAs. Short clips, and now updated for current law.',
          },
        ],
        tools: [
          {
            title: 'IRS Free File',
            url: 'https://www.irs.gov/filing/free-file-do-your-federal-taxes-for-free',
            why: 'Free guided tax software for incomes under the IRS threshold. Fillable forms above it.',
          },
          {
            title: 'IRS Direct File',
            url: 'https://www.irs.gov/filing/irs-direct-file-for-free',
            why: 'The IRS\'s own free filing tool, expanding state-by-state since 2024. The future of how most simple returns will be filed.',
          },
        ],
      },

      seeAlso: ['budgeting', 'investing', 'law'],
      prereqs: ['budgeting'],
      leadsTo: [],
      chapterActivity: 'A March "tax Saturday" at a Manhattan public library: laptops out, IRS Free File on the projector, returns filed by lunch.',
      sources: [
        'https://en.wikipedia.org/wiki/Income_tax_in_the_United_States',
        'https://www.irs.gov/individuals',
        'https://www.khanacademy.org/college-careers-more/personal-finance/pf-taxes',
      ],
      verifiedAt: '2026-04-23',
    },


    rule_of_72: {
      id: 'rule_of_72',
      name: 'The Rule of 72: Doubling Your Money',
      level: 'Beginner',
      dek: 'Divide 72 by your yearly return to estimate how many years money takes to double.',
      readTime: '4 min',

      sections: ['The trick', 'Worked examples', 'What it leaves out'],
      body: [
        { type: 'lead', text: 'The Rule of 72 is the fastest useful estimate in personal finance. Divide 72 by an investment\'s annual rate of return, and the answer is roughly how many years the money takes to double, with no calculator and no spreadsheet. At a 9 percent return, 72 divided by 9 is 8: about eight years to double.' },
        { type: 'h2', text: 'Worked examples' },
        { type: 'p', text: 'At 3 percent, money doubles in about 24 years. At 6 percent, about 12 years. At 12 percent, about 6 years. The rule works in reverse for debt and inflation: at 4 percent inflation, prices double, and the buying power of idle cash halves, in about 18 years. Applied to a credit card charging 24 percent, an unpaid balance doubles in about 3 years, which is the same arithmetic wearing a different expression.' },
        { type: 'p', text: 'Investor.gov, the Securities and Exchange Commission\'s investor education site, teaches the rule alongside compound interest itself, because the two are the same idea: growth builds on growth, so time does more work than amount once a balance is rolling.' },
        { type: 'h2', text: 'What it leaves out' },
        { type: 'p', text: 'The rule assumes a steady return, and real returns wobble. It ignores taxes, fees, and new deposits or withdrawals. It is an estimate, most accurate for returns in the middle range, roughly 5 to 12 percent. Used for what it is, a sanity check you can do in your head at a kitchen table, it is exact enough to expose a bad deal and to show why starting early matters more than starting big.' },
        { type: 'callout', text: 'One number, three uses: years to double a savings balance, years for a debt to double, years for inflation to halve idle cash. All are 72 divided by the rate.' },
      ],

      keyTerms: ['compound interest', 'rule of 72', 'rate of return', 'doubling time', 'inflation', 'Investor.gov'],

      resources: {
        articles: [
          {
            title: 'What Is Compound Interest?',
            source: 'Investor.gov (U.S. Securities and Exchange Commission)',
            url: 'https://www.investor.gov/additional-resources/information/youth/teachers-classroom-resources/what-compound-interest',
            why: 'The SEC\'s classroom page teaching compound interest and the rule: divide 72 by the rate of return to estimate the years to double; at 9 percent, about 8 years.',
            year: null,
          },
        ],
      },

      seeAlso: ['emergency_savings', 'apr_basics', 'inflation_cpi'],

      sources: [
        'https://www.investor.gov/additional-resources/information/youth/teachers-classroom-resources/what-compound-interest',
      ],
      verifiedAt: '2026-10-15',
    },

    emergency_savings: {
      id: 'emergency_savings',
      name: 'The 400 Dollar Test',
      level: 'Beginner',
      dek: 'In 2023, 63 percent of adults could cover a 400 dollar emergency with cash, says the Federal Reserve.',
      readTime: '4 min',

      sections: ['The survey question', 'The trend', 'What the number is for'],
      body: [
        { type: 'lead', text: 'Every year the Federal Reserve asks American adults a plain question: how would you cover a hypothetical $400 emergency expense? In 2023, 63 percent said they would pay it with cash or its equivalent, a credit card paid off at the next statement, or money already in hand. Thirteen percent said they could not pay it by any means.' },
        { type: 'h2', text: 'The trend' },
        { type: 'p', text: 'The series comes from the Fed\'s Survey of Household Economics and Decisionmaking, published in its annual Economic Well-Being of U.S. Households report. The cash coverage figure peaked at 68 percent in 2021, then fell back as pandemic era support ended and prices rose. The survey is careful about what it measures: a small shock, not a catastrophe. Four hundred dollars is a car repair, a dental bill, a broken phone.' },
        { type: 'p', text: 'The remaining adults split between borrowing, selling something, asking family, or carrying a card balance they could not clear. The point of the question is precisely that it is small: a household that cannot absorb $400 has no slack at all, and every larger shock goes straight to debt.' },
        { type: 'h2', text: 'What the number is for' },
        { type: 'p', text: 'For a household, the test is a target in disguise: a first savings goal of $400, then $1,000, then a month of expenses. For policy, the same number is a floor measure: the share of adults one small emergency away from borrowing. Either way, it is the rare statistic you can apply to yourself in one honest minute.' },
        { type: 'callout', text: 'The Federal Reserve, 2023 data: 63 percent would cover the $400 with cash or its equivalent, 13 percent could not pay it by any means, and the series peak was 68 percent in 2021.' },
      ],

      keyTerms: ['emergency expense', 'Federal Reserve', 'SHED', 'household well-being', 'savings buffer', 'liquidity'],

      resources: {
        articles: [
          {
            title: 'Economic Well-Being of U.S. Households in 2023: Expenses',
            source: 'Board of Governors of the Federal Reserve System',
            url: 'https://www.federalreserve.gov/publications/2024-economic-well-being-of-us-households-in-2023-expenses.htm',
            why: 'The Fed\'s own report page for the $400 question: 63 percent cash coverage in 2023, 13 percent unable to pay, 68 percent at the 2021 peak.',
            year: 2024,
          },
        ],
      },

      seeAlso: ['rule_of_72', 'credit_scores', 'standard_deduction'],

      sources: [
        'https://www.federalreserve.gov/publications/2024-economic-well-being-of-us-households-in-2023-expenses.htm',
      ],
      verifiedAt: '2026-10-15',
    },

    credit_scores: {
      id: 'credit_scores',
      name: 'Credit Scores: What the Number Counts',
      level: 'Beginner',
      dek: 'FICO scores run 300 to 850, weighted most by paying on time and how much you owe.',
      readTime: '4 min',

      sections: ['The range', 'The five weights', 'Using the weights'],
      body: [
        { type: 'lead', text: 'A FICO credit score runs from 300 to 850, and higher is better: lenders read it as a prediction of how likely you are to repay. FICO publishes the five categories the score is built from and how much each counts, which makes the number less mysterious than it looks. Payment history counts for 35 percent. Amounts owed count for 30 percent.' },
        { type: 'h2', text: 'The five weights' },
        { type: 'p', text: 'The remaining three categories are smaller. Length of credit history counts for 15 percent: older accounts help, which is why closing your oldest card can dent a score. Credit mix counts for 10 percent: handling different kinds of credit, a card and a loan, counts modestly in your favor. New credit counts for 10 percent: opening several accounts in a short span reads as risk.' },
        { type: 'p', text: 'The order of the weights is the useful part. Two thirds of the score, payment history and amounts owed, is behavior entirely within the borrower\'s control this month: pay on time, every time, and keep balances low relative to their limits. The rest improves mostly by waiting.' },
        { type: 'h2', text: 'Using the weights' },
        { type: 'p', text: 'Amounts owed is measured largely by utilization, the share of your credit limits you are using, so paying a balance down before the statement closes can move the score faster than anything else except fixing missed payments. Scores differ between the bureaus and between score versions, so the number to watch is the trend of your own score, not a single day\'s figure from a single app.' },
        { type: 'callout', text: 'FICO\'s published weights, complete: payment history 35, amounts owed 30, length of history 15, credit mix 10, new credit 10. They add to 100, and the top two are this month\'s behavior.' },
      ],

      keyTerms: ['FICO score', 'payment history', 'utilization', 'credit mix', 'credit bureau', 'credit limit'],

      resources: {
        articles: [
          {
            title: 'What Is a FICO Score vs. TransUnion vs. Equifax Credit Scores?',
            source: 'SoFi Learn (summarizing FICO\'s published scoring factors)',
            url: 'https://www.sofi.com/learn/content/what-is-fico-vs-transunion-vs-equifax-credit-scores/',
            why: 'A clear statement of FICO\'s published model: the 300 to 850 range and the five factor weights, 35, 30, 15, 10, and 10 percent.',
            year: null,
          },
        ],
      },

      seeAlso: ['apr_basics', 'emergency_savings', 'rule_of_72'],

      sources: [
        'https://www.sofi.com/learn/content/what-is-fico-vs-transunion-vs-equifax-credit-scores/',
      ],
      verifiedAt: '2026-10-15',
    },

    standard_deduction: {
      id: 'standard_deduction',
      name: 'The Standard Deduction, 2025',
      level: 'Beginner',
      dek: 'For 2025 the standard deduction is 15,750 dollars single after new legislation raised the IRS schedule.',
      readTime: '4 min',

      sections: ['What it is', 'The 2025 numbers, both steps', 'Standard or itemized'],
      body: [
        { type: 'lead', text: 'The standard deduction is the amount of income the federal tax system does not tax, no receipts required. For tax year 2025, the amounts are $15,750 for single filers, $31,500 for married couples filing jointly, and $23,625 for heads of household. Those are the final figures, and how they got there is a two step story worth telling straight.' },
        { type: 'h2', text: 'The 2025 numbers, both steps' },
        { type: 'p', text: 'Step one: the IRS\'s annual inflation adjustment, Revenue Procedure 2024-40, set the 2025 deduction at $15,000 single, $30,000 joint, and $22,500 head of household. Those figures are what the IRS newsroom announced in October 2024 and what many pages still show.' },
        { type: 'p', text: 'Step two: tax legislation signed in July 2025 raised the 2025 amounts above the inflation schedule, to $15,750, $31,500, and $23,625. Anyone filing a 2025 return in early 2026 uses the second set. When two official looking numbers disagree, the later law wins, and a good record says both and why.' },
        { type: 'h2', text: 'Standard or itemized' },
        { type: 'p', text: 'A filer takes the standard deduction or itemizes, whichever is larger, never both. Itemizing means adding up specific deductions, mortgage interest, state and local taxes within their cap, charitable gifts, and claiming the total if it beats the standard amount. Most filers take the standard deduction, which is why its level quietly sets the tax bill for most households.' },
        { type: 'callout', text: 'Both sets are real, with dates: IRS inflation schedule, $15,000 / $30,000 / $22,500 (Revenue Procedure 2024-40); final law for 2025, $15,750 / $31,500 / $23,625.' },
      ],

      keyTerms: ['standard deduction', 'itemizing', 'filing status', 'Revenue Procedure 2024-40', 'taxable income', 'head of household'],

      resources: {
        articles: [
          {
            title: 'IRS releases tax inflation adjustments for tax year 2025',
            source: 'Internal Revenue Service',
            url: 'https://www.irs.gov/newsroom/irs-releases-tax-inflation-adjustments-for-tax-year-2025',
            why: 'The IRS announcement of the inflation schedule: $15,000 single, $30,000 joint, $22,500 head of household under Revenue Procedure 2024-40.',
            year: 2024,
          },
          {
            title: 'The Standard Deduction for 2025: How It Works Plus Updated Amounts',
            source: 'Kiplinger',
            url: 'https://www.kiplinger.com/taxes/tax-deductions/602223/standard-deduction&',
            why: 'Kiplinger on the updated final 2025 amounts after the July 2025 legislation: $15,750 single, $31,500 joint, $23,625 head of household.',
            year: 2025,
          },
        ],
      },

      seeAlso: ['emergency_savings', 'federal_minimum_wage', 'apr_basics'],

      sources: [
        'https://www.irs.gov/newsroom/irs-releases-tax-inflation-adjustments-for-tax-year-2025',
        'https://www.kiplinger.com/taxes/tax-deductions/602223/standard-deduction&',
      ],
      verifiedAt: '2026-10-15',
    },

    apr_basics: {
      id: 'apr_basics',
      name: 'APR: The Real Price of a Loan',
      level: 'Beginner',
      dek: 'APR folds a loan\'s interest rate and lender fees into one number so loans can be compared.',
      readTime: '4 min',

      sections: ['Rate versus APR', 'Why the law requires it', 'Comparing two offers'],
      body: [
        { type: 'lead', text: 'The interest rate on a loan is not its whole price. The annual percentage rate, APR, is the broader measure: it takes the interest rate and adds the additional fees the lender charges, so the APR is the cost of credit stated as a yearly rate. The Consumer Financial Protection Bureau\'s rule of thumb is direct: because APR includes fees, it is the number to compare across lenders.' },
        { type: 'h2', text: 'Why the law requires it' },
        { type: 'p', text: 'The Truth in Lending Act requires lenders to disclose the APR before a loan is finalized. The reason is the fee trick: a loan can advertise a low interest rate while charging origination fees, points, and other costs that make it the more expensive offer in fact. Folding the fees into one rate makes that trick visible at a glance.' },
        { type: 'p', text: 'Two loans with the same interest rate can carry different APRs, and the one with the higher APR costs more overall. Two loans with the same APR can still differ in monthly payment and term, so APR is the comparison for price, not for fit.' },
        { type: 'h2', text: 'Comparing two offers' },
        { type: 'p', text: 'Compare APR to APR, for the same loan amount and the same term. Then check what the APR cannot show: prepayment penalties, variable rates that can reset upward, and fees for late payment. On credit cards the APR is usually just the interest rate, since annual fees are not folded in, which is one more reason the CFPB keeps a plain language glossary of the terms.' },
        { type: 'callout', text: 'The CFPB in one line: APR is a broader measure of the cost of borrowing than the interest rate, because it includes the interest rate plus additional lender fees.' },
      ],

      keyTerms: ['APR', 'interest rate', 'Truth in Lending Act', 'origination fee', 'CFPB', 'term'],

      resources: {
        articles: [
          {
            title: 'What is the difference between a loan interest rate and the APR?',
            source: 'Consumer Financial Protection Bureau (Ask CFPB)',
            url: 'https://www.consumerfinance.gov/ask-cfpb/what-is-the-difference-between-a-loan-interest-rate-and-the-apr-en-733/',
            why: 'The regulator\'s own answer: APR is the interest rate plus additional fees, the Truth in Lending Act requires its disclosure, and APRs are the way to compare lenders.',
            year: null,
          },
        ],
      },

      seeAlso: ['credit_scores', 'rule_of_72', 'spotting_fraud'],

      sources: [
        'https://www.consumerfinance.gov/ask-cfpb/what-is-the-difference-between-a-loan-interest-rate-and-the-apr-en-733/',
      ],
      verifiedAt: '2026-10-15',
    },
  },
};
