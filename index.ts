import inquirer from "inquirer";
let myBalance=10000;
let mypin= 1100;
let pinAnswer = await inquirer.prompt([
    {
        name:"pin",
        message:"Enter your pin code",
        type: "number",
    }
])

if(pinAnswer.pin === mypin)
{
    console.log("Correct pin code: ");

    let operationAns = await inquirer.prompt(
        [
            {
                name:"operation",
                message: "Pleas select option",
                type: "list",
                choices:["Cash withdraw","Fast Cash", "check Balace"]
            }
        ]

    );


    if(operationAns.operation === "Cash withdraw")
    {
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "Enter your amount",
                    type: "number",
                }
            ]
        );
        if(amountAns.amount<=myBalance)
        {

        myBalance -= amountAns.amount;

        

        console.log(`Your remaning balance is ${myBalance}.`);
        }
        else
        {
            console.log("Sorry, your balance is insufficient for this transaction");
        }
    }
    else if(operationAns.operation === "Fast Cash")
    {
        let fastAmountAns = await inquirer.prompt(
            [
                {
                    name: "fastAount",
                    message: "Enter your amount",
                    type: "list",
                    choices:["500","1000", "5000","10000"]
                }
            ]
        );

        myBalance -= fastAmountAns.fastAount;

            console.log(`Your remaning balance is ${myBalance}.`);
     }
    else if(operationAns.operation === "check Balace")
    {
        console.log(`Your balance is ${myBalance}.`);
    }
}
else
{
    console.log("your pin code is incorrect: ");
}