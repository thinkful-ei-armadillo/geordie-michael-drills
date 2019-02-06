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
    

    
    
    render (){
        const { time } = this.state
        if (time >= 8){
            return (
                <div>
                <p>BOOM!</p>
                </div>
            )
        } else if (time % 2 !== 0){
            return (
                <div>
                <p>tock</p>
                </div>
            )
        } else if (time % 2 === 0){
            return (
                <div>
                  <p>tick</p>
                </div>
            )
        } else {
            return (
                <div>
                  <p>{time}</p>
                </div>
            )
        }
       
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }
}

export default Bomb;
