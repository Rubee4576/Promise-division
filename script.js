const divide = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if (num2 === 0){
            reject("Division by zero is not allowed.");
        } else {
            resolve(num1 / num2);
        }
    });
};

// Test Case 1 


divide(10, 2)
     .then(result => {
        console.log("Case 1 Result:", result);
     })
     .catch(error => {
        console.log("Case 1 Error:", error);
     }
     );


// Test Case 2 


divide(10, 0)
    .then(result => {
        console.log("Case 2 Result:", result);
    })
    .catch(error => {
        console.log("Case 2 Error:", error);
    });


//Test Case 3


divide(20, 4)
    .then(result => {
        console.log("Case 3 Result:", result);
    })
    .catch(error => {
        console.log("Case 3 Error:", error);
    });


//Test Case 4


divide(25, 5)
    .then(result => {
        console.log("Case 4 Result:", result);
    })
    .catch(error => {
        console.log("Case 4 Error:", error);
    });


//Test Case 5


divide(7, 2)
    .then(result => {
        console.log("Case 5 Result:", result);
    })
    .catch(error => {
        console.log("Case 5 Error:", error);
    });