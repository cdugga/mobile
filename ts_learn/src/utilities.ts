
type StarshipNameOnly = Pick<Startship, 'name'>;

type StarshipNameEmit = Omit<Startship, 'name'>;

type AvailableDrinks = 'Coffee'|'Tea'|'OJ'|'Lemonade'
let johnsdrink: AvailableDrinks;
johnsdrink = 'Coffee'


type janesdislikelist = 'Coffee'| 'OJ';
let janesdislikelist: Exclude<AvailableDrinks, janesdislikelist>
janesdislikelist = 'Tea'

// nonnullable

function someStartshipFunc(id: number, name: NonNullable<Startship['name']>){
    return {
        id, 
        name
    }
}
type someStartshipFuncReturn = ReturnType<typeof someStartshipFunc>

someStartshipFunc(1, 'some val')