export class Hardskill {
  id: number | null = null;
  skillname: string = '';

  constructor() {}

  public fromData(id: number, skillname: string) {
    const hardskill = new Hardskill();
    hardskill.id = id;
    hardskill.skillname = skillname;
    return hardskill;
  }
}
