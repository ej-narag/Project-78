var images = ["Mom.jpg","Dad.jpg","Me.jpg","Elijah.jpg","Eidan.jpg"];
var names = ["Lailani Narag(Mom)", "Johnly Narag(Dad)", "Elliot John Narag", "John Elijah Narag", "John Eidan Narag"];
var i = 0;
function update()
{i++;

  var numbers_of_family_member_in_array = 5

if(i > numbers_of_family_member_in_array)

{ i = 0;}
  
var updatedImage = images[i];

var updatedName = names[i] ;

document.getElementById("family_member_image").src = updatedImage;

document.getElementById("family_member_name").innerHTML = updatedName;}
