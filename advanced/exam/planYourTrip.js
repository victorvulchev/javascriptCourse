import {expect} from "chai"
import {describe} from "mocha"

const planYourTrip = {
  choosingDestination(destination, season, year) {
    if (year != 2024) {
      throw new Error(`Invalid Year!`);
    } else {
      if (destination == "Ski Resort") {
        if (season === "Winter") {
          return `Great choice! The ${season} is the perfect time to visit the ${destination}.`;
        } else {
          return `Consider visiting during the Winter for the best experience at the ${destination}.`;
        }
      } else {
        throw new Error(`This destination is not what you are looking for.`);
      }
    }
  },

  exploreOptions(activities, activityIndex) {
    let result = [];

    if (
      !Array.isArray(activities) ||
      !Number.isInteger(activityIndex) ||
      activityIndex < 0 ||
      activityIndex >= activities.length
    ) {
      throw new Error("Invalid Information!");
    }
    for (let i = 0; i < activities.length; i++) {
      if (i !== activityIndex) {
        result.push(activities[i]);
      }
    }
    return result.join(", ");
  },

  estimateExpenses(distanceInKilometers, fuelCostPerLiter) {
    let totalCost = (distanceInKilometers * fuelCostPerLiter).toFixed(2);

    if (
      typeof distanceInKilometers !== "number" ||
      distanceInKilometers <= 0 ||
      typeof fuelCostPerLiter !== "number" ||
      fuelCostPerLiter <= 0
    ) {
      throw new Error("Invalid Information!");
    } else if (totalCost <= 500) {
      return `The trip is budget-friendly, estimated cost is $${totalCost}.`;
    } else {
      return `The estimated cost for the trip is $${totalCost}, plan accordingly.`;
    }
  },
};


