/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
┏┓
┗■ INDEX

|   01.chart
        a.bar
        b.rader

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/


/*--------------------
    01.Chart
--------------------*/
//a.bar
var ctx = document.getElementById("js-barChart").getContext("2d");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["ラベル1", "ラベル2", "ラベル3"],
        datasets: [{
            label: '凡例',
            data: [10, 10, 10],
            backgroundColor: [
                'rgba(150,150,150,0.2)',
                'rgba(150,150,150,0.2)',
                'rgba(255,20,147,0.2)'
            ],
            borderColor: [
                'rgba(150,150,150,0.2)',
                'rgba(150,150,150,0.2)',
                'rgba(255,20,147,1)'
            ],
            borderWidth: 1,
            },
        ]
    },
    options: {
    }
});

//b.rader
var ctx = document.getElementById("js-raderChart").getContext("2d");
var myChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ["ラベル1", "ラベル2", "ラベル3", "ラベル4", "ラベル5"],
        datasets: [{
            label: '名前',
            data: [3, 3, 3, 3, 3],
            backgroundColor: ['rgba(255,20,147,0.2)'],
            borderColor: ['rgba(255,20,147,1)'],
            pointBackgroundColor: ['rgba(255,20,147,1)'],
            pointBorderColor: ['#fff'],
            pointHoverBackgroundColor: ['#fff'],
            pointHoverBorderColor: ['#fff'],
            },
            {
            label: '平均',
            data: [2, 3, 4, 4, 5],
            backgroundColor: ['rgba(204,204,204,0.2)'],
            borderColor: ['rgba(204,204,204,1)'],
            pointBackgroundColor: ['rgba(204,204,204,1)'],
            pointBorderColor: ['#fff'],
            pointHoverBackgroundColor: ['#fff'],
            pointHoverBorderColor: ['#fff'],
            }          
        ]
    },
    options: {
        //ラベル
        /*
        legend: {
            display: false,
        }
        */
    }
});