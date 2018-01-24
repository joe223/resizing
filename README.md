Inspired by https://github.com/marcj/css-element-queries
> minify 1.4k
# Usage
```javascript
var r = new Resizing(dom: Element)
function detector(evt: ScrollEvent) {
    console.log('resizing!')
}
r.on(detector)
r.off(detector)
r.destroy()
```