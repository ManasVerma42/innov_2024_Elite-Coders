var mathValue = Math.random();
console.log(mathValue);
var flag,urlIden;
if (mathValue <= 1 / 3) flag = 0; //high
else if (mathValue > 1 / 3 && mathValue <= 2 / 3) flag = 1;
else flag = 2;
console.log(flag);

setIncome(flag);
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
    urlIden="high";
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
    urlIden="";
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
    urlIden="low";
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

/* function saveBackFunc() {
  let backBtn = document.querySelector("#back_btn");

  backBtn.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("1234:");
    history.back();
  });
}
saveBackFunc(); */

function displayIncome(income, expense, payday, assets, liabs, inc_brac) {
  const container_Connecting_Link = document.querySelector(".containerconn");
  console.log(container_Connecting_Link);
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
      <a href="Incomebracket.html"><input type="button" id="back_btn" value="Back"/></a>

          
      <a href="game${urlIden}.html"><input type="button" id="start_btn" value="Start"/></a>

       </div>
          </div>  `;

  console.log(container_Connecting_Link.innerHTML);
  container_Connecting_Link.innerHTML = html;
}
