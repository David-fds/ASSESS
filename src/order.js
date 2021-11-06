

/* 1
----Write a function called takeOrder that takes in a order and an orderArray
----your function should add the order to the ordersArray
----ordersArray should not be able to hold more than three orders at a time
*/

function takeOrder(order, orderArray) {
    if(orderArray.length < 3){
        return orderArray.push(order);
    }
    else{
        return orderArray;
    }
}

/* 2
----Write a function called refundOrder that takes in a orderNumber and an array of orders
----Your function should remove the order from the array of orders simply by the orderNumber
*/

function refundOrder(orderNumber, orderArray) {
    for (var i = orderArray.length; i > 0; i--){
        if (orderNumber == orderArray[i - 1].orderNumber){
            return orderArray.splice((i - 1), 1);
        }
    }
}

/* 3
----Write a function called listItems that takes in array of orders and
----lists out all of the order items by name
----HINT: please console log the array that is being passed into listItems
*/

function listItems(arr){
    var list = arr[0].item;
    if(arr.length >= 2){   
        for(var i = 1; i < arr.length; i++){
            list = list + ", " + arr[i].item;
        }   
    }
    return list;
}

/* 4
----Write a function called searchOrder that takes in array of orders and
----a item. Your function should output true if the item is included in the array of orders and false if otherwise
*/
function searchOrder(orderArray, item) {
    for(var i = orderArray.length; i > 0; i--){
        if(orderArray[i - 1].item == item){
            return true;
        }        
    }
    return false;
}