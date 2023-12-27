class Data {
  //Memodifikasi date agar menjadi hari yang terbaru (now 2023)
  static modifyData = (cars) => {
    return cars.map((car) => {
      const isPositive = getRandomInt(0, 1) === 1;
      const timeAt = new Date();
      const mutator = getRandomInt(1000000, 100000000);
      const availableAt = new Date(timeAt.getTime() + (isPositive ? mutator : -1 * mutator));
      return {
        ...car,
        availableAt,
      };
    });
  };

  // Fetching data dari Url
  static async fetchData(filterer) {
    let cars;
    let cachedCarData = localStorage.getItem("Car");

    // If Localstorage is empty
    if (!cachedCarData) {
      try {
        let response = await fetch(
          "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
        );
        let data = await response.json();
        cars = this.modifyData(data);

        localStorage.setItem("Car", JSON.stringify(cars));
      } catch (error) {
        console.log(error.message);
      }
    } else {
      const cacheCars = JSON.parse(cachedCarData);
      cars = this.modifyData(cacheCars);
    }

    if (filterer instanceof Function) return cars.filter(filterer);

    return cars;
  }
}
