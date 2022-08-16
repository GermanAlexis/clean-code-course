interface Movie {
    cast: string[]
    description: string,
    title: string,
    rating:  number,
}

(() => {

    function getMovieById(id: string ) {
        console.log({ id });
    }

    function getActorByIdMovie( id: string ) {
        console.log({ id });
    }

    function getActorById( id: string ) {
        console.log({ id });
    }
    


    function createMovie({title, description, rating, cast }: Movie ) {
        console.log({ title, description, rating, cast });
    }

    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }

    


})();
