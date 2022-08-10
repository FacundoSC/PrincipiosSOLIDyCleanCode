
type Size = ''|'S'|'L'|'XL';
class Product{
    constructor(
        public name: string ='',
        public price :number = 0,
        public  size: Size = ''
        ){}


        productIsReady(){
            for (const key in this) {
                console.log(key ,typeof(this[key]));
                switch (typeof(this[key])) {
                    case 'string':
                        if((<string><unknown>this[key]).length<=0) throw Error(`${key} is Empty`);
                        break;
                    case 'number':
                         if((<number><unknown>this[key])<=0) throw Error(`${key} is Zero`);
                         break;
                    default:
                        throw Error(`${key} is no support`);
                }
         
            }
        }

      toString(){
          this.productIsReady();
          return `${this.name}  (${this.price}) ${this.size}`;
      }  
}

(()=>{

    const bluePants = new Product('Blue Jeans');
    console.log(bluePants.toString());

})();