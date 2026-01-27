//VARYING VARIABLES
var number = new Decimal(1);
var numberGain;

var numberString = "";
var numberStringFinal = "";

var boostsString = "";
var nonBoostsString = "";
var octBoostsString = "";

var challengeModifier = 0

//=========================================================================
//DECILLIONTH
var du1boost = new Decimal(0);
var du1amt = new Decimal(0);
var du1cost = new Decimal(10);
var du1scaling = new Decimal(2);

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
var chal1scaling = new Decimal(1.3);
var chal1goal = new Decimal(1000);

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
//=========================================================================
//=========================================================================
//ID VARIABLES

//=========================================================================
//TABS
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

const chal1 = document.getElementById("chal1");
const chal1_goal_scale = document.getElementById("chal1-goal-scale");
const chal1_reward = document.getElementById("chal1-reward");
const chal1_completions = document.getElementById("chal1-completions");

//=========================================================================
//RESET BOOSTS
var non_reset_boost_check = false;
var oct_reset_boost_check = false;

//=========================================================================
//OTHER
const slider = document.getElementById("fontSlider");
var sliderPos = 45;

//=========================================================================
//RESET FUNCTIONS
function nonillionthResetInitiate(){
  npthreshold = new Decimal(1000);
  nonillionthPoints = nonillionthPoints.add(nppending);
  npbase = new Decimal(0);
  non_reset_boost_check = true;
  
  du1boost = new Decimal(0);
  du1amt = new Decimal(0);
  du1cost = new Decimal(10);
  du1scaling = new Decimal(2); 
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

  nu3boost = new Decimal(1);
  nu3amt = new Decimal(0);
  nu3cost = new Decimal(10);
  nu3scaling = new Decimal(10);

  nu4amt = new Decimal(0);
  nu4cost = new Decimal(25);
  
  du1boost = new Decimal(0);
  du1amt = new Decimal(0);
  du1cost = new Decimal(10);
  du1scaling = new Decimal(2); 
  number = new Decimal(1);
}

//=========================================================================
//=========================================================================
//=========================================================================
//GAME LOOP

setInterval(function(){
  calculateGain();
  updateCurrencies();
  formatNumber();
  calculateBoostsStrings();
  updateScreen();
  
  decillionthUpgrades();
  
  checkNonillionthReset();
  checkPendingNonillionth();
  nonillionthUpgrades();

  checkOctillionthReset();
  checkPendingOctillionth();

  automation();
}, 50);

//=========================================================================
//=========================================================================
//=========================================================================
//MAIN FUNCTIONS

//=========================================================================
//TABS
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
  
  if (non_reset_boost_check){
    numberGain = numberGain.mul(new Decimal(5));
  }

  if (nu3amt.gte(new Decimal(1))){
    numberGain = numberGain.mul(nu3boost);
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
  
  if (non_reset_boost_check){
    boostsString += "Nonillionth: x5, ";
  }

  if (nu3amt.gte(1)){
    boostsString += "NU3: x" + nu3boost + ", ";
  }
  
  //=========================================================================
  //NONILLIONTHS
  nonBoostsString = "Boosts: ";
  if (nu1amt.gte(1)){
    nonBoostsString += "NU1: x" + nu1boost + ", ";
  }

  if (oct_reset_boost_check){
    nonBoostsString += "Octillionth: x2, ";
  }

  //=========================================================================
  //NONILLIONTHS
  octBoostsString = "Boosts: ";
}

