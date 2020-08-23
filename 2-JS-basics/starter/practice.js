/*var mark = {
    firstName : "Mark",
    lastName : "Pearson",
    weigth : 90,
    height : 1.70,
    fullName : function () {
        return this.firstName + " " + this.lastName;
    },
    calcBMI : function bmiCalculator() {
        this.bmi = this.weigth / (this.height * this.height);
        return this.bmi;
    }
};

var john = {
    firstName : "John",
    lastName : "Morrison",
    weigth : 80,
    height : 1.70,
    fullName : function () {
        return this.firstName + " " + this.lastName; 
    },
    calcBMI : function () {
        this.bmi = this.weigth / (this.height * this.height);
        return this.bmi;
    }
};

;

if (mark.calcBMI() > john.calcBMI()) {
    console.log("Mark has  the highest bmi (" + mark.bmi + ")" + "\nJohns bmi : " + john.bmi);
} else if (mark.bmi < john.bmi){
    console.log("John has  the highest bmi (" + john.bmi() + ")" + "\nMarks bmi: " + mark.bmi());
}

console.log(mark.fullName());
*/

var johnTip = {
    billValues : [124, 48, 268, 180, 42],
    calcTips : function () {
        this.tipArr = [];
        this.fullBill = [];
        for (i = 0; i < this.billValues.length; i++) {
            if (this.billValues[i] < 50) {
                this.tipArr[i] = Math.round(this.billValues[i] * .2); 
                this.fullBill[i] = Math.round(this.billValues[i] * 1.20); 
            } else if (this.billValues[i] >= 50 && this.billValues[i] <= 200){
                this.tipArr[i] = Math.round(this.billValues[i] * .15);
                this.fullBill[i] = Math.round(this.billValues[i] * 1.15);
            } else {
                this.tipArr[i] = Math.round(this.billValues[i] * .10);
                this.fullBill[i] = Math.round(this.billValues[i] * 1.10);
            }
        }
        return this.tipArr;
    }
}


var markTip = {
    billValues : [77, 5, 110, 45],
    calcTips : function () {
        this.tipArr = [];
        this.fullBill = [];
        for (i = 0; i < this.billValues.length; i++) {
            if (this.billValues[i] < 100) {
                this.tipArr[i] = Math.round(this.billValues[i] * .2); 
                this.fullBill[i] = Math.round(this.billValues[i] * 1.20); 
            } else if (this.billValues[i] >= 100 && this.billValues[i] <= 300){
                this.tipArr[i] = Math.round(this.billValues[i] * .1);
                this.fullBill[i] = Math.round(this.billValues[i] * 1.1);
            } else {
                this.tipArr[i] = Math.round(this.billValues[i] * .25);
                this.fullBill[i] = Math.round(this.billValues[i] * 1.25);
            }
        }
        return this.tipArr;
    }
}


function calculateTips(array) {
var sum = 0;  
for (i = 0; i < array.length; i++){
   sum += array[i]; 
}
return sum /(array.length);
}

console.log(calculateTips(johnTip.calcTips()));
console.log(calculateTips(markTip.calcTips()));