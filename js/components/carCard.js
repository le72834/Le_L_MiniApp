export default {
    name: "carCard",
    props: ["car"],

    data: function() {
        return {
            
            myName: this.car.name,
            myPrice: this.car.price
        
           
        }
    },
    template: `<li @click="logClicked"> <img :src="'images/' + car.avatar" :alt='car.name + " image"'  >
        <p>{{car.name}} </p>
    
        
        </li>`,

        created: function () {
            console.log(`created ${this.car.name}'s card`);
            // this.showProfData();
            
            
        },
        
        methods: {
            logClicked() {
                console.log(`fired from inside ${this.car.name}'s component!`);
                this.$emit("showmydata", this.car)

                    
            },
            
    }
}