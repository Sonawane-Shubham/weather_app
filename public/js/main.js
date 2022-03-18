


const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status')
const data_hide= document.querySelector('.middle_layer')
const dayy = document.getElementById('day');
const today_date = document.getElementById('today_date');
const date = new Date();



 let b = "";

 switch(date.getMonth()+1){
     case 1: b = "January";
         break;
     case 2: b = "February";
         break;
     case 3: b = "March";
         break;
     case 4: b = "April";
         break;
     case 5: b = "May";
         break;
     case 6: b = "June"; 
         break;
     case 7: b = "July";
         break;
     case 8: b = "August";
         break;
     case 9: b = "September";
         break;
     case 10: b = "October";
         break;
     case 11: b = "November";
         break;
     case 12: b = "December";
         break;
     }
     switch (new Date().getDay()) {
        case 0:
          dayy.innerText = "Sunday";
          break;
        case 1:
          dayy.innerText = "Monday";
          break;
        case 2:
           dayy.innerText = "Tuesday";
          break;
        case 3:
          dayy.innerText = "Wednesday";
          break;
        case 4:
          dayy.innerText = "Thursday";
          break;
        case 5:
          dayy.innerText = "Friday";
          break;
        case 6:
          dayy.innerText = "Saturday";
      }
      today_date.innerText=`${date.getDate()} ${b}`
submitBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    
    let cityval = cityName.value;
   
    if (cityval === "") {

        city_name.innerText =`plz write the name before you search`;
        data_hide.classList.add('data_hide');
        

    }
    else {
        try{
            const key= '51f3a5a5f2338d36a44019363edb0a3e';

            let url =`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=${key}`;
             const response = await fetch(url);
             const data =  await response.json();
            
             const ardata = [data];
             let d = ardata[0].main.temp-273.15;
             temp_real_val.innerText=d.toFixed(2);
              let tempMood=ardata[0].weather[0].main;
             city_name.innerText=`${ardata[0].name} ,${ardata[0].sys.country} `;
            
             if(tempMood=="Clear")
             {
                temp_status.innerHTML = " <i class ='fas fa-sun' style='color:#eccc68;'></i> "

             }
             else if(tempMood=="clouds")
             {
                 temp_status.innerHTML = " <i class ='fas fa-cloud' style='color:#f1f2f6;'></i> "
             }
             else if(tempMood=="Rain")
             {
                 temp_status.innerHTML = " <i class ='fas fa-cloud-rain style='color:#a4b0be;'></i> "
             }
             else
             {
                 temp_status.innerHTML = " <i class ='fas fa-cloud style='color:#f1f2f6;'></i> "
             }
             
             data_hide.classList.remove('data_hide');
            
            
            
            
          
          


        }catch{
            city_name.innerText =`Invalid City Name`;
            data_hide.classList.add('data_hide');

        }
        

    }
});