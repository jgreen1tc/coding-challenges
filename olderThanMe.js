class Person{
    constructor (name, age){
        this.name = name;
        this.age = age;
    }
    compareAge(otherPerson){
        if (otherPerson.age==this.age){
            console.log(`${otherPerson.name} is the same age as me.`);
        } else{
            if(otherPerson.age > this.age){
                console.log(`${otherPerson.name} is older than me.`);
            } else{
                console.log(`${otherPerson.name} is younger than me.`)
            }
        }
    }
}
p1 = new Person("Samuel", 24)
p2 = new Person("Joel", 36)
p3 = new Person("Lily", 24)

p1.compareAge(p2)
p2.compareAge(p1)
p1.compareAge(p3)
