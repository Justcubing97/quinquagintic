//=========================================================================

//  ==          ==        ==        ========    ========
//   ==        ==        ====       ==     ==  ==
//    ==      ==        ==  ==      ==     ==  ==
//     ==    ==        ==    ==     ========    ========
//      ==  ==        ==========    == ==              ==
//       ====        ==        ==   ==   ==            ==
//        ==        ==          ==  ==     ==   ========

//=========================================================================
var normalTickers = [
  "THE ENTITY IS WATCHING",
  "What even is a Quinquagintic?",
  "Distance, velocity, acceleration, jerk... what's the fourth derivative?",
  "Are you a male, female, trans, non-binary, Walmart shopping cart, attack helicopter, 1x2 Lego tile, second derivative of a rational function, an omega ordinal, a cube of paper, a tetrahedron made of metal, a lump of tungsten, a computer with Quinquagintic, or something else?",
  "Me? Oh, no, I'm in the third domain: Ordinals.",
  "99% of people can’t get to pink level!1!!1!11!",
  "HAHA RANDOMLY HARDCAP NUMBER GAIN",
  "What does ineffable mean again?",
  "Wait, what do you mean I can go below 1e-33?!",
  "One guy sat on a math graph—HEY! WHO MESSED UP THE QUADRATIC?!",
  "HARDSTYLE OVERLOAD!!!! WATCH OUT!!!!",
  "You've seen this message at least once.",
  "This message exists.",
  "What's not a color, but is associated with a few? I... don't know. I don't experience it, so I can't tell.",
  "i speak in lowercase.",
  "I SPEAK IN UPPERCASE.",
  "128√e980",
  "I wonder if I can drink liquid astatine...",
  "WHAT THE HELL IS UNOBTAINIUM??? WHAT IS ITS ELEMENT NUMBER???",
  "This is the 31st- wait, no, 32nd ticker added to the game. I forgot I split that one in two.",
  "The current year is 2027. If it's not, then I must be in the wrong timeline. If it is, congrats! You exist!",
  "I am Justcubing97. Why am I called Justcubing97? I don’t actually know! Here’s what I do know: 97 is a prime number, and the largest one below 100. For me, it represents being just almost complete, but needing something more. Just one more thing to hit that 100% completion.",
  "1 1 2 3 5 8 13 21 34 55 89",
  "THERE ARE MORE HYDROGEN ATOMS IN A MOLECULE OF WATER THAN STARS IN THE SOLAR SYSTEM???",
  "when undecillionth reset",
  "googol",
  "This news ticker, famously made public by the creator of Quinquagintic, Justcubing97, has been proudly presented at the top of your screen using the internet and the luck required to hit this specific news ticker, and for what purpose? To waste time so that other news tickers can’t appear. This is why! And now introducing: the News Ticker Upgraded! It can now display two news tickers at once, along with a curtain to block out the annoying ones!",
  "A, B, and C from the Pythagorean Theorem, Delta is technically D, and Delta from infinitesimal amounts as in f(x+Δx), e from Euler’s Number, f, g, and h from function notation, i, j, and k from the quaternion system, L for length, M for 1000, N for the natural numbers, zero (0) for O, pi technically evolved into P, Q for the rationals, and likewise, R for real numbers. You can turn 5 into S, + into T, the union symbol into U, and flip the exponentiation symbol (^) to get V. W for the whole numbers, and famously, x, y, and z as the three most common variables.",
  "OH MY GOD WHY ARE THERE 27 DELTAMATH PROBLEMS THIS TIME?????",
  "1797693134862315907729305190789024733617976978942306572734300- ERROR: INFINITY",
  "t̷̝̑͛ḧ̷̺̈́ę̸͍̄͌ ̵̹̈́̃e̶̻͌n̵̳͂t̷̞͘i̷̡̦̐̑ṫ̵̠͋y̸̯̋ ̷̛̮̙i̵͇̗̔ṡ̷̛̠ ̷̨͔́̀ẅ̸͓̰́̽a̸̪͊̑t̵̩̩̑c̵͈̀̃h̷̭͎̚i̵̢̅̆n̵̻͂̚g̴̹͉͐̓.̷̨̋ ̸̡͗̾î̶̗͖̋ ̵̧̝̎ḫ̴͐o̷̹̝̒̇p̵̖͂̓ẹ̷̖̚ ̵͈̎y̷̢̺̏͐ő̸͉̪ư̷̦̏r̴̛̤ẻ̶̠̲̏ ̷̥̥́̚ŏ̴̘̲̈́ṅ̶͚̭̍ ̸̦̥̉t̸̥͗ḩ̷͇͠ê̴̡̦ ̴̹̝͊̐t̵̤̰͊r̸̙͆̉į̷̖̈́́l̶̩̫̔̌l̸̘̀ĩ̷̟̟̕o̸̙̯̒̽n̵͈̊t̶͇̋h̸͈̾̚s̵̪̑̾.̷̦͂ ̸̫̉͘i̸̖̎͘͜f̷̳̂ ̴̨̣́̋y̶̘̌o̷̞̣͆͝ủ̵͎͝r̸̼͎͂͂ȩ̷̿ ̷̳͒n̸͎̎͐o̶͎̳͗̽t̶̳̝͑,̸̱̯͠ ̷̢̒̈́w̴̰̱͘e̷͇͛́l̸̺̟̑l̶͔̍̽.̶̛̼̂.̶̹̈́͝.̶̫̦̈́̕ ̸̓ͅu̶̯͌͠h̴̪͚̀ḣ̵̬͔.̶͚͕͛.̸̱̓ͅ.̶̗͗̍ ̸̫͍̀͠c̸̬̗͑r̷̰͌ä̵͇́p̵̱͎͑.̴̣̀ ̵̜͙̈́͌ỉ̴͇͘ ̸̼̰͗d̵̡̩͑ò̸͚́ͅn̵͕̐̊t̴͈̬̿̂ ̷͋͜͠ḳ̷͖͛n̵̗̹̂o̴̺̯̅͘w̷̱͛ ̵̠̽w̵͍͑̑ḧ̶̯̪̌ä̴̫́͝t̴̙͌̾ ̸̹̌͂ţ̶̌o̴̡̊̓ ̴̠̈́͑d̸̙̉õ̷͈͘ ̵̧͎̀̓h̸̳͘e̶̲͂r̸͇̟̐̂e̶̥̮͗̕.̷̢͕̄",
  "This was a triumph...",
  "2000 BPM GO!",
  "Now introducing: Undecillionth Reset: Reset all progress after this, and gain +1 UDP! Also, unlock Compound Challenges! (none of this exists).",
  "I fell asleep in class.",
  "If you're wondering why the news ticker changes speed... cool, you're hallucinating.",
  "Why are the layers in reverse order?",
  "e^iπ + 1 = 0",
  "My friend told me to quinquagintillionth root a quinquagintic function... she wanted me to mentally implode.",
  "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15- wait is the sequence of natural numbers copyrighted?",
  "df/dx = f",
  "The hell is tree(3)? What does it mean?",
  "if you're reading this get back to grinding",
  "asdfasf",
  "The next update will be in a few days to a few months.",
  "TRANSCENDENT CAP IS TRANSCENDENT",
  "3.141592653589793238462643383279502884197169399375105820974944592307816406286208998628034... (these are all my digits)",
  "Is the answer to this question 'no'?",
  "THIS SENTENCE IS FALSE.",
  "Does a set of all sets contain itself?",
  "If you travel back in time to kill your grandfather, are you alive or dead?",
  "Check out my 2026 Math Clock. It's in Dr. Zye's VERY Hard clock stream, maybe around the middle (I was middle of the spreadsheet when he posted).",
  "Find the integral of cos(x^2).",
  "What's the difference between C, C+, C++, and C#?",
  "If you have 0.999... of a cookie, do you have a whole cookie?",
  "WHY ARE ALL OF THE RESET LAYERS BASED ON A SINGLE CURRENCY???",
  "If you've seen the message where my friend quinquagintillionth rooted a quinquagintic... yeah, I don't know if cares about my emotional state. Maybe she does. I don't know. I never will.",
  "If you SOMEHOW survive the final reset layer... good luck in the second Domain. You’ll need it. Especially for the 4th and 6th layers. And 7th while I'm at it. I'm insane. And no one cares.",
  "Two people are trapped in a bedroom. There are no doors, no windows, only a standard household air conditioning vent and the basic bedroom amenities like a bed, bathroom, and bookshelf. The boy is an insane math prodigy, and the other is a psychopathic girl. The math prodigy attempts to calm her down using stunning fractal art, but she doesn't approve of it and attempts to harm the prodigy. He manages to slip away, performing some calculated movement around her and- IS THAT AN INTEGRAL AS A SWORD??? -uses an integral weapon to threaten her. The girl picks him up and throws him against the bed, stealing his integral in the process. She threatens her again, but then he says, \"STOP! I can use that integral to get us out of here!\" ...she doesn't care, so she decides to throw his integral away, and gets a 700-page AP World History textbook from the bookshelf in an attempt to hit him. The prodigy, however, calculates the time based on her perceived strength and manages to pull out a derivative- IS THAT A DERIVATIVE SHIELD??? -which blocks the book attack. Stay tuned for part 2!",
  "Wait... if you're stuck in a bedroom with a computer or laptop running Quinquagintic... does this imply the existence of other bedrooms with other events or people or games or activities? Do these imply clones of you, where they could be in relationships or be living a happier life?",
  "If there are 11 people and the teacher asks to pair up into twos... yeah, no, I'm being the odd one out.",
];

var specialTickers = [
  "It's been 347 days... I just wanna see her again...",
  "I, Justcubing97, am lonely again...",
  "Sometimes I play IMR. Other times I’m not. 50% I’m sleeping, 30% I’m in school, 20% I’m stuck doing DeltaMath, 0% I’m with a girl.",
  "Today I asked out an incremental-game-lover girl, but she said her love gain is softcapped. Is that good?",
  "A girl loved me at one point. Not anymore.",
  "If you're reading this, I'm still alive. Maybe not emotionally, oh, no. I've lost my ability to feel emotions.",
  "If you know me, then you know I’m not like most boys. Instead of recklessness and random meme mentions, I try to grasp what’s happening and stay focused, along with trying to get EVERYONE ELSE to stop saying “67.”",
  "Every time I see a couple, it makes me kinda sad. They have someone that cares about them (which is true most of the time), but I don’t. Maybe… uhh… you could probably indirectly care about me by playing this game?",
  "...I just want a girl to hug me. The next best thing is to hold something soft in bed, but it’s not as good as what I could be getting.",
  "and this is why i sit at my computer 12 hours a day. i want to be doing something else, but nothing feels right without a companion. it just… feels empty....................................................................................I ate 27 orange slices.",
  "and this is why i sit at my computer 12 hours a day. i want to be doing something else, but nothing feels right without a companion. anyway, back to trying to solve the collatz conjecture.",
  "This group chat decided to expose everything I did... I hope my crush doesn't hate me. Or do I? *vsauce music plays*",
  "help me...",
  "atp i dont know if shes ignoring me on purpose, hope not, but hey, being single means i can work on this",
  "Am I getting friendzoned?",
  "touch deprivation is real and its making me crazy",
  "I don't want to be insignificant; I just want to be loved. Is that so much to ask for? I’m not asking for a lot, just someone to care about me and hug me. I don’t even need a relationship, just a friend who cares about me. But no, that’s too much to ask for apparently BECAUSE EVERYONE HATES ME.",
  "I'm trying not to get too intimate. I don't want to risk being exposed again. But apparently everyone knows everything about you and the slightest mistake can lead to everyone absolutely hating you. I mean, I WANT to be someone's boyfriend, but also not at the same time. Apparently, I'm in a limbo state everywhere."
];

