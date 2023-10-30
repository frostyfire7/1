class Component {
  static list = [];

  static init(cars) {
    this.list = cars.map((car) => new this(car));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
    <div class="container" style="margin-top: 7rem">
      <div class="row row-cols-1 row=cols-md-3 g-4">
        <div class="col">
          <div class="card h-100 rounded overflow-hidden" style="width: 25rem">
          <img src="${this.image}" alt="">
              <div class="card-body">
                <h3 class="fs-6">Nama/Tipe Mobil</h3>
                <h3 class="fs-5 fw-bold">Rp. ${this.rentPerDay} / hari</h3>${this.description}</p>
                <div style="list-style: none; margin-top: -15px;">
                  <div class="d-flex gap-2 align-items-center" style="margin-bottom: -15px;">
                    <img src="./images/assets/fi_users.png" width="22">
                      <p style="margin-top: 12px;">${this.capacity} Orang</p>
                  </div>
                  <div class="d-flex gap-2 align-items-center" style="margin-bottom: -15px;">
                    <img src="./images/assets/fi_settings.png" width="22">
                    <p style="margin-top: 12px;">${this.transmission}</p>
                  </div>
                  <div class="d-flex gap-2 align-items-center" style="margin-bottom: -15px;">
                    <img src="./images/assets/fi_calendar.png" width="22">
                    <p style="margin-top: 12px;">Tahun ${this.year}</p>
                  </div>
                </div>
                <button class="col-lg-12 btn mt-4 btn btn-success">Pilih Mobil</button>
              </div>
          </div>
        </div>
      </div>
    </div>
    `;
  }
}
