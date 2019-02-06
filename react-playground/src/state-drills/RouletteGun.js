import React, {Component} from 'react';

export default class RouletteGun extends Component{
        
    static defaultProps = {
        bulletInChamber: 8
    }

    


    state = {
        chamber: null,
        spinningTheChamber: false
    }
    
    componentWillUnmount(){

    }

    handleTriggerClick = () =>{
        this.setState({
            spinningTheChamber: true
            
            // chamber: this.props.bulletInChamber
        })
        this.timeout = setTimeout(() =>{
            let count = Math.ceil(Math.random() * 8)
            
            this.setState({
                spinningTheChamber: false,
                chamber: count
            })
        }, 2000)
    }  
    
    renderShot(){
        if (this.state.spinningTheChamber === true){
           return 'spinning the chamber and pulling the trigger! ...';
        } else if (this.state.chamber === this.props.bulletInChamber){
          return 'BANG!!!'
        } else{
            return "You're safe!"
        }
    }

    render(){
        
        
        return (
            <div>
                <p>{this.renderShot()}</p>
                <button type="submit" onClick={this.handleTriggerClick}>Pull The Trigger</button>
            </div>

        )
        
    }
}