//Thousandth: "Take it slow! Love is like the Thousandth Section: start slow, but keep progressing slowly and eventually you win!" "THPM18 now exists: Pentate ALL D.D. currencies to 97! Cost: 1e9.7e200 THP";
//Billionth: "BPM1-6 WILL reset at some point. Not now."
//Octillionth: "Apparently Challenge Completions are a currency now." "Introducing CCM5: x1 ALL CURRENCIES and +0 CC at the cost of 1e727 CC!"

var decimalNumber = new Decimal(1);
var numberGain;

var numberString = "";
var numberStringFinal = "";

var boostsString = "";
var nonBoostsString = "";
var octBoostsString = "";
var sepBoostsString = "";
var sxpBoostsString = "";

var challengeModifier = 0;

var offlineTime = 0;

//=========================================================================
//DECILLIONTH
var du1boost = new Decimal(0);
var du1amt = new Decimal(0);
var du1cost = new Decimal(10);
var du1scaling = new Decimal(3);

var du2boost = new Decimal(1);
var du2amt = new Decimal(0);
var du2cost = new Decimal(25);
var du2scaling = new Decimal(4);

//=========================================================================
//NONILLIONTH
var npscaling = new Decimal(2);
var npthreshold = new Decimal(1000);
var nppending = new Decimal(0);
var npbase = new Decimal(0);

var nonillionthPoints = new Decimal(0);

var nu1boost = new Decimal(1);
var nu1amt = new Decimal(0);
var nu1cost = new Decimal(1);
var nu1scaling = new Decimal(5);

var nu2amt = new Decimal(0);
var nu2cost = new Decimal(3);

var nu3boost = new Decimal(1);
var nu3amt = new Decimal(0);
var nu3cost = new Decimal(10);
var nu3scaling = new Decimal(10);

var nu4amt = new Decimal(0);
var nu4cost = new Decimal(25);

//=========================================================================
//OCTILLIONTH
var opscaling = new Decimal(3);
var opthreshold = new Decimal.pow(10, 6);
var oppending = new Decimal(0);
var opbase = new Decimal(0);

var octillionthPoints = new Decimal(0);

var chal1completions = new Decimal(0);
var chal1scaling = new Decimal(1.15); //EXPONENT!
var chal1goal = new Decimal(1000);

var chal2completions = new Decimal(0);
var chal2scaling = new Decimal(3);
var chal2goal = new Decimal(5000);

var chal3completions = new Decimal(0);
var chal3scaling = new Decimal(2.8);
var chal3goal = new Decimal(10000);

var chal4completions = new Decimal(0);
var chal4scaling = new Decimal(5);
var chal4goal = new Decimal(10000000);

var challengeCompletions = new Decimal(0);
var ccm1unlocked = false;
var ccm2unlocked = false;
var ccm3unlocked = false;

//=========================================================================
//SEPTILLIONTH
var spscaling = new Decimal(10);
var spthreshold = new Decimal.pow(10, 9);
var sppending = new Decimal(0);
var spbase = new Decimal(0);

var septillionthPoints = new Decimal(0);

var atoms = new Decimal(0);
var atomGain = new Decimal(0);

var atomsBoost = new Decimal(1);

var au123boost = new Decimal(0);
var au456boost = new Decimal(1);

var au1amt = new Decimal(0);
var au1cost = new Decimal(10);
var au1scaling = new Decimal(1.25);

var au2amt = new Decimal(0);
var au2cost = new Decimal(50);
var au2scaling = new Decimal(1.8);

var au3amt = new Decimal(0);
var au3cost = new Decimal(300);
var au3scaling = new Decimal(2.5);

var au4amt = new Decimal(0);
var au4cost = new Decimal(10000);
var au4scaling = new Decimal(4);

var au5amt = new Decimal(0);
var au5cost = new Decimal.pow(10, 6);
var au5scaling = new Decimal(7.5);

var au6amt = new Decimal(0);
var au6cost = new Decimal.pow(10, 10);
var au6scaling = new Decimal(15);

//=========================================================================
//SEXTILLIONTH
var sxpscaling = new Decimal(2);
var sxpthreshold = new Decimal.pow(10, 12);
var sxppending = new Decimal(0);
var sxpbase = new Decimal(0);

var sextillionthPoints = new Decimal(0);

//=========================================================================
//NON MAGIC CONSTS
const numberTickspeedDivisor = new Decimal(20);
const numberRounding = new Decimal(100);
const numberDecimalPlaces = new Decimal(3);
const decillionthDivision = new Decimal.pow(10, 33);

//=========================================================================
//UNLOCK CHECKS (these are for checking if layers are unlocked)
var nonillionth_unlocked = false;
var octillionth_unlocked = false;
var septillionth_unlocked = false;
var sextillionth_unlocked = false;

//=========================================================================
//RESET BOOSTS (these are for applying boosts)
var non_reset_boost_check = false;
var oct_reset_boost_check = false;
var sep_reset_boost_check = false;
var sxp_reset_boost_check = false;

//=========================================================================
//SOFTCAP EFFECTS
var minicap = new Decimal(1);
var softcap = new Decimal(1);
var supercap = new Decimal(1);

//=========================================================================
//OTHER
const slider = document.getElementById("fontSlider");
var sliderPos = 45;

//=========================================================================

//  ==========  ========     ========
//      ==      ==      ==  ==
//      ==      ==      ==  ==
//      ==      ==      ==   ========
//      ==      ==      ==          ==
//      ==      ==      ==          ==
//  ==========  ========     ========

//=========================================================================

//=========================================================================
//TABS
const reset_button = document.getElementById("reset-button");

const main_tab = document.getElementById("main-tab");
const caps_tab = document.getElementById("caps-tab");
const decillionth_tab = document.getElementById("decillionth-tab");
const nonillionth_tab = document.getElementById("nonillionth-tab");
const octillionth_tab = document.getElementById("octillionth-tab");
const septillionth_tab = document.getElementById("septillionth-tab");
const sextillionth_tab = document.getElementById("sextillionth-tab");
const main_number_tab_button = document.getElementById("main-number-tab-button");
const main_caps_tab_button = document.getElementById("main-caps-tab-button");
const main_decillionth_tab_button = document.getElementById("main-decillionth-tab-button");
const main_nonillionth_tab_button = document.getElementById("main-nonillionth-tab-button");
const main_octillionth_tab_button = document.getElementById("main-octillionth-tab-button");
const main_septillionth_tab_button = document.getElementById("main-septillionth-tab-button");
const main_sextillionth_tab_button = document.getElementById("main-sextillionth-tab-button");

const oct_infobox_tab = document.getElementById("oct-infobox-tab");
const oct_challenge_tab = document.getElementById("oct-challenge-tab");
const oct_infobox_tab_button = document.getElementById("oct-infobox-tab-button");
const oct_challenge_tab_button = document.getElementById("oct-challenge-tab-button");

const sep_infobox_tab = document.getElementById("sep-infobox-tab");
const septillionthGrid = document.getElementById("septillionth-grid");
const sep_infobox_tab_button = document.getElementById("sep-infobox-tab-button");
const sep_atom_tab_button = document.getElementById("sep-atom-tab-button");

//=========================================================================
//TOP
const topNumber = document.getElementById("top-number");
const topNP = document.getElementById("top-np");
const topOP = document.getElementById("top-op");
const topSP = document.getElementById("top-sp");
const topAtoms = document.getElementById("top-atoms");
const topSXP = document.getElementById("top-sxp");

//=========================================================================
//BOTTOM
const bottomModifiers = document.getElementById("bottom-modifiers");
const ticker = document.getElementById("news-ticker");
const container = document.getElementById("news-ticker-container");

//=========================================================================
//CAPS
const minicapDisplay = document.getElementById("minicap-display");
const softcapDisplay = document.getElementById("softcap-display");
const supercapDisplay = document.getElementById("supercap-display");
const hypercapDisplay = document.getElementById("hypercap-display");
const ultracapDisplay = document.getElementById("ultracap-display");
const omegacapDisplay = document.getElementById("omegacap-display");
const absolutecapDisplay = document.getElementById("absolutecap-display");
const forevercapDisplay = document.getElementById("forevercap-display");
const eternalcapDisplay = document.getElementById("eternalcap-display");
const insanitycapDisplay = document.getElementById("insanitycap-display");
const transcendentcapDisplay = document.getElementById("transcendentcap-display");

//=========================================================================
//NUMBER
const numberDisplay = document.getElementById("numberDisplay");
const numberGainDisplay = document.getElementById("numberGainDisplay");
const boostsDisplay = document.getElementById("boostsDisplay");

//=========================================================================
//DECILLIONTH
const du1 = document.getElementById("du1");
const du1_id_amt = document.getElementById("du1-id-amt");
const du1_cost_scale = document.getElementById("du1-cost-scale");
du1.disabled = true;

const du2 = document.getElementById("du2");
const du2_id_amt = document.getElementById("du2-id-amt");
const du2_cost_scale = document.getElementById("du2-cost-scale");
du2.disabled = true;

//=========================================================================
//NONILLIONTH
const nreset = document.getElementById("nreset");
const no_point_pending = document.getElementById("no-point-pending");
const no_next_point = document.getElementById("no-next-point");
const nonBoostsDisplay = document.getElementById("nonBoostsDisplay");
const nonillionth_grid = document.getElementById("nonillionth-grid");
nreset.disabled = true;

const nu1 = document.getElementById("nu1");
nu1.disabled = true;

const nu1_id_amt = document.getElementById("nu1-id-amt");
const nu1_cost_scale = document.getElementById("nu1-cost-scale");

const nu2 = document.getElementById("nu2");
nu2.disabled = true;

const nu2_id_amt = document.getElementById("nu2-id-amt");
const nu2_cost_scale = document.getElementById("nu2-cost-scale");

const nu3 = document.getElementById("nu3");
nu3.disabled = true;

const nu3_id_amt = document.getElementById("nu3-id-amt");
const nu3_cost_scale = document.getElementById("nu3-cost-scale");

const nu4 = document.getElementById("nu4");
nu4.disabled = true;

const nu4_id_amt = document.getElementById("nu4-id-amt");
const nu4_cost_scale = document.getElementById("nu4-cost-scale");

//=========================================================================
//OCTILLIONTH
const oreset = document.getElementById("oreset");
const op_point_pending = document.getElementById("op-point-pending");
const op_next_point = document.getElementById("op-next-point");
const octBoostsDisplay = document.getElementById("octBoostsDisplay");
const octillionth_main_section = document.getElementById("octillionth-main-section");
oreset.disabled = true;

const op_effect = document.getElementById("op-effect");

const chal1 = document.getElementById("chal1");
const chal1_title = document.getElementById("chal1-title");
const chal1_goal_scale = document.getElementById("chal1-goal-scale");
const chal1_reward = document.getElementById("chal1-reward");
const chal1_completions = document.getElementById("chal1-completions");

const chal2 = document.getElementById("chal2");
const chal2_title = document.getElementById("chal2-title");
const chal2_goal_scale = document.getElementById("chal2-goal-scale");
const chal2_reward = document.getElementById("chal2-reward");
const chal2_completions = document.getElementById("chal2-completions");

const chal3 = document.getElementById("chal3");
const chal3_title = document.getElementById("chal3-title");
const chal3_goal_scale = document.getElementById("chal3-goal-scale");
const chal3_reward = document.getElementById("chal3-reward");
const chal3_completions = document.getElementById("chal3-completions");

const chal4 = document.getElementById("chal4");
const chal4_title = document.getElementById("chal4-title");
const chal4_goal_scale = document.getElementById("chal4-goal-scale");
const chal4_reward = document.getElementById("chal4-reward");
const chal4_completions = document.getElementById("chal4-completions");

const cc_display = document.getElementById("cc-display");

const ccm1 = document.getElementById("ccm-1");
const ccm2 = document.getElementById("ccm-2");
const ccm3 = document.getElementById("ccm-3");

//=========================================================================
//SEPTILLIONTH

const spreset = document.getElementById("spreset");
const sp_point_pending = document.getElementById("sp-point-pending");
const sp_next_point = document.getElementById("sp-next-point");
const sepBoostsDisplay = document.getElementById("sepBoostsDisplay");
const septillionth_main_section = document.getElementById("septillionth-main-section");
spreset.disabled = true;

