// Coding Challenge #3
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.
// GOOD LUCK �

const markObject = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 169,

    calcMarkBMI: function() {
        this.markBMI = markObject.mass / (markObject.height * 2);
        // console.log(this.markBMI);
        return this.markBMI;
    },

    getMarkSummary: function() {
        return `${this.fullName} has a mass of ${this.mass} kilos, and a height of ${this.height} cm, so his BMI is: ${this.calcMarkBMI()}`;
    }
};

const johnObject = {
    fullName: 'John Smith',
    mass: 92,
    height: 195,

    calcJohnBMI: function() {
        this.johnBMI = johnObject.mass / (johnObject.height * 2);
        return this.johnBMI;
    },

    getJohnSummary: function() {
        return `${this.fullName}, has a mass of ${this.mass} kilos, and a height of ${this.height} cm, so his BMI is: ${this.calcJohnBMI()}`;
    },

};

markObject.calcMarkBMI();
console.log(markObject.markBMI);
//markObject.getMarkSummary();

johnObject.calcJohnBMI();
console.log(johnObject.johnBMI);
//johnObject.getJohnSummary();

if (markObject.markBMI > johnObject.johnBMI) {
    console.log(`${markObject.getMarkSummary()}, which is higher than John's`);
} else {
console.log(`${johnObject.getJohnSummary()}, which is higher than Mark's`);
}


