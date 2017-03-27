import {Directive, ElementRef, Renderer} from 'angular2/core'

@Directive  ({
	selector: '[autoGrow]',
	host: {
		'(onFocus)' : 'onFocus()',
		'(onBlur)' : 'onBlur()'
	}
})

export class AutoGrowDirective{
	constructor( private el: ElementRef, private renderer: Renderer){
	}
	onFocus(){
		this.renderer.setElementStyle(this.el, 'width', '200');
	}
	onBlur(){
		this.renderer.setElementStyle(this.el, 'width', '120');
	}
}