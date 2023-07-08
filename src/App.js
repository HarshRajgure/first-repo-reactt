import React from "react";
import logo from './logo.svg';
import "./App.css";

class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      newItem : "",
      list :  []
    };
  }
  addItem(todovalue){
    if(todovalue !==""){
      const newItem= {
        id : Date.now(),
        value:todovalue,
        isDone:false
      };
      const list =[...this.state.list];
      list.push(newItem);

      this.setState({
        list,
        newItem:""
      });

    }
  }

  deleteItem(id){
    const list=[...this.state.list];
    const updatedlist= list.filter(item=> item.id !== id);
    this.setState({list:updatedlist});
  }
updateInput(input){
  this.setState({newItem:input});
}


  render(){
    return (
      <div>
        <img src= {logo} width="100" height="100" className="logo"  alt=""

        />
        <h1 className="App-title">LCO ToDo App</h1>
        <div className="container">
        Add an Item....
        <br />
        <input  type="text" 
        className="input-text"
         placeholder="write a ToDo"
        required
        value={this.state.newItem}
        onChange={e  =>this.updateInput(e.target.value)}
        
         />
         <button
          className="add-btn"
          onClick={() => this.addItem(this.state.newItem)}
          disabled={!this.state.newItem.length}
           > 
           Add ToDo 
           </button>
         <div className="list">
          <ul>
          {this.state.list.map(item =>{
            return(
              <li  key={item.id}>
                <input
                type="checkbox"
                name="idDone"
                checked={item.isDone}
                onChange={()=> {}} 

                />
                {item.value} 
                <button
                className="btn"
                onClick={() => this.deleteItem(item.id)}
                >Delete
                </button>
                
              </li>
            );
          })}
            <li>
              <input type="checkbox" name="" id="" />  
              Record YouTube Videos
              
              <button 
              className="btn"
              onClick={()=> this.deleteItem()}
              >
               Delete
               </button>
            </li>
          </ul>
         </div>

        </div>
      </div>
    );
  }
}
export default App;