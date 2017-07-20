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


var cashValue = {
    // value in pennies!
    "ONE HUNDRED" : 10000,
    "TWENTY"      : 2000,
    "TEN"         : 1000,
    "FIVE"        : 500,
    "ONE"         : 100,
    "QUARTER"     : 25,
    "DIME"        : 10,
    "NICKEL"      : 5,
    "PENNY"       : 1
};

function checkCashRegister(price, cash, cid) {
    // total cash value of money to return
    var returnCash = (cash - price) * 100;
    // sum of value of cid: cash in drawer
    var totalCash = 0;
    // empty array of return change, only add item if needed
    var change = [];

    for (var i = 0; i < cid.length; i++) {
        totalCash += (cid[i][1]) * 100;
    }

    // check first for insufficient and even funds
    if (totalCash < returnCash) {
        console.log(totalCash + " " + returnCash);
        return "Insufficient Funds";
    } else if (totalCash === returnCash) {
        return "Closed";
    }

/*
 *    console.log("total cash: " + totalCash + " return cash: " + returnCash);
 *
 *    while (totalCash > 0) {
 *        for (var j = 0; j < cashValue.length; j++) {
 *            while (cashValue[j] > totalCash && cid[j][1] > 0) {
 *                totalCash -= cashValue[j];
 *                change += []; // add property name here
 *                // also need to add the amount of the money value here
 *            }
 *        }
 *    }
 */

    // change should be an array b/c we have to give change in what is
    //  actually in the drawer

}


console.log(checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05],
    ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00],
    ["TEN",20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));
// Should return [["QUARTER", 0.50]]

//console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
// Insufficient Funds

//console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
// Closed

//console.log(checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));
// Should return: [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]]
