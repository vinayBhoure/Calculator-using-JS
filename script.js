let string = "";
let buttons = document.querySelectorAll('.buttons');
let arr = Array.from(buttons);
let input = document.querySelector('.display');

const deletemsg = () => {
   string = "";
   input.value =string;
}

arr.forEach((button) => {
    button.addEventListener('click', (e) => {
         if(e.target.innerHTML == "=")
         {
            string = eval(string.replace("%", "/100"));
            input.value = string;
         }
         else if(e.target.innerHTML == "AC")
         {
            string = ""
            input.value = string;
         }
         else if(e.target.innerHTML == "DEL")
         {
            string = string.slice(0, -1);
            input.value = string;
         }
         else if(string == "" && (e.target.innerHTML == "/" || e.target.innerHTML == "*" || e.target.innerHTML == "%" ))
         {       string = "Please give operand first. Press AC to use the calculator";
         input.value =string;
               
         }
         else{
            string += e.target.innerHTML;
            input.value = string;
         }

    })
})

