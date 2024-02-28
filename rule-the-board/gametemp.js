/* var income_Array=[
  {
    "id": "high",
    "income":150000,
    "expense":60000,

  }
] */
var situationArray = [
  {
    id: 0,
    sitStat:
      "Upon waking up, you discover the fridge has ceased functioning, leaving your food at risk of spoiling.\nThe repair cost would be around Rs. 5000\nWhat will you do?",
    btn1: "Repair",
    btn2: "Pass",
    btn3: "Borrow",
  },
];
localStorage.setItem("situationArray", JSON.stringify(situationArray));

function gameStart(income, expense, payday, assets, liabs, inc_brac) {
  let newArray = JSON.parse(localStorage.getItem("situationArray"));
  console.log(
    (document.querySelector("#situation_statement").innerText =
      newArray[0].sitStat)
  );
  document.querySelector("#opt1").innerText = newArray[0].btn1;

  /* var income = document.querySelector("#val1").innerHTML;
    var expenses = document.querySelector("#val2").innerHTML;
    var payday = document.querySelector("#val3").innerHTML;
    console.log(income);
    console.log(expenses);
    console.log(payday);
    var situationStatement = document.querySelector("#situation_statement");
    situationStatement.innerHTML = `Upon waking up, you discover the fridge has ceased functioning, leaving your food at risk of spoiling.<br>The repair cost would be around Rs. 5000<br><br>What will you do?`;
  
    var opt1 = document.querySelector("#opt1");
    opt1.innerHTML = `Repair`;
  
    var opt2 = document.querySelector("#opt2");
    opt2.innerHTML = `Pass`; */
}
function displayIncome(income, expense, payday, assets, liabs, inc_brac) {
  const container_Connecting_Link = document.querySelector(".containerconn");

  let html = `
          <h3><b>${inc_brac}</b></h3>
            <p style="margin-bottom: 5px;">
              <br>
              You have the following financial components with you: <br>
  
              <b>Income:</b>&nbsp;&nbsp; Rs. ${income}<br>
              <b>Expenses:</b>&nbsp;&nbsp; Rs. ${expense}<br>
              <b>PayDay:</b>&nbsp;&nbsp; Rs. ${payday}<br>
              <br>
              <div class="display_ass_liabs">
                  <div class="disp_ass"
                  ><b>Assets</b>
                  <br>
                  Property:&nbsp;&nbsp; Rs. ${assets.property}
                  <br>
                  Vehicles:&nbsp;&nbsp; Rs. ${assets.vehicles}<br>
                  Other:&nbsp;&nbsp; Rs. ${assets.other}
              </div>
              <div class="disp_liabs"><b>Liabilities</b>
                <br>
                  Mortgage:&nbsp;&nbsp; Rs. ${liabs.mortgage}<br>
              Loans:&nbsp;&nbsp; Rs. ${liabs.loans}<br>
              Other:&nbsp;&nbsp; Rs. ${liabs.otherliab}</div>
          </div>
      </p>
      <div class="buttons">
            <input type="button" id="back_btn" value="Back">
          
            <input type="button" id="start_btn" value="Start">
       </div>
          </div>  `;
  container_Connecting_Link.innerHTML = html;
  console.log(container_Connecting_Link.innerHTML);
  var start_Btn = document.querySelector("#start_btn");
  start_Btn.addEventListener("click", () => {
    gameStart(income, expense, payday, assets, liabs, inc_brac);
    window.location.replace("game.html");
  });
  var back_Btn = document.querySelector("#back_btn");
  back_Btn.addEventListener("click", () => {
    window.location.replace("Incomebracket.html");
  });
  gameStart(income, expense, payday, assets, liabs, inc_brac);
}

var get_Started_Btn = document.querySelector("#getStarted");

var mathValue = Math.random();
console.log(mathValue);
var flag;
if (mathValue <= 1 / 3) flag = 0; //high
else if (mathValue > 1 / 3 && mathValue <= 2 / 3) flag = 1;
else flag = 2;
console.log(flag);

function setIncome(flag) {
  var income, expense, payday;
  var assets = {
    property: 0,
    vehicles: 0,
    other: 0,
  };
  var liabs = {
    mortgage: 0,
    loans: 0,
    otherliab: 0,
  };
  var inc_brac = "";
  if (flag == 0) {
    income = 150000;
    expense = 100000;
    payday = income - expense;
    console.log(income);
    assets.property = 25000000;
    assets.vehicles = 12000000;
    assets.other = 1000000;
    liabs.mortgage = 1000000;
    liabs.loans = 0;
    liabs.otherliab = 300000;
    inc_brac = "HIGH Income Bracket";
    console.log(assets, liabs);
  } else if (flag == 1) {
    income = 65000;
    expense = 40000;
    payday = income - expense;
    console.log(income);
    assets.property = 6000000;
    assets.vehicles = 1000000;
    assets.other = 130000;
    liabs.mortgage = 1000000;
    liabs.loans = 8000000;
    liabs.otherliab = 200000;
    inc_brac = "MID Income Bracket";
  } else {
    income = 30000;
    expense = 21000;
    payday = income - expense;
    console.log(income);
    assets.property = 0;
    assets.vehicles = 0;
    assets.other = 15000;
    liabs.mortgage = 0;
    liabs.loans = 300000;
    liabs.otherliab = 60000;
    inc_brac = "LOW Income Bracket";
  }
  // Store variables in local storage
  localStorage.setItem("income", income);
  localStorage.setItem("expense", expense);
  localStorage.setItem("payday", payday);
  localStorage.setItem("assets", JSON.stringify(assets));
  localStorage.setItem("liabs", JSON.stringify(liabs));
  localStorage.setItem("inc_brac", inc_brac);
  displayIncome(income, expense, payday, assets, liabs, inc_brac);
}
setIncome(flag);
