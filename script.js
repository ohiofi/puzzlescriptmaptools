let textfield = document.getElementById("txt1");
let textfield2 = document.getElementById("txt2");


function doubleWidth(){
  let myArray = textfield.value.split("\n");
  let result = "";
  for (let each of myArray){
    for(let i=0;i<each.length;i++){
      result += each[i];
      result += each[i];
    }
    result += "\n";
  }
  textfield.value = result;
}

function doubleHeight(){
  let myArray = textfield.value.split("\n");
  let result = "";
  for (let each of myArray){
    result += each;
    result += "\n";
    result += each;
    result += "\n";
  }
  textfield.value = result;
}

function halfWidth(){
  let myArray = textfield.value.split("\n");
  let result = "";
  for (let each of myArray){
    for(let i=0;i<each.length;i+=2){
      result += each[i];
    }
    result += "\n";
  }
  textfield.value = result;
}

function halfHeight(){
  let myArray = textfield.value.split("\n");
  let result = "";
  for(let i=0;i<myArray.length;i+=2){
    result += myArray[i];
    result += "\n";
  }
  textfield.value = result;
}

function flipHorizontal(){
  let myArray = textfield.value.split("\n");
  let result = "";
  for(let i=0;i<myArray.length;i++){
    result += myArray[i].split("").reverse().join("");
    result += "\n";
  }
  textfield.value = result;
}

function flipVertical(){
  let myArray = textfield.value.split("\n").reverse();
  let result = "";
  for (let each of myArray){
    result += each;
    result += "\n";
  }
  textfield.value = result;
}

function mirrorRight(){
  let myArray = textfield.value.split("\n");
  let result = "";
  for (let each of myArray){
    result += each + each.split("").reverse().join("");
    result += "\n";
  }
  textfield.value = result;
}
function mirrorLeft(){
  let myArray = textfield.value.split("\n");
  let result = "";
  for (let each of myArray){
    result += each.split("").reverse().join("") + each;
    result += "\n";
  }
  textfield.value = result;
}
function mirrorUp(){
  let myArray = textfield.value.split("\n");
  let result = "";
  for(let i=myArray.length-1;i>=0;i--){
    result += myArray[i];
    result += "\n";
  }
  for(let i=0;i<myArray.length;i++){
    result += myArray[i];
    result += "\n";
  }
  textfield.value = result;
}
function mirrorDown(){
  let myArray = textfield.value.split("\n");
  let result = "";
  for(let i=0;i<myArray.length;i++){
    result += myArray[i];
    result += "\n";
  }
  for(let i=myArray.length-1;i>=0;i--){
    result += myArray[i];
    result += "\n";
  }
  textfield.value = result;
}

function getFilledStairs(){
  let myArray = textfield2.value.split("\n");
  let result = "";
  let count=0;
  for (let each of myArray){
    if(each.length<1){
      continue
    }
    count++;
    //sprite name
    if(count==1){
      result = result + each + "\nfacingvoxel\n";
      continue
    }
    // colors
    if(count==2){
      result = result + each + "\n";
      continue
    }
    if(count>3){
      result += "&\n"
    }
    for(let row=3;row<8;row++){
      if(row<=count){
        result += each + "\n";
      } else {
        result += ".....\n";
      }
    }
  }
  textfield2.value = result;
}

function getEmptyStairs(){
  let myArray = textfield2.value.split("\n");
  let result = "";
  let count=0;
  for (let each of myArray){
    if(each.length<1){
      continue
    }
    count++;
    //sprite name
    if(count==1){
      result = result + each + "\nfacingvoxel\n";
      continue
    }
    // colors
    if(count==2){
      result = result + each + "\n";
      continue
    }
    if(count>3){
      result += "&\n"
    }
    for(let row=3;row<8;row++){
      if(row==count){
        result += each + "\n";
      } else {
        result += ".....\n";
      }
    }
  }
  textfield2.value = result;
}

function getStack(){
  let myArray = textfield2.value.split("\n");
  let result = "";
  let count=0;
  for (let each of myArray){
    if(each.length<1){
      continue
    }
    count++;
    //sprite name
    if(count==1){
      result = result + each + "\nfacingvoxel\n";
      continue
    }
    // colors
    if(count==2){
      result = result + each + "\n";
      continue
    }
    if(count>3){
      result += "&\n"
    }
    for(let row=0;row<5;row++){
      
        result += each + "\n";
      
    }
  }
  textfield2.value = result;
}