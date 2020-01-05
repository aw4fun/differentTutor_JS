const getAutoTags = ( base="https://mysite.local/tag/" ) => {
    return (str, tags, url = base ) => {
        tags = '(' + tags.join('|') + ')'; // собираю выражение для регулярки
        return str.replace( new RegExp(tags, 'gi'), `<a href="${url}$1">@$1</a>`);
    }
};
const autoTags = getAutoTags();
console.log(autoTags('интересно изучать js', ['html','js']));