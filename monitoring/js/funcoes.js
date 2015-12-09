
$(function($){
	
	$("#pesquisa").keyup(function(){
		if($(this).val()){
			var search = $(this).val().toLowerCase();
			$(".dropdown-link").hide();
			$("[dropdown-link*='" + search + "']").show();
			 $(".option").show();
			 $("[.option*='" + search + "')").load();
						}else{
			$(".dropdown-link").show();
			$(".option").show();
		}
	});
	}); 


/*
$( "input" ).focus(function() {
$("input").keyup(function(){
  $( this ).next( "span" ).css( "display", "inline" ).fadeOut( 2000 );
});
}); */