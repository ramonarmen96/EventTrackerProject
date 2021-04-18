export class Game {

  id: number;
  title: string;
  rating: number;
  players: number;
  img: string;
  description: string;


  constructor(
    id?: number,
    title?: string,
    rating?: number,
    players?: number,
    // exp?: number,
    img?: string,
    description?: string,
    // types?: any[]
  ) {
    this.id = id;
    this.title = title;
    this.rating = rating;
    this.players = players;
    // this.exp = exp;
    this.img = img;
    this.description = description;
    // this.types = types;
  }

}
