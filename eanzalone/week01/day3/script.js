console.log('JS is connected.');

$(document).ready(function() {
    console.log("JS is ready!");
    $('.btn-success').on('click', function(e){
    	console.log('Success Clicked!');
    	$('#kitten').toggle("bounce", { times: 3 },'fast');
    	//bounce kitten image
    });
    $('.btn-info').on('click', function(e){
    	console.log('Info Clicked!');
    	//slide ball img
    });
    $('.btn-warning').on('click', function(e){
    	console.log('Warning Clicked!');
    	//replace kitten with angry cat
    	//hide ball
    });
});