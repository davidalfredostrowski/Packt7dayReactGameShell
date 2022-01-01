import React, { Component } from 'react'
import Web3 from 'web3'
import './App.css'



//https://vegibit.com/a-simple-react-js-form-example/


class Form extends Component {
  state = { count: 0 ,
	    houseAmount: 0,
            companyName: '',
	    mysteryNumber: 0,
  	    playerNumber: 0,
	    plays: [],    	// player number, mystery number, won/lost , amount
	    words:      []		//'sky', 'blue'
  };
    
  constructor() {
    super();
   // this.state = {
   //   name: "React"
   // };
    this.onValueChange = this.onValueChange.bind(this);
 //   this.handleSubmit = this.formSubmit.bind(this);
  }

  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value
    });
  }



componentWillMount(){
		//this.loadBlockchainData()
		this.loadNumbers()
	}

async loadNumbers(){
	let mysteryNumber = Math.floor(Math.random() * 10)
	let playerNumber = 	Math.floor(Math.random() * 10)

	this.setState( {mysteryNumber: mysteryNumber}  );
	this.setState( {playerNumber: playerNumber}   );

}



  handleSubmit = async (event) => {
//    event.preventDefault();
//    const resp = await axios.get(`https://api.github.com/users/${this.state.companyName}`);
//    this.props.onSubmit(resp.data);
//    this.setState({ companyName: '' });
	alert(this.state.companyName);

let win = 0;
let playerHigher  = 0;
let playerLower = 0;


//determine winner
if (this.state.playerNumber > this.state.mysteryNumber){
		playerHigher = 1
		playerLower = 0 
}else{
		playerHigher = 0 
		playerLower  = 1
}
alert("this.state.playerNumber" + String(this.state.playerNumber) + "this.state.mysteryNumber" + String(this.state.mysteryNumber));
alert("playerHigher: " + String(playerHigher) + "    playerLower: " + String(playerLower));
alert("this.state.selectedOption: " + String(this.state.selectedOption));

if ((this.state.selectedOption == "lower") && (playerLower)) {
	win = 1
}
if ((this.state.selectedOption == "higher") && (playerHigher)) {
	win = 1
}

alert("win" + String(win));
this.state.count = this.state.count + 1
this.state.plays[this.state.count] = win
alert("this.state.count" + String(this.state.count));
alert("this.state.plays" + String(this.state.plays));
//this.state.words[this.state.count] = this.state.plays
this.setState(   {   words: [...this.state.words, this.state.plays] });
// this is not saving state between submisssions - i can use the blockchain to do this.
//record to the history

//		checked={this.state.selectedOption == "higher"}
//		onChange={this.onValueChange}

  };

  render() {
    return (


<form onSubmit={this.handleSubmit}>
<p> Pick if your number is higher or lower than the 'mystery number'</p>
<p> Enter a bet amount and process </p>


<p> Player number: { this.state.playerNumber } </p>


<div className="radio">
          <label>
            <input type="radio" 
		value="higher"
		checked={this.state.selectedOption == "higher"}
		onChange={this.onValueChange}
	    />
            players number Higher than the mystery number
          </label>
        </div>
        <div className="radio">
          <label>
             <input type="radio" 
		value="lower"
		checked={this.state.selectedOption == "lower"}
		onChange={this.onValueChange}
	    />
            players number Lower than the mystery number
          </label>
        </div>
<p></p>
<p></p>
          <input 
            type="text" 
            value={this.state.companyName}
            onChange={event => this.setState({ companyName: event.target.value })}
            placeholder="Enter a bet amount" 
            required 
          />
          <button>Go!</button>
 
           





<ul id="taskList" className="list-unstyled">{
	this.state.words.map((word, idx) => {
    		return(
 	 		<div className="taskTemplate" className="checkbox" key={idx}>
			    <label>
			    	<input type="checkbox"/>
				<span className="content">{word}</span>
			    </label>
                	  </div>  
	)

	})
}

</ul>
       </form>

      );
    }
}

export default Form;