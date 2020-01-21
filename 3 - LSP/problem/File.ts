
export abstract class File {

    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public abstract ready(): void;
    public abstract write(): void;

}