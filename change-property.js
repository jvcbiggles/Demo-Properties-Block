/*
Lucid Generated Code
*/
function lucidDebug(uid,event) {
	try{
event.allAttributes_Lucid = "";
 for(var propertyName in event) {event.allAttributes_Lucid += propertyName+",";}		window.LucidWebPreviewDelegate.javascriptFunctionEntered_withEvent_(uid,event);
	} catch(err) { }
}


function lucidLog(uid,value) {
	try{
		console.log(value);
		window.LucidWebPreviewDelegate.lucidLog_withValue_(uid,value);
	} catch(err) { }
}




$(document).ready(function() {


//Lucid_LucidBinding_0_23_88927236516619390822037838292
/*lucidcode*/
$(/*luc!d_element*/'DIV.#choose-green'/*luc!d_element_end*/).bind(/*luc!d_event*/'click'/*luc!d_event_end*/, function(event) {    
/*luc!d_debug*/	lucidDebug('88927236516619390822037838292',event);/*luc!d_debug_end*/
	/*luc!d_function*/changeToGreen(this,event)/*luc!d_function_end*/;    });
/*lucidcode_end*/
//EndLucid

//Lucid_LucidBinding_100_23_997412889261076941611056566
/*lucidcode*/
$(/*luc!d_element*/'DIV.#choose-blue'/*luc!d_element_end*/).bind(/*luc!d_event*/'click'/*luc!d_event_end*/, function(event) {    
/*luc!d_debug*/	lucidDebug('997412889261076941611056566',event);/*luc!d_debug_end*/
	/*luc!d_function*/changeToBlue(this,event)/*luc!d_function_end*/;    });
/*lucidcode_end*/
//EndLucid


});

//Lucid_LucidChangePropertyAction_1_196_800473769172507077587797278
function changeToGreen(senderObject, event) {
	lucidDebug('800473769172507077587797278',event);
/*lucidcode*/
var ele = /*luc!d_element*/'DIV.#bluebox'/*luc!d_element_end*/;
	$(ele)./*luc!d_function_0*/css/*luc!d_function_0_end*/(/*luc!d_property_0*/'background-color'/*luc!d_property_0_end*/, /*luc!d_value_0*/'green'/*luc!d_value_0_end*/ );
/*lucidcode_end*/

}
//EndLucid

//Lucid_LucidChangePropertyAction_108_194_9592066102257562411829021885
function changeToBlue(senderObject, event) {
	lucidDebug('9592066102257562411829021885',event);
/*lucidcode*/
var ele = /*luc!d_element*/'DIV.#bluebox'/*luc!d_element_end*/;
	$(ele)./*luc!d_function_0*/css/*luc!d_function_0_end*/(/*luc!d_property_0*/'background-color'/*luc!d_property_0_end*/, /*luc!d_value_0*/'blue'/*luc!d_value_0_end*/ );
/*lucidcode_end*/

}
//EndLucid

