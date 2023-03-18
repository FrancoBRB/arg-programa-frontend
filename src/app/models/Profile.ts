export class Profile {
  id: number | null = null;
  email: string = '';
  password: string = '';
  about: string = '';
  photo: string = '';

  constructor(){}

  public static fromData(
    id: number | null,
    email: string,
    password: string,
    about: string,
    photo: string
  ){
    const profile = new Profile;
    profile.id = id;
    profile.email = email;
    profile.password = password;
    profile.about = about;
    profile.photo = photo;
    return new Profile;
  }
}
