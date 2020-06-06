# Resizing

DOM resizing detector, 1kb after minified.

# Install

```shell
npm install resizing --save
```

# Usage

```javascript
import Resizing from 'resizing'

const r = new Resizing(dom: Element)

function detector(evt: ScrollEvent) {
    console.log('resizing!')
}

r.on(detector)
r.off(detector)
r.destroy()
```

Inspired by https://github.com/marcj/css-element-queries
