function assignmentoperators() {
    let a = 10;
    a += 4;
    console.log(a);

    let b = 10;
    b -= 4;
    console.log(b);

    let c = 10;
    c *= 4;
    console.log(c);

    let d = 10;
    d /= 4;
    console.log(d);

    let e = 10;
    e %= 4;
    console.log(e);

    let f = 10;
    f **= 4;
    console.log(f);
}

function makeCoffee(sugar,milk) {
    var instructions = 'boil water,';
    instructions += 'pour into cup,';
    instructions += 'add coffee granules,';
    instructions += 'add ' + sugar + ' spoons of sugar,';
    instructions += 'add ' + milk + '% milk';
    return instructions;
}

// function arraysobjects() {
    var car = {
        make: 'BMW',
        speed: 200,
        engine: {
            size: 2.2,
            make: 'BMW',
            fuel: 'petrol',
            pistons: [{ maker: 'BMW' }, { maker: 'BMW2' }]
        },
        drive: function() { return 'drive'; }
    };

    var array = [
        'string',
        100,
        ['arrayembed', 200],
        { car: 'Ford' },
        function () { return 'wash'; }
    ];

    console.log(car.engine.make); //or
    console.log(car['make'])
    console.log(car['engine']['pistons'][1]['maker'])
// }

// console.log(arraysobjects())
