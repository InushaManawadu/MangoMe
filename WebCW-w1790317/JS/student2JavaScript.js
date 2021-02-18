var i = 0; // Start point
var images = [];
var time = 5000;


// Image List
images[0] = 'images/img1.png';
images[1] = 'images/img2.png';
images[2] = 'images/img3.png';
images[3] = 'images/img4.png';
images[4] = 'images/img5.png';

// Change Image
function changeImg(){
	document.slide.src = images[i];

	if(i < images.length - 1){
		i++;
	} else {
		i = 0;
	}

	setTimeout("changeImg()", time);
}

window.onload = changeImg;



 function validation(){
	var form = document.getElementById("comment-section");
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var comment = document.getElementById("cmnt").value;
	
	if (name=="") {
		alert("Name field is empty!");
		document.form.name.focus();
	}

	if (email=="") {
		alert("Email is required");
		document.form.email.focus();
	}

	if (comment=="") {
		alert("Comment field is empty!");
		document.form.comment.focus();
	}

	else {
		alert("Thank you for your comment "+name+"! Your comment is "+comment)
	}
 }