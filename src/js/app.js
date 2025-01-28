export default function Character(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.attack = 10;
    this.defence = 40;
}

function damage(points = 0) {
    const loss = points * (1 - this.defence / 100);
    if (this.health > loss) {
        this.health -= loss;
    } else {
        this.health = 0;
    }
    return this;
}

Character.prototype.damage = damage;
