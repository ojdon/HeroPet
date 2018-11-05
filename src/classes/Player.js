class Player {
	constructor(health, magic, hunger) {
		this.health = health;
		this.magic = magic;
		this.hunger = hunger;
	}
	speak() {
		console.log('Hello');
	}
}

export default Player;