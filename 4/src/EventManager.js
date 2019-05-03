export default class EventManager{
    constructor(events, types){
        this.events = events;
        this.types = types;
    }
    
    run() {
        console.log("RUNNING");
        this.timer();
    }

    timer(){
        this.second = 0;
        this.interval = setInterval(()=>{

            this.checkSecond();

            this.second++;
        }, 1000);
        
    }

    checkSecond(){
        if (this.second >= 10)  clearInterval(this.interval);
        this.events.filter((item)=>{
            return (this.second == item.second);
        }).map((item)=>{
            delete item.second;
            return (this.types.includes(item.type)) ? console.log(`At second ${this.second}: `, item) : '';
        });
    }
};