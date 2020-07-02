interface IA {
    a: number;
}

interface IB {
    b: number;
}

interface IC {
    c: number;
}

function X(obj: IA & IB & IC){
    return obj.a + obj.b
}

function combine<ObjA extends IA, ObjB extends IB> (obja:ObjA, objb: ObjB) : ObjA & ObjB {
    return {...objb, ...obja}
}

const obja = {a:1}
const ObjB = {b:1}
const resultObj = combine(obja, ObjB)