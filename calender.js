var year = document.getElementById("year")
var month = document.getElementById("month")
// console.log(month);
var days = document.getElementById('day')

year.addEventListener('click',selectedYear)
function selectedYear(){
    yr=year.value
    console.log(yr)
    document.getElementById('month').value=''
    document.getElementById('day').value=''
     
   
}
month.addEventListener("click", selectedMonth)
function selectedMonth() {
    document.getElementById('day').value=''
    if (month.value == 'Feb') {
        days.innerHTML=''
        

        document.getElementById('day').value=''

        if (( yr % 4 == 0) && ( yr % 100 != 0) || ( yr % 400 == 0)) {
            days.innerHTML=''
            for (i = 1; i <= 29; i++) {
                var option = document.createElement('option')
                var Text = document.createTextNode(i);
                console.log(option);
                
                var option1 = option.appendChild(Text)
                days.appendChild(option)
                
                
            }
           
        }
        else {
            days.innerHTML=''
            for (i = 1; i <= 28; i++) {
                var option = document.createElement('Option')
                var Text = document.createTextNode(i);
                console.log(option);
                 
                var option1 = option.appendChild(Text)
                days.appendChild(option)
                 
            }
        }
       


    }
    else if (month.value == 'Jan' || month.value == 'Mar' || month.value == 'May' || month.value == 'July' || month.value == 'Aug' || month.value == 'Oct' || month.value == 'Dec') {
        days.innerHTML=''
        for (i = 1; i <= 31; i++) {
            var option = document.createElement('Option')
            const Text = document.createTextNode(i);
            console.log(option);
             
            days.appendChild(option)

            var option1 = option.appendChild(Text)
        }
    }
    else if (month.value == 00) {
    }
    else {
        days.innerHTML=''
        for (i = 1; i <= 30; i++) {
            var option = document.createElement('Option')
            const Text = document.createTextNode(i);
            console.log(option);
             
            var option1 = option.appendChild(Text)
            days.appendChild(option)

             
        }
    }
}