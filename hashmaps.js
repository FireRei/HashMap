const test = (() => {
	let map = [];
	const loadFactor = 0.75;
	const size = 16;
	const hash = (key) => {
		let hashCode = 0;
		const primeNumber = 31;

		for (let i = 0; i < key.length; i++) {
			hashCode =(primeNumber * hashCode + key.charCodeAt(i)) % size;
			//hashCode = hashCode % 16;
		}

		return hashCode;
	} 

	const set = (key, value) => {
		const index = hash(key);
		if (map[index] !== undefined) {
			map[index] = [];
		}
		map[index] = value;
	}

	const get = (key) => {
		const index = hash(key);
		if (map[index] === undefined) {
			return null;
		}
		return map[index];
	}

	const has = (key) => {
		const index = hash(key);
		if (map[index] === undefined) {
			return false;
		}
		return true;
	}

	const remove = (key) => {
		const index = hash(key);
		if (map[index] === undefined) {
			return false;
		}
		map[index] = undefined;
		return true
	}

	const length = () => {
		let count = 0;
		for (let i = 0; i < map.length; i++) {
			if (map[i] !== undefined) {
				count++;
			}
		}
		return count;
	}

	const clear = () => {
		map.length = 0;
	}

	const keys = () => {
		const keys = [];
		for (let i = 0; i < map.length; i++) {
			if (map[i] !== undefined) {
				keys.push(i);
			}
		}
		return keys;
	}

	const values = () => {
		const values = [];
		for (let i = 0; i < map.length; i++) {
			if (map[i] !== undefined) {
				values.push(map[i]);
			}
		}
		return values;
	}

	const entries = () => {
		const entries = [];
		for (let i = 0; i < map.length; i++) {
			if (map[i] !== undefined) {
				const entry = [i, map[i]];
				entries.push(entry);
			}
		}
		return entries;
	}

	return {
		hash,
		set,
		get,
		has,
		remove,
		length,
		clear,
		keys,
		values,
		entries
	}
})();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');
test.set('lion', 'goldeen');
test.set('moon', 'silver');
console.log(test.get('apple'));
console.log(test.has('apple'));
console.log(test.remove('apple'));
console.log(test.length());
console.log(JSON.stringify(test.keys()));
console.log(JSON.stringify(test.values()));
console.log(JSON.stringify(test.entries()));
