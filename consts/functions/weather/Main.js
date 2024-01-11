const Main = function Main(main){
	if(main == 'clear sky') return 'Чистое небо'
	else if(main == 'few clouds') return 'Мало облаков'
	else if(main == 'scattered clouds' || main == 'cloudy' || main == 'nebulous' || main == 'overcast') return 'Рассеянные облака'
	else if(main == 'broken clouds') return 'Облачно'
	else if(main == 'light rain') return 'Лёгкий дождь'
	else if(main == 'shower rain' || main == 'heavy rain') return 'Сильный дождь'
	else if(main == 'rain') return 'Дождь'
	else if(main == 'thunderstorm' || main == 'storm' || main == 'danger' || main == 'terror') return 'Гроза'
	else if(main == 'snow') return 'Снег'
	else if(main == 'mist' || main == 'fog' || main == 'haze' || main == 'smoke' || main == 'toman') return 'Туман'
};

module.exports = Main;