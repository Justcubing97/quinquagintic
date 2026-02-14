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
  "…I just want a girl to hug me. The next best thing is to hold something soft in bed, but it’s not as good as what I could be getting.",
  "and this is why i sit at my computer 12 hours a day. i want to be doing something else, but nothing feels right without a companion. it just… feels empty.                                                                                                                           I ate 27 orange slices.",
  "and this is why i sit at my computer 12 hours a day. i want to be doing something else, but nothing feels right without a companion. anyway, back to trying to solve the collatz conjecture.",
];

//Thousandth: "Take it slow! Love is like the Thousandth Section: start slow, but keep progressing slowly and eventually you win!" "THPM18 now exists: Pentate ALL D.D. currencies to 97! Cost: 1e9.7e200 THP";
//Billionth: "BPM1-6 WILL reset at some point. Not now."
//Octillionth: "Apparently Challenge Completions are a currency now." "Introducing CCM5: x1 ALL CURRENCIES and +0 CC at the cost of 1e727 CC!"

var number = new Decimal(1);
var numberGain;

var numberString = "";
var numberStringFinal = "";

var boostsString = "";
var nonBoostsString = "";
var octBoostsString = "";

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

//=========================================================================
//NON MAGIC CONSTS
const numberTickspeedDivisor = new Decimal(20);
const numberRounding = new Decimal(100);
const numberDecimalPlaces = new Decimal(3);
const decillionthDivision = new Decimal.pow(10, 33);

//=========================================================================
//UNLOCK CHECKS
var nonillionth_unlocked = false;
var octillionth_unlocked = false;

//=========================================================================
//RESET BOOSTS
var non_reset_boost_check = false;
var oct_reset_boost_check = false;

//=========================================================================
//SOFTCAP EFFECTS
var minicap = new Decimal(1);
var softcap = new Decimal(1);

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
const main_number_tab_button = document.getElementById("main-number-tab-button");
const main_caps_tab_button = document.getElementById("main-caps-tab-button");
const main_decillionth_tab_button = document.getElementById("main-decillionth-tab-button");
const main_nonillionth_tab_button = document.getElementById("main-nonillionth-tab-button");
const main_octillionth_tab_button = document.getElementById("main-octillionth-tab-button");

const oct_infobox_tab = document.getElementById("oct-infobox-tab");
const oct_challenge_tab = document.getElementById("oct-challenge-tab");
const oct_infobox_tab_button = document.getElementById("oct-infobox-tab-button");
const oct_challenge_tab_button = document.getElementById("oct-challenge-tab-button");

//=========================================================================
//TOP
const topNumber = document.getElementById("top-number");
const topNP = document.getElementById("top-np");
const topOP = document.getElementById("top-op");
const topSP = document.getElementById("top-sp");

//=========================================================================
//BOTTOM
const bottomModifiers = document.getElementById("bottom-modifiers");
const news_tickers = document.getElementById("news-tickers");

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
  number = new Decimal(1);
  
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
  number = new Decimal(1);
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

//=========================================================================
//ACTUAL FUNCTIONS

function calculateGain(){
  numberGain = new Decimal(1);
  
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

  if (minicap.neq(new Decimal(1))){
    numberGain = numberGain.div(minicap);
  }

  if (challengeModifier == 2){
    numberGain = numberGain.pow(new Decimal(1).div(number.pow(new Decimal(0.06))));
  }
}

