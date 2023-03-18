export class Education {
  id: number | null = null;
  establishment: string = '';
  career: string = '';
  dateIni: Date = new Date();
  dateFin: Date = new Date();
  img: string = '';

  constructor() {}

  fromData(
    id: number,
    establishment: string,
    career: string,
    dateIni: Date,
    dateFin: Date,
    img: string
  ) {
    const edu = new Education();
    edu.id = id;
    edu.establishment = establishment;
    edu.career = career;
    edu.dateFin = dateFin;
    edu.dateIni = dateIni;
    edu.img = img;
    return edu;
  }
}
