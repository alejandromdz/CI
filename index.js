module.exports=Bear;

function Bear(type){
this.type=type||'any';
}

Bear.prototype.growl=function(says){
return 'The '+this.type+' bear says '+(says||'grr'); 
}

Bear.prototype.walk=function(){
return 'THe bear walks';
}
