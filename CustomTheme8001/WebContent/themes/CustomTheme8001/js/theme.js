(function(){
var _1=false;
if(typeof wptheme==="undefined"||!wptheme){
wptheme={};
}
i$.mash(wptheme,{togglePageMode:function(){
return i$.modules.loadDeferred().then(function(){
var _2=i$.fromPath("com.ibm.mashups"),_3=_2?com.ibm.mashups.builder.model.Factory.getRuntimeModel():null,_4=_2?com.ibm.mashups.enabler.user.Factory.getUserModel():null,_5=document.getElementsByTagName("body")[0],_6=function(_7){
if(_2){
com.ibm.mashups.services.ServiceManager.getService("eventService").broadcastEvent("com.ibm.mashups.builder.changePageMode",_7);
_3.getCurrentPage().setPageMode(_7);
}
i$.fireEvent("wptheme/contextMenu/invalidate/all");
};
if((!_2&&!i$.hasClass(_5,"edit-mode"))||(_2&&_4.getAnonymousMode()!=com.ibm.mashups.enabler.user.AnonymousMode.ANONYMOUS&&_3.getCurrentPage().getPageMode()!="edit")){
_6("edit");
i$.addClass(_5,"edit-mode");
if(!_1){
if(!i$.isIE&&!i$.isOpera&&_2){
window.onbeforeunload=function(){
if(com.ibm.mashups.builder.model.Factory.getRuntimeModel().getCurrentPage().isDirty()){
return com.ibm.mm.builder.coreWidgetsStrings.I_PAGE_SAVE_WARNING;
}
};
}
_1=true;
}
}else{
_6("view");
i$.removeClass(_5,"edit-mode");
}
},function(_8){
console.log("Error going into edit mode. Most likely a session timeout. Refreshing. "+_8);
window.location.reload();
});
}});
})();

