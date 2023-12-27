class App {
  constructor() {
    this.driver = document.getElementById("driver").value;
    this.date = document.getElementById("date").value;
    this.time = document.getElementById("time").value;
    this.passenger = document.getElementById("passenger").value;

    this.carContainerElement = document.getElementById("cars-container");
    this.loadButton = document.getElementById("btn-search-car");
  }

  async initApp() {
    //Inisiasi App agar mentrigger untuk load data
    await this.loadData();

    // Register click listener
    this.loadButton.onclick = this.run;
  }

  runApp = () => {
    //Clear element diawal setiap render data
    this.clearElement();

    let carDataforRender = this.filterCarData();

    //Handling ketika input form date dan time tidak lengkap
    if (!this.date || !this.time || this.driver == "Pilih Tipe Driver") {
      Swal.fire({
        icon: "error",
        scrollbarPadding: false,
        padding: "3em",
        title: "Form belum lengkap!",
        text: "Silahkan input semua form.",
      });
      this.runAppFirstLoad();
      return;
    }

    //Handling ketika data tidak ditemukan
    if (!carDataforRender || carDataforRender.length == 0) {
      Swal.fire({
        icon: "error",
        scrollbarPadding: false,
        title: "Data tidak ditemukan!",
        text: "Silahkan mencari jadwal yang lain.",
        timer: 1700,
      });

      const node = document.createElement("div");
      node.classList.add("col-sm-12");
      node.innerHTML = `<h1 class="no-data">Tidak Ada Data!</h1>`;
      this.carContainerElement.appendChild(node);
      return;
    }

    //Alert ketika data berhasil ditemukan
    Swal.fire({
      icon: "success",
      scrollbarPadding: false,
      title: "Data ditemukan!",
      text: "Silahkan pilih mobil Anda.",
      timer: 1700,
    });

    carDataforRender.forEach((car) => {
      const node = document.createElement("div");
      node.classList.add("col-sm-4");
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  runAppFirstLoad = () => {
    //Clear element diawal setiap render data
    this.clearElement();

    let dataCar = Car.list;

    dataCar.forEach((car) => {
      const node = document.createElement("div");
      node.classList.add("col-sm-4");
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  filterCarData = () => {
    //Reformatting datetime
    let dateTime = new Date(`${this.date} ${this.time}`);

    let filteredCarData = Car.list.filter((car) => {
      //Filter jika tidak memasukkan jumlah penumpang
      if (!passenger) {
        return car.available && new Date(car.availableAt).getTime() >= new Date(dateTime).getTime();
      }
      //Filter ketika jumlah penumpang dimasukkan
      return (
        car.available &&
        car.capacity >= this.passenger &&
        new Date(car.availableAt).getTime() >= new Date(dateTime).getTime()
      );
    });

    return filteredCarData;
  };

  async loadData() {
    //Load data hasil fetch ke Class Car
    const cars = await Data.fetchData();
    Car.initData(cars);
  }

  clearElement = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
