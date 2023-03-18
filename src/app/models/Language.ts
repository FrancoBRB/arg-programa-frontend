export class Language {
  id: number | null = null;
  langName: string = '';
  porcentage: number = 0;

  constructor() {}

  public static fromData(id: number, lang: string, porcentage: number) {
    const language = new Language();
    language.langName = lang;
    language.id = id;
    language.porcentage = porcentage;
    return language;
  }
}
