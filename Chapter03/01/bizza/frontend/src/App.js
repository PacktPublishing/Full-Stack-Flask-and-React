import React from 'react';
class App extends React.Component{
  constructor(props)
  {
    super(props);
    this.state={
      name:"Andrew", }
this.updateNameState=this.updateNameState.bind(this);
}
  updateNameState(){
    this.setState({
      name:"Andrew Peter"});
  }
render()
  {
    return(
    <div>
    <p>{this.state.name}</p>
    <button onClick={()=>this.updateNameState()}>Display Full Name</button>
    </div>
      );
  }
}
 export default App;