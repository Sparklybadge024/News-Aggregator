function fetchSourceA(){
    let random=Math.floor(Math.random()*10);
    return new Promise((resolve,reject)=>{
 setTimeout(()=>{
              if(random>4){
            resolve({title:"Gaming news",source:"Gaming Magzine"});
           }else{
            reject(`404 Not Found`);
           }
        },Math.floor(Math.random()*1200))
    })
}

function fetchSourceB(){
    let random=Math.floor(Math.random()*10);
    return new Promise((resolve,reject)=>{
 setTimeout(()=>{
              if(random>4){
            resolve({title:"Gaming news",source:"News Paper"});
           }else{
            reject(`400 Bad Request`);
           }
        },Math.floor(Math.random()*1400))
    })
}

fetchSourceA().then(n=>console.log(n)).catch(n=>console.log(n))