describe("Tests", function(){
  describe("choosingDestination tests", function(){
    it("minus 1 year", function(){
      expect(() => planYourTrip.choosingDestination("Ski Resort", "Winter", 2023)).to.throw(Error, 'Invalid Year!')
      expect(() => planYourTrip.choosingDestination("Ski Resort", "Winter", 2025)).to.throw(Error, 'Invalid Year!');
      expect(() => planYourTrip.choosingDestination("Ski Resort", "Winter", 2024.2)).to.throw(Error, 'Invalid Year!');
      expect(() => planYourTrip.choosingDestination("Ski Resort", "Winter", 0)).to.throw(Error, 'Invalid Year!');
    })
    

    it("correct destination", function(){
      expect(() => planYourTrip.choosingDestination("SkiResort", "Winter", 2024)).to.throw(Error, 'This destination is not what you are looking for.');
      expect(() => planYourTrip.choosingDestination("summer", "Winter", 2024)).to.throw(Error, 'This destination is not what you are looking for.');
      expect(() => planYourTrip.choosingDestination("ski resort", "Winter", 2024)).to.throw(Error, 'This destination is not what you are looking for.');
      expect(() => planYourTrip.choosingDestination("Ski resort", "Winter", 2024)).to.throw(Error, 'This destination is not what you are looking for.');
      expect(() => planYourTrip.choosingDestination("ski Resort", "Winter", 2024)).to.throw(Error, 'This destination is not what you are looking for.');
    })

    it("correct season", function(){
      let destination = "Ski Resort"
      let year = 2024
      let season = "Winter"
      expect(planYourTrip.choosingDestination(destination, season, year)).to.equal(`Great choice! The ${season} is the perfect time to visit the ${destination}.`);
      
    })
    it("correct season", function(){
      let destination = "Ski Resort"
      let year = 2024
      let season = "Summer"
      expect(planYourTrip.choosingDestination(destination, season, year)).to.equal(`Consider visiting during the Winter for the best experience at the ${destination}.`);
      
    })
    it("correct season", function(){
      let destination = "Ski Resort"
      let year = 2024
      let season = "winter"
      expect(planYourTrip.choosingDestination(destination, season, year)).to.equal(`Consider visiting during the Winter for the best experience at the ${destination}.`);
      
    })
  })

  describe("exploreOptions tests", function(){
    it("invalid info", function(){
      expect(() => planYourTrip.exploreOptions(1, 1)).to.throw(Error,"Invalid Information!" )
      expect(() => planYourTrip.exploreOptions(["Skiing ", "Snowboarding ", "Winter Hiking "], "hello")).to.throw(Error,"Invalid Information!" )
      expect(() => planYourTrip.exploreOptions(["Skiing ", "Snowboarding ", "Winter Hiking "], 5)).to.throw(Error,"Invalid Information!" )
      expect(() => planYourTrip.exploreOptions("hello", 1)).to.throw(Error,"Invalid Information!" )
      expect(() => planYourTrip.exploreOptions(["Skiing ", "Snowboarding ", "Winter Hiking "], -5)).to.throw(Error,"Invalid Information!" )
      expect(() => planYourTrip.exploreOptions(["Skiing ", "Snowboarding ", "Winter Hiking "], 1.1)).to.throw(Error,"Invalid Information!" )
      expect(() => planYourTrip.exploreOptions(1.2, 1)).to.throw(Error,"Invalid Information!" )
      expect(() => planYourTrip.exploreOptions([], 0)).to.throw(Error,"Invalid Information!" )
      expect(() => planYourTrip.exploreOptions(-3, 0)).to.throw(Error,"Invalid Information!" )
      expect(() => planYourTrip.exploreOptions(undefined, 0)).to.throw(Error,"Invalid Information!" )
      expect(() => planYourTrip.exploreOptions(["Skiing ", "Snowboarding ", "Winter Hiking "], undefined)).to.throw(Error,"Invalid Information!" )
      expect(() => planYourTrip.exploreOptions(["Skiing ", "Snowboarding ", "Winter Hiking "], 3)).to.throw(Error,"Invalid Information!" )
    })
  })

  describe("estimateExpenses tests", function(){
    it("invalid inputs", function(){
      expect(() => planYourTrip.estimateExpenses("2", 100)).to.throw(Error,"Invalid Information!")
      expect(() => planYourTrip.estimateExpenses(-100, 100)).to.throw(Error,"Invalid Information!")
      expect(() => planYourTrip.estimateExpenses(0, 100)).to.throw(Error,"Invalid Information!")
      expect(() => planYourTrip.estimateExpenses(100, "100")).to.throw(Error,"Invalid Information!")
      expect(() => planYourTrip.estimateExpenses(100, 0)).to.throw(Error,"Invalid Information!")
      expect(() => planYourTrip.estimateExpenses(100, -100)).to.throw(Error,"Invalid Information!")
      expect(() => planYourTrip.estimateExpenses("string", 100)).to.throw(Error,"Invalid Information!")
      expect(() => planYourTrip.estimateExpenses(100, "test")).to.throw(Error,"Invalid Information!")
      expect(() => planYourTrip.estimateExpenses(100, undefined)).to.throw(Error,"Invalid Information!")
      expect(() => planYourTrip.estimateExpenses(undefined, 3)).to.throw(Error,"Invalid Information!")
    })

    it("withCorrect details", function(){
      let distanceInKilometers = 1
      let fuelCostPerLiter =  1
      let totalCost = (distanceInKilometers * fuelCostPerLiter).toFixed(2);
      expect(planYourTrip.estimateExpenses(distanceInKilometers, fuelCostPerLiter)).to.equal(`The trip is budget-friendly, estimated cost is $${totalCost}.`)
    })
    it("withCorrect details2", function(){
      let distanceInKilometers = 250
      let fuelCostPerLiter =  2
      let totalCost = (distanceInKilometers * fuelCostPerLiter).toFixed(2);
      expect(planYourTrip.estimateExpenses(distanceInKilometers, fuelCostPerLiter)).to.equal(`The trip is budget-friendly, estimated cost is $${totalCost}.`)
    })
    it("withCorrect details2", function(){
      let distanceInKilometers = 2
      let fuelCostPerLiter =  250
      let totalCost = (distanceInKilometers * fuelCostPerLiter).toFixed(2);
      expect(planYourTrip.estimateExpenses(distanceInKilometers, fuelCostPerLiter)).to.equal(`The trip is budget-friendly, estimated cost is $${totalCost}.`)
    })
    it("withCorrect details2", function(){
      let distanceInKilometers = 40.2
      let fuelCostPerLiter =  3
      let totalCost = (distanceInKilometers * fuelCostPerLiter).toFixed(2);
      expect(planYourTrip.estimateExpenses(distanceInKilometers, fuelCostPerLiter)).to.equal(`The trip is budget-friendly, estimated cost is $${totalCost}.`)
    })
    it("withCorrect details", function(){
      let distanceInKilometers = 3
      let fuelCostPerLiter =  40.2
      let totalCost = (distanceInKilometers * fuelCostPerLiter).toFixed(2);
      expect(planYourTrip.estimateExpenses(distanceInKilometers, fuelCostPerLiter)).to.equal(`The trip is budget-friendly, estimated cost is $${totalCost}.`)
    })
    it("withCorrect details", function(){
      let distanceInKilometers = 30
      let fuelCostPerLiter =  500
      let totalCost = (distanceInKilometers * fuelCostPerLiter).toFixed(2);
      expect(planYourTrip.estimateExpenses(distanceInKilometers, fuelCostPerLiter)).to.equal(`The estimated cost for the trip is $${totalCost}, plan accordingly.`)
    })
    it("withCorrect details", function(){
      let distanceInKilometers = 500
      let fuelCostPerLiter =  30
      let totalCost = (distanceInKilometers * fuelCostPerLiter).toFixed(2);
      expect(planYourTrip.estimateExpenses(distanceInKilometers, fuelCostPerLiter)).to.equal(`The estimated cost for the trip is $${totalCost}, plan accordingly.`)
    })
    it("withCorrect details", function(){
      let distanceInKilometers = 500
      let fuelCostPerLiter =  500
      let totalCost = (distanceInKilometers * fuelCostPerLiter).toFixed(2);
      expect(planYourTrip.estimateExpenses(distanceInKilometers, fuelCostPerLiter)).to.equal(`The estimated cost for the trip is $${totalCost}, plan accordingly.`)
    })
    it("withCorrect details", function(){
      let distanceInKilometers = 500.6
      let fuelCostPerLiter =  500.4
      let totalCost = (distanceInKilometers * fuelCostPerLiter).toFixed(2);
      expect(planYourTrip.estimateExpenses(distanceInKilometers, fuelCostPerLiter)).to.equal(`The estimated cost for the trip is $${totalCost}, plan accordingly.`)
    })
    it("withCorrect details", function(){
      let distanceInKilometers = 500
      let fuelCostPerLiter =  500.2
      let totalCost = (distanceInKilometers * fuelCostPerLiter).toFixed(2);
      expect(planYourTrip.estimateExpenses(distanceInKilometers, fuelCostPerLiter)).to.equal(`The estimated cost for the trip is $${totalCost}, plan accordingly.`)
    })
    it("withCorrect details", function(){
      let distanceInKilometers = 500.3
      let fuelCostPerLiter =  500
      let totalCost = (distanceInKilometers * fuelCostPerLiter).toFixed(2);
      expect(planYourTrip.estimateExpenses(distanceInKilometers, fuelCostPerLiter)).to.equal(`The estimated cost for the trip is $${totalCost}, plan accordingly.`)
    })
    
  })
});
"Skiing ", "Snowboarding ", "Winter Hiking "
/*it("correct season2", function(){
      let destination = "Ski Resort"
      let year = 2024
      let season = "Summer"
      expect(() => planYourTrip.choosingDestination(destination, season, year)).to.equal(`Consider visiting during the Winter for the best experience at the ${destination}.`);
    })
    it("correct season3", function(){
      let destination = "Ski Resort"
      let year = 2024
      let season = "winter"
      expect(() => planYourTrip.choosingDestination(destination, season, year)).to.equal(`Consider visiting during the Winter for the best experience at the ${destination}.`);
    }) */