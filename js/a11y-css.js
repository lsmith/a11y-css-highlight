/*
 * CSS

[tabindex="0"]{
    background: yellow;
}
[tabindex]:before {
    content: attr(tabindex);
    color: red;
    font-weight: bold;
}
 
  
[role]{
    background: pink;
}
[role]:before{
    content: attr(role);
    color: green;
    font-weight: bold;
}

 */
(function (d) {
var css = '[tabindex="0"]{background:yellow}[tabindex]:before{content:attr(tabindex);color:red;font-weight:bold}[role]{background:pink}[role]:before{content:attr(role);color:green;font-weight:bold}',
    s = d.getElementById('a11y-css-highlight');
    
if (s) {
    s.disabled = !s.disabled;
} else {
    s = d.createElement('style');
    s.id = 'a11y-css-highlight';
    s.type = 'text/css';
    if (s.styleSheet) {
        s.styleSheet.cssText = css;
    } else {
        s.appendChild(d.createTextNode(css));
    }
    d.getElementsByTagName('head')[0].appendChild(s);
}
})(document);