function updateCurrencies(){
  //=========================================================================
  //NUMBER
  number = number.add(numberGain.div(numberTickspeedDivisor)); //CHANGE THIS BACK TO 20
  number = number.mul(numberRounding);
  number = number.round();
  number = number.div(numberRounding);
  numberString = number.toFixed(numberDecimalPlaces);
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
    boostsString += "OP: x" + octillionthPoints.add(new Decimal(1)) + "+" + chal1completions.div(new Decimal(2)) + ", ";
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

  //=========================================================================
  //OCTILLIONTHS
  octBoostsString = "Boosts: ";

  if (chal2completions.gte(1)){
    octBoostsString += "C2: x" + chal2completions.div(new Decimal(2)).add(new Decimal(1)) + ", ";
  }
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
  topNumber.textContent = "N: " + number.div(decillionthDivision).toExponential(3) + " (+" + numberGain.div(decillionthDivision).toExponential(3) + "/s)";

  if (challengeModifier == 3){
    topNP.textContent = "NP: DISABLED IN C3";
  } else {
    topNP.textContent = "NP: " + nonillionthPoints.toExponential(3) + " (+" + nppending.toExponential(3) + ")";
  }

  if (octillionth_tab.style.display == "block"){
    topOP.textContent = "OP: " + octillionthPoints.toExponential(3) + " (+" + oppending.toExponential(3) + ")";
  } else {
    topOP.textContent = "";
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

  nu3_id_amt.textContent = "ID: NU3 || x" + nu3amt;
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
    op_effect.textContent = "Your " + octillionthPoints.toString() + " OP is boosting Number gain by x" + octillionthPoints.add(new Decimal(1)).toString() + "+" + chal4completions.div(new Decimal(2)) + ", but Challenge 4 is active, so this is nullified.";
  } else {
    op_effect.textContent = "Your " + octillionthPoints.toString() + " OP is boosting Number gain by x" + octillionthPoints.add(new Decimal(1)).toString() + "+" + chal1completions.div(new Decimal(2));
  }
  
  bottomModifiers.textContent = "Modifiers: None";

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
  if (number.gte(new Decimal(1e3))){
    minicap = number.sub(new Decimal(1e3).sub(new Decimal(1))).pow(new Decimal(0.05));
  } else {
    minicap = new Decimal(1);
  }

  if (number.gte(new Decimal(1e8))){
    softcap = number.sub(new Decimal(1e8).sub(new Decimal(1))).pow(new Decimal(0.1));
  } else {
    softcap = new Decimal(1);
  }

  minicapDisplay.textContent = "Minicap (N gain) starts at 1e-30: /" + minicap.toExponential(3);
  softcapDisplay.textContent = "Softcap (N gain) starts at 1e-30: /" + softcap.toExponential(3);
}

//=========================================================================
//AUTOMATION

