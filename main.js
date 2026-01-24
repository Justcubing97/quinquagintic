//=========================================================================
//=========================================================================
//NUMERICAL VARIABLES
var number = new Decimal(1);
var numberGain;

var numberString = "";
var numberStringFinal = "";

var boostsString = "";
var nonBoostsString = "";

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

//=========================================================================
//NON MAGIC CONSTS
const numberTickspeedDivisor = new Decimal(20);
const numberRounding = new Decimal(100);
const numberDecimalPlaces = new Decimal(3);
const decillionthDivision = new Decimal.pow(10, 33);

//=========================================================================
//=========================================================================
//ID VARIABLES

//=========================================================================
//TOP
const topNumber = document.getElementById("top-number");
const topNP = document.getElementById("top-np");
const topOP = document.getElementById("top-op");

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
nreset.disabled = true;

const nu1 = document.getElementById("nu1");
nu1.disabled = true;

const nu1_id_amt = document.getElementById("nu1-id-amt");
const nu1_cost_scale = document.getElementById("nu1-cost-scale");

const nu2 = document.getElementById("nu2");
nu2.disabled = true;

const nu2_id_amt = document.getElementById("nu2-id-amt");
const nu2_cost_scale = document.getElementById("nu2-cost-scale");

//=========================================================================
//RESET BOOSTS
var no_reset_boost_check = false;

//=========================================================================
//RESET FUNCTIONS
function nonillionthResetInitiate(){
  npthreshold = new Decimal(1000);
  nonillionthPoints = nonillionthPoints.add(nppending);
  npbase = new Decimal(0);
  no_reset_boost_check = true;
  
  du1boost = new Decimal(0);
  du1amt = new Decimal(0);
  du1cost = new Decimal(10);
  du1scaling = new Decimal(2); 
  number = new Decimal(1);
  
  if (nu2amt.eq(new Decimal(1))){
    du1cost = new Decimal(8);
  }
}

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
}, 50);

//=========================================================================
//=========================================================================
//MAIN FUNCTIONS
function calculateGain(){
  numberGain = new Decimal(1);
  
  //MULTIPLICATIONS
  if (du1amt.gte(new Decimal(1))){
    numberGain = numberGain.mul(du1boost);
  }
  
  if (no_reset_boost_check){
    numberGain = numberGain.mul(new Decimal(2));
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
  
  if (no_reset_boost_check){
    boostsString += "Nonillionth: x2, ";
  }
  
  //=========================================================================
  //NONILLIONTHS
  nonBoostsString = "Boosts: ";
  if (nu1amt.gte(1)){
    nonBoostsString += "NU1: x" + nu1boost + ", ";
  }
}

function updateScreen(){
  //=========================================================================
  //TOP
  topNumber.textContent = "N: " + number.div(decillionthDivision).toExponential(3) + " (+" + numberGain.div(decillionthDivision) + "/s)";
  topNP.textContent = "NP: " + nonillionthPoints.toExponential(3) + " (+" + nppending.toExponential(3) + ")";
  
  //=========================================================================
  //NUMBER
  numberDisplay.textContent = numberStringFinal;
  numberGainDisplay.textContent = "Number gain is +" + numberGain.div(decillionthDivision) + "/s"
  boostsDisplay.textContent = boostsString;
  
  //=========================================================================
  //DECILLIONTHS
  du1_id_amt.textContent = "ID: DU1 || x" + du1amt;
  du1_cost_scale.textContent = "Require: " + du1cost.div(decillionthDivision) + " || Scaling: x" + du1scaling.toString();
  
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
}

//=========================================================================
//=========================================================================
//DECILLIONTH

//=========================================================================
//AFFORD DETECTION
function decillionthUpgrades(){
  if (no_reset_boost_check){
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
  if (no_reset_boost_check){
    du1boost = du1boost.add(new Decimal(1.5));
  } else {
    du1boost = du1boost.add(new Decimal(1.25));
  }
  du1amt = du1amt.add(new Decimal(1));
  du1cost = du1cost.mul(du1scaling);
});

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

//=========================================================================
//NU2 SPECIFIC
function nu2ImpactIteration(){
  let savedValue = du1amt;
  du1amt = new Decimal(0);
  du1cost = new Decimal(8);
  for (var nu2IICounter = new Decimal(0); nu2IICounter.lt(savedValue); nu2IICounter = nu2IICounter.add(new Decimal(1))){
    du1cost = du1cost.mul(du1scaling);
    du1amt = du1amt.add(new Decimal(1));
  }
}

//=========================================================================
//=========================================================================
//SAVING AND LOADING
setInterval(saveGame, 10000);

window.onload = function(){
  loadGame();
}

function saveGame() {
  const saveData = {
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

    nu1boost: nu1boost.toString(),
    nu1amt: nu1amt.toString(),
    nu1cost: nu1cost.toString(),
    nu1scaling: nu1scaling.toString(),
    nu2amt: nu2amt.toString(),
    nu2cost: nu2cost.toString(),
  };
  
  localStorage.setItem("quinquaginticSave", JSON.stringify(saveData));
}

function loadGame() {
  const saved = localStorage.getItem("quinquaginticSave");
  if (!saved) return;

  const data = JSON.parse(saved);

  number = new Decimal(data.number);
  numberGain = new Decimal(data.numberGain);

  du1boost = new Decimal(data.du1boost);
  du1amt = new Decimal(data.du1amt);
  du1cost = new Decimal(data.du1cost);
  du1scaling = new Decimal(data.du1scaling);

  nonillionthPoints = new Decimal(data.nonillionthPoints);
  npscaling1 = new Decimal(data.npscaling);
  npbase = new Decimal(data.npbase);
  npthreshold = new Decimal(data.npthreshold);

  nu1boost = new Decimal(data.nu1boost);
  nu1amt = new Decimal(data.nu1amt);
  nu1cost = new Decimal(data.nu1cost);
  nu1scaling = new Decimal(data.nu1scaling);
  nu2amt = new Decimal(data.nu2amt);
  nu2cost = new Decimal(data.nu2cost);
}
