// Vue instance
const main = Vue.createApp({

    // Data Properties
    data() {
        return {

            earnings: window.dateArr,

            test_earnings: [['02/11/2022', 5],
                       ['03/11/2022', 25],
                       ['04/11/2022', 175],
                       ['05/11/2022', 220]],

                }
    },

    computed:{
        get_highest(){
            let highest = 0
            for (earning in this.test_earnings){
                if(earning[1] > highest){
                    highest = earning[1]
                }
            }
            console.log(highest)
            return highest
        }
    },

    methods: {


        get_scales(){
            
                for (earning in this.test_earnings){
                    if(earning.length == 2){
                        earning.push(earning[1]/this.get_highest)
                    }
                    else{
                        earning[2] = earning[1]/this.get_highest
                    }
                }
            
            console.log(this.test_earnings)
            console.log(this.earnings)
        }
        
    }
})




// Link this Vue instance with <div id="main">
main.mount("#main")

