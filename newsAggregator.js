// Step 1:-
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



// Step 2:-

function aggeregateSequential(){
return fetchSourceA()
.then(n=>{console.log(`Source A Resolved`,n); return fetchSourceB();},
      i=>{console.log(`Source A Rejected`,i); return fetchSourceB()})
.then(a=>{console.log(`Source B Resolved`,a); return fetchSourceC()},
      b=>{console.log(`Source B Rejected`,b); return fetchSourceC()})
.then(c=>{console.log(`Source C Resolved`,c); return fetchSourceD()},
      d=>{console.log(`Source C Rejected`,d); return fetchSourceD()})
.then(e=>{console.log(`Source D Resolved`,e)},
      f=>{console.log(`Source D Resolved`,f)})


}

aggeregateSequential()

