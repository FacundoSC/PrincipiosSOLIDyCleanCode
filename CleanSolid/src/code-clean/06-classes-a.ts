(()=>{
     
     type Gender = 'M'| 'F';

// no aplicando el principio  single responsability = responsabilidad unica
    class Person {
       /* public birthdate  : Date;
        public gender     :Gender;
        public name       :string;

     constructor(birthdate:Date, gender:Gender, name:string){
         this.birthdate = birthdate;
         this.gender = gender;
         this.name = name;
     }*/
        constructor(public birthdate:Date, public gender:Gender, public name:string){
            this.birthdate = birthdate;
            this.gender = gender;
            this.name = name;
        }
    }

    class User extends Person{
        public lastAccess        :Date;
        constructor(
            public birthdate         :Date,
            public email             :string,
                   gender            :Gender,
                   name              :string){
          super(birthdate, gender, name);
          this.lastAccess = new Date();
      }
      checkCredentials(){
          return true;
      }
    }

    class UserSettings extends User {
        constructor(
            public workingDirectory : string,
            public lastOpenFolder :string,
            birthdate             :Date,
            email                 :string,
            gender                :Gender,
            name                  : string 
            ){
                super(birthdate,email,gender,name);
            }
    }
   
    const newPerson = new Person(new Date('1991-04-07'),'M','Facundo');
    console.log({newPerson});

    const userSettings = new UserSettings('/home/Desktop', '/home/Downloader',new Date('1991-04-07'),'cordobafs@gmail.com','M','Facundo');

    console.log({userSettings});

})();