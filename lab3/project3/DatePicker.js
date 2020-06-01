'use strict';
class DatePicker{
	constructor(id, callback){
    	this.id=id;
    	this.callback=callback;
  	}
	render(date){
		var calender=document.getElementById(this.id);
		calender.appendChild(this.Calender(date));
		console.log(date);
	}
	Calender(date){
	var table, header, days, week, dayCol, firstDay, dayBody, tmpMonth, dayRow, tmpDay;
    table=document.createElement("div");
    table.setAttribute("class","table");

    var season=document.createElement("div");
    table.appendChild(season);
    season.setAttribute("class","season");

    header=this.Header(table,date);
    header.setAttribute("class","header");

    var img=document.createElement("img");
    table.appendChild(img);
    img.setAttribute("class","img");

    if(date.getMonth()===11 || date.getMonth()===0 || date.getMonth()===1){
      if(date.getMonth()===11){
      	img.setAttribute("style","background: #fff url(https://media.giphy.com/media/xUOxf5OzNlps9t8Fqw/giphy.gif) no-repeat");	
      }
      if(date.getMonth()===0){
      	img.setAttribute("style","background: #fff url(http://giphygifs.s3.amazonaws.com/media/6YNgoTEPs6vZe/giphy.gif) no-repeat");	
      }
      if(date.getMonth()===1){
      	img.setAttribute("style","background: #fff url(http://68.media.tumblr.com/2868f6244e6dc8771016145dd0c209d7/tumblr_ohjv2kHAjo1up8zyho1_1280.gif) no-repeat");	
      }
    }
    if(date.getMonth()===2 || date.getMonth()===3 || date.getMonth()===4){
      if(date.getMonth()===2){
      	img.setAttribute("style","background: #fff url(https://media.giphy.com/media/5xtDarGEhQ7lnLx7bLW/giphy.gif) no-repeat");	
      }
      if(date.getMonth()===3){
      	img.setAttribute("style","background: #fff url(https://media.giphy.com/media/l4FGzQX05d1Sn8YEM/giphy.gif) no-repeat");	
      }
      if(date.getMonth()===4){
      	img.setAttribute("style","background: #fff url(https://media.giphy.com/media/26ufcl5athFXEieac/giphy.gif) no-repeat");	
      }
    }
    if(date.getMonth()===5 || date.getMonth()===6 || date.getMonth()===7){
      if(date.getMonth()===5){
      	img.setAttribute("style","background: #fff url(https://media.giphy.com/media/Te7h0uqGNo0CY/giphy.gif) no-repeat");	
      }
      if(date.getMonth()===6){
      	img.setAttribute("style","background: #fff url(https://i.gifer.com/1mqg.gif) no-repeat");	
      }
      if(date.getMonth()===7){
      	img.setAttribute("style","background: #fff url(https://media.giphy.com/media/YoieKPkpm5yuiw5kfm/giphy.gif) no-repeat");	
      }
    }
    if(date.getMonth()===8 || date.getMonth()===9 || date.getMonth()===10){
 	  if(date.getMonth()===8){
      	img.setAttribute("style","background: #fff url(http://31.media.tumblr.com/f600139a7c2a2448162d4d7e0391c75f/tumblr_nubgxr7FpG1r1da5ko6_1280.gif) no-repeat");	
      }
      if(date.getMonth()===9){
      	img.setAttribute("style","background: #fff url(https://media.giphy.com/media/fHuwX6L2Vwcz4FhJUr/giphy.gif) no-repeat");	
      }
      if(date.getMonth()===10){
      	img.setAttribute("style","background: #fff url(https://media.giphy.com/media/RiPxTlxRujiMzrsN6B/giphy.gif) no-repeat");	
      }   
    }

    days=["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    week=document.createElement("div");
    week.setAttribute("class","week");
    table.appendChild(week);

    for(var i=0; i<7; i++){
		dayCol=document.createElement("div");
		week.appendChild(dayCol);
		dayCol.innerHTML=days[i];
    }

    firstDay=new Date(date.getFullYear(), date.getMonth(), 1);
    dayBody=document.createElement("div");
    table.appendChild(dayBody);
    dayBody.setAttribute("class","dayBody");
    tmpMonth=firstDay.getMonth();
    while(1){
      dayRow=document.createElement("div");
      dayBody.appendChild(dayRow);
      dayRow.setAttribute("class","dayRow");

      //хэрвээ сарын эхний өдөр бүтэнсайн биш бол өмнөх сарын сүүлийн өдрүүдийг оруулна.
      if(firstDay.getDay()!==0){
          tmpDay=new Date(firstDay.getFullYear(), firstDay.getMonth(), firstDay.getDate()-1);
          //umnuh sariin hamgiin suulin sunday olj baina.
          while(tmpDay.getDay()!==0){
            tmpDay.setDate(tmpDay.getDate()-1);
          }

          //umnuh sariin dutuu udruudiig nuhnu
         while(tmpDay.getMonth()!==firstDay.getMonth()){
           dayCol=document.createElement("div");
           dayRow.appendChild(dayCol);
            dayCol.innerHTML=tmpDay.getDate();
            dayCol.setAttribute("id","notDay");
            let fixedDate={ day: dayCol.innerHTML, month: tmpDay.getMonth()+1, year: tmpDay.getFullYear() };
            dayCol.addEventListener("click", ()=>{
              console.log("Ene sariin udur bish baina.");
            });
            tmpDay.setDate(tmpDay.getDate()+1);
          }

          //эхний мөрийнхөө үндсэн сарын өдрүүдээр дүүргэнэ
          tmpDay=firstDay;
          while(tmpDay.getDay()!==0){
            	dayCol=document.createElement("div");
            dayRow.appendChild(dayCol);
            dayCol.innerHTML=tmpDay.getDate();
            let fixedDate={ day: dayCol.innerHTML, month: tmpDay.getMonth()+1, year: tmpDay.getFullYear() };
            dayCol.addEventListener("click", ()=>{
              this.callback(this.id, fixedDate);
            });
            tmpDay.setDate(tmpDay.getDate()+1);
          }
      }
      else{
        //Календараа дараагийн сарын өдрүүдээр үлдсэн өдрөө дүүргэнэ.
        if(firstDay.getMonth()!==date.getMonth()){
          break;
        }
        for(i=0; i<7; i++){
          	dayCol=document.createElement("div");
          dayRow.appendChild(dayCol);
          dayCol.innerHTML=firstDay.getDate();
          if(tmpMonth!==firstDay.getMonth()){
            dayCol.setAttribute("class","notDay");
            dayCol.setAttribute("id","notDay");
            dayCol.addEventListener("click", ()=>{
              //this.callback(this.id, fixedDate);
              console.log("Ene sariin udur bish baina.");
            });
          }
          let fixedDate={ day: dayCol.innerHTML, month: firstDay.getMonth()+1, year: firstDay.getFullYear() };
          dayCol.addEventListener("click", ()=>{
            this.callback(this.id, fixedDate);

          });
          firstDay.setDate(firstDay.getDate()+1);
        }
      }

    }
    return table;
  }
	Header(table, date){
		var header, left, month, right, months;
		header=document.createElement("div");
		table.appendChild(header);

		left=document.createElement("div");
		left.setAttribute("class","left");
		header.appendChild(left);
		left.innerHTML="<";
		left.addEventListener("click", ()=>{
    		table.remove();
    		date.setMonth(date.getMonth()-1);
    		this.render(date);
    	});

		month=document.createElement("div");
		month.setAttribute("class","month");
		header.appendChild(month);
		months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    	month.innerHTML=months[date.getMonth()]+"   "+date.getFullYear();

		right=document.createElement("div");
		right.setAttribute("class","right");
		header.appendChild(right);
		right.innerHTML=">";
		right.addEventListener("click", ()=>{
			table.remove();
			date.setMonth(date.getMonth()+1);
			this.render(date);
		});
	return header;
	}
}
