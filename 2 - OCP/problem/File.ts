export abstract class File {
	private name: string;
	private type: string;

	constructor(name: string, type: string) {
		this.name = name;
		this.type = type;
	}
}
