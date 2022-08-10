(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';
   
    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) {}
    }

    class InputAttributes {
        constructor(
            public value: string,
            public placeholder: string
        ) {
        }
    }

    class InputEvents{
        constructor() {
        }
        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }

    interface HtmlElementProperties{
        id: string
    }

    interface InputAttributesProperties{
        placeholder   :string;
        value        :string;
    }



    class InputElement{
        public htmlElement      :HtmlElement;
        public inputAttributes  :InputAttributes;
        public inputEvents      : InputEvents;
        constructor(id:string,placeholder:string,value:string){
          this.htmlElement = new HtmlElement(id,'input');
          this.inputAttributes = new InputAttributes(value,placeholder);
          this.inputEvents = new InputEvents();
        }
    }

    const nameField = new InputElement('Fernando','Enter first name','txtName');
    console.log({ nameField });

})()