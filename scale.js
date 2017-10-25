

	
	barsize=0;
	unit="cm";
	var max=10;
	var scale_deep=[];
	var scaleDeep=[];

	//var scaleInterval3 = setInterval(updateBar, 100);	

	
	
	var minus=0.01;
	var deep=1;
	
	
	
	var scale_deep= [];
	var breakout=[];
	var opacity=[];
	
	var sc_change=1.9;
	var st_scale=5.7;
	var fade =5.3;
	
	for(var i=0;i<100000;i++){
		scale_deep[i]=st_scale;
		opacity[i]=0.01;
			
	}
	scale_deep[0]=st_scale-2.5;//-2;
	opacity[0]=1;
	scale_deep[1]=st_scale;//-1.5;
	
	
	var d=0;
	var dn=-1;
	var flag=0;
	breakout[d]= setInterval(scale_img,10);
	
	function scale_img()
		{
		if(barsize<uncSize)
			{
			//intial 
			if(d==0&&dn==-1)
				{
				//alert();
				if(scale_deep[d]>=sc_change)
					{
					//opacity[d]-=minus;	
					scale_deep[d]-=minus;
					}
				if(scale_deep[d]<sc_change)
					{
						//alert("switch flag=-1");
						dn=d+1;
					}
				}
			else{
				if(scale_deep[d]<sc_change&&scale_deep[dn]>=sc_change)
					{
					
					if(scale_deep[d]>0.001){
						scale_deep[d]-=minus/2;
						}
						if(opacity[d]>0.01){
						opacity[d]-=minus*2*fade;	
						}
				   
					opacity[dn]+=minus*fade;	
					scale_deep[dn]-=minus;
					}
				if(scale_deep[dn]<sc_change&&scale_deep[d]<scale_deep[dn])
					{
						//alert("switch flag=0");
					d=dn+1;
					flag=0; //switch pics
					}
				if(scale_deep[dn]<sc_change&&scale_deep[d]>=sc_change)
					{
					if(scale_deep[dn]>0.001){
						
						scale_deep[dn]-=minus/2;
						}
					if(opacity[dn]>0.01){
						opacity[dn]-=minus*2*fade;	
						}
					opacity[d]+=minus*fade;	
					scale_deep[d]-=minus;
					}
				if(scale_deep[d]<sc_change&&scale_deep[dn]<scale_deep[d])
					{
					//alert("switch flag=1");
					dn=d+1;
					flag=1; //switch pics
					}
					
				}
				
					barsize+=0.5;
					barsize+=barsize/600;
			
			}
			
			//if(barsize>=uncSize)
			//	{
					updateBar();
					drawpics();
			//	}
		}
	
	function drawpics(){
		//alert();
		if(dn!=-1)
			{
			if(flag==0)
				{
					
					$('.one').css('background-image', 'url(j_' + (d) + '.png)');
					$('.one').css('z-index', '1');
					
					$('.two').css('background-image', 'url(j_' + (dn) + '.png)');
					$('.two').css('z-index', '2');
					
					$('.one').css('transform', 'scale(' + scale_deep[d] + ')');
					$('.one').css('opacity', opacity[d]);	
					$('.two').css('transform', 'scale(' + scale_deep[dn] + ')');
					$('.two').css('opacity', opacity[dn]);
				}
			if(flag==1)
				{
					$('.one').css('background-image', 'url(j_' + (d) + '.png)');
					$('.two').css('background-image', 'url(j_' + (dn) + '.png)');
					$('.two').css('z-index', '1');
					$('.one').css('z-index', '2');
					
					$('.one').css('transform', 'scale(' + scale_deep[d] + ')');
					$('.one').css('opacity', opacity[d]);	
					$('.two').css('transform', 'scale(' + scale_deep[dn] + ')');
					$('.two').css('opacity', opacity[dn]);
				}
			
			}	
		else
			{
				$('.one').css('background-image', 'url(j_' + d + '.png)');
				$('.one').css('z-index', '2');
				$('.one').css('transform', 'scale(' + scale_deep[d] + ')');
				$('.one').css('opacity', opacity[d]);	
	
			}	
		}
	
	
	
	function updateBar(){
		
		var scale=math.pow(barsize,2).toFixed();
		scale/=700;
		scale+=1;
		var min=1;
		scale=scale.toFixed();
		scale=Math.floor(scale);
		if(scale>100&&scale<100000)
		{
			scale=scale/100;
			unit="m";
		}
		else {
			if(scale>100000&&scale<9500000000000000){
				scale=scale/100000;
				unit="km";
			}else {
						if(scale>9500000000000000){
							scale=scale/9500000000000000;
							unit="lightyears";
						}
					
		}
				
		}
			output=Math.floor(scale);
			$('.measure').html(output.toString()+" "+unit);
		}
	
	
	
	