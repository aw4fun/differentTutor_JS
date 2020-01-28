type RecordTypes = 'spend' | 'income';
type SpendTypes = 'helpful' | 'harmful' | null;

interface Record {
    amount: number;
    date: Timestamp;
    is: RecordTypes;
}

// @ts-ignore
interface Spend extends Record {
    type: SpendTypes;
}

class RecordItem implements Record {
    amount: number;
    date: Timestamp;
    is: RecordTypes;

    constructor(amount: number) {
        this.amount = amount;
        this.date = Date.now()
    }
}

class SpendItem extends RecordItem implements Spend{
    type: SpendItem;

    constructor(amount: number, type: SpendTypes = null) {
        super(amount);
        this.is = 'spend';
        this.type = type;
    }
}

class IncomeItem extends RecordItem {
    constructor(amount: number) {
        super(amount);
        this.is = 'income';
    }

}