function updateScreen(){
  //=========================================================================
  //TOP
  topNumber.textContent = "N: " + number.div(decillionthDivision).toExponential(3) + " (+" + numberGain.div(decillionthDivision).toExponential(3) + "/s)";
  topNP.textContent = "NP: " + nonillionthPoints.toExponential(3) + " (+" + nppending.toExponential(3) + ")";
  topOP.textContent = "OP: " + octillionthPoints.toExponential(3) + " (+" + oppending.toExponential(3) + ")";
  
  //=========================================================================
  //NUMBER
  numberDisplay.textContent = numberStringFinal;
  numberGainDisplay.textContent = "Number gain is +" + numberGain.div(decillionthDivision).toExponential(3) + "/s";
  boostsDisplay.textContent = boostsString;
  
  //=========================================================================
  //DECILLIONTHS
  du1_id_amt.textContent = "ID: DU1 || x" + du1amt;
  du1_cost_scale.textContent = "Require: " + du1cost.div(decillionthDivision).toExponential(3) + " || Scaling: x" + du1scaling.toString();
  
  //=========================================================================
  //NONILLIONTHS
  no_point_pending.textContent = "+" + nppending.toExponential(3) + " NP";
  no_next_point.textContent = "(next NP at " + npthreshold.div(decillionthDivision).toExponential(3) + " N)";
  nonBoostsDisplay.textContent = nonBoostsString;
  
  nu1_id_amt.textContent = "ID: NU1 || x" + nu1amt;
  nu1_cost_scale.textContent = "Cost: " + nu1cost.toExponential(3) + " NP || Scaling: x" + nu1scaling;
  
  nu2_id_amt.textContent = "ID: NU2 || " + nu2amt + "/1";
  if (nu2amt.eq(new Decimal(1))){
    nu2_cost_scale.textContent = "Purchased!";
  }

  nu3_id_amt.textContent = "ID: NU3 || x" + nu3amt;
  nu3_cost_scale.textContent = "Cost: " + nu3cost.toExponential(3) + " NP || Scaling: x" + nu3scaling;

  nu4_id_amt.textContent = "ID: NU4 || " + nu4amt + "/1";
  if (nu4amt.eq(new Decimal(1))){
    nu4_cost_scale.textContent = "Purchased!";
  }

  //=========================================================================
  //OCTILLIONTHS
  op_point_pending.textContent = "+" + oppending.toExponential(3) + " OP";
  op_next_point.textContent = "(next OP at " + opthreshold.div(decillionthDivision).toExponential(3) + " N)";
  octBoostsDisplay.textContent = octBoostsString;
  
  bottomModifiers.textContent = "Modifiers: None";
  if (challengeModifier == 1){
    bottomModifiers.textContent = "Modifiers: Challenge 1";
  }
  
  chal1_goal_scale.textContent = "Goal: " + chal1goal.div(decillionthDivision) + "|| Scaling: x" + chal1scaling
  chal1_completions = chal1completions + "/100"
}

