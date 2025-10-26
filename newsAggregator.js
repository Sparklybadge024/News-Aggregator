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

function aggregateSequential(){
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



function aggregateParallel(){
    return Promise.all([fetchSourceA(),fetchSourceB(),fetchSourceC(),fetchSourceD()]).then(n=>console.log(n)).catch(n=>console.log(n))
}



// After calling aggeregateSequential and aggeregateParallel at the same time what i realised is:-
// In sequential it called all the promises but one by one. As a result total time taken:- 1200+1400+1600+1800= 6 seconds
// On the flip side in parallel it called all the promises at once, total time taken= almost 2 seconds or 1800 ms


// Step:-3
function withTimeOut(promise,ms){
    const timeOut=new Promise((_,reject)=>{
        setTimeout(()=>{
        reject("HTTP 408 Request Timeout")
        },ms)
    })

    return Promise.race([promise,timeOut])
}

withTimeOut(aggregateSequential(),2000).catch(n=>console.log(n))

// Step 4:-
// Adding a retry function that will help promsis to recall if they get rejected.
function retry(promise,retries){
    return promise().catch(()=>{
        if(retries===0){
            throw `Failed after ${retries} retries`
        }
        return retry(promise,retries-1)
        })
}

retry(fetchSourceA,3).then(n=>console.log(n))

