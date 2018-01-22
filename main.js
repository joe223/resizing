export default class Resizing {
    constructor (el) {
        this.size = 10000;
        this.box = document.createElement('div')
        this.expansion = document.createElement('div')
        this.shrink = document.createElement('div')
        this.shrink.setAttribute('style', 'position: absolute; left: 0px; top: 0px; width: 100%; height: 100%; overflow: scroll;background: rgba(0,0,0,0.1)')
        this.expansion.setAttribute('style', 'position: absolute; left: 0px; top: 0px; width: 100%; height: 100%; overflow: scroll;background: rgba(0,0,0,0.1)')
        this.expansion.innerHTML = `<div style="width: ${this.size}px; height: ${this.size}px"></div>`
        this.shrink.innerHTML = `<div style="width: ${222}%; height: ${222}%"></div>`
        el.appendChild(this.expansion)
        el.appendChild(this.shrink)
        this.reset()
        this.expansion.addEventListener('scroll', e => {
            this.scrollTo(this.shrink, this.size, this.size) 
        })
        this.shrink.addEventListener('scroll', e => {
            this.scrollTo(this.expansion, this.size, this.size)
        })
        
    }
    reset () {
        this.scrollTo(this.expansion, this.size, this.size)
        this.scrollTo(this.shrink, this.size, this.size)        
    }
    on (cb) {
        this.expansion.addEventListener('scroll', cb)
    }
    scrollTo(el, top, left) {
        el.scrollTop = top
        el.scrollLeft = left
    }
}