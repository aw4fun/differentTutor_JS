class FileNameExtractor {
    static extractFileName (dirtyFileName) {
        let reg = /(FILE+|\w+\.[A-z]+)/;
        return dirtyFileName.match("([^\\d_][A-z^]+\\.[A-z]+)")[0];
    }
}

console.log(FileNameExtractor.extractFileName("1_FILE_NAME.EXTENSION.OTHEREXTENSIONadasdassdassds34"));
console.log(FileNameExtractor.extractFileName("1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION"));
console.log(FileNameExtractor.extractFileName("1_This_is_an_otherExample.mpg.OTHEREXTENSIONadasdassdassds34"));