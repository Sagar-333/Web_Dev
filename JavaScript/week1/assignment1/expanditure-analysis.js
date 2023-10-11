/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/
function analysis(transcation) {
    var spendEst = {};
    for (let i = 0; i < transcation.length; i++) {
      var t = transcation[i];
      if (spendEst[t.category]) {
        spendEst[t.category]=spendEst[t.category]+t.price
      }else{
        spendEst[t.category]=t.price
      }
    }
    var keys = Object.keys(spendEst);

    let answer = [];
    for (let i = 0; i < keys.length; i++) {
      var category = keys[i];
      var obj = {
        category: category,
        amountSpend: spendEst[category]
      }
      answer.push(obj)
    }
    console.log(answer);
}
var transcation=[{
    itemName: "biscuit",
    category: "food",
    price: 15,
    timestamp: "12:00"
},
  {
    itemName: "ice-cream",
    category: "food",
    price: 80,
    timestamp: "12:10"
  },
  {
    itemName: "juice",
    category: "drink",
    price: 60,
    timestamp: "12:15"
  },
  
]
analysis(transcation);