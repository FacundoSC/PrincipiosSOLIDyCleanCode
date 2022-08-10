(()=>{
     
    type Gender = 'M'| 'F';

// no aplicando el principio  single responsability = responsabilidad unica

   interface PersonProperties{
         birthdate   :Date;
         gender      :Gender;
         name        :string;
   }

   class Person {
       public birthdate  : Date;
       public gender     :Gender;
       public name       :string;
   /*
    constructor(birthdate:Date, gender:Gender, name:string){
        this.birthdate = birthdate;
        this.gender = gender;
        this.name = name;
    }*/
       constructor({birthdate, gender, name}:PersonProperties){
         this.birthdate  = birthdate;
         this.gender     = gender;
         this.name       = name;
       }
   }

   interface UserProperties{
        birthdate   :Date;
        email       :string;
        gender      :Gender;
        name        :string;
        role        :string;
   }


   class User extends Person{
       public email       :string;
       public lastAccess  :Date;
       public role        :string;
       constructor({birthdate,email, gender, name, role} :UserProperties){
         super({birthdate, gender, name});
         this.email = email;
         this.lastAccess = new Date();
         this.role = role;
     }
     checkCredentials(){
         return true;
     }
   }

   interface UserSettingsProperties{
    birthdate            :Date;
    email                :string;
    gender               :Gender;
    lastOpenFolder       :string;
    name                 :string;
    role                 :string;
    workingDirectory     :string;
   }

  class UserSettings extends User {
       public  lastOpenFolder         :string;
       public  workingDirectory       :string;
       constructor({birthdate ,email , gender, lastOpenFolder ,name, role, workingDirectory}:UserSettingsProperties){
               super({birthdate, email, gender, name, role});
               this.lastOpenFolder   = lastOpenFolder;
               this.workingDirectory = workingDirectory;
           }
   }
  
    
  const newPerson = new Person({name: 'Facundo',birthdate: new Date('1991-04-07'), gender: 'M'});
   console.log({newPerson});

  const userSettings = new UserSettings({workingDirectory:'/home/Desktop', lastOpenFolder:'/home/Downloader',birthdate: new Date('1991-04-07'), email:'cordobafs@gmail.com',gender:'M',name:'Facundo',role:'admin'});

   console.log({userSettings});

})();