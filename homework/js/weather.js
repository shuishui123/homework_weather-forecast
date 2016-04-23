    ;(function () {
            var url = 'http://openweathermap.org/data/2.5/forecast/daily?id=1814906&appid=b1b15e88fa797225412429c1c50c122a';

            var xhr = new XMLHttpRequest();
            xhr.open('get', url, true);
            xhr.onload = function (e) {
                if (this.status === 200) {
                    callback(JSON.parse(this.responseText));
                }
            }
            xhr.send();

            function callback (res) {
                console.log(res);
                // var temp = document.querySelectorAll('temp');
                var block, city, date, state, min, max, pic;
                block = document.querySelectorAll('.block');
                city = document.querySelectorAll('.city');
                date = document.querySelectorAll('.date');
                state = document.querySelectorAll('.state');
                min = document.querySelectorAll('.min');
                max = document.querySelectorAll('.max');
                pic = document.querySelectorAll('.weather_pic');
                num = block.length;
                for(var i = 0; i < num; i ++) {
                    city[i].innerHTML = res.city.name;
                    date[i].innerHTML = new Date(res.list[i].dt * 1000);
                    state[i].innerHTML = res.list[i].weather[0].description;
                    min[i].innerHTML = res.list[i].temp.min;
                    max[i].innerHTML = res.list[i].temp.max;
                    switch(res.list[i].weather[0].description) {
                        case 'light rain' : pic[i].style.cssText="background:url('../picture/light rain.png') no-repeat"; break;
                        case 'moderate rain' : pic[i].style.cssText="background:url('../picture/moderate rain.png') no-repeat"; break;
                        default: pic[i].style.cssText="background:url('../picture/heavy intensity rain.png') no-repeat"; break;
                    }
                }
                
            }
        }());