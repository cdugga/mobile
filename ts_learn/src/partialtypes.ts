interface Startship{
    name: string;
    enableLaser: boolean;
}

const updateStartship = (id: number, starshio: Partial<Startship>) => {

}

updateStartship(1, {
    name: 'Explorer'
});

const startships: Record<string, Startship> = {
    Explorer1: {
        name: "Ex1",
        enableLaser: true
    },
    Explorer2: {
        name: "Ex2",
        enableLaser: true
    },
}