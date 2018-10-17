import {
    ComponentFactoryResolver,
    ComponentRef,
    Directive,
    EventEmitter,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    ViewContainerRef
} from '@angular/core';
import {TextComponent} from "./components/text.component";
import {NumberComponent} from "./components/number.component";
import {PhoneComponent} from "./components/phone.component";

@Directive({
    selector: '[dynamic-input]'
})
export class DynamicInputDirective implements OnInit, OnDestroy, OnChanges {
    @Input() input_type = '';
    @Input() component_type = ''
    @Input() name = '';
    @Input() placeholder = ''
    @Input() value: any = '';
    @Input() change: EventEmitter<any>;
    @Input() blur: EventEmitter<any>;
    @Input() focus: EventEmitter<any>;
    @Input() invalid;
    @Input() range = []

    componentRef: ComponentRef<any>;

    components = {
        'text': TextComponent,
        'number': NumberComponent,
        'phone': PhoneComponent
    };

    constructor(
        private resolver: ComponentFactoryResolver,
        private container: ViewContainerRef
    ) {
    }

    ngOnInit(): void {
        this.createComponent();
    }

    ngOnChanges(changes) {
        if (this.componentRef) {
            this.componentRef.destroy();
            this.createComponent();
        }
    }


    ngOnDestroy() {
        this.componentRef.destroy();
    }

    createComponent = () => {
        const component = this.components[this.component_type]
        const factory = this.resolver.resolveComponentFactory<any>(component);

        this.componentRef = this.container.createComponent(factory);

        this.componentRef.instance.name = this.name;
        this.componentRef.instance.placeholder = this.placeholder;
        this.componentRef.instance.input_type = this.input_type;
        this.componentRef.instance.value = this.value;
        this.componentRef.instance.invalid = this.invalid;
        this.componentRef.instance.range = this.range;
        this.componentRef.instance.change = this.change;
        this.componentRef.instance.blur = this.blur;
        this.componentRef.instance.focus = this.focus;
    };


}