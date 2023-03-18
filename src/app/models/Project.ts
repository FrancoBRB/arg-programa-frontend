export class Project {
  id: number | null = null;
  name: string = '';
  desc: string = '';
  repo: string = '';
  img: string = '';

  constructor() {}

  fromData(id: number, name: string, desc: string, repo: string, img: string) {
    const project = new Project();
    project.desc = desc;
    project.id = id;
    project.img = img;
    project.name = name;
    project.repo = repo;
  }
}
