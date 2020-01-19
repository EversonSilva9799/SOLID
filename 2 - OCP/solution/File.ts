export abstract class File {
	private name: string;
	protected type: string;

	constructor(name: string) {
		this.name = name;
	}

	public abstract upload(): void;
}
