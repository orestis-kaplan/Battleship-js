import Ship from '../src/classes/ship.js';

describe('Contructor tests',()=>{
    test("Ship must have length",()=>{        
        expect(() => new Ship()).toThrow(Error);
    });
    test("Ship must have direction",()=>{
        expect(()=> new Ship(5)).toThrow(Error);
    });
    test("Energy should be equal to length",()=>{
        let ship = new Ship(5, 'horizontal', {x:0, y:0});
        expect(ship.energy).toBe(5);
    });
});

describe('Energy tests',()=>{
    let ship = new Ship(5, 'horizontal', {x:0, y:0});

    test("Ship's energy should be descreased by 1 using hit()",()=>{
        ship.hit();
        expect(ship.energy).toBe(4);
    });
    test("When ship is sunk then isSunk should return true",()=>{
        ship.energy = 0;
        expect(ship.isSunk()).toBeTruthy();
    });
    test("When using hit() and energy is 1 isSunk should return true",()=>{
        ship.energy = 1;
        expect(ship.isSunk()).toBeFalsy();
        ship.hit();
        expect(ship.isSunk()).toBeTruthy();
    });
});

describe('Occupied positions of a ship',()=>{
    let ship = new Ship(5, 'horizontal', {x:5, y:5});

    test("Horizontal ship with length 5 and position: {x: 5,y:5} should return {x:10 , y:5}",()=>{
        expect(ship.getPosition()).toEqual(
            [{x: 5, y: 5},
            {x: 6, y: 5},
            {x: 7, y: 5},
            {x: 8, y: 5},
            {x: 9, y: 5}]
        );
    });

    test("Vertical ship with length 5 and position: {x: 5,y:5} should return {x:5 , y:10}",()=>{
        ship.direction = 'vertical';
        expect(ship.getPosition()).toEqual(
            [{x: 5, y: 5},
            {x: 5, y: 6},
            {x: 5, y: 7},
            {x: 5, y: 8},
            {x: 5, y: 9}]
        );
    });
});