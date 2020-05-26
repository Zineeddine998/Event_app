import './general';
import apiCall from "./services/api/apiCall";
import Chart from "chart.js"
class Status{
    constructor() {
        this.loadData();
        this.$experienceTab = document.querySelector('#experienceTab');
        this.$professionTab = document.querySelector('#professionTab');
        this.$ageTab = document.querySelector('#ageTab');
        this.$ageCanvas = document.querySelector('#ageCanvas');
        this.$professionCanvas = document.querySelector('#professionCanvas');
        this.$experienceCanvas = document.querySelector('#experienceCanvas');
        this.$loadingIndicator = document.querySelector('#loadingIndicator');
        this.$tabArea = document.querySelector('#tabArea');
        this.$chartArea = document.querySelector('#chartArea');
        this.$errorMessage= document.querySelector('#errorMessage');
        this.$statisticData = document.querySelector('#statisticData');
    }
    loadData(){
        apiCall('statistics').then(response =>{
            this.statisticsData = response;
            this.$loadingIndicator.classList.add('hidden');
            this.$tabArea.classList.remove('hidden');
            this.$chartArea.classList.remove('hidden');
            this.loadAge();
            this.loadExperience();
            this.loadProfession();
        })
            .catch(() => {
                this.$loadingIndicator.classList.add('hidden');
                this.$errorMessage.classList.remove('hidden');
            })
    }
    loadExperience(){
        const data = {
            datasets : [{
                data : this.statisticsData.experience,
                backgroundColor:[
                    'rgba(255,99,132,0.6)',
                    'rgba(54,162,235,0.6)',
                    'rgba(255,206,86,0.6)',
                ],
                borderColor :[
                    'white',
                    'white',
                    'white',
                ]
            }],
            labels:[
                'Beginner',
                'Intermediate',
                'Advanced'
            ]
        };
        new Chart(this.$experienceCanvas,{
            type:'pie',
            data,
        });
    }
    loadProfession(){
        const data = {
            datasets : [{
                data : this.statisticsData.profession,
                backgroundColor:[
                    'rgba(255,99,132,0.6)',
                    'rgba(255,206,86,0.6)',
                    'rgba(54,162,235,0.6)',
                    'rgba(75,192,192,0.6)',
                ],
                borderColor :[
                    'white',
                    'white',
                    'white',
                    'white',
                ]
            }],
            labels:[
                'School Student',
                'College Student',
                'Trainee',
                'Employee',
            ]
        };
        new Chart(this.$professionCanvas,{
            type:'pie',
            data,
        });
    }
    loadAge(){
        const data = {
            datasets : [{
                data : this.statisticsData.age,
                backgroundColor:[
                    'rgba(255,99,132,0.6)',
                    'rgba(54,162,235,0.6)',
                    'rgba(75,192,192,0.6)',
                ],
                borderColor :[
                    'white',
                    'white',
                    'white',
                ]
            }],
            labels:[
                '10-15 years',
                '15-20 years',
                '20-25 years',
            ]
        };
        new Chart(this.$ageCanvas,{
            type:'pie',
            data,
        });
    }
}
window.addEventListener("load",() => {
    new Status();
})