const atoms_formula = document.getElementById("atoms-formula");

const atoms_display = document.getElementById("atoms-display");
const atoms_boost_display = document.getElementById("atoms-boost-display");

const au1 = document.getElementById("au1");
const au1_id_amt = document.getElementById("au1-id-amt");
const au1_cost_scale = document.getElementById("au1-cost-scale");
au1.disabled = true;

const au2 = document.getElementById("au2");
const au2_id_amt = document.getElementById("au2-id-amt");
const au2_cost_scale = document.getElementById("au2-cost-scale");
au2.disabled = true;

const au3 = document.getElementById("au3");
const au3_id_amt = document.getElementById("au3-id-amt");
const au3_cost_scale = document.getElementById("au3-cost-scale");
au3.disabled = true;

const au4 = document.getElementById("au4");
const au4_id_amt = document.getElementById("au4-id-amt");
const au4_cost_scale = document.getElementById("au4-cost-scale");
au4.disabled = true;

const au5 = document.getElementById("au5");
const au5_id_amt = document.getElementById("au5-id-amt");
const au5_cost_scale = document.getElementById("au5-cost-scale");
au5.disabled = true;

const au6 = document.getElementById("au6");
const au6_id_amt = document.getElementById("au6-id-amt");
const au6_cost_scale = document.getElementById("au6-cost-scale");
au6.disabled = true;

//=========================================================================
//SEXTILLIONTH

const sxpreset = document.getElementById("sxpreset");
const sxp_point_pending = document.getElementById("sxp-point-pending");
const sxp_next_point = document.getElementById("sxp-next-point");
const sxpBoostsDisplay = document.getElementById("sxpBoostsDisplay");
const sextillionth_main_section = document.getElementById("sextillionth-main-section");
sxpreset.disabled = true;

//=========================================================================

//  ========   ========   ========   ========  ========
//  ==     ==  ==        ==          ==           ==
//  ==     ==  ==        ==          ==           ==
//  ========   ========   ========   ========     ==
//  == ==      ==                ==  ==           ==
//  ==   ==    ==                ==  ==           ==
//  ==     ==  ========   ========   ========     ==

//=========================================================================
function nonillionthResetInitiate(){
  opthreshold = new Decimal.pow(10, 6);
  opbase = new Decimal(0);

  npthreshold = new Decimal(1000);
  nonillionthPoints = nonillionthPoints.add(nppending);
  npbase = new Decimal(0);
  non_reset_boost_check = true;
  
  du1boost = new Decimal(0);
  du1amt = new Decimal(0);
  du1cost = new Decimal(10);
  du1scaling = new Decimal(3); 

  du2boost = new Decimal(1);
  du2amt = new Decimal(0);
  du2cost = new Decimal(25);
  du2scaling = new Decimal(4);
  decimalNumber = new Decimal(1);
  
  if (nu2amt.eq(new Decimal(1))){
    du1cost = new Decimal(8);
  }
}

function octillionthResetInitiate(){
  opthreshold = new Decimal.pow(10, 6);
  octillionthPoints = octillionthPoints.add(oppending);
  opbase = new Decimal(0);
  oct_reset_boost_check = true;
  
  npscaling = new Decimal(2);
  npthreshold = new Decimal(1000);
  nppending = new Decimal(0);
  npbase = new Decimal(0);

  nonillionthPoints = new Decimal(0);
  non_reset_boost_check = false;

  nu1boost = new Decimal(1);
  nu1amt = new Decimal(0);
  nu1cost = new Decimal(1);
  nu1scaling = new Decimal(5);

  nu2amt = new Decimal(0);
  nu2cost = new Decimal(3);
  nu2_cost_scale.textContent = "Cost: 3 NP";
  
  nu3boost = new Decimal(1);
  nu3amt = new Decimal(0);
  nu3cost = new Decimal(10);
  nu3scaling = new Decimal(10);

  nu4amt = new Decimal(0);
  nu4cost = new Decimal(25);
  nu4_cost_scale.textContent = "Cost: 25 NP";
  
  du1boost = new Decimal(0);
  du1amt = new Decimal(0);
  du1cost = new Decimal(10);
  du1scaling = new Decimal(3); 

  du2boost = new Decimal(1);
  du2amt = new Decimal(0);
  du2cost = new Decimal(25);
  du2scaling = new Decimal(4);
  decimalNumber = new Decimal(1);
}

function everythingFromSRI(){
  oct_reset_boost_check = false;
  opscaling = new Decimal(3);
  opthreshold = new Decimal.pow(10, 6);
  oppending = new Decimal(0);
  opbase = new Decimal(0);
 
  octillionthPoints = new Decimal(0);
 
  if (!sxp_reset_boost_check){
    chal1completions = new Decimal(0);
    chal1scaling = new Decimal(1.15); //EXPONENT!
    chal1goal = new Decimal(1000);
 
    chal2completions = new Decimal(0);
    chal2scaling = new Decimal(3);
    chal2goal = new Decimal(5000);
 
    chal3completions = new Decimal(0);
    chal3scaling = new Decimal(2.8);
    chal3goal = new Decimal(10000);
 
    chal4completions = new Decimal(0);
    chal4scaling = new Decimal(5);
    chal4goal = new Decimal(10000000);
 
    challengeCompletions = new Decimal(0);
    ccm1unlocked = false;
    ccm2unlocked = false;
    ccm3unlocked = false;
  }
  
  npscaling = new Decimal(2);
  npthreshold = new Decimal(1000);
  nppending = new Decimal(0);
  npbase = new Decimal(0);

  nonillionthPoints = new Decimal(0);
  non_reset_boost_check = false;

  nu1boost = new Decimal(1);
  nu1amt = new Decimal(0);
  nu1cost = new Decimal(1);
  nu1scaling = new Decimal(5);

  nu2amt = new Decimal(0);
  nu2cost = new Decimal(3);
  nu2_cost_scale.textContent = "Cost: 3 NP";
  
  nu3boost = new Decimal(1);
  nu3amt = new Decimal(0);
  nu3cost = new Decimal(10);
  nu3scaling = new Decimal(10);

  nu4amt = new Decimal(0);
  nu4cost = new Decimal(25);
  nu4_cost_scale.textContent = "Cost: 25 NP";
  
  du1boost = new Decimal(0);
  du1amt = new Decimal(0);
  du1cost = new Decimal(10);
  du1scaling = new Decimal(3); 

  du2boost = new Decimal(1);
  du2amt = new Decimal(0);
  du2cost = new Decimal(25);
  du2scaling = new Decimal(4);
  decimalNumber = new Decimal(1);
}

function septillionthResetInitiate(){
  spthreshold = new Decimal.pow(10, 9);
  septillionthPoints = septillionthPoints.add(sppending);
  spbase = new Decimal(0);
  sep_reset_boost_check = true;

  oct_reset_boost_check = false;
  opscaling = new Decimal(3);
  opthreshold = new Decimal.pow(10, 6);
  oppending = new Decimal(0);
  opbase = new Decimal(0);
 
  octillionthPoints = new Decimal(0);
 
  if (!sxp_reset_boost_check){
    chal1completions = new Decimal(0);
    chal1scaling = new Decimal(1.15); //EXPONENT!
    chal1goal = new Decimal(1000);
 
    chal2completions = new Decimal(0);
    chal2scaling = new Decimal(3);
    chal2goal = new Decimal(5000);
 
    chal3completions = new Decimal(0);
    chal3scaling = new Decimal(2.8);
    chal3goal = new Decimal(10000);
 
    chal4completions = new Decimal(0);
    chal4scaling = new Decimal(5);
    chal4goal = new Decimal(10000000);
 
    challengeCompletions = new Decimal(0);
    ccm1unlocked = false;
    ccm2unlocked = false;
    ccm3unlocked = false;
  }
  
  npscaling = new Decimal(2);
  npthreshold = new Decimal(1000);
  nppending = new Decimal(0);
  npbase = new Decimal(0);

  nonillionthPoints = new Decimal(0);
  non_reset_boost_check = false;

  nu1boost = new Decimal(1);
  nu1amt = new Decimal(0);
  nu1cost = new Decimal(1);
  nu1scaling = new Decimal(5);

  nu2amt = new Decimal(0);
  nu2cost = new Decimal(3);
  nu2_cost_scale.textContent = "Cost: 3 NP";
  
  nu3boost = new Decimal(1);
  nu3amt = new Decimal(0);
  nu3cost = new Decimal(10);
  nu3scaling = new Decimal(10);

  nu4amt = new Decimal(0);
  nu4cost = new Decimal(25);
  nu4_cost_scale.textContent = "Cost: 25 NP";
  
  du1boost = new Decimal(0);
  du1amt = new Decimal(0);
  du1cost = new Decimal(10);
  du1scaling = new Decimal(3); 

  du2boost = new Decimal(1);
  du2amt = new Decimal(0);
  du2cost = new Decimal(25);
  du2scaling = new Decimal(4);
  decimalNumber = new Decimal(1);
}

function sextillionthResetInitiate(){
  sxpthreshold = new Decimal.pow(10, 12);
  sextillionthPoints = sextillionthPoints.add(sxppending);
  sxpbase = new Decimal(0);
  sxp_reset_boost_check = true;

  sep_reset_boost_check = false;
  spscaling = new Decimal(10);
  spthreshold = new Decimal.pow(10, 9);
  sppending = new Decimal(0);
  spbase = new Decimal(0);

  septillionthPoints = new Decimal(0);

  atoms = new Decimal(0);
  atomGain = new Decimal(0);

  atomsBoost = new Decimal(1);

  au123boost = new Decimal(0);
  au456boost = new Decimal(1);

  au1amt = new Decimal(0);
  au1cost = new Decimal(10);
  au1scaling = new Decimal(1.25);

  au2amt = new Decimal(0);
  au2cost = new Decimal(50);
  au2scaling = new Decimal(1.8);

  au3amt = new Decimal(0);
  au3cost = new Decimal(300);
  au3scaling = new Decimal(2.5);

  au4amt = new Decimal(0);
  au4cost = new Decimal(10000);
  au4scaling = new Decimal(4);

  au5amt = new Decimal(0);
  au5cost = new Decimal.pow(10, 6);
  au5scaling = new Decimal(7.5);

  au6amt = new Decimal(0);
  au6cost = new Decimal.pow(10, 10);
  au6scaling = new Decimal(15);

  everythingFromSRI();
}

//=========================================================================

//  ==         ========    ========   ========
//  ==        ==      ==  ==      ==  ==     ==
//  ==        ==      ==  ==      ==  ==     ==
//  ==        ==      ==  ==      ==  ========
//  ==        ==      ==  ==      ==  ==
//  ==        ==      ==  ==      ==  ==
//  ========   ========    ========   ==

//=========================================================================

setInterval(function(){
  calculateGain();
  updateCurrencies();
  formatNumber();
  calculateBoostsStrings();
  updateScreen();
  updateSoftcaps();
  
  decillionthUpgrades();
  
  checkNonillionthReset();
  checkPendingNonillionth();
  nonillionthUpgrades();

  checkOctillionthReset();
  checkPendingOctillionth();
  chal1GoalChecking();
  chal2GoalChecking();
  chal3GoalChecking();
  chal4GoalChecking();
  checkCCM();

  checkSeptillionthReset();
  checkPendingSeptillionth();
  checkAU();

  checkSextillionthReset();
  checkPendingSextillionth();

  automation();
}, 50);

//=========================================================================

//  ========  ==      ==  ==    ==   ========   =========
//  ==        ==      ==  ===   ==  ==         ==
//  ==        ==      ==  ====  ==  ==         ==
//  ========  ==      ==  == == ==  ==          =========
//  ==        ==      ==  ==  ====  ==                  ==
//  ==        ==      ==  ==   ===  ==                  ==
//  ==         ========   ==    ==   ========   =========

