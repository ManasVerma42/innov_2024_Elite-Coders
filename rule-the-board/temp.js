var sitStat = [
  "You've started a new job and want to start saving for future goals. You decide to set up a savings plan. Save Rs.2500/month",
  "You have received a bonus paycheck of Rs. 10,000. You are trying to decide what to do with the money to ensure financial stability and future growth.",
  "You bought 100 shares of Company Y at Rs. 50 per share, spending ₹5000. The stock price dropped to ₹48, then to ₹45, but eventually rose to ₹51.What would you do?",
  "You're considering trading stocks to increase your income.Settling Income: Rs. 90,000, Cashflow: Rs.3000/month. What will you do?",
  "You're a small business owner facing a financial crisis due to the COVID-19 pandemic.You are expected to pay Rs. 50,000.  What'd you do?",
  "You've started a new job and want to start saving for future goals. You decide to set up a savings plan. Save Rs.2500/month",
  "You're a homeowner facing financial difficulties and are considering options regarding your mortgage. Selling your car worth Rs.2,50,000 at the rate of Rs. 1,50,000. What would you do?",
  " Upon waking up, you discover the fridge has ceased functioning,leaving your food at risk of spoiling. he repair cost would be around Rs. 5000.What will you do?",
  "You have received a bonus paycheck of Rs. 10,000. You are trying to decide what to do with the money to ensure financial stability and future growth.",
  "You bought 100 shares of Company Y at Rs. 50 per share, spending ₹5000. The stock price dropped to ₹48, then to ₹45, but eventually rose to ₹51.What would you do?",
  "You're considering trading stocks to increase your income.Settling Income: Rs. 90,000, Cashflow: Rs.3000/month. What will you do?",
];
var sitOpt = [
  "Repair",
  "Save",
  "Save",
  "Sell",
  "Trade",
  "Pay",
  "Save",
  "Mortage",
  "Repair",
  "Save",
  "Sell",
];
var sit_Obj = [
  {
    increm: 0,
    updatedIncome: -5000,
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
    updatedIncome: -5000,
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
  {
    increm: 0,
    updatedIncome: -5000,
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
];
var i = 0;
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var ass_prop = parseInt(document.querySelector("#ass_val1").innerText);
var ass_veh = parseInt(document.querySelector("#ass_val2").innerText);
var ass_oth = parseInt(document.querySelector("#ass_val3").innerText);
var liab_mort = parseInt(document.querySelector("#liab_val1").innerText);
var liab_loan = parseInt(document.querySelector("#liab_val2").innerText);
var liab_oth = parseInt(document.querySelector("#liab_val3").innerText);

var income = parseInt(document.querySelector("#val1").innerText);

var expense = parseInt(document.querySelector("#val2").innerText);

var payday = income - expense;
console.log(payday);

function updateCost(check) {
  if (check == 1) {
    //repair
    console.log("1234");
    console.log("opt1 clicked");
    console.log(income);
    income = income + sit_Obj[i].increm + sit_Obj[i].updatedIncome;

    document.querySelector("#val1").innerText = income;
    console.log(income);

    ass_prop = Number(ass_prop) + parseInt(sit_Obj[i].asset.property);
    document.querySelector("#ass_val1").innerText = ass_prop;

    ass_veh = Number(ass_veh) + parseInt(sit_Obj[i].asset.vehicles);
    document.querySelector("#ass_val2").innerText = ass_veh;

    ass_oth = Number(ass_oth) + sit_Obj[i].asset.other;
    document.querySelector("#ass_val3").innerText = ass_oth;

    liab_loan = Number(liab_loan) + sit_Obj[i].liab.loans;
    document.querySelector("#liab_val2").innerText = liab_loan;
    liab_mort = Number(liab_mort) + sit_Obj[i].liab.mortgage;
    document.querySelector("#liab_val1").innerText = liab_mort;
    liab_oth = Number(liab_oth) + sit_Obj[i].liab.othliab;
    document.querySelector("#liab_val3").innerText = liab_oth;
    console.log(ass_veh);
  } else if (check == 2) {
    callNext(i);
    //pass
  } else {
    let newInc = borrowMoneyFunc();
    document.querySelector("#val1").innerText = newInc;
    callNext(i);
    //borrow
  }
  console.log("ijaidhoas");
  callNext(i);
  i++;
}

var modalToAdd = document.getElementById("createModal");
var createTaskBtn = document.querySelector("#opt3");
var close_AddModalBtn =
  document.getElementsByClassName("createmodal-cancel")[0];

createTaskBtn.onclick = function () {
  modalToAdd.style.display = "block";
};
close_AddModalBtn.onclick = function () {
  modalToAdd.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modalToAdd) {
    modalToAdd.style.display = "none";
  }
};
var saveBtn = document.getElementById("createmodal-savebtn");

function borrowMoneyFunc() {
  var inputBox = document.querySelector("#createmodal-inp-text");
  if (inputBox.value == "") {
    alert("Please enter all the details required");
  } else {
    const borrowedMoney = inputBox.value;
    console.log(borrowedMoney, income);
    const temp = Number(income) + Number(borrowedMoney);
    income = temp;
    console.log(temp);

    modalToAdd.style.display = "none";
    return temp;
  }
}
function callNext(i) {
  var statement = (document.querySelector("#situation_statement").innerText =
    sitStat[i]);
  opt1.innerText = sitOpt[i];
  console.log(income);
  income = parseInt(income) + parseInt(sit_Obj[i].increm);

  if (i > 0) {
    document.getElementById(`goti${i}`).style.display = "none";
  }
  if (i > 10) {
    document.getElementById("situation_statement").innerText = "";
    document.getElementById("opt2").innerText = "";

    document.getElementById("opt3").innerText = "";

    document.getElementById("opt1").innerText = "";
    document.getElementById("congoBox").style.display = "block";
  
    document.getElementById("#opt1").style.display = "none";
    document.getElementById("#opt2").style.display = "none";
    document.getElementById("#opt3").style.display = "none";}

    

  // Show the next element
  document.getElementById(`goti${i + 1}`).style.display = "block";
}
