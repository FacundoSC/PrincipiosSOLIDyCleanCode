(() => {

    function getMovieById( id: string ) {
        console.log({ id });
    }

    function getActorsByIdMovie( id: string ) {
        console.log({ id });
    }

    function getActorBioById( id: string ) {
        console.log({ id });
    }

    interface Actor {
        birtdate :Date;
        fullName :string;
     }

    interface Movie {
        cast          :string[];
        description   :string;
        rating        :number;
        title         :string;
    }

    function createMovie( movie:Movie) {
        const {cast,description,rating,title}= movie;
        console.log({ title, description, rating, cast });
    }

    function createActor( actor:Actor ): boolean {
        const {birtdate,fullName}= actor;        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;
        console.log('Crear actor');
        return true;        
    }

    // continuar


    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }):number => {
        return  isDead ? 1500 : isSeparated? 2500 : isRetired ? 3000 : 4000;
      //  if ( isDead ) return 1500;
      //  if ( isSeparated ) return 2500;
      //  return isRetired ? 3000 : 4000;        
    }

    


})();
