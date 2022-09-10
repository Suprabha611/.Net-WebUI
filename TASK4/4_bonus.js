function salary() {
    let text;
    let person = prompt("Please enter your ID:");
    if (person == null || person == "") {
        text = alert("Enter your ID!!");
    } else {
        text = "Dear IT Member!!, Your salary is Rs.43,655.";
    }
            document.getElementById("extra").innerHTML = text;
            }
 
        function bonus() {
            let text;
            let person = prompt("Please enter your ID:");
            if (person == null || person == "") {
                text = alert("Enter your ID!!");
            } else {
                text = "Dear IT Member!!, Your Bonus is Rs.21,827.";
            }
            document.getElementById("extra").innerHTML = text;
        }

            function total() {
                let text;
                let person = prompt("Please enter your ID:");
                if (person == null || person == "") {
                    text = alert("Enter your ID!!");
                } else {
                    text = "Dear IT Member!!, Total Salary is Rs.65,482.";
                }
                document.getElementById("extra").innerHTML = text;
            }