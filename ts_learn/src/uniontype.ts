interface Dog{
    bark(): void
    walk(): void
};

interface Cat{
    meow(): void
    walk(): void
};

function isDog(someObj: Dog | Cat): someObj is Dog {
    return (<Dog>someObj).bark !== undefined;
}

function callMyPet(pet : Dog | Cat){
    pet.walk()
    if(isDog(pet)){
        pet.bark()
    }
    else{
        pet.meow()
    }
}

function callMyPetInstancef(pet : Dog | Cat){
    pet.walk()
    if(pet instanceof Dog){
        pet.bark()
    }
    else{
        pet.meow()
    }
}