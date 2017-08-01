/*
 *Design a cash register drawer function checkCashRegister() that accepts
 purchase price as the first argument (price), payment as the second argument
 (cash), and cash-in-drawer (cid) as the third argument.
 *
 *cid is a 2D array listing available currency.
 *
 *Return the string "Insufficient Funds" if cash-in-drawer is less than the
 change due. Return the string "Closed" if cash-in-drawer is equal to the
 change due.
 *
 *Otherwise, return change in coin and bills, sorted in highest to lowest
 order.
 */

/* javascript floating piont math is no good for working with money
 * so, we're going to make everyhting in pennies!!!
 * and then, will move that decimal back over to get money math
 */

/*
 * TODO:
 **from highest, check if bigger than returnCash (change to be given back)
 **check if highest has the funds in the demonination to give
 **if so, divide returnCash by denomination; check to see if denomination
 *    is available; reference value of demonination: addd one value to it,
 *    check against returnCash
 **substract denomination from cid
 **substract change given in denomination from returnCash
 **move on to next denomination
 */


const cashValue = [
    // value in pennies!
    { name : "PENNY"       , value : 1 },
    { name : "NICKEL"      , value : 5 },
    { name : "DIME"        , value : 10 },
    { name : "QUARTER"     , value : 25 },
    { name : "ONE"         , value : 100 },
    { name : "FIVE"        , value : 500 },
    { name : "TEN"         , value : 1000 },
    { name : "TWENTY"      , value : 2000 },
    { name : "ONE HUNDRED" , value : 10000 }
];

function checkCashRegister(price, cash, cid) {
    // total cash value of money to return
    var returnCash = (cash - price) * 100;
    // sum of value of cid: cash in drawer
    var totalCash = 0;
    // empty array of return change, only add item if needed
    var change = [];

    cid.forEach( (change) => {
        totalCash += (change[1]) * 100;
    });
    console.log("total cash: " + totalCash);
    console.log("return cash: " + returnCash);

    // quick and dirty check first for insufficient and even funds
    if (totalCash < returnCash) {
        // Be Careful! This does not gaurentee insufficient funds in all cases!
        // Still need to check if cid is divisble into the change available
        return "Insufficient Funds";
    } else if (totalCash === returnCash) {
        return "Closed";
    }

    // calulate change back
    for (let i = (cid.length -1); i >= 0; i--) {
        // check and add only denominations needed
        if (returnCash >= cashValue[i].value) {
            // how much of a certain denomination to push to the change arrary
            let changeCount = 0;
            while (returnCash - cashValue[i].value >= 0) {
                //if (cashValue[i].value * changeCount > cid[i][1] * 100) {
                    returnCash -= cashValue[i].value;
                    changeCount++;
                //}
            }
            console.log(changeCount);
            change.push([cashValue[i].name, (changeCount * cashValue[i].value)]);
        }
    }

    // change the pennies into cash decimal before returning
    change.map( (denom) => {
      denom[1] /= 100;
    });

    // if there is still change left over, we can't break the change in the
    //  drawer to give the proper change back
    if (returnCash > 0) {
        return "Insufficient Funds";
    }

    return change;
}


//console.log(checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN",20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));
// Should return [["QUARTER", 0.50]]

//console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
 //Insufficient Funds

//console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
// Insufficient Funds

//console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
// Closed

console.log(checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));
// Should return: [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]]
