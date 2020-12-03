import {fetchData } from"./components/DataMiner.js";
import carCard from "./components/carCard.js";
(() => {

//making splash page
let splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e)=> {
    setTimeout(()=> {
        splash.classList.add('display-none');
    }, 2000);
});

let vue_vm = new Vue({
        data: {
                removeAformat: true,
                showBioData: false,
                carmodel: [],
                currentCarData: {}
            
            
        },
        mounted: function() {
            
            console.log("vue is mounted, trying a fetch for the initial data");
            fetchData("./includes/index.php")
            .then(data => { 
                    
                data.forEach(car =>this.carmodel.push(car));
                this.currentCarData = data[1];
                
            })
                .catch(err => console.error(err));
        },
        updated: function() {
            console.log('Vue just update the DOM');
        }, 
        methods: {
            logClicked(){
                console.log("clicked on a car name");
            },
            showCarData(target) {
                console.log('clicked to view car bio data', target, target.name);
                this.showBioData = this.showBioData ? false : true;

                this.currentCarData = target;
            },
            removeProf(target) {
                // remove this prof from the professors array
                console.log('clicked to remove prof', target, target.name);
                // the "this" keyword inside a vue instance REFERS to the Vue instance itself by default

                // make the selected prof's data visible
                // this.professors.splice(this.professors.indexOf(target), 1);
                this.$delete(this.carmodel, target);
            }
            
        },
        components: {
            "car-card": carCard
        }
    }).$mount("#app");



})();