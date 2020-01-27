interface IShape {
    areaOf(): number;
}

interface IWidthfulShape {
    setWidth(size: number): void;
}

interface IHeightfulShape{
    setHeight(size: number): void;
}

type SquareShape = IShape & IWidthfulShape;

class Square implements SquareShape{
    edge: number;

    constructor(size: number) {
        this.edge = size;
    }

    protected setSide(size: number): void {
        this.edge = size;
    }

    setWidth(size: number){
        this.setSide(size);
    }

    areaOf(): number {
        return this.edge **2;
    }
}


type RectShape = IShape & IWidthfulShape & IHeightfulShape;
type ShapeSide = 'width' | 'height';

class  Rectangle implements RectShape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.height = height;
        this.width = width;
    }

    protected setSide(size: number, side: ShapeSide): void {
        this[side] = size;
    }

    setHeight(size: number) {
        this.setSide(size, 'height');
    }

    setWidth(size: number) {
        this.setSide(size, 'width');
    }

    areaOf(): number {
        return this.width * this.height;
    }
}
