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
            resolve({title:"Geopolitics update",source:"News Paper"});
           }else{
            reject(`400 Bad Request`);
           }
        },Math.floor(Math.random()*1400))
    })
}

function fetchSourceC(){
    let random=Math.floor(Math.random()*10);
    return new Promise((resolve,reject)=>{
 setTimeout(()=>{
              if(random>4){
            resolve({title:"Sports events",source:"Blogs"});
           }else{
            reject(`401 Unauthorized`);
           }
        },Math.floor(Math.random()*1600))
    })
}

function fetchSourceD(){
    let random=Math.floor(Math.random()*10);
    return new Promise((resolve,reject)=>{
 setTimeout(()=>{
              if(random>4){
            resolve({title:"Console Gaming",source:"Podcast"});
           }else{
            reject(`403 Forbidden`);
           }
        },Math.floor(Math.random()*1800))
    })
}




function aggeregateSequential(){
return fetchSourceA().then(n=>{console.log(`Source A Resolved `,n); return fetchSourceB()}).catch(n=>{console.log(`Source A Rejected `,n)})
.then(n=>{console.log(`Source B Resolved `,n);return fetchSourceC()}).catch(n=>{console.log(`Source B Rejected `,n);return fetchSourceC()})
.then(n=>{console.log(`Source C Resolved `,n);return fetchSourceD()}).catch(n=>{console.log(`Source C Rejected `,n);return fetchSourceD()})
.then(n=>console.log(`Source D Resolved `,n)).catch(n=>console.log(`Source D Rejected `,n))

}

aggeregateSequential()