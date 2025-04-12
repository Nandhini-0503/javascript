let account1={
    user:'mn',
    pin:'1111',
    movements:[200,300,500],
}
let account2={
    user:'anu',
    pin:'2222',
    movements:[400,600,800],
}

const accounts = [account1,account2];

let opacity1 = document.querySelector('.app');
let balance = document.querySelector(".balance__value")
let loanAmt = document.querySelector(".form__input--loan-amount");
let to = document.querySelector(".form__input--to");
let transfer = document.querySelector(".form__input--amount");
let cpin = document.querySelector("form__input--pin")
let cuser= document.querySelector("form__input--user")
let input_user = document.querySelector(".login__input--user");
let input_pin = document.querySelector(".login__input--pin");

function login() {
  for (let i = 0; i < accounts.length;i++) {
        if (accounts[i].user == input_user.value && accounts[i].pin == input_pin.value) {
            opacity1.style.opacity = '1';
            if (accounts[i].user=="mn") {
                balance.innerHTML=5000+"$"
            } else {
                balance.innerHTML=6000+"$"
            }
                  return
        }
    }
    console.log("invalid user and password");

}

function reqLoan() {
    // console.log("hi");
    for (let i = 0; i < accounts.length; i++) {
        if (accounts[i].user == input_user.value) {
            let amt = parseFloat(loanAmt.value)
            let loanBal = parseFloat(balance.textContent)
            let total = amt+loanBal
            console.log(total);
            balance.innerHTML=total+"$";

            let wholeDiv=document.querySelector(".movements");
            let subDiv=document.createElement("div");
            let div1=document.createElement("div");
            let div2=document.createElement("div");
            let div3=document.createElement("div");

            let type="deposit"
            let date=new Date().toLocaleDateString()

            div1.innerHTML=type;
            div2.innerHTML=date;
            div3.innerHTML=amt;


            wholeDiv.classList.add(".movements")
            subDiv.classList.add("movements__row")
            div1.classList.add("movements__type--deposit")
            div2.classList.add("movements__date")
            div3.classList.add("movements__value")

            subDiv.appendChild(div1)
            subDiv.appendChild(div2)
            subDiv.appendChild(div3)
            wholeDiv.appendChild(subDiv);

            
        }
    }
}
function transmoney(){
    for (let i = 0; i < accounts.length; i++) {
        if (accounts[i].user == input_user.value) {
            let amt1 = parseFloat(transfer.value)
            let loanBal1 = parseFloat(balance.textContent)
            let total =loanBal1-amt1
            console.log(total);
            balance.innerHTML=total+"$";
            let wholeDiv=document.querySelector(".movements");
            let subDiv=document.createElement("div");
            let div1=document.createElement("div");
            let div2=document.createElement("div");
            let div3=document.createElement("div");

            let type="withdrawl"
            let date=new Date().toLocaleDateString()

            div1.innerHTML=type;
            div2.innerHTML=date;
            div3.innerHTML=amt1;


            wholeDiv.classList.add(".movements")
            subDiv.classList.add("movements__row")
            div1.classList.add("movements__type--withdrawal")
            div2.classList.add("movements__date")
            div3.classList.add("movements__value")

            subDiv.appendChild(div1)
            subDiv.appendChild(div2)
            subDiv.appendChild(div3)
            wholeDiv.appendChild(subDiv);
            
        }
    }
}

