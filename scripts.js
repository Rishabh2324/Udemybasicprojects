var doSomething = function(work){
    console.log(work);
    console.log(this);
}
doSomething("pushups");
var exercise={benchpress:"4 sets", squats : "5 sets"}
doSomething.call(exercise,exercise.squats);     
doSomething.apply(exercise,['crunches']); 







  
