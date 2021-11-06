var orderArray = [1234, 2345, 3456, 4567];
var orderNumber = 2345;
console.log("Array = " + orderArray + ";  Number = " + orderNumber);

orderArrayResult = refundOrder(orderNumber, orderArray);

console.log("Array = " + orderArray + ";  Number = " + orderNumber);

function refundOrder(orderNumber, orderArray) {

    var index = orderArray.indexOf(orderNumber);
    if(index > -1){
    return orderArray.splice(index, 1);
    }
}