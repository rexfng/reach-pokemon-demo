$('document').ready(function(){
	var pokemon1 = $('#pokemon1');
	var pokemon1Img = $('#pokemon1Img');
	var pokemon2 = $('#pokemon2');
	var pokemon2Img = $('#pokemon2Img');
	pokemon1.on('keyup', function(){
		$.ajax({
			url: 'http://pokeapi.co/api/v2/pokemon/' + pokemon1.val()

		}).done(function(data){
			var stats = [];
			var statsLabel = [];
			console.log(data);
			pokemon1Img.attr('src', data.sprites.front_default);
			$.each(data.stats, function(i,v){
				statsLabel.push(v.stat.name);
			})
			$.each(data.stats, function(i,v){
				stats.push(v.base_stat);
			})
			var ctx = document.getElementById('myChart').getContext('2d');
			var data = {
			    type: 'radar',
			    data: {
					labels: statsLabel,
				    datasets: [
					    {
					    	label: data.name,
					        data: stats,
					    }
				    ]
				}
			}
			var myRadarChart = new Chart(ctx, data);				
		});
	});

	pokemon2.on('keyup', function(){
		$.ajax({
			url: 'http://pokeapi.co/api/v2/pokemon/' + pokemon2.val()
		}).done(function(data){
			var stats = [];
			var statsLabel = [];
			console.log(data);
			pokemon2Img.attr('src', data.sprites.front_default);
			$.each(data.stats, function(i,v){
				statsLabel.push(v.stat.name);
			})
			$.each(data.stats, function(i,v){
				stats.push(v.base_stat);
			})
			var ctx = document.getElementById('myChart2').getContext('2d');
			var data = {
			    type: 'radar',
			    data: {
					labels: statsLabel,
				    datasets: [
					    {
					    	label: data.name,
					        data: stats,
					    }
				    ]
				}
			}
			var myRadarChart = new Chart(ctx, data);				
		})
	});
});