//=========================================================================

//=========================================================================
//MAIN TAB CLICK THINGS

main_number_tab_button.addEventListener("click", function(){
  if (main_number_tab_button.classList.contains("mil-dark")){
    main_number_tab_button.classList.remove("mil-dark");
    main_number_tab_button.classList.add("mil-light");
    main_tab.style.display = "block";
  } else {
    main_number_tab_button.classList.add("mil-dark");
    main_number_tab_button.classList.remove("mil-light");
    main_tab.style.display = "none";
  }
});

main_caps_tab_button.addEventListener("click", function(){
  if (main_caps_tab_button.classList.contains("soft-dark")){
    main_caps_tab_button.classList.remove("soft-dark");
    main_caps_tab_button.classList.add("soft-light");
    caps_tab.style.display = "block";
  } else {
    main_caps_tab_button.classList.add("soft-dark");
    main_caps_tab_button.classList.remove("soft-light");
    caps_tab.style.display = "none";
  }
});

main_decillionth_tab_button.addEventListener("click", function(){
  if (main_decillionth_tab_button.classList.contains("decillionth-dark-button")){
    main_decillionth_tab_button.classList.remove("decillionth-dark-button");
    main_decillionth_tab_button.classList.add("decillionth-button");
    decillionth_tab.style.display = "block";
  } else {
    main_decillionth_tab_button.classList.add("decillionth-dark-button");
    main_decillionth_tab_button.classList.remove("decillionth-button");
    decillionth_tab.style.display = "none";
  }
});

main_nonillionth_tab_button.addEventListener("click", function(){
  if (main_nonillionth_tab_button.classList.contains("non-dark")){
    main_nonillionth_tab_button.classList.remove("non-dark");
    main_nonillionth_tab_button.classList.add("non-light");
    nonillionth_tab.style.display = "block";
  } else {
    main_nonillionth_tab_button.classList.add("non-dark");
    main_nonillionth_tab_button.classList.remove("non-light");
    nonillionth_tab.style.display = "none";
  }
});

main_octillionth_tab_button.addEventListener("click", function(){
  if (main_octillionth_tab_button.classList.contains("oct-dark")){
    main_octillionth_tab_button.classList.remove("oct-dark");
    main_octillionth_tab_button.classList.add("oct-light");
    octillionth_tab.style.display = "block";
  } else {
    main_octillionth_tab_button.classList.add("oct-dark");
    main_octillionth_tab_button.classList.remove("oct-light");
    octillionth_tab.style.display = "none";
  }
});

main_septillionth_tab_button.addEventListener("click", function(){
  if (main_septillionth_tab_button.classList.contains("sep-dark")){
    main_septillionth_tab_button.classList.remove("sep-dark");
    main_septillionth_tab_button.classList.add("sep-light");
    septillionth_tab.style.display = "block";
  } else {
    main_septillionth_tab_button.classList.add("sep-dark");
    main_septillionth_tab_button.classList.remove("sep-light");
    septillionth_tab.style.display = "none";
  }
});

main_sextillionth_tab_button.addEventListener("click", function(){
  if (main_sextillionth_tab_button.classList.contains("sx-dark")){
    main_sextillionth_tab_button.classList.remove("sx-dark");
    main_sextillionth_tab_button.classList.add("sx-light");
    sextillionth_tab.style.display = "block";
  } else {
    main_sextillionth_tab_button.classList.add("sx-dark");
    main_sextillionth_tab_button.classList.remove("sx-light");
    sextillionth_tab.style.display = "none";
  }
});

//=========================================================================
//ACTUAL FUNCTIONS

function calculateGain(){
  challengeCompletions = chal1completions.add(chal2completions).add(chal3completions).add(chal4completions);

  if (sxp_reset_boost_check){
    challengeCompletions = challengeCompletions.mul(new Decimal(2));
  }

  numberGain = new Decimal(1);

  //BASE CALCULATIONS
  numberGain = numberGain.add(chal4completions.div(new Decimal(20)));

  //ADDITIONS
  
  //MULTIPLICATIONS
  if (du1amt.gte(new Decimal(1))){
    numberGain = numberGain.mul(du1boost);
  }
  if (du2amt.gte(new Decimal(1))){
    numberGain = numberGain.mul(du2boost);
  }
  
  if (non_reset_boost_check){
    numberGain = numberGain.mul(new Decimal(5));
  }

  if (nu3amt.gte(new Decimal(1))){
    numberGain = numberGain.mul(nu3boost);
  }
  
  if (octillionthPoints.gte(new Decimal(1)) && challengeModifier != 4){
    if (chal1completions.gte(new Decimal(1))){
      numberGain = numberGain.mul(octillionthPoints.add(new Decimal(1))).add(chal1completions.div(new Decimal(2)));
    } else {
      numberGain = numberGain.mul(octillionthPoints.add(new Decimal(1)));
    }
  }

  if (ccm2unlocked){
    numberGain = numberGain.mul(challengeCompletions.div(new Decimal(4)).add(new Decimal(1)));
  }

  if (!atoms.eq(new Decimal(0))){
    numberGain = numberGain.mul(atomsBoost);
  }

  //SOFTCAPS
  if (minicap.neq(new Decimal(1))){
    numberGain = numberGain.div(minicap);
  }

  if (softcap.neq(new Decimal(1))){
    numberGain = numberGain.div(softcap);
  }

  if (supercap.neq(new Decimal(1))){
    numberGain = numberGain.div(supercap);
  }

  //CHALLENGE 2
  if (challengeModifier == 2){
    numberGain = numberGain.pow(new Decimal(1).div(decimalNumber.pow(new Decimal(0.06))));
  }

  //=========================================================================
  //ATOMS
  if (septillionth_unlocked){
    atomGain = new Decimal(1);

    if (sxp_reset_boost_check){
      if (septillionthPoints.gte(new Decimal(1))){
        atomGain = atomGain.mul(septillionthPoints.mul(new Decimal(5)));
      }
      atomGain = atomGain.add(au123boost);
      atomGain = atomGain.pow(new Decimal(2.5));
      atomGain = atomGain.mul(au456boost);
    } else {
      if (septillionthPoints.gte(new Decimal(1))){
        atomGain = atomGain.mul(septillionthPoints.mul(new Decimal(3)));
      }
      atomGain = atomGain.add(au123boost);
      atomGain = atomGain.pow(new Decimal(2));
      atomGain = atomGain.mul(au456boost);
    }

    atomsBoost = new Decimal(1);

    if (sxp_reset_boost_check){
      atomGain = atomGain.mul(new Decimal(5));
    }

    atoms = atoms.add(atomGain.div(new Decimal(20)));
    atomsBoost = atomsBoost.add(atoms.log10());
  }
}

function updateCurrencies(){
  //=========================================================================
  //NUMBER
  decimalNumber = decimalNumber.add(numberGain.div(numberTickspeedDivisor)); //CHANGE THIS BACK TO 20
  decimalNumber = decimalNumber.mul(numberRounding);
  decimalNumber = decimalNumber.round();
  decimalNumber = decimalNumber.div(numberRounding);
  numberString = decimalNumber.toFixed(numberDecimalPlaces);
  numberString = numberString.toString();
}

function formatNumber(){
  //=========================================================================
  //FIXED
  numberStringFinal = "";
  numberStringFinal = numberString[numberString.length - 1] + numberStringFinal;
  numberStringFinal = numberString[numberString.length - 2] + numberStringFinal;
  numberStringFinal = numberString[numberString.length - 3] + numberStringFinal;
  numberStringFinal = numberString[numberString.length - 5] + "," + numberStringFinal;
  
  //=========================================================================
  //DYNAMIC
  for (var nSFCounter = 5; nSFCounter < 38; nSFCounter++){
    if (numberString.length > nSFCounter){
      if (nSFCounter == 37){
        numberStringFinal = numberString[numberString.length - (nSFCounter + 1)] + "." + numberStringFinal;
      } else if (nSFCounter % 3 == 1){
        numberStringFinal = numberString[numberString.length - (nSFCounter + 1)] + "," + numberStringFinal;
      } else {
        numberStringFinal = numberString[numberString.length - (nSFCounter + 1)] + numberStringFinal;
      }
    } else {
      if (nSFCounter == 37){
        numberStringFinal = "0." + numberStringFinal;
      } else if (nSFCounter % 3 == 1){
        numberStringFinal = "0," + numberStringFinal;
      } else {
        numberStringFinal = "0" + numberStringFinal;
      }
    }
  }
}

function calculateBoostsStrings(){
  //=========================================================================
  //NUMBER
  boostsString = "Boosts: ";
  if (du1amt.gte(1)){
    boostsString += "DU1: x" + du1boost + ", ";
  }
  if (du2amt.gte(1)){
    boostsString += "DU2: x" + du2boost.toExponential(3) + ", ";
  }
  
  if (non_reset_boost_check){
    boostsString += "Nonillionth: x5, ";
  }

  if (nu3amt.gte(1)){
    boostsString += "NU3: x" + nu3boost.toExponential(3) + ", ";
  }
  
  if (challengeModifier == 4 && octillionthPoints.gte(new Decimal(1))){
    boostsString += "OP: NULLIFIED IN C4, ";
  } else if (octillionthPoints.gte(new Decimal(1))){
    boostsString += "OP: x" + octillionthPoints.add(new Decimal(1)).toExponential(3) + "+" + chal1completions.div(new Decimal(2)).toExponential(3) + ", ";
  }

  if (chal4completions.gte(new Decimal(1))){
    boostsString += "C4: +" + chal4completions.div(new Decimal(20)).toExponential(3) + " to base, ";
  }

  if (ccm2unlocked){
    boostsString += "CCM2: x" + challengeCompletions.div(new Decimal(4)).add(new Decimal(1)) + ", ";
  }

  if (!atoms.eq(new Decimal(0))){
    boostsString += "Atoms: x" + atomsBoost.toExponential(3) + ", ";
  }

  //=========================================================================
  //NONILLIONTHS
  nonBoostsString = "Boosts: ";
  if (nu1amt.gte(1)){
    nonBoostsString += "NU1: x" + nu1boost.toExponential(3) + ", ";
  }

  if (oct_reset_boost_check){
    nonBoostsString += "Octillionth: x4, ";
  }

  if (chal3completions.gte(1)){
    nonBoostsString += "C3: x" + chal3completions.div(new Decimal(2)).add(new Decimal(1)) + ", ";
  }

  if (sep_reset_boost_check){
    nonBoostsString += "Septillionth: x2, ";
  }

  if (sxp_reset_boost_check){
    nonBoostsString += "Sextillionth: x10, ";
  }

  //=========================================================================
  //OCTILLIONTHS
  octBoostsString = "Boosts: ";

  if (chal2completions.gte(1)){
    octBoostsString += "C2: x" + chal2completions.div(new Decimal(2)).add(new Decimal(1)) + ", ";
  }

  if (ccm1unlocked){
    octBoostsString += "CCM1: x" + challengeCompletions.div(new Decimal(2)).add(new Decimal(1)) + ", ";
  }

  if (sep_reset_boost_check){
    octBoostsString += "Septillionth: x2, ";
  }

  if (sxp_reset_boost_check){
    octBoostsString += "Sextillionth: x10, ";
  }

  //=========================================================================
  //SEPTILLIONTHS
  sepBoostsString = "Boosts: ";

  if (sxp_reset_boost_check){
    sepBoostsString += "Sextillionth: x10, ";
  }

  //=========================================================================
  //SEXTILLIONTHS
  sxpBoostsString = "Boosts: ";
}

//=========================================================================

//   =========     ========  ========   ========  ========  ==    ==
//  ==           ==          ==     ==  ==        ==        ===   ==
//  ==           ==          ==     ==  ==        ==        ====  ==
//   =========   ==          ========   ========  ========  == == ==
//           ==  ==          == ==      ==        ==        ==  ====
//           ==  ==          ==   ==    ==        ==        ==   ===
//   =========     ========  ==     ==  ========  ========  ==    ==

