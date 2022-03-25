const fetchpokemon=()=>{
    const url='https://pokeapi.co/api/v2/pokemon/ditto';
    fetch(url).then((res)=>{
        console.log(res);
        return res.json();
    }).then((data)=>{
        console.log(data);
    });//es una funcion para hacer peticiones a una api
}
fetchpokemon();