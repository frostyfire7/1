class Car {
  constructor() {
    this.carContainerElement = document.getElementById("root");
    this.searchButton = document.getElementById("btn-search");
    this.driverType = document.getElementById("exampleDriverType");
    this.warning = document.querySelector(".warning");
    this.date = document.getElementById("exampleDate");
    this.waktuJemput = document.getElementById("exampleWaktuJemput");
    this.jumlahPenumpang = document.getElementById("exampleJumlahPenumpang");
  }

  async init() {
    await this.load();

    document.body.onload = this.carAvailable;
    this.searchBtn.onclick = this.run;
  }

  carAvailable = () => {
    let cars = "";

    Component.list
      .filter((car) => car.available)
      .map((car) => {
        cars += car.render();
        this.carContainerElement.innerHTML = cars;
      });
  };

  run = () => {
    let dateTime = new Date(`${this.date.value} ${this.waktuJemput.value}`);
    let cars = "";
    let driverType = this.driverType.value === "true";
    const getCarLenght = Component.list
      .filter(
        (car) =>
          car.available === driverType &&
          new Date(car.availableAt) >= dateTime &&
          car.capacity >= this.jumlahPenumpang.value
      )
      .map((car) => {
        cars += car.render();
        this.carContainerElement.innerHTML = cars;
      });

    console.log(getCarLenght.length);

    if (getCarLenght.length === 0) {
      this.carContainerElement.innerHTML = "";
      this.warning.classList.remove("visually-hidden");
    } else {
      this.warning.classList.add("visually-hidden");
    }
  };

  async load() {
    const cars = await Binar.listCars();
    Component.init(cars);
  }
}
