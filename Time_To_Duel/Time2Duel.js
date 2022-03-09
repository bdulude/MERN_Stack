/*
Unit Cards
name	            cost	power	resilience
Red Belt Ninja	    3	    3	    4
Black Belt Ninja	4	    5	    4


name	                    cost	text	                            stat	        magnitude
Hard Algorithm	            2	    increase target's resilience by 3	resilience	    +3
Unhandled Promise Rejection	1	    reduce target's resilience by 2	    resilience	    -2
Pair Programming	        3	    increase target's power by 2	    power	        +2


turn	action
1	Make an instance of "Red Belt Ninja"
1	Make an instance of "Hard Algorithm" and play it on "Red Belt Ninja"
2	Make an instance "Black Belt Ninja"
2	Make an instance of "Unhandled Promise Rejection" and play it on "Red Belt Ninja"
3	Make an instance of "Pair Programming" and play it on "Red Belt Ninja"
3	"Red Belt Ninja" uses the attack method on "Black Belt Ninja"

*/
class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}


class Unit extends Card{
    constructor (name, cost, power, resilience) {
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }

    playEffectCard(effectCard) {
        if (effectCard instanceof EffectCard) {
            console.log(`${effectCard.name} was played on ${this.name}!`);
            if (effectCard.stat == "resilience") {
                this.resilience += effectCard.magnitude;
                console.log(`${this.name}'s resilience is now ${this.resilience}`);
            }
            else if (effectCard.stat == "power") {
                this.power += effectCard.magnitude;
                console.log(`${this.name}'s power is now ${this.power}`);
            }
        }
        else {
            throw new error("Not an effect card!");
        }
    }
    
    attack(target) {
        if (target instanceof Unit) {
            target.resilience -= this.power;
            console.log(`${this.name} attacked ${target.name}!`);
            console.log(`${target.name}'s resilience is now ${target.resilience}`);
        }
        else {
            throw new error("Not a unit!");
        }
    }
}

class EffectCard extends Card{
    constructor (name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
}

const red = new Unit("Red Belt Ninja", 3, 3, 4);
const algo = new EffectCard("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3);
red.playEffectCard(algo);
const black = new Unit("Black Belt Ninja", 4, 5, 4);
const promise = new EffectCard("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);
black.playEffectCard(promise);
const pair = new EffectCard("Pair Programming", 3, "increase target's power by 2", "power", 3);
red.playEffectCard(pair);
red.attack(black);

/*
Hard Algorithm was played on Red Belt Ninja!
Red Belt Ninja's resilience is now 7
Unhandled Promise Rejection was played on Black Belt Ninja!
Black Belt Ninja's resilience is now 2
Pair Programming was played on Red Belt Ninja!
Red Belt Ninja's power is now 6
Red Belt Ninja attacked Black Belt Ninja!
Black Belt Ninja's resilience is now -4
*/