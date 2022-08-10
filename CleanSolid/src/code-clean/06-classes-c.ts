(() => {

    // aplicando el principio de responsabilidad única
    // priorizar la Composicion vs la Herencia !!!

    type Gender = 'M'|'F';

    interface PersonProps {
        birthdate : Date;
        gender    : Gender;
        name      : string;
    }

    class Person {
        public birthdate: Date;
        public gender   : Gender;
        public name     : string;

        constructor({ name, gender, birthdate }: PersonProps ){
            this.name      = name;
            this.gender    = gender;
            this.birthdate = birthdate;
        }
    }

    interface UserProps {
        email     : string;
        role      : string;
    }

    class User {       
        public email: string;
        public role : string;
        public lastAccess: Date;

        constructor({
            email,
            role,
        }: UserProps ) {
            this.lastAccess = new Date();
            this.email = email;
            this.role  = role;
        }

        checkCredentials() {
            return true;
        }
    }


    interface SettingsProps {
        lastOpenFolder   : string;
        workingDirectory : string;
    }

    class Settings {
        public workingDirectory: string;
        public lastOpenFolder  : string;
        constructor({
            lastOpenFolder,
            workingDirectory,
        }: SettingsProps ) {
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder   = lastOpenFolder;
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


    class UserSettings {
        public  user         :User;
        public  person       :Person;
        public  setting      :Settings;

        constructor({birthdate ,email , gender, lastOpenFolder ,name, role, workingDirectory}:UserSettingsProperties){
                 this.person = new Person({name, gender,birthdate});
                 this.user = new User({email,role});
                 this.setting = new Settings({lastOpenFolder, workingDirectory});
            }
    }


    const userSettings = new UserSettings({
        birthdate: new Date('1985-10-21'),
        email: 'fernando@google.com',
        gender: 'M',
        lastOpenFolder: '/home',
        name: 'Fernando',
        role: 'Admin',
        workingDirectory: '/usr/home',
    });

    console.log({ userSettings });


})();