//=========================================================================

function updateScreen(){
  //=========================================================================
  //TOP
  topNumber.textContent = "N: " + decimalNumber.div(decillionthDivision).toExponential(3) + " (+" + numberGain.div(decillionthDivision).toExponential(3) + "/s)";

  if (challengeModifier == 3){
    topNP.textContent = "NP: DISABLED IN C3";
  } else {
    topNP.textContent = "NP: " + nonillionthPoints.toExponential(3) + " (+" + nppending.toExponential(3) + ")";
  }

  if (octillionth_unlocked){
    topOP.textContent = "OP: " + octillionthPoints.toExponential(3) + " (+" + oppending.toExponential(3) + ")";
  } else {
    topOP.textContent = "";
  }

  if (septillionth_unlocked){
    topSP.textContent = "SP: " + septillionthPoints.toExponential(3) + " (+" + sppending.toExponential(3) + ")";
  } else {
    topSP.textContent = "";
  }

  if (atoms.gt(new Decimal(0))){
    topAtoms.textContent = "A: " + atoms.toExponential(3) + " (+" + atomGain.toExponential(3) + "/s)";
  } else {
    topAtoms.textContent = "";
  }

  if (sextillionth_unlocked){
    topSXP.textContent = "SXP: " + sextillionthPoints.toExponential(3) + " (+" + sxppending.toExponential(3) + ")";
  } else {
    topSXP.textContent = "";
  }
  
  //=========================================================================
  //NUMBER
  numberDisplay.textContent = numberStringFinal;
  numberGainDisplay.textContent = "Number gain is +" + numberGain.div(decillionthDivision).toExponential(3) + "/s";
  boostsDisplay.textContent = boostsString;
  
  //=========================================================================
  //DECILLIONTHS
  du1_id_amt.textContent = "ID: DU1 || x" + du1amt;
  if (challengeModifier == 1){
    du1_cost_scale.textContent = "Require: " + du1cost.div(decillionthDivision).toExponential(3) + " || Scaling: x" + du1scaling.pow(new Decimal(2)).toString() + " (C1)";
  } else {
    du1_cost_scale.textContent = "Require: " + du1cost.div(decillionthDivision).toExponential(3) + " || Scaling: x" + du1scaling.toString();
  }

  du2_id_amt.textContent = "ID: DU2 || " + du2amt + "/10";
  if (challengeModifier == 1){
    du2_cost_scale.textContent = "Cost: " + du2cost.div(decillionthDivision).toExponential(3) + " || Scaling: x" + du2scaling.pow(new Decimal(2)).toString() + " (C1)";
  } else {
    du2_cost_scale.textContent = "Cost: " + du2cost.div(decillionthDivision).toExponential(3) + " || Scaling: x" + du2scaling.toString();
  }

  //=========================================================================
  //NONILLIONTHS
  if (challengeModifier == 3){
    no_point_pending.textContent = "DISABLED IN C3";
  } else {
    no_point_pending.textContent = "+" + nppending.toExponential(3) + " NP";
  }
  
  no_next_point.textContent = "(next NP at " + npthreshold.div(decillionthDivision).toExponential(3) + " N)";

  nonBoostsDisplay.textContent = nonBoostsString;
  
  nu1_id_amt.textContent = "ID: NU1 || x" + nu1amt;
  if (challengeModifier == 1){
    nu1_cost_scale.textContent = "Cost: " + nu1cost.toExponential(3) + " NP || Scaling: x" + nu1scaling.pow(new Decimal(2)).toString() + " (C1)";
  } else {
    nu1_cost_scale.textContent = "Cost: " + nu1cost.toExponential(3) + " NP || Scaling: x" + nu1scaling;
  }
  
  nu2_id_amt.textContent = "ID: NU2 || " + nu2amt + "/1";
  if (nu2amt.eq(new Decimal(1))){
    nu2_cost_scale.textContent = "Purchased!";
  }

  nu3_id_amt.textContent = "ID: NU3 || " + nu3amt + "/8";
  if (challengeModifier == 1){
    nu3_cost_scale.textContent = "Cost: " + nu3cost.toExponential(3) + " NP || Scaling: x" + nu3scaling.pow(new Decimal(2)).toString() + " (C1)";
  } else {
    nu3_cost_scale.textContent = "Cost: " + nu3cost.toExponential(3) + " NP || Scaling: x" + nu3scaling;
  }

  nu4_id_amt.textContent = "ID: NU4 || " + nu4amt + "/1";
  if (nu4amt.eq(new Decimal(1))){
    nu4_cost_scale.textContent = "Purchased!";
  }

  //=========================================================================
  //OCTILLIONTHS
  op_point_pending.textContent = "+" + oppending.toExponential(3) + " OP";
  
  op_next_point.textContent = "(next OP at " + opthreshold.div(decillionthDivision).toExponential(3) + " N)";

  octBoostsDisplay.textContent = octBoostsString;

  if (challengeModifier == 4){
    op_effect.textContent = "Your " + octillionthPoints.toExponential(3) + " OP is boosting Number gain by x" + octillionthPoints.add(new Decimal(1)).toExponential(3) + "+" + chal4completions.div(new Decimal(2)) + ", but Challenge 4 is active, so this is nullified.";
  } else {
    op_effect.textContent = "Your " + octillionthPoints.toExponential(3) + " OP is boosting Number gain by x" + octillionthPoints.add(new Decimal(1)).toExponential(3) + " (+" + chal1completions.div(new Decimal(2)) + ")";
  }
  
  bottomModifiers.textContent = "Modifiers: None";

  if (sxp_reset_boost_check){
    cc_display.textContent = "You have " + challengeCompletions + " Challenge Completions (CC). (Sextillionth: x2)";
  } else {
    cc_display.textContent = "You have " + challengeCompletions + " Challenge Completions (CC).";
  }

  if (challengeModifier == 1){
    bottomModifiers.textContent = "Modifiers: Challenge 1";
  } else if (challengeModifier == 2){
    bottomModifiers.textContent = "Modifiers: Challenge 2";
  } else if (challengeModifier == 3){
    bottomModifiers.textContent = "Modifiers: Challenge 3";
  } else if (challengeModifier == 4){
    bottomModifiers.textContent = "Modifiers: Challenge 4";
  }
  
  chal1_goal_scale.textContent = "Goal: " + chal1goal.div(decillionthDivision).toExponential(3) + "|| Scaling: ^" + chal1scaling;
  chal1_completions.textContent = chal1completions.toString() + "/100";

  chal2_goal_scale.textContent = "Goal: " + chal2goal.div(decillionthDivision).toExponential(3) + "|| Scaling: x" + chal2scaling;
  chal2_completions.textContent = chal2completions.toString() + "/100";

  chal3_goal_scale.textContent = "Goal: " + chal3goal.div(decillionthDivision).toExponential(3) + "|| Scaling: x" + chal3scaling;
  chal3_completions.textContent = chal3completions.toString() + "/100";

  chal4_goal_scale.textContent = "Goal: " + chal4goal.div(decillionthDivision).toExponential(3) + "|| Scaling: x" + chal4scaling;
  chal4_completions.textContent = chal4completions.toString() + "/100";

  if (challengeModifier == 1){
    chal1_title.textContent = "Challenge I (ACTIVE)";
  } else {
    chal1_title.textContent = "Challenge I";
  }

  if (challengeModifier == 2){
    chal2_title.textContent = "Challenge II (ACTIVE)";
  } else {
    chal2_title.textContent = "Challenge II";
  }

  if (challengeModifier == 3){
    chal3_title.textContent = "Challenge III (ACTIVE)";
  } else {
    chal3_title.textContent = "Challenge III";
  }

  if (challengeModifier == 4){
    chal4_title.textContent = "Challenge IV (ACTIVE)";
  } else {
    chal4_title.textContent = "Challenge IV";
  }

  //=========================================================================
  //SEPTILLIONTHS
  sp_point_pending.textContent = "+" + sppending.toExponential(3) + " SP";
  
  sp_next_point.textContent = "(next SP at " + spthreshold.div(decillionthDivision).toExponential(3) + " N)";

  sepBoostsDisplay.textContent = sepBoostsString;

  if (sxp_reset_boost_check){
    atoms_formula.textContent = "((SXPx5)+AU1+AU2+AU3)^2.5) x (AU4+AU5+AU6) (Sextillionth: x5)";
  } 

  atoms_display.textContent = "You have " + atoms.toExponential(3) + " atoms (A). (" + atomGain.toExponential(3) + " A/s)";
  atoms_boost_display.textContent = "Boost to N: " + atomsBoost.toExponential(3);

  au1_id_amt.textContent = "ID: AU1 || x" + au1amt;
  au1_cost_scale.textContent = "Cost: " + au1cost.toExponential(3) + " A || Scaling: x" + au1scaling;

  au2_id_amt.textContent = "ID: AU2 || x" + au2amt;
  au2_cost_scale.textContent = "Cost: " + au2cost.toExponential(3) + " A || Scaling: x" + au2scaling;

  au3_id_amt.textContent = "ID: AU3 || x" + au3amt;
  au3_cost_scale.textContent = "Cost: " + au3cost.toExponential(3) + " A || Scaling: x" + au3scaling;

  au4_id_amt.textContent = "ID: AU4 || x" + au4amt;
  au4_cost_scale.textContent = "Cost: " + au4cost.toExponential(3) + " A || Scaling: x" + au4scaling;

  au5_id_amt.textContent = "ID: AU5 || x" + au5amt;
  au5_cost_scale.textContent = "Cost: " + au5cost.toExponential(3) + " A || Scaling: x" + au5scaling;

  au6_id_amt.textContent = "ID: AU6 || x" + au6amt;
  au6_cost_scale.textContent = "Cost: " + au6cost.toExponential(3) + " A || Scaling: x" + au6scaling;

  //=========================================================================
  //SEXTILLIONTHS
  sxp_point_pending.textContent = "+" + sxppending.toExponential(3) + " SXP";
  
  sxp_next_point.textContent = "(next SXP at " + sxpthreshold.div(decillionthDivision).toExponential(3) + " N)";

  sxpBoostsDisplay.textContent = sxpBoostsString;
}

//=========================================================================

//    ========         ==        ========
//  ==                ====       ==     ==
//  ==               ==  ==      ==     ==
//  ==              ==    ==     ========
//  ==             ==========    ==
//  ==            ==        ==   ==
//    =========  ==          ==  ==

//=========================================================================

function updateSoftcaps(){
  if (decimalNumber.gte(new Decimal(1e3))){
    minicap = decimalNumber.sub(new Decimal(1e3).sub(new Decimal(1))).pow(new Decimal(0.08));
  } else {
    minicap = new Decimal(1);
  }

  if (decimalNumber.gte(new Decimal(1e8))){
    softcap = decimalNumber.sub(new Decimal(1e8).sub(new Decimal(1))).pow(new Decimal(0.16));
  } else {
    softcap = new Decimal(1);
  }

  if (decimalNumber.gte(new Decimal(1e13))){
    supercap = decimalNumber.sub(new Decimal(1e13).sub(new Decimal(1))).pow(new Decimal(0.24));
  } else {
    supercap = new Decimal(1);
  }

  minicapDisplay.textContent = "Minicap (N gain) starts at 1e-30: /" + minicap.toExponential(3);
  softcapDisplay.textContent = "Softcap (N gain) starts at 1e-25: /" + softcap.toExponential(3);
  supercapDisplay.textContent = "Supercap (N, NP, OP gain) starts at 1e-20: /" + supercap.toExponential(3);
}

//=========================================================================
//AUTOMATION

function automation(){
  if (oct_reset_boost_check || septillionth_unlocked){
    if (!du2.disabled){
      du2.click();
    }
    if (!du1.disabled){
      du1.click();
    }

    if (!nu4.disabled && nonillionthPoints.gte(nu4cost)){
      nu4.click();
    }
    if (!nu2.disabled && nonillionthPoints.gte(nu2cost)){
      nu2.click();
    }
    if (!nu3.disabled && nonillionthPoints.gte(nu3cost)){
      nu3.click();
    }
    if (!nu1.disabled && nonillionthPoints.gte(nu1cost)){
      nu1.click();
    }
  }
}

