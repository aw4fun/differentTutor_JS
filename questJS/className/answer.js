const classNames = {
    cname: '',
    add(...s) {
        let cname = this.cname.split(' ');
        let tmp = {};
        for (let i in cname){tmp[cname[i]] = i}
        s.forEach( function (e) { tmp[e] = 1});
        this.cname = '';
        for (let i in tmp) {
            this.cname += i + ' ';
        }
        this.cname = this.cname.slice(0, -1);
    },
    remove(...s) {
        let cname = this.cname.split(' ');
        let tmp = {};
        for (let i in cname){
            tmp[cname[i]] = i
        }
        s.forEach( function (e) {
            if (e in tmp) delete tmp[e];
        });
        this.cname = '';
        for (let i in tmp) {
            this.cname += i + ' ';
        }
        this.cname = this.slice(0, -1);
    },
    toggle(str, flag) {
        let cname = this.cname.split(' ');
        let tmp = {};
        for (let i in cname){
            tmp[cname[i]] = i
        }
        if ((str in tmp) || (!flag && flag !== undefined)) {
            delete tmp[str];
        } else if (!(str in tmp) || flag) {
            tmp[str] = 1;
        }
        this.cname = '';
        for (let i in tmp) {
            this.cname += i + ' ';
        }
        this.cname = this.cname.slice(0, -1);
    }
};

classNames.cname = 'btn';
classNames.add('btn-primary');
console.log(classNames);