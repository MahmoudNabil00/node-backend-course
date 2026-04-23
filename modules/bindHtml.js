module.exports = function(html, data,prefix = '{{%',suffix = '%}}',key = 'CONTENT'){
    return html.replace(prefix + key + suffix, data);
}