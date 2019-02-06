import React, {Component} from 'react';

class Bomb extends Component {
    // constructor(){
    //     let interval = setInterval(bombClock, 1000);
    // }


    state = {
        count: 0,
       
    }

    

    componentDidMount(){
        this.interval = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000)
       
      } 


    componentWillUnmount(){
        clearInterval(this.interval);
    }

    displayCount (){
        const time = this.state.count;
        if (time >= 8){
            clearInterval(this.interval);
            return 'BOOM!';
        } else if (time % 2 === 0){
            return 'tick';
        } else {
            return 'tock';
        }
    } 

    
    
    render (){
        console.log(this.displayCount());
        return (
            <div>
                <p>{this.displayCount()}</p>
            </div>
        )
       
    }

    
}

export default Bomb;
