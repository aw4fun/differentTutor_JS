abstract class RightAngleShape {
    protected setSide(size: number, side?: 'width' | 'height'): void {};
    abstract areaOf(): number;
}

class Square extends RightAngleShape {
    edge: number;

    constructor(size: number) {
        super();
        this.edge = size
    }

    protected setSide(size: number): void {
        this.edge = size;
    };

    setWidth(size: number): void{
        this.setSide(size);
    };

    areaOf(): number {
        return this.edge **2;
    };
}

class Rectangle extends RightAngleShape{

    width: number;
    height: number;

    constructor(width: number, height: number) {
        super();
        this.height = height;
        this.width = width;
    }

    protected setSide(size: number, side?: "width" | "height"): void {
        this[side] = size;
    }

    setWidth(size: number){
        this.setSide(size, 'width');
    }

    setHeight(size: number){
        this.setSide(size, 'height');
    }

    areaOf(): number {
        return this.width * this.height;
    }
}