function automation(){
  if (oct_reset_boost_check){
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
//=========================================================================
//=========================================================================
//DECILLIONTH

//=========================================================================
//AFFORD DETECTION
function decillionthUpgrades(){
  if (non_reset_boost_check){
    du1.textContent = "Increase N multi" + "\n by +1.5"
  }
  
  if (number.gte(du1cost)) {
    du1.disabled = false;
  } else {
    du1.disabled = true;
  }
}

//=========================================================================
//CLICK
du1.addEventListener("click", function(){
  if (non_reset_boost_check){
    du1boost = du1boost.add(new Decimal(1.5));
  } else {
    du1boost = du1boost.add(new Decimal(1.25));
  }
  du1amt = du1amt.add(new Decimal(1));
  du1cost = du1cost.mul(du1scaling);
});

//=========================================================================
//=========================================================================
//=========================================================================
//NONILLIONTH

//=========================================================================
//RESET DETECTION
function checkNonillionthReset(){
  if (number.gte(new Decimal(1000))) {
    nreset.disabled = false;
  } else {
    nreset.disabled = true;
  }
}

//=========================================================================
//PENDING
function checkPendingNonillionth(){
  if (number.gte(npthreshold)){
    npthreshold = npthreshold.mul(npscaling);
    npbase = npbase.add(new Decimal(1));
    checkPendingNonillionth();
  }
  
  nppending = npbase.mul(nu1boost);
}

//=========================================================================
//RESET CLICK
nreset.addEventListener("click", function(){
  nonillionthResetInitiate();
  nonillionth_grid.style.display = "grid";
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
  nu1cost = nu1cost.mul(nu1scaling);
  
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
  nu3cost = nu3cost.mul(nu3scaling);
  
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
  du1cost = new Decimal(8);
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
    nu1cost = nu1cost.mul(nu1scaling);
    nu1amt = nu1amt.add(new Decimal(1));
  }

  let savedNu3Value = nu3amt;
  nu3amt = new Decimal(0);
  nu3cost = new Decimal(10);
  for (var nu4IICounter = new Decimal(0); nu4IICounter.lt(savedNu3Value); nu4IICounter = nu4IICounter.add(new Decimal(1))){
    nu3cost = nu3cost.mul(nu3scaling);
    nu3amt = nu3amt.add(new Decimal(1));
  }
}

//=========================================================================
//=========================================================================
//=========================================================================
//OCTILLIONTH

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
  oct_challenge_tab.style.display = "block";
  
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
  if (number.gte(opthreshold)){
    opthreshold = opthreshold.mul(opscaling);
    opbase = opbase.add(new Decimal(1));
    checkPendingOctillionth();
  }

  oppending = new Decimal(opbase);
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

//=========================================================================
//=========================================================================
//=========================================================================
//SAVING AND LOADING
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

    number: number.toString(),
    numberGain: numberGain.toString(),

    du1boost: du1boost.toString(),
    du1amt: du1amt.toString(),
    du1cost: du1cost.toString(),
    du1scaling: du1scaling.toString(),

    nonillionthPoints: nonillionthPoints.toString(),
    npscaling: npscaling.toString(),
    npbase: npbase.toString(),
    npthreshold: npthreshold.toString(),
    non_reset_boost_check: non_reset_boost_check.toString(),
    nonillionth_unlocked: nonillionth_unlocked.toString(),

    nu1boost: nu1boost.toString(),
    nu1amt: nu1amt.toString(),
    nu1cost: nu1cost.toString(),
    nu1scaling: nu1scaling.toString(),
    nu2amt: nu2amt.toString(),
    nu2cost: nu2cost.toString(),
    nu3boost: nu3boost.toString(),
    nu3amt: nu3amt.toString(),
    nu3cost: nu3cost.toString(),
    nu3scaling: nu3scaling.toString(),
    nu4amt: nu4amt.toString(),
    nu4cost: nu4cost.toString(),

    octillionthPoints: octillionthPoints.toString(),
    opscaling: new Decimal(3).toString(),
    opbase: opbase.toString(),
    opthreshold: opthreshold.toString(),
    oct_reset_boost_check: oct_reset_boost_check.toString(),
    octillionth_unlocked: octillionth_unlocked.toString(),
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

  number = new Decimal(data.number);
  numberGain = new Decimal(data.numberGain);

  du1boost = new Decimal(data.du1boost);
  du1amt = new Decimal(data.du1amt);
  du1cost = new Decimal(data.du1cost);
  du1scaling = new Decimal(data.du1scaling);

  nonillionthPoints = new Decimal(data.nonillionthPoints);
  npscaling = new Decimal(data.npscaling);
  npbase = new Decimal(data.npbase);
  npthreshold = new Decimal(data.npthreshold);
  non_reset_boost_check = data.non_reset_boost_check === 'true';
  nonillionth_unlocked = data.nonillionth_unlocked === 'true';

  nu1boost = new Decimal(data.nu1boost);
  nu1amt = new Decimal(data.nu1amt);
  nu1cost = new Decimal(data.nu1cost);
  nu1scaling = new Decimal(data.nu1scaling);
  nu2amt = new Decimal(data.nu2amt);
  nu2cost = new Decimal(data.nu2cost);
  nu3boost = new Decimal(data.nu3boost);
  nu3amt = new Decimal(data.nu3amt);
  nu3cost = new Decimal(data.nu3cost);
  nu3scaling = new Decimal(data.nu3scaling);
  nu4amt = new Decimal(data.nu4amt);
  nu4cost = new Decimal(data.nu4cost);

  octillionthPoints = new Decimal(data.octillionthPoints);
  opscaling = new Decimal(3);
  opbase = new Decimal(data.opbase);
  opthreshold = new Decimal(data.opthreshold);
  oct_reset_boost_check = data.oct_reset_boost_check === 'true';
  octillionth_unlocked = data.octillionth_unlocked === 'true';

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

//=========================================================================
//=========================================================================
//=========================================================================
//BACKGROUND SAVE FLASHING
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
//=========================================================================
//=========================================================================
//ADMIN
window.addEventListener("keydown", function(event) {
  if (event.key === "J"){
    number = number.mul(new Decimal(1000));
    updateScreen();
  }
});

//=========================================================================
//SLIDER
slider.addEventListener("input", () => {
  sliderPos = slider.value;
  numberDisplay.style.fontSize = sliderPos + "px";
});