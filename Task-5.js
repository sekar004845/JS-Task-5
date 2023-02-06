var num=[];
	var numlength=prompt("array length");
	var j=numlength;
	for(i=0;i<j;++i){
	   var newnumber=prompt("element value");
	   num[i]=newnumber;
	}
	document.write(num);
	
	
	
	//array filter
	
	var num=[10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200];
	var max=prompt("max-mum value(highestvalue=200)");
	var min=prompt("minimum value(lowest value=10)");
	var b=-1;
	var range=[];
	for(i=0;i<num.length;++i){
	  if(num[i]<=max && num[i]>=min){
	    range[++b]=num[i];
	  }
	  
	}
	document.write("filter:",range,"<br>");
	
	
	
	
	//array update

	var sum=[10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200];
	var position=prompt("position>20");
	var value=prompt("value");
	for(i=0;i<sum.length;++i){
	  if(i==position){
	    sum[i]=value;
	  }
	  
	}
	document.write(sum);
	
	
	
	//array-delete
	
		var sekar=[10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200];
		var position=prompt("which  position is delete");
		var b=-1;
	    for(i=0;i<sekar.length;++i){
			if(sekar[i]!==sekar[position]){
			sekar[++b]=sekar[i];
			}
		}
	    sekar.length=sekar.length-1;
		document.write(sekar);