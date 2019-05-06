"use strict";
window.onload = function() {
		console.log("graph1");
		
		// adds the chart to a container div in our html with an ID donut
		// you can look up high charts docs but you do not need to understand below
	create_pie_chart();
	create_CS_chart();
	create_GC_chart();
	create_AL_chart();
	
	$(document).on("scrollstop", function (event) {
		
		var piechart = $('#graph1').offset().top;
		var linechart = $('#graph2').offset().top;
		
		var topOfWindow = $(window).scrollTop();
		var h = $(window).height();
		
		console.log(piechart + ' ' + topOfWindow);
		if(piechart < topOfWindow + h){
			create_pie_chart();
		}
		if(linechart < topOfWindow + h){
			create_CS_chart();
		}

	});
			

	}; //piechart
					   
function create_pie_chart() {
	
		$('#graph1').highcharts({
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false,
			type: 'pie'
		},
		title: {
			text: 'What do you feel needs to change the most to ensure more females choose to work in IT?'
		},
		tooltip: {
			pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		},
		legend: {
			padding: 3,
			itemMarginTop: 5,
			itemMarginBottom: 5,
			itemStyle: {
				lineHeight: '14px',
				color: 'black',
				fontSize: '10px'
			}
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				dataLabels: {
					enabled: false
				},
				showInLegend: true
			}
		},
		series: [{
			name: 'Events',
			colorByPoint: true,
			data: [{
				name: 'Society',
				y: 26
			}, {
				name: 'Education',
				y: 39,
				sliced: true,
				selected: true
			}, {
				name: 'Workplace Stigma',
				y: 22
			}, {
				name: 'All of the above',
				y: 13
			}]
		}]
	});
	
}

function create_CS_chart() {
	
	console.log('linechart created');

	$('#graph2').highcharts({
		chart: {
			type: 'bar'
		},
		title: {
			text: 'Female and Male split of students studying Computer Science BSc'
		},
		subtitle: {
			text: 'Data provided by University of Lincoln'
		},
		xAxis: {
			categories: ['2012/13', '2013/14', '2014/15', '2015/16', '2016/17', '2017/18', '2018/19'],
			title: {
				text: null
			}
		},
		yAxis: {
			min: 0,
			title: {
				text: 'Number of Students'
			}
		},
		plotOptions: {
			bar: {
				dataLabels: {
					enabled: false
				}
			}
		},
		legend: {
			layout: 'verticle',
			align: 'right',
			verticalAlign: 'top',
			x: -40,
			y: 80,
			floating: true,
			borderWidth: 1,
			shadow: true
		},
		credits:  {
			enables: false
		},
		series: [{
			name: 'Male',
			data: [114, 145, 215, 309, 393, 461, 511]
		}, {
			name: 'Female',
			data: [11, 11, 22, 25, 34, 36, 37]
		}]
	});
}

function create_GC_chart() {
	
	console.log('linechart created');

	$('#graph3').highcharts({
		chart: {
			type: 'bar'
		},
		title: {
			text: 'Female and Male split of students studying Games Computing BSc'
		},
		subtitle: {
			text: 'Data provided by University of Lincoln'
		},
		xAxis: {
			categories: ['2012/13', '2013/14', '2014/15', '2015/16', '2016/17', '2017/18', '2018/19'],
			title: {
				text: null
			}
		},
		yAxis: {
			min: 0,
			title: {
				text: 'Number of Students'
			}
		},
		plotOptions: {
			bar: {
				dataLabels: {
					enabled: false
				}
			}
		},
		legend: {
			layout: 'verticle',
			align: 'right',
			verticalAlign: 'top',
			x: -12,
			y: 70,
			floating: true,
			borderWidth: 1,
			shadow: true
		},
		credits:  {
			enables: false
		},
		series: [{
			name: 'Male',
			data: [72, 98, 111, 131, 126, 137, 135], 
			color: 'grey'
		}, {
			name: 'Female',
			data: [3, 7, 5, 11, 8, 13, 7],
			color: 'orange'
		}]
	});
}

function create_AL_chart() {
	
	console.log('linechart created');

	$('#graph4').highcharts({
		chart: {
			type: 'bar'
		},
		title: {
			text: 'Female and Male split of students studying Computing and ICT at A Level across the UK'
		},
		subtitle: {
			text: 'Data provided by Joint Council for Qualifications'
		},
		xAxis: {
			categories: ['2014', '2015', '2016', '2017', '2018'],
			title: {
				text: null
			}
		},
		yAxis: {
			min: 0,
			title: {
				text: 'Number of Students'
			}
		},
		plotOptions: {
			bar: {
				dataLabels: {
					enabled: false
				}
			}
		},
		legend: {
			layout: 'verticle',
			align: 'right',
			verticalAlign: 'top',
			x: -20,
			y: 83,
			floating: true,
			borderWidth: 1,
			shadow: true
		},
		credits:  {
			enables: false
		},
		series: [{
			name: 'Males studying Computing',
			data: [3857, 4927, 5633, 7483, 9075], 
			color: 'darkblue'
		}, {
			name: 'Females studying Computing',
			data: [314, 456, 609, 816, 1211],
			color: 'darkviolet'
		}, {
			name: 'Males studying IT',
			data: [6058, 5870, 5613, 5121, 3871],
			color: 'deeppink'
		}, {
			name: 'Females studying IT',
			data: [3421, 3254, 3124, 2486, 1772],
			color: 'deepskyblue'
		}]
	});
}