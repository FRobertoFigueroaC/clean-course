(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';

    interface HtmlElementProps {
        id: string;
        type: HtmlType;
    }
   
    class HtmlElement {
        public id: string;
        public type: HtmlType;
        constructor({id,type}: HtmlElementProps) {}
    }

    interface InputAttributesProps {
        value: string;
        placeholder: string;
    }

    class InputAttributes {
        public value: string;
        public placeholder: string;
        constructor({ value, placeholder}: InputAttributesProps) {
        }
    }

    class InputEvents {
        constructor() {
        }

        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }

    interface InputElementProps {
        id: string;
        placeholder: string;
        type: HtmlType;
        value: string;
    }

    class InputElement {
        public htmlElement: HtmlElement;
        public inputAttributes: InputAttributes;
        public inputEvents: InputEvents;

        constructor({id, type, value, placeholder}: InputElementProps){
            this.htmlElement = new HtmlElement({id, type: 'input'});
            this.inputAttributes = new InputAttributes({value, placeholder});
            this.inputEvents = new InputEvents();

        }

    }


    //? Idea para la nueva clase InputElement

    const nameField = new InputElement({
        value: 'Fernando', 
        placeholder: 'Enter first name', 
        id: 'txtName',
    });

    console.log({ nameField });

})()