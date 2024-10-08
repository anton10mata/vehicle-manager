// Vehicle.js
class Vehicle {
    constructor(type, brand, model, year) {
      this.type = type;
      this.brand = brand;
      this.model = model;
      this.year = year;
    }
  
    getInfo() {
      return `${this.year} ${this.brand} ${this.model} (${this.type})`;
    }
  }
  
  class Car extends Vehicle {
    constructor(brand, model, year) {
      super('Car', brand, model, year);
    }
  
    performAction() {
      return `You drive the ${this.getInfo()} around the neighborhood.`;
    }
  }
  
  class Truck extends Vehicle {
    constructor(brand, model, year) {
      super('Truck', brand, model, year);
    }
  
    performAction() {
      return `You haul heavy cargo with the ${this.getInfo()}.`;
    }
  }
  
  class Motorbike extends Vehicle {
    constructor(brand, model, year) {
      super('Motorbike', brand, model, year);
    }
  
    performAction() {
      return `You zoom down the highway on the ${this.getInfo()}.`;
    }
  }
  
  export { Vehicle, Car, Truck, Motorbike };  