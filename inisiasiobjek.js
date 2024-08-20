class Vehivle {
  constructor(name, type, price) {
    this.name = name;
    this.type = type;
    this.price = price;
  }

  startEngine() {
    console.log("Start Engine");
  }

  stopEngine() {
    console.log("Stop Engine");
  }
}

let vehicle = new Vehivle("xenia", "minibus", 1000000);

console.log(vehicle);