//=========================================================================
//NEWS TICKER

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var chosenTicker;

function startTicker() {
  const textWidth = ticker.offsetWidth;
  const containerWidth = container.offsetWidth;

  const totalDistance = textWidth + containerWidth;

  const speed = 180;

  const duration = totalDistance / speed;

  ticker.style.transition = "none";
  ticker.style.transform = `translateX(${containerWidth}px)`;

  ticker.offsetHeight;

  ticker.style.transition = `transform ${duration}s linear`;
  ticker.style.transform = `translateX(-${textWidth}px)`;

  ticker.addEventListener("transitionend", () => {
    if (randomNumber(1, 10) == 1){
      chosenTicker = specialTickers[randomNumber(0, specialTickers.length - 1)];
    } else {
      chosenTicker = normalTickers[randomNumber(0, normalTickers.length - 1)];
    }
    ticker.textContent = chosenTicker;
    startTicker();
  }, { once: true });
}

startTicker();

//=========================================================================

//  ========    ========    ========
//  ==      ==  ==        ==
//  ==      ==  ==        ==
//  ==      ==  ========  ==
//  ==      ==  ==        ==
//  ==      ==  ==        ==
//  ========    ========    ========

//=========================================================================

//=========================================================================
//AFFORD DETECTION
function decillionthUpgrades(){
  if (non_reset_boost_check){
    du1.textContent = "Increase N multi" + "\n by +2.5";
  } else {
    du1.textContent = "Increase N multi" + "\n by +2";
  }
  
  if (decimalNumber.gte(du1cost)) {
    du1.disabled = false;
  } else {
    du1.disabled = true;
  }

  if (decimalNumber.gte(du2cost) && du2amt.lt(new Decimal(10))) {
    du2.disabled = false;
  } else {
    du2.disabled = true;
  }
}

//=========================================================================
//CLICK
du1.addEventListener("click", function(){
  if (non_reset_boost_check){
    du1boost = du1boost.add(new Decimal(2.5));
  } else {
    du1boost = du1boost.add(new Decimal(2));
  }
  du1amt = du1amt.add(new Decimal(1));
  
  if (challengeModifier == 1){
    du1cost = du1cost.mul(du1scaling.pow(new Decimal(2)));
  } else {
    du1cost = du1cost.mul(du1scaling);
  }
});

du2.addEventListener("click", function(){
  if (du2amt.lt(new Decimal(10))){
    du2boost = du2boost.mul(new Decimal(1.4));
    du2amt = du2amt.add(new Decimal(1));
    decimalNumber = decimalNumber.sub(du2cost);
  
    if (challengeModifier == 1){
      du2cost = du2cost.mul(du2scaling.pow(new Decimal(2)));
    } else {
      du2cost = du2cost.mul(du2scaling);
    }
  }
});

//=========================================================================

//  ==    ==   ========   ==    ==
//  ===   ==  ==      ==  ===   ==
//  ====  ==  ==      ==  ====  ==
//  == == ==  ==      ==  == == ==
//  ==  ====  ==      ==  ==  ====
//  ==   ===  ==      ==  ==   ===
//  ==    ==   ========   ==    ==

//=========================================================================

//=========================================================================
//RESET DETECTION
function checkNonillionthReset(){
  if (decimalNumber.gte(new Decimal(1000)) && challengeModifier != 3){
    nreset.disabled = false;
  } else {
    nreset.disabled = true;
  }
}

//=========================================================================
//PENDING
function checkPendingNonillionth(){
  if (decimalNumber.gte(new Decimal(1000)) && challengeModifier != 3){
    if (challengeModifier == 1){
      npbase = new Decimal(decimalNumber.div(new Decimal(1000)).logarithm(4)).add(new Decimal(1)).floor();
      npthreshold = npbase.ceil().pow_base(new Decimal(4)).mul(new Decimal(1000));
    } else {
      npbase = new Decimal(decimalNumber.div(new Decimal(1000)).logarithm(2)).add(new Decimal(1)).floor();
      npthreshold = npbase.ceil().pow_base(npscaling).mul(new Decimal(1000));
    }
  } else if (decimalNumber.lt(new Decimal(1000))){
    npbase = new Decimal(0);
  }
  
  nppending = npbase.mul(nu1boost);
  
  if (oct_reset_boost_check){
    nppending = nppending.mul(new Decimal(4));
  }

  if (chal3completions.gte(new Decimal(1))){
    nppending = nppending.mul(chal3completions.div(new Decimal(2)).add(new Decimal(1)));
  }

  if (sep_reset_boost_check){
    nppending = nppending.mul(new Decimal(2));
  }

  if (sxp_reset_boost_check){
    nppending = nppending.mul(new Decimal(10));
  }



  if (supercap.neq(new Decimal(1))){
    nppending = nppending.div(supercap);
  }
}

//=========================================================================
//RESET CLICK
nreset.addEventListener("click", function(){
  nonillionthResetInitiate();
  nonillionth_grid.style.display = "grid";
  nonillionth_grid.classList.remove("hidden");
  main_nonillionth_tab_button.style.display = "inline-block";
  nonillionth_unlocked = true;
  octillionth_tab.style.display = "block";
});

topNP.addEventListener("click", function(){
  if (nreset.disabled == false){
    nonillionthResetInitiate();
    nonillionth_grid.style.display = "grid";
    nonillionth_grid.classList.remove("hidden");
    main_nonillionth_tab_button.style.display = "inline-block";
    nonillionth_unlocked = true;
    octillionth_tab.style.display = "block";
  }
});

//=========================================================================
//AFFORD DETECTION
function nonillionthUpgrades(){
  if (nonillionthPoints.gte(nu1cost)) {
    nu1.disabled = false;
  } else {
    nu1.disabled = true;
  }
  
  if (nonillionthPoints.gte(nu2cost) && !nu2amt.eq(new Decimal(1))) {
    nu2.disabled = false;
  } else {
    nu2.disabled = true;
  }

  if (nonillionthPoints.gte(nu3cost) && !nu3amt.eq(new Decimal(8))) {
    nu3.disabled = false;
  } else {
    nu3.disabled = true;
  }

  if (nonillionthPoints.gte(nu4cost) && !nu4amt.eq(new Decimal(1))) {
    nu4.disabled = false;
  } else {
    nu4.disabled = true;
  }
}

//=========================================================================
//CLICK
nu1.addEventListener("click", function(){
  nonillionthPoints = nonillionthPoints.sub(nu1cost);
  nu1boost = nu1boost.mul(new Decimal(2));
  nu1amt = nu1amt.add(new Decimal(1));
  if (challengeModifier == 1){
    nu1cost = nu1cost.mul(nu1scaling.pow(new Decimal(2)));
  } else {
    nu1cost = nu1cost.mul(nu1scaling);
  }
  
  checkPendingNonillionth();
});

nu2.addEventListener("click", function(){
  nonillionthPoints = nonillionthPoints.sub(nu2cost);
  nu2amt = nu2amt.add(new Decimal(1));
  
  nu2ImpactIteration();
});

nu3.addEventListener("click", function(){
  nonillionthPoints = nonillionthPoints.sub(nu3cost);
  nu3boost = nu3boost.mul(new Decimal(3));
  nu3amt = nu3amt.add(new Decimal(1));
  if (challengeModifier == 1){
    nu3cost = nu3cost.mul(nu3scaling.pow(new Decimal(2)));
  } else {
    nu3cost = nu3cost.mul(nu3scaling);
  }
  
  checkPendingNonillionth();
});

nu4.addEventListener("click", function(){
  nonillionthPoints = nonillionthPoints.sub(nu4cost);
  nu4amt = nu4amt.add(new Decimal(1));
  
  nu1scaling = new Decimal(3);
  nu3scaling = new Decimal(6);
  nu4ImpactIteration();
});

//=========================================================================
//NU# SPECIFIC
function nu2ImpactIteration(){
  let savedValue = du1amt;
  du1amt = new Decimal(0);
  du1cost = new Decimal(4);
  for (var nu2IICounter = new Decimal(0); nu2IICounter.lt(savedValue); nu2IICounter = nu2IICounter.add(new Decimal(1))){
    du1cost = du1cost.mul(du1scaling);
    du1amt = du1amt.add(new Decimal(1));
  }
}

function nu4ImpactIteration(){
  let savedNu1Value = nu1amt;
  nu1amt = new Decimal(0);
  nu1cost = new Decimal(1);
  for (var nu4IICounter = new Decimal(0); nu4IICounter.lt(savedNu1Value); nu4IICounter = nu4IICounter.add(new Decimal(1))){
    if (challengeModifier == 1){
      nu1cost = nu1cost.mul(nu1scaling.pow(new Decimal(2)));
    } else {
      nu1cost = nu1cost.mul(nu1scaling);
    }
    nu1amt = nu1amt.add(new Decimal(1));
  }

  let savedNu3Value = nu3amt;
  nu3amt = new Decimal(0);
  nu3cost = new Decimal(10);
  for (var nu4IICounter = new Decimal(0); nu4IICounter.lt(savedNu3Value); nu4IICounter = nu4IICounter.add(new Decimal(1))){
    if (challengeModifier == 1){
      nu3cost = nu3cost.mul(nu3scaling.pow(new Decimal(2)));
    } else {
      nu3cost = nu3cost.mul(nu3scaling);
    }
    nu3amt = nu3amt.add(new Decimal(1));
  }
}

//=========================================================================

//   ========     ========  ==========
//  ==      ==  ==              ==
//  ==      ==  ==              ==
//  ==      ==  ==              ==
//  ==      ==  ==              ==
//  ==      ==  ==              ==
//   ========     ========      ==

//=========================================================================

//=========================================================================
//TABS
oct_infobox_tab_button.addEventListener("click", function(){
  oct_challenge_tab.style.display = "none";
  oct_infobox_tab.style.display = "block";
  
  oct_challenge_tab_button.classList.add("oct-dark")
  oct_challenge_tab_button.classList.remove("oct-light");
  
  oct_infobox_tab_button.classList.add("oct-light");
  oct_infobox_tab_button.classList.remove("oct-dark");
});

oct_challenge_tab_button.addEventListener("click", function(){
  oct_infobox_tab.style.display = "none";
  oct_challenge_tab.style.display = "grid";
  
  oct_infobox_tab_button.classList.add("oct-dark")
  oct_infobox_tab_button.classList.remove("oct-light");
  
  oct_challenge_tab_button.classList.add("oct-light");
  oct_challenge_tab_button.classList.remove("oct-dark"); 
});

//=========================================================================
//RESET DETECTION
function checkOctillionthReset(){
  if (decimalNumber.gte(new Decimal.pow(10, 6))) {
    oreset.disabled = false;
  } else {
    oreset.disabled = true;
  }
}

//=========================================================================
//PENDING
function checkPendingOctillionth(){ 
  if (decimalNumber.gte(new Decimal.pow(10, 6))){
    opbase = new Decimal(decimalNumber.div(new Decimal(1000000)).logarithm(3)).add(new Decimal(1)).floor();
    opthreshold = opbase.ceil().pow_base(opscaling).mul(new Decimal.pow(10, 6));
  } else if (decimalNumber.lt(new Decimal.pow(10, 6))){
    opbase = new Decimal(0);
  }

  oppending = new Decimal(opbase);

  if (chal2completions.gte(new Decimal(1))){
    oppending = oppending.mul(chal2completions.div(new Decimal(2)).add(new Decimal(1)));
  }

  if (ccm1unlocked){
    oppending = oppending.mul(challengeCompletions.div(new Decimal(2)).add(new Decimal(1)));
  }

  if (sep_reset_boost_check){
    oppending = oppending.mul(new Decimal(2));
  }

  if (sxp_reset_boost_check){
    oppending = oppending.mul(new Decimal(10));
  }



  if (supercap.neq(new Decimal(1))){
    nppending = nppending.div(supercap);
  }
}

