var sitStat = [
  "You have received a bonus paycheck of Rs. 10,000. You are trying to decide what to do with the money to ensure financial stability and future growth.",
  "You bought 100 shares of Company Y at Rs. 50 per share, spending ₹5000. The stock price dropped to ₹48, then to ₹45, but eventually rose to ₹51.What would you do?",
  "You're considering trading stocks to increase your income.Settling Income: Rs. 90,000, Cashflow: Rs.3000/month. What will you do?",
  "You're a small business owner facing a financial crisis due to the COVID-19 pandemic.You are expected to pay Rs. 50,000.  What'd you do?",
  "You've started a new job and want to start saving for future goals. You decide to set up a savings plan. Save Rs.2500/month",
  "You're a homeowner facing financial difficulties and are considering options regarding your mortgage. Selling your car worth Rs.2,50,000 at the rate of Rs. 1,50,000. What would you do?",
];
var sitOpt = ["Save", "Sell", "Trade", "Pay", "Save", "Mortage"];
var sit_Obj = [
  {
    increm: 10000,
    updatedIncome: -2000,
    asset: {
      property: 0,
      vehicles: 0,
      other: 2000,
    },
    liab: {
      mortgage: 0,
      loans: 0,
      othliab: 0,
    },
  },
  {
    increm: 0,
    updatedIncome: 5100,
    asset: {
      property: 0,
      vehicles: 0,
      other: -5000,
    },
    liab: {
      mortgage: 0,
      loans: 0,
      othliab: 0,
    },
  },
  {
    increm: 0,
    updatedIncome: -90000,
    asset: {
      property: 0,
      vehicles: 0,
      other: 3000,
    },
    liab: {
      mortgage: 0,
      loans: 0,
      othliab: 0,
    },
  },

  {
    increm: 0,
    updatedIncome: -500000,
    asset: {
      property: 0,
      vehicles: 0,
      other: 0,
    },
    liab: {
      mortgage: 0,
      loans: 0,
      othliab: 0,
    },
  },

  {
    increm: 0,
    updatedIncome: -2500,
    asset: {
      property: 0,
      vehicles: 0,
      other: 2500,
    },
    liab: {
      mortgage: 0,
      loans: 0,
      othliab: 0,
    },
  },

  {
    increm: 0,
    updatedIncome: 0,
    asset: {
      property: 0,
      vehicles: -250000,
      other: 0,
    },
    liab: {
      mortgage: 150000,
      loans: 0,
      othliab: 0,
    },
  },
];
var i = 0;
var income = 50000; // Initial income
var expense = 20000; // Initial expense
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var ass_prop = 0; // Initial asset values
var ass_veh = 0;
var ass_oth = 0;
var liab_mort = 0; // Initial liability values
var liab_loan = 0;
var liab_oth = 0;
var payday = income - expense; // Initial payday value

function updateCost() {
  if (document.getElementById("opt1").click) {
    income = income - 5000;
    payday = income - expense;
  }
  callNext(i);
  i++;
}

function callNext(i) {
  var statement = sitStat[i];
  var optBtn1 = sitOpt[i];

  income = income + sit_Obj[i].increm;
  if (optBtn1.click) {
    income = income + sit_Obj[i].updatedIncome;
    ass_prop = ass_prop + sit_Obj[i].asset.property;
    ass_veh = ass_veh + sit_Obj[i].asset.vehicles;
    ass_oth = ass_oth + sit_Obj[i].asset.other;
    liab_loan = liab_loan + sit_Obj[i].liab.loans;
    liab_mort = liab_mort + sit_Obj[i].liab.mortgage;
    liab_oth = liab_oth + sit_Obj[i].liab.othliab;
  }
}
