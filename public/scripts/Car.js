class Car extends Component {
  static list = [];

  static initData(data) {
    this.list = data.map((i) => new this(i));
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
    super();

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
    if (!this.available) {
      return `
          <div class="card" >
                <img
                  src="${this.image}" alt="${this.manufacture}"
                  class="card-img-top card-image"
                />
                <div class="card-body">
                  <p class="card-body__model">${this.manufacture} ${this.model}</p>
                  <p class="my-3 card-body__price">Rp ${formatRupiah(this.rentPerDay)} / hari</p>
                  <p class="mb-4 card-body__desc">
                    ${this.description}
                  </p>
                  <div class="d-flex  gap-3">
                    <div>
                      <img
                        src="./images/users.svg"
                        alt=""
                        srcset=""
                        width="20"
                      />
                    </div>
                    <p class="card-body__utils">${this.capacity} Orang</p>
                  </div>
                  <div class="d-flex  gap-3 my-3">
                    <div>
                      <img
                        src="./images/settings.svg"
                        alt=""
                        srcset=""
                        width="20"
                      />
                    </div>
                    <p class="card-body__utils">${this.transmission}</p>
                  </div>
                  <div class="d-flex  gap-3 mb-5">
                    <div>
                      <img
                        src="./images/calendar.svg"
                        alt=""
                        srcset=""
                        width="20"
                      />
                    </div>
                    <p class="card-body__utils">Tahun ${this.year}</p>
                  </div>

                  <button class="btn btn-success disabled w-100">Unavailable</button>
                </div>
              </div>
        
              
              `;
    }
    return `
  
              <div class="card" >
                <img
                  src="${this.image}" alt="${this.manufacture}"
                  class="card-img-top card-image"
                />
                <div class="card-body">
                  <p class="card-body__model">${this.manufacture} ${this.model}</p>
                  <p class="my-3 card-body__price">Rp ${formatRupiah(this.rentPerDay)} / hari</p>
                  <p class="mb-4 card-body__desc">
                    ${this.description}
                  </p>
                  <div class="d-flex  gap-3">
                    <div>
                      <img
                        src="./images/users.svg"
                        alt=""
                        srcset=""
                        width="20"
                      />
                    </div>
                    <p class="card-body__utils">${this.capacity} Orang</p>
                  </div>
                  <div class="d-flex  gap-3 my-3">
                    <div>
                      <img
                        src="./images/settings.svg"
                        alt=""
                        srcset=""
                        width="20"
                      />
                    </div>
                    <p class="card-body__utils">${this.transmission}</p>
                  </div>
                  <div class="d-flex  gap-3 mb-5">
                    <div>
                      <img
                        src="./images/calendar.svg"
                        alt=""
                        srcset=""
                        width="20"
                      />
                    </div>
                    <p class="card-body__utils">Tahun ${this.year}</p>
                  </div>

                  <button class="btn btn-success w-100">Pilih Mobil</button>
                </div>
              </div>
        
    `;
  }
}
