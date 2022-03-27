var id=0;
const fetchpokemon=(pokeId)=>{
    
    const url='https://pokeapi.co/api/v2/pokemon/'+pokeId;
    const urldesc='https://pokeapi.co/api/v2/pokemon-species/'+pokeId;
    fetch(url).then((res)=>{
        console.log(res);
        return res.json();
    }).then((data)=>{
        console.log(data);
        let pokeurl=data.sprites.front_default;
        let pokename=data.forms[0].name;
        let pokeno=data.id;
        id=pokeno;
        let poketype=data.types[0].type.name;
        let pokepeso=data.weight;
        let pokealt=data.height;
        let pokehab=data.abilities[0].ability.name;
        let pokehp=data.stats[0].base_stat;
        let pokeat=data.stats[1].base_stat;
        let pokedef=data.stats[2].base_stat;
        let pokesa=data.stats[3].base_stat;
        let pokesd=data.stats[4].base_stat;
        let pokespeed=data.stats[5].base_stat;
        const urlidnext='https://pokeapi.co/api/v2/pokemon/'+(pokeno+1);
        const urlidprev='https://pokeapi.co/api/v2/pokemon/'+(pokeno-1);
        console.log(urlidnext);
        pokeImg(pokeurl);
        pokeName(pokename,pokeno);
        pokeTipo(poketype);
        pokePeso(pokepeso);
        pokeHeight(pokealt);
        pokeHab(pokehab);
        statsHp(pokehp);
        statsAtt(pokeat);
        statsDef(pokedef);
        statsSa(pokesa);
        statsSD(pokesd);
        statsSpeed(pokespeed);
        fetch(urlidnext).then((next)=>{ return next.json();}).then((datanext)=>{
            let pokenext=datanext.sprites.front_default;
            let pokenamenext=datanext.forms[0].name;
            let pokenonext=datanext.id;
            pokeNext(pokenext,pokenamenext,pokenonext);
        });
        fetch(urlidprev).then((next)=>{ return next.json();}).then((datanext)=>{
            let pokeprev=datanext.sprites.front_default;
            let pokenamep=datanext.forms[0].name;
            let pokenop=datanext.id;
            pokePrev(pokeprev,pokenamep,pokenop);
        });
    });//es una funcion para hacer peticiones a una api

    


    fetch(urldesc).then((res)=>{console.log(res);
        return res.json();}).then((data)=>{
            console.log(data);         
            let val=0;
            for(let i=0; data.flavor_text_entries[i].language.name != 'es'; i++){
                val=i;
            }
            val++;
            let descripcion=data.flavor_text_entries[val].flavor_text;
            pokeDesc(descripcion);

        });

}

const fetchIDN=()=>{
    let poken=id+1;
    fetchpokemon(poken);
}

const fetchIDP=()=>{
    let poken=id-1;
    fetchpokemon(poken);
}


const fetchName=()=>{
    let pokeId=document.getElementById('pokeid').value.toLowerCase();
    fetchpokemon(pokeId);
}
fetchName();
fetchIDN();
fetchIDP();


const pokeImg=(url)=>{
        const imagen=document.getElementById('pokemonIMG');
        const actual=document.getElementById('actual');
        imagen.src=url;
        actual.src=url;
}

const pokeNext=(url,name,id)=>{
    const next=document.getElementById('next');
    const namen=document.getElementById('pokenext');
    next.src=(url);
    namen.innerHTML="No. "+id + " " + name;
}
const pokePrev=(url,name,id)=>{
    const next=document.getElementById('previo');
    const namep=document.getElementById('pokeprev');
    next.src=(url);
    namep.innerHTML="No. "+id + " " + name;
}

const pokeDesc=(url)=>{
    const desc=document.getElementById('infodex');
    desc.innerHTML=url;
}

const pokeName=(url,no)=>{
    const name=document.getElementById('pokemonName');
    const actual=document.getElementById('pokeactual');
    name.innerHTML="No. "+no + " " + url;
    actual.innerHTML="No. "+ no + " "+url;

}

const pokeTipo=(url)=>{
    const tipo=document.getElementById('poketipo');
    tipo.innerHTML=url;
}

const pokeHeight=(url)=>{
    const height=document.getElementById('pokealtura');
    height.innerHTML=(url/10)+' m';
}

const pokePeso=(url)=>{
    const peso=document.getElementById('pokepeso');
    peso.innerHTML=(url/10)+' kg';
}

const pokeHab=(url)=>{
    const hab=document.getElementById('pokehab');
    hab.innerHTML=url;
}
const statsHp=(url)=>{
    CalcStats(url,'hp-');
}
const statsAtt=(url)=>{
    CalcStats(url,'at-');
}
const statsDef=(url)=>{
    CalcStats(url,'def-');
}

const statsSa=(url)=>{
    CalcStats(url,'sa-');
}

const statsSD=(url)=>{
    CalcStats(url,'sd-');
}

const statsSpeed=(url)=>{
    CalcStats(url,'sp-');
}


const CalcStats=(url,id)=>{
    let val=(url/13.3)+1;
    let dato=val.toFixed();
    for(let j=1;j!=14;j++){
        const white=document.getElementById(id+j);
        white.style.backgroundColor='white';
    }
    for(let i=1;i!=dato;i++){
        const hp=document.getElementById(id+i);
        hp.style.backgroundColor='#215499';
    }
}