//=========================================================================
//RESET CLICK
oreset.addEventListener("click", function(){
  octillionthResetInitiate();
  octillionth_main_section.style.display = "grid";
  main_octillionth_tab_button.style.display = "inline-block";
  octillionth_unlocked = true;
});

topOP.addEventListener("click", function(){
  if (oreset.disabled == false){
    octillionthResetInitiate();
    octillionth_main_section.style.display = "grid";
    main_octillionth_tab_button.style.display = "inline-block";
    octillionth_unlocked = true;
  }
});

//=========================================================================
//CHALLENGE ACTIVATION
chal1.addEventListener("click", function(){
  octillionthResetInitiate();
  
  if (challengeModifier != 1){
    challengeModifier = 1;
  } else {
    challengeModifier = 0;
  }
});

chal2.addEventListener("click", function(){
  octillionthResetInitiate();
  
  if (challengeModifier != 2){
    challengeModifier = 2;
  } else {
    challengeModifier = 0;
  }
});

chal3.addEventListener("click", function(){
  octillionthResetInitiate();
  
  if (challengeModifier != 3){
    challengeModifier = 3;
  } else {
    challengeModifier = 0;
  }
});

chal4.addEventListener("click", function(){
  octillionthResetInitiate();
  
  if (challengeModifier != 4){
    challengeModifier = 4;
  } else {
    challengeModifier = 0;
  }
});

//=========================================================================
//CHALLENGE GOAL CHECKING
function chal1GoalChecking(){
  if (decimalNumber.gte(chal1goal) && challengeModifier == 1 && chal1completions.lt(new Decimal(100))){
    chal1goal = chal1goal.pow(chal1scaling);
    chal1completions = chal1completions.add(new Decimal(1));
  }
}

function chal2GoalChecking(){
  if (decimalNumber.gte(chal2goal) && challengeModifier == 2 && chal2completions.lt(new Decimal(100))){
    chal2goal = chal2goal.mul(chal2scaling);
    chal2completions = chal2completions.add(new Decimal(1));
  }
}

function chal3GoalChecking(){
  if (decimalNumber.gte(chal3goal) && challengeModifier == 3 && chal3completions.lt(new Decimal(100))){
    chal3goal = chal3goal.mul(chal3scaling);
    chal3completions = chal3completions.add(new Decimal(1));
  }
}

function chal4GoalChecking(){
  if (decimalNumber.gte(chal4goal) && challengeModifier == 4 && chal4completions.lt(new Decimal(100))){
    chal4goal = chal4goal.mul(chal4scaling);
    chal4completions = chal4completions.add(new Decimal(1));
  }
}

//=========================================================================
//MILESTONES

function checkCCM(){
  if (challengeCompletions.gte(new Decimal(3))){
    ccm1.classList.add("oct-light");
    ccm1.classList.remove("oct-dark");
    ccm1unlocked = true;
  } else {
    ccm1.classList.add("oct-dark");
    ccm1.classList.remove("oct-light");
    ccm1unlocked = false;
  }

  if (challengeCompletions.gte(new Decimal(10))){
    ccm2.classList.add("oct-light");
    ccm2.classList.remove("oct-dark");
    ccm2unlocked = true;
  } else {
    ccm2.classList.add("oct-dark");
    ccm2.classList.remove("oct-light");
    ccm2unlocked = false;
  }

  if (challengeCompletions.gte(new Decimal(20))){
    ccm3.classList.add("oct-light");
    ccm3.classList.remove("oct-dark");
    ccm3unlocked = true;
  } else {
    ccm3.classList.add("oct-dark");
    ccm3.classList.remove("oct-light");
    ccm3unlocked = false;
  }

  if (ccm3unlocked || main_septillionth_tab_button.style.display == "inline-block"){
    if (main_septillionth_tab_button.classList.contains("sep-light")){
      septillionth_tab.style.display = "block";
    }
    main_septillionth_tab_button.style.display = "inline-block";
  }
}

//=========================================================================

//   ========   ========  ========
//  ==          ==        ==     ==
//  ==          ==        ==     ==
//   ========   ========  ========
//          ==  ==        ==
//          ==  ==        ==
//   ========   ========  ==

//=========================================================================

//=========================================================================
//TABS
sep_infobox_tab_button.addEventListener("click", function(){
  septillionthGrid.style.display = "none";
  sep_infobox_tab.style.display = "block";
  
  sep_atom_tab_button.classList.add("sep-dark")
  sep_atom_tab_button.classList.remove("sep-light");
  
  sep_infobox_tab_button.classList.add("sep-light");
  sep_infobox_tab_button.classList.remove("sep-dark");
});

sep_atom_tab_button.addEventListener("click", function(){
  sep_infobox_tab.style.display = "none";
  septillionthGrid.style.display = "grid";
  
  sep_infobox_tab_button.classList.add("sep-dark")
  sep_infobox_tab_button.classList.remove("sep-light");
  
  sep_atom_tab_button.classList.add("sep-light");
  sep_atom_tab_button.classList.remove("sep-dark"); 
});

//=========================================================================
//RESET DETECTION
function checkSeptillionthReset(){
  if (decimalNumber.gte(new Decimal.pow(10, 9))) {
    spreset.disabled = false;
  } else {
    spreset.disabled = true;
  }
}

//=========================================================================
//PENDING
function checkPendingSeptillionth(){ 
  if (decimalNumber.gte(new Decimal.pow(10, 9))){
    if (sxp_reset_boost_check){
      spbase = new Decimal(decimalNumber.div(new Decimal.pow(10, 9)).logarithm(4)).add(new Decimal(1)).floor();
      spthreshold = spbase.ceil().pow_base(new Decimal(4)).mul(new Decimal.pow(10, 9));
    } else {
      spbase = new Decimal(decimalNumber.div(new Decimal.pow(10, 9)).logarithm(10)).add(new Decimal(1)).floor();
      spthreshold = spbase.ceil().pow_base(spscaling).mul(new Decimal.pow(10, 9));
    }
  } else if (decimalNumber.lt(new Decimal.pow(10, 9))){
    spbase = new Decimal(0);
  }

  sppending = new Decimal(spbase);

  if (sxp_reset_boost_check){
    sppending = sppending.mul(new Decimal(10));
  }
}

//=========================================================================
//RESET CLICK
spreset.addEventListener("click", function(){
  septillionthResetInitiate();
  septillionth_unlocked = true;
  septillionth_main_section.style.display = "grid";
  sextillionth_tab.style.display = "block";
  main_sextillionth_tab_button.style.display = "inline-block";
});

topSP.addEventListener("click", function(){
  if (spreset.disabled == false){
    septillionthResetInitiate();
    septillionth_unlocked = true;
    septillionth_main_section.style.display = "grid";
    sextillionth_tab.style.display = "block";
    main_sextillionth_tab_button.style.display = "inline-block";
  } 
});

//=========================================================================
//IS ATOM UPGRADE AFFORDABLE
function checkAU(){
  if (atoms.gte(new Decimal(au1cost))){
    au1.disabled = false;
    if (au1.classList.contains("sep-dark")){
      au1.classList.remove("sep-dark");
      au1.classList.add("sep-light");
    }
  } else {
    au1.disabled = true;
    if (au1.classList.contains("sep-light")){
      au1.classList.remove("sep-light");
      au1.classList.add("sep-dark");
    }
  }
  
  if (atoms.gte(new Decimal(au2cost))){
    au2.disabled = false;
    if (au2.classList.contains("sep-dark")){
      au2.classList.remove("sep-dark");
      au2.classList.add("sep-light");
    }
  } else {
    au2.disabled = true;
    if (au2.classList.contains("sep-light")){
      au2.classList.remove("sep-light");
      au2.classList.add("sep-dark");
    }
  }
  
  if (atoms.gte(new Decimal(au3cost))){
    au3.disabled = false;
    if (au3.classList.contains("sep-dark")){
      au3.classList.remove("sep-dark");
      au3.classList.add("sep-light");
    }
  } else {
    au3.disabled = true;
    if (au3.classList.contains("sep-light")){
      au3.classList.remove("sep-light");
      au3.classList.add("sep-dark");
    }
  }
  
  if (atoms.gte(new Decimal(au4cost))){
    au4.disabled = false;
    if (au4.classList.contains("sep-dark")){
      au4.classList.remove("sep-dark");
      au4.classList.add("sep-light");
    }
  } else {
    au4.disabled = true;
    if (au4.classList.contains("sep-light")){
      au4.classList.remove("sep-light");
      au4.classList.add("sep-dark");
    }
  }
  
  if (atoms.gte(new Decimal(au5cost))){
    au5.disabled = false;
    if (au5.classList.contains("sep-dark")){
      au5.classList.remove("sep-dark");
      au5.classList.add("sep-light");
    }
  } else {
    au5.disabled = true;
    if (au5.classList.contains("sep-light")){
      au5.classList.remove("sep-light");
      au5.classList.add("sep-dark");
    }
  }
  
  if (atoms.gte(new Decimal(au6cost))){
    au6.disabled = false;
    if (au6.classList.contains("sep-dark")){
      au6.classList.remove("sep-dark");
      au6.classList.add("sep-light");
    }
  } else {
    au6.disabled = true;
    if (au6.classList.contains("sep-light")){
      au6.classList.remove("sep-light");
      au6.classList.add("sep-dark");
    }
  }
}

//=========================================================================
//ATOM UPGRADE CLICKS

au1.addEventListener("click", function(){
  atoms = atoms.sub(au1cost);
  au1amt = au1amt.add(new Decimal(1));
  
  au1cost = au1cost.mul(au1scaling);
  au123boost = au123boost.add(new Decimal(0.5));
});

au2.addEventListener("click", function(){
  atoms = atoms.sub(au2cost);
  au2amt = au2amt.add(new Decimal(1));
  
  au2cost = au2cost.mul(au2scaling);
  au123boost = au123boost.add(new Decimal(2));
});

au3.addEventListener("click", function(){
  atoms = atoms.sub(au3cost);
  au3amt = au3amt.add(new Decimal(1));
  
  au3cost = au3cost.mul(au3scaling);
  au123boost = au123boost.add(new Decimal(5));
});

au4.addEventListener("click", function(){
  atoms = atoms.sub(au4cost);
  au4amt = au4amt.add(new Decimal(1));
  
  au4cost = au4cost.mul(au4scaling);
  au456boost = au456boost.add(new Decimal(2));
});

au5.addEventListener("click", function(){
  atoms = atoms.sub(au5cost);
  au5amt = au5amt.add(new Decimal(1));
  
  au5cost = au5cost.mul(au5scaling);
  au456boost = au456boost.add(new Decimal(10));
});

au6.addEventListener("click", function(){
  atoms = atoms.sub(au6cost);
  au6amt = au6amt.add(new Decimal(1));
  
  au6cost = au6cost.mul(au6scaling);
  au456boost = au456boost.add(new Decimal(50));
});

//=========================================================================

//   ========   ==    ==  ========
//  ==           ==  ==   ==     ==
//  ==            ====    ==     ==
//   ========      ==     ========
//          ==    ====    ==
//          ==   ==  ==   ==
//   ========   ==    ==  ==

//=========================================================================

//=========================================================================
//RESET DETECTION
function checkSextillionthReset(){
  if (decimalNumber.gte(new Decimal.pow(10, 12))) {
    sxpreset.disabled = false;
  } else {
    sxpreset.disabled = true;
  }
}

