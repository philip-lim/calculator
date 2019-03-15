var runningTotal = '';
var buttons = Array.from(document.querySelectorAll('button'));
var results = document.querySelector('.results');
var lastContent = '';
var equalCounter =1;

var handleComputation = function (event){

  var content = event.currentTarget.textContent;
    //console.log (lastContent);
    //console.log (content); 

  if (content === 'x') content ='*';
  if (content === '÷') content ='/';
  console.log (content);
  if (isNaN(lastContent)  && isNaN(content)){
    //console.log ("in");
    //lastContent.pop();
    //console.log (lastContent);
    //console.log (runningTotal);
    var str =runningTotal.split("");
    //console.log (str);
    str.pop ();
    var arr = str.join('');
    //console.log (arr);
    runningTotal=arr;
    results.innerHTML=runningTotal;
  } 
  

  if (content === 'C') {
    runningTotal ='';
    lastContent = '';
    results.innerHTML = runningTotal;
    return;
  } else if (content === "="){
    //lastContent = content;
    equalCounter++;
    runningTotal = eval(runningTotal);
    results.innerHTML = runningTotal; 
    
    return;
  } else if (content === '+'|| content === '/' || content === '*' || content === "-" ){
    equalCounter=1;
    lastContent = content;
    runningTotal = results.innerHTML + content;
    results.innerHTML = runningTotal;
    return;
  } else {
    //console.log ('adding number');
    if(runningTotal.length>15)return;
    if (equalCounter>1){runningTotal=''; lastContent='';results.innerHTML = runningTotal; equalCounter=1}
    lastContent = content;
    runningTotal += content;
    results.innerHTML = runningTotal;
    return;
  }
}

buttons.forEach(function(button){
  button.addEventListener('click', handleComputation,false);
  });


/*
var runningTotal = '';

var buttons = Array.from(document.querySelectorAll('button'));
var results = document.querySelector('.results');

var handleComputation = function (event){
  var content = event.currentTarget.textContent;
  if (content === 'clear') {
    runningTotal ='';
    results.innerHTML = runningTotal;
    return;
  } else if (content === "="){
    runningTotal = eval(runningTotal);
    results.innerHTML = runningTotal; 
    return;
  } else if (content === '+'|| content === '/' || content === '+' || content === "-" ){
    runningTotal = results.innerHTML + content;
    results.innerHTML = runningTotal;
    return;
  } else {
    console.log ('adding number')
    runningTotal += content;
    results.innerHTML = runningTotal;
    return;
  }
}

buttons.forEach(function(button){
  button.addEventListener('click', handleComputation,false);
  });

*/