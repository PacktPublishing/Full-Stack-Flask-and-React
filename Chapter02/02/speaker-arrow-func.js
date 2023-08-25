const speaker = {
	name: 'Alice Andrew',
	sayHi: () => {
	  console.log(`Hi, I'm ${this.name}!`);
	},
  };

  speaker.sayHi(); // Output: Hi, I'm undefined!