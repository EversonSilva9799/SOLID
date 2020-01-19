export class File {

    private name: string;
    private size: number;
    private type: string;

    public setName(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public setSize(size: number) {
        this.size = size;
    }

    public getSize(): number {
        return this.size;
    }

    public setType(type: string) {
        this.type = type;
    }

    public getType(): string {
        return this.type;
    }
}