function automation(){
  if (oct_reset_boost_check){
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
var tickerTimer = 1;

setInterval(function(){
  tickerTimer += 1;

  if (tickerTimer == 1){
    chosenTicker = "";
    
    if (randomNumber(1, 10) == 1){
      chosenTicker = specialTickers[randomNumber(0, specialTickers.length - 1)];
    } else {
      chosenTicker = normalTickers[randomNumber(0, normalTickers.length - 1)];
    }

    news_tickers.textContent = chosenTicker;
  } else if (tickerTimer >= 30){
    if (tickerTimer == 30){
      news_tickers.textContent = "Loading...";
    } else if (tickerTimer == 31){
      news_tickers.textContent = "Loading..";
    } else if (tickerTimer == 32){
      news_tickers.textContent = "Loading.";
      tickerTimer = 0;
    }
  }
}, 500);

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
  
  if (number.gte(du1cost)) {
    du1.disabled = false;
  } else {
    du1.disabled = true;
  }

  if (number.gte(du2cost) && du2amt.lt(new Decimal(10))) {
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
    number = number.sub(du2cost);
  
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
  if (number.gte(new Decimal(1000)) && challengeModifier != 3){
    nreset.disabled = false;
  } else {
    nreset.disabled = true;
  }
}

//=========================================================================
//PENDING
function checkPendingNonillionth(){
  if (number.gte(npthreshold) && challengeModifier != 3){
    if (challengeModifier == 1){
      npthreshold = npthreshold.mul(npscaling.pow(new Decimal(2)));
    } else {
      npthreshold = npthreshold.mul(npscaling);
    }
    
    npbase = npbase.add(new Decimal(1));
  } else if (number.lt(npthreshold.div(npscaling)) && number.gte(new Decimal(1000)) && challengeModifier != 1){ //If you're broke then you can't get NP HAHA
    npbase = npbase.sub(new Decimal(1));
    npthreshold = npthreshold.div(npscaling);
  } else if (number.lt(npthreshold.div(npscaling.pow(new Decimal(2)))) && number.gte(new Decimal(1000)) && challengeModifier == 1){ //If you're broke then you can't get NP HAHA (challenge 1 version)
    npbase = npbase.sub(new Decimal(1));
    npthreshold = npthreshold.div(npscaling.pow(new Decimal(2)));
  } else if (number.lt(new Decimal(1000))){
    npbase = new Decimal(0);
    npthreshold = new Decimal(1000);
  }
  
  nppending = npbase.mul(nu1boost);
  
  if (oct_reset_boost_check){
    nppending = nppending.mul(new Decimal(4));
  }

  if (chal3completions.gte(new Decimal(1))){
    nppending = nppending.mul(chal3completions.div(new Decimal(2)).add(new Decimal(1)));
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

  if (nonillionthPoints.gte(nu3cost)) {
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
  if (number.gte(new Decimal.pow(10, 6))) {
    oreset.disabled = false;
  } else {
    oreset.disabled = true;
  }
}

//=========================================================================
//PENDING
function checkPendingOctillionth(){ 
  if (number.gte(opthreshold)){ //Check if number meets the NEW requirement for pending OP
    if (challengeModifier == 1){
      opthreshold = opthreshold.mul(opscaling.pow(new Decimal(2)));
    } else {
      opthreshold = opthreshold.mul(opscaling);
    }
    opbase = opbase.add(new Decimal(1));
    checkPendingOctillionth();
  } else if (number.lt(opthreshold.div(opscaling)) && number.gte(new Decimal(1000000)) && challengeModifier != 1){ //If you're broke then you can't get OP HAHA
    opbase = opbase.sub(new Decimal(1));
    opthreshold = opthreshold.div(opscaling);
  } else if (number.lt(opthreshold.div(opscaling.pow(new Decimal(2)))) && number.gte(new Decimal(1000000)) && challengeModifier == 1){ //If you're broke then you can't get OP HAHA (challenge 1 version)
    opbase = opbase.sub(new Decimal(1));
    opthreshold = opthreshold.div(opscaling.pow(new Decimal(2)));
  } else if (number.lt(new Decimal(1000000))){
    opbase = new Decimal(0);
    opthreshold = new Decimal(1000000);
  }

  oppending = new Decimal(opbase);

  if (chal2completions.gte(new Decimal(1))){
    oppending = oppending.mul(chal2completions.div(new Decimal(2)).add(new Decimal(1)));
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
  if (number.gte(chal1goal) && challengeModifier == 1 && chal1completions.lt(new Decimal(100))){
    chal1goal = chal1goal.pow(chal1scaling);
    chal1completions = chal1completions.add(new Decimal(1));
  }
}

function chal2GoalChecking(){
  if (number.gte(chal2goal) && challengeModifier == 2 && chal2completions.lt(new Decimal(100))){
    chal2goal = chal2goal.mul(chal2scaling);
    chal2completions = chal2completions.add(new Decimal(1));
  }
}

function chal3GoalChecking(){
  if (number.gte(chal3goal) && challengeModifier == 3 && chal3completions.lt(new Decimal(100))){
    chal3goal = chal3goal.mul(chal3scaling);
    chal3completions = chal3completions.add(new Decimal(1));
  }
}

function chal4GoalChecking(){
  if (number.gte(chal4goal) && challengeModifier == 4 && chal4completions.lt(new Decimal(100))){
    chal4goal = chal4goal.mul(chal4scaling);
    chal4completions = chal4completions.add(new Decimal(1));
  }
}

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

    number: number.toString(),
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

  number = new Decimal(data.number);
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

  if (nonillionth_unlocked){
    nonillionth_grid.style.display = "grid";
    main_nonillionth_tab_button.style.display = "inline-block";
  }
  if (octillionth_unlocked){
    octillionth_tab.style.display = "block";
    octillionth_main_section.style.display = "grid";
    main_octillionth_tab_button.style.display = "inline-block";
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
    number = number.mul(new Decimal(1000));
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