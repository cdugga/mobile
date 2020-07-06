
type StarshipNameOnly = Pick<Startship, 'name'>;

type StarshipNameEmit = Omit<Startship, 'name'>;

type AvailableDrinks = 'Coffee'|'Tea'|'OJ'|'Lemonade'
let johnsdrink: AvailableDrinks;
johnsdrink = 'Coffee'


type janesdislikelist = 'Coffee'| 'OJ';
let janesdislikelist: Exclude<AvailableDrinks, janesdislikelist>
janesdislikelist = 'Tea'