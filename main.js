console.log("Hello bangladesh");


const h1element = document.getElementsByTagName("h1");
console.log(h1element);
h1element.textColor = "lightblue";


//backpack background color change
const backpackColor = document.getElementById("backpack");
backpackColor.style.backgroundColor = "tomato";


//4.  ক্লাস যতগুলা জায়গায় ইউজ করা হয়েছে সবগুলা কার্ড এর বর্ডার রেডিয়াস ৩০px করে দিতে পারো কিনা 

/*
var element = document.getElementsByClassName("card");
console.log(element);
element.style.borderRadius = '30px';
*/

//5
//কোন একটা ফাংশন লিখো। সেটার ভিতরে কনসোল লগ হবে। এবং সেই ফাংশন টা ক্লিক হ্যান্ডলার হিসেবে কোন একটা বাটনে যোগ করো 
function clickHandeler() {
	window.alert("Hello Im no5 and im working");
}

//6এইবার নতুন করে সবগুলা buy now বাটনে এমন একটা ইভেন্ট হ্যান্ডলার যোগ করো। যাতে যেকোন একটা buy now বাটনে চাপ দিলে সেটা ওয়েবসাইট থেকে রিমুভ হয়ে যায়। একটু চিন্তা করে করার চেষ্টা করো। 

//first
document.getElementById("remove-button-1").addEventListener("click", function () {
	document.getElementById("removeHandeler1").style.display = "none";
})

//second
document.getElementById("remove-button-2").addEventListener("click", function () {
	//remove the p
	document.getElementById("removeHandeler2").style.display = "none";
})

//third
document.getElementById("remove-button-3").addEventListener("click", function () {
	//catch p and remove him
	document.getElementById("removeHandeler3").style.display = "none";
})





/* 
৭. একদম নিচে একটা LET'S STAY IN TOUCH নামে একটা জিনিস আছে। সেখানে তুমি submit বাটনটা disable করে ফেলবে। তারপর কেউ যদি উপরে input ফিল্ডে যদি একজাক্টলি email শব্দটা লিখে। তাহলে বাটন একটিভ হবে। আর যদি অন্য কিছু লিখে তাহলে বাটনটা একটিভ হবে না। 
*/




/*8. 
(অপশনাল) একটা মজার চ্যালেঞ্জ। কোন একটা ইমেজ এর উপরে mouseenter করলে সেই ইমেজটা চেইঞ্জ হয়ে যাবে। একটু গুগলে সার্চ দিয়ে দেখো। জিনিসটা কিভাবে করা যেতে পারে। 
*/
/*
function imagefun() {
	var Image_Id = document.getElementById('getImage');
	if (Image_Id.src.match("headphone.png")) {
		Image_Id.src = "tv.png";
	}
	else {
		Image_Id.src = "headphone.png";
	}
} 
*/

/* 9
৯. (অপশনাল) নিচের যে LET'S STAY IN TOUCH আছে সেখানে কোন খালি জায়গায় ডাবল ক্লিক করলে ঐটার পিছনের কালার চেইঞ্জ হয়ে যাবে।
*/
