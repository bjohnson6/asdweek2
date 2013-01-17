
// Bernice Johnson -->
// Project week 1 -->
// ASD 13/01-->
// write your javascript in here


var parseForm = function(data){
	console.log(data);

};

$(document).on('pageinit',function(){


		var myForm = $('#addmomentform');
		    myerrorslink= $('#myerrorslink')

		    myForm.validate({
		    
	    	invalidHandler: function(form, validator) {
	    		myerrorslink.click();
	    		var html ='';
	    		for (var key in validator.submitted){
	    		  var label  =	$('label[for^="'+ key +'"]').not('[generated]');
                  var legend=label.closest('fieldset').find('.ui-controlgroup-label');
	    		  var fieldName = legend.length ? legend.text() : label.text();
                  html +='<li>' + fieldName + '</li>';
               };   
               $("#momenterrors ul").html(html);
			},
			submitHandler: function() {
		       var data = myForm.serializeArray();
			    parseForm(data);
	   
	
		}
	});

});


$('#home').on('pageinit', function(){
	//code needed for home page goes here
});	
		
$('#addamoment').on('pageinit', function(){
	   delete $.validator.methods.date;

		var myForm = $('#addmomentform');
		    myForm.validate({
			invalidHandler: function(form, validator) {
			},
			submitHandler: function() {
		var data = myForm.serializeArray();
			storeData(data);
		}
	});
	
	//any other code needed for addItem page goes here
	
});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function (){
	 
};

$('#addamoment').on('pageinit', function(){
var getData = function(){

	function getData() {
	toggleControls("on");
	if(localStorage.length===0){
		alert("There is no new Moments.");
	}

};

var storeData = function(data){
	var id =Math.floor(Math.random()*1000000001);
	localStorage.on(id, JSON.stringify(data));

	localStorage.on(id, JSON.stringify(data));
	alert("Memory Saved!");
	
}; 

var	deleteItem = function (){
			
		function deleteItem(){
	var ask = confirm("Are you sure you want to delete this moment?");
	if(ask){
        localStorage.removeItem(this.key);
        alert("Moment was deleted!");
        window.location.reload();
	}else{
        alert("Moment was NOT deleted.")
	}
}

function clearLocal () {
	if(localStorage.length === 0){
		alert("There is no data to clear.")
	}else{
		localStorage.clear();
		alert("All events are deleted")
		window.location.reload();
		return false;
	}

}