//=========================================================================
//PENDING
function checkPendingSextillionth(){  //MAKE SURE THE NUMBERS IN POW_BASE IN THRESHOLD AND THE .LOGARITHM IN BASE ARE THE SAME!!!!
  if (decimalNumber.gte(new Decimal.pow(10, 12))){  //I RECOMMEND USING THE RESPECTIVE SCALING VARIABLE FOR POW_BASE!!!!
    sxpbase = new Decimal(decimalNumber.div(new Decimal.pow(10, 12)).logarithm(2)).add(new Decimal(1)).floor();
    sxpthreshold = sxpbase.ceil().pow_base(sxpscaling).mul(new Decimal.pow(10, 12));
  } else if (decimalNumber.lt(new Decimal.pow(10, 12))){
    sxpbase = new Decimal(0);
  }

  sxppending = new Decimal(sxpbase);
}

//=========================================================================
//RESET CLICK
sxpreset.addEventListener("click", function(){
  sextillionthResetInitiate();
  sextillionth_unlocked = true;
  sextillionth_main_section.style.display = "grid";
});

topSXP.addEventListener("click", function(){
  if (sxpreset.disabled == false){
    sextillionthResetInitiate();
    sextillionth_unlocked = true;
    sextillionth_main_section.style.display = "grid";
  } 
});

//=========================================================================

//   ========         ==        ==          ==  ========
//  ==               ====        ==        ==   ==
//  ==              ==  ==        ==      ==    ==
//   ========      ==    ==        ==    ==     ========
//          ==    ==========        ==  ==      ==
//          ==   ==        ==        ====       ==
//   ========   ==          ==        ==        ========

//=========================================================================
setInterval(function(){
  saveGame();
  backgroundColorChange();
}, 10000);

window.onload = function(){
  loadGame();
}

function saveGame() {
  const saveData = {
    sliderPos: sliderPos.toString(),
    challengeModifier: challengeModifier.toString(),

    decimalNumber: decimalNumber.toString(),
    numberGain: numberGain.toString(),

    du1boost: du1boost.toString(),
    du1amt: du1amt.toString(),
    du1cost: du1cost.toString(),

    du2boost: du2boost.toString(),
    du2amt: du2amt.toString(),
    du2cost: du2cost.toString(),

    nonillionthPoints: nonillionthPoints.toString(),
    npbase: npbase.toString(),
    npthreshold: npthreshold.toString(),
    non_reset_boost_check: non_reset_boost_check.toString(),
    nonillionth_unlocked: nonillionth_unlocked.toString(),

    nu1boost: nu1boost.toString(),
    nu1amt: nu1amt.toString(),
    nu1cost: nu1cost.toString(),
    nu2amt: nu2amt.toString(),
    nu2cost: nu2cost.toString(),
    nu3boost: nu3boost.toString(),
    nu3amt: nu3amt.toString(),
    nu3cost: nu3cost.toString(),
    nu4amt: nu4amt.toString(),
    nu4cost: nu4cost.toString(),

    octillionthPoints: octillionthPoints.toString(),
    opbase: opbase.toString(),
    opthreshold: opthreshold.toString(),
    oct_reset_boost_check: oct_reset_boost_check.toString(),
    octillionth_unlocked: octillionth_unlocked.toString(),

    chal1completions: chal1completions.toString(),
    chal1goal: chal1goal.toString(),

    chal2completions: chal2completions.toString(),
    chal2goal: chal2goal.toString(),

    chal3completions: chal3completions.toString(),
    chal3goal: chal3goal.toString(),

    chal4completions: chal4completions.toString(),
    chal4goal: chal4goal.toString(),

    septillionthPoints: septillionthPoints.toString(),
    spbase: spbase.toString(),
    spthreshold: spthreshold.toString(),
    sep_reset_boost_check: sep_reset_boost_check.toString(),
    septillionth_unlocked: septillionth_unlocked.toString(),

    au123boost: au123boost.toString(),
    au456boost: au456boost.toString(),

    au1amt: au1amt.toString(),
    au1cost: au1cost.toString(),

    au2amt: au2amt.toString(),
    au2cost: au2cost.toString(),

    au3amt: au3amt.toString(),
    au3cost: au3cost.toString(),

    au4amt: au4amt.toString(),
    au4cost: au4cost.toString(),

    au5amt: au5amt.toString(),
    au5cost: au5cost.toString(),

    au6amt: au6amt.toString(),
    au6cost: au6cost.toString(),

    atoms: atoms.toString(),
    atomGain: atomGain.toString(),

    sextillionthPoints: sextillionthPoints.toString(),
    sxpbase: sxpbase.toString(),
    sxpthreshold: sxpthreshold.toString(),
    sxp_reset_boost_check: sxp_reset_boost_check.toString(),
    sextillionth_unlocked: sextillionth_unlocked.toString(),
  };
  
  localStorage.setItem("quinquaginticSave", JSON.stringify(saveData));
}

function loadGame() {
  const saved = localStorage.getItem("quinquaginticSave");
  if (!saved) return;

  const data = JSON.parse(saved);

  sliderPos = data.sliderPos;
  slider.value = sliderPos;
  numberDisplay.style.fontSize = sliderPos + "px";
  challengeModifier = Number(data.challengeModifier);

  decimalNumber = new Decimal(data.decimalNumber);
  numberGain = new Decimal(data.numberGain);

  du1boost = new Decimal(data.du1boost);
  du1amt = new Decimal(data.du1amt);
  du1cost = new Decimal(data.du1cost);

  du2boost = new Decimal(data.du2boost);
  du2amt = new Decimal(data.du2amt);
  du2cost = new Decimal(data.du2cost);

  nonillionthPoints = new Decimal(data.nonillionthPoints);
  npbase = new Decimal(data.npbase);
  npthreshold = new Decimal(data.npthreshold);
  non_reset_boost_check = data.non_reset_boost_check === 'true';
  nonillionth_unlocked = data.nonillionth_unlocked === 'true';

  nu1boost = new Decimal(data.nu1boost);
  nu1amt = new Decimal(data.nu1amt);
  nu1cost = new Decimal(data.nu1cost);
  nu2amt = new Decimal(data.nu2amt);
  nu2cost = new Decimal(data.nu2cost);
  nu3boost = new Decimal(data.nu3boost);
  nu3amt = new Decimal(data.nu3amt);
  nu3cost = new Decimal(data.nu3cost);
  nu4amt = new Decimal(data.nu4amt);
  nu4cost = new Decimal(data.nu4cost);

  octillionthPoints = new Decimal(data.octillionthPoints);
  opbase = new Decimal(data.opbase);
  opthreshold = new Decimal(data.opthreshold);
  oct_reset_boost_check = data.oct_reset_boost_check === 'true';
  octillionth_unlocked = data.octillionth_unlocked === 'true';

  chal1completions = new Decimal(data.chal1completions);
  chal1goal = new Decimal(data.chal1goal);

  chal2completions = new Decimal(data.chal2completions);
  chal2goal = new Decimal(data.chal2goal);

  chal3completions = new Decimal(data.chal3completions);
  chal3goal = new Decimal(data.chal3goal);

  chal4completions = new Decimal(data.chal4completions);
  chal4goal = new Decimal(data.chal4goal);

  septillionthPoints = new Decimal(data.septillionthPoints);
  spbase = new Decimal(data.spbase);
  spthreshold = new Decimal(data.spthreshold);
  sep_reset_boost_check = data.sep_reset_boost_check === 'true';
  septillionth_unlocked = data.septillionth_unlocked === 'true';

  au123boost = new Decimal(data.au123boost);
  au456boost = new Decimal(data.au456boost);

  au1amt = new Decimal(data.au1amt);
  au1cost = new Decimal(data.au1cost);

  au2amt = new Decimal(data.au2amt);
  au2cost = new Decimal(data.au2cost);

  au3amt = new Decimal(data.au3amt);
  au3cost = new Decimal(data.au3cost);

  au4amt = new Decimal(data.au4amt);
  au4cost = new Decimal(data.au4cost);

  au5amt = new Decimal(data.au5amt);
  au5cost = new Decimal(data.au5cost);

  au6amt = new Decimal(data.au6amt);
  au6cost = new Decimal(data.au6cost);

  atoms = new Decimal(data.atoms || "0");
  atomGain = new Decimal(data.atomGain || "0");

  sextillionthPoints = new Decimal(data.sextillionthPoints || "0");
  sxpbase = new Decimal(data.sxpbase || "0");
  sxpthreshold = new Decimal(data.sxpthreshold || "1000000000000");
  sxp_reset_boost_check = data.sxp_reset_boost_check === 'true';
  sextillionth_unlocked = data.sextillionth_unlocked === 'true';

  if (nonillionth_unlocked){
    nonillionth_grid.style.display = "grid";
    main_nonillionth_tab_button.style.display = "inline-block";
  }
  if (octillionth_unlocked){
    octillionth_tab.style.display = "block";
    octillionth_main_section.style.display = "grid";
    main_octillionth_tab_button.style.display = "inline-block";

    nonillionth_grid.style.display = "grid";
    main_nonillionth_tab_button.style.display = "inline-block";
  }
  if (septillionth_unlocked){
    septillionth_tab.style.display = "block";
    septillionth_main_section.style.display = "grid";
    main_septillionth_tab_button.style.display = "inline-block";

    octillionth_tab.style.display = "block";
    octillionth_main_section.style.display = "grid";
    main_octillionth_tab_button.style.display = "inline-block";

    nonillionth_grid.style.display = "grid";
    main_nonillionth_tab_button.style.display = "inline-block";
  }
  if (sextillionth_unlocked){
    sextillionth_tab.style.display = "block";
    sextillionth_main_section.style.display = "grid";
    main_sextillionth_tab_button.style.display = "inline-block";

    septillionth_tab.style.display = "block";
    septillionth_main_section.style.display = "grid";
    main_septillionth_tab_button.style.display = "inline-block";

    octillionth_tab.style.display = "block";
    octillionth_main_section.style.display = "grid";
    main_octillionth_tab_button.style.display = "inline-block";

    nonillionth_grid.style.display = "grid";
    main_nonillionth_tab_button.style.display = "inline-block";
  }
}

function backgroundColorChange() {
  let colorStep = 0;
  let loop = setInterval(function() {
    colorStep += 1;
    document.body.style.backgroundColor = "rgb(" + colorStep + "," + colorStep + "," + colorStep + ")";
    if (colorStep >= 48) {
      clearInterval(loop);
    }
  }, 50);
}

//=========================================================================

//        ==        ========    ==    ==  ==========  ==    ==
//       ====       ==      ==  ===  ===      ==      ===   ==
//      ==  ==      ==      ==  ========      ==      ====  ==
//     ==    ==     ==      ==  == == ==      ==      == == ==
//    ==========    ==      ==  ==    ==      ==      ==  ====
//   ==        ==   ==      ==  ==    ==      ==      ==   ===
//  ==          ==  ========    ==    ==  ==========  ==    ==

//=========================================================================

window.addEventListener("keydown", function(event) {
  if (event.key === "J"){
    decimalNumber = decimalNumber.mul(new Decimal(1000)); //Skip to Octillionth.
    updateScreen();
  }
  if (event.key === "L"){
    chal3completions = chal3completions.add(new Decimal(20));
    decimalNumber = decimalNumber.mul(new Decimal.pow(10, 9)); //Skip to Septillionth.
    updateScreen();
  }
  if (event.key === ":"){
    sextillionth_tab.style.display = "block";
    decimalNumber = decimalNumber.mul(new Decimal.pow(10, 12)); //Skip to Sextillionth.
    updateScreen();
  }
});

//DO NOT USE THE FOLLOWING PIECE OF CODE:
//localStorage.removeItem("quinquaginticSave");

//=========================================================================
//SLIDER
slider.addEventListener("input", () => {
  sliderPos = slider.value;
  numberDisplay.style.fontSize = sliderPos + "px";
});

//=========================================================================
//RESET BUTTON
const reset_activation = document.getElementById("reset-activation");
reset_button.addEventListener("click", function(){
  localStorage.removeItem("quinquaginticSave");
  reset_activation.textContent = "Status: RESET INITIATED. REFRESH TO FULLY RESET. WAIT UNTIL SAVE TO CANCEL RESET."
});