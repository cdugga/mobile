interface Expirable {
    expiryDate: Date;
}

interface ChocolateCake extends Expirable{}
interface VanillaCake extends Expirable{}

const choco: ChocolateCake[] = [
    {expiryDate: new Date()}
];

const vanilla: VanillaCake[] = [
    {expiryDate: new Date()}
];

interface ExpiredFunction {
    <Item extends Expirable>(items: Array<Item>): Array<Item>;
}
 
const getExpiredItems: ExpiredFunction = <Item extends Expirable>(items: Array<Item>) => {
    const currentDate = new Date().getTime()
    return items.filter(item => item.expiryDate.getDate() < currentDate)
}
// using interface for type safety
const getExpiredItems1: ExpiredFunction = (items) => {
    const currentDate = new Date().getTime()
    return items.filter(item => item.expiryDate.getDate() < currentDate)
}

const expiredChoco = getExpiredItems<ChocolateCake>(choco)
const expiredVanil = getExpiredItems<VanillaCake>(vanilla)
