function htmlEndTagByStartTag(startTag) {
  return '</' + /<([a-zA-Z\d]+)/.exec(startTag)[1] + '>';
}
