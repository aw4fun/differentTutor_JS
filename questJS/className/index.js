const classNames = {
    cname: '12d-12 12d-11 123 12d-10 12d',
    add(str) {
        str.map(item => {
            let test = this.cname.split(' ');
            if (test.includes(item)) {
                console.log('already available!');
            } else {
                this.cname += ` ${item}`;
                console.log('Added!', this.cname);
            }
        })
    },
    remove(str) {
        str.map(item => {
            let test = this.cname.split(' ');
            test = test.filter( testItem => item !== testItem);
            this.cname = test.join(' ');
            console.log('Remove is:', this.cname);
        })
    },
    toggle(str, boolFlag) {
        console.log(str, this.cname);

        if (boolFlag === true) {
            console.log('true!');
            str.map(item => {this.add([item])});
            return;
        }

        if (boolFlag === false) {
            console.log('false!');
            str.map(item => {this.remove([item])});
            return;
        }

        str.map(item => {
            if (this.cname.split(' ').includes(item)) {
                this.remove([item]);
            } else {
                this.add([item]);
            }
        })
    }
};

classNames.add(['qwerty', '123', '3.14']);
classNames.remove(['12d-12', '123', '4321']);
classNames.toggle(['123','12d-12'], undefined);
classNames.toggle(['12d-12', 'qwerty', '123'], true);
classNames.toggle(['12d-12', 'qwerty', '123'], false);
