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
  constructor(brand, model, year, towingCapacity) {
    super('Truck', brand, model, year);
    this.towingCapacity = towingCapacity;
  }

  performAction() {
    return `You haul heavy cargo with the ${this.getInfo()}.`;
  }

  tow() {
    return `The ${this.getInfo()} is towing up to ${this.towingCapacity} lbs.`;
  }
}

class Motorbike extends Vehicle {
  constructor(brand, model, year, frontTireDiameter, rearTireDiameter, tireBrand) {
    super('Motorbike', brand, model, year);
    this.frontTireDiameter = frontTireDiameter;
    this.rearTireDiameter = rearTireDiameter;
    this.tireBrand = tireBrand;
  }

  performAction() {
    return `You zoom down the highway on the ${this.getInfo()}.`;
  }

  wheelie() {
    return `The ${this.getInfo()} performs a wheelie with its ${this.tireBrand} tires!`;
  }
}

export { Vehicle, Car, Truck, Motorbike };
