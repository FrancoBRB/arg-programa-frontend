export class Softskill {
    id: number | null = null;
    skillname: string = '';
    porcentage: number | null = null;
  
    constructor() {}
  
    public fromData(id: number, skillname: string, porcentage:number) {
      const softskill = new Softskill();
      softskill.id = id;
      softskill.skillname = skillname;
      softskill.porcentage = porcentage;
      return softskill;
    }
  }
  