
var images = [
    "https://projectsassets.s3.us-east-2.amazonaws.com/Monkey_01.png",
    "https://projectsassets.s3.us-east-2.amazonaws.com/Monkey_02.png",
    "https://projectsassets.s3.us-east-2.amazonaws.com/Monkey_03.png",
    "https://projectsassets.s3.us-east-2.amazonaws.com/Monkey_04.png",
    "https://projectsassets.s3.us-east-2.amazonaws.com/Monkey_05.png",
      "https://projectsassets.s3.us-east-2.amazonaws.com/Monkey_06.png",
      "https://projectsassets.s3.us-east-2.amazonaws.com/Monkey_07.png",
      "https://projectsassets.s3.us-east-2.amazonaws.com/Monkey_08.png",
      "https://projectsassets.s3.us-east-2.amazonaws.com/Monkey_09.png",
      "https://projectsassets.s3.us-east-2.amazonaws.com/Monkey_10.png",
  ];
  
  var i = 0;
  function nextslide() { 
   
     if(i == 9)
       {
         i=0;
       }
     
      document.getElementById("album").src = images[i];
    i++;
   
  }
  
  
  