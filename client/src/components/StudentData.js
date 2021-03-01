import React, { Component } from 'react'
import axios from "axios";
import "./StudentData.css";
import {Dropdown} from "react-bootstrap";


class SpacexData extends Component {

constructor(props) {
    super(props)

    this.state = {
         Spacexdata:[],
         sname:''
        }
   
    this.handleSearch= this.handleSearch.bind(this) 
    
   
}
componentDidMount(){
    axios.get("http://localhost:5000/userdata")
    .then(response=>{
       
        this.setState({
            Spacexdata:response.data
        })
    })
    .catch(error=>{
        console.log(error);
    });
    this.setState({year:""})
}

handleChange(e){

this.setState({sname:e.target.value});

}

handleSearch(){
    axios.get("http://localhost:5000/search",this.state.sname)
    .then(response=>{
        this.setState({
            Spacexdata:response.data
        })
    })
    .catch(error=>{
        console.log(error);
    });
    // console.log(this.state.sname)
}

    render() {
        const {Spacexdata,sname}=this.state
         return (
            <div>
                 <h1 id ="title"><b><i>Student Data</i></b></h1>
                 <hr/>
                 <div class="input-group">
                
   <input type="text" placeholder="Search By Name" value={sname} name="sname" onChange={(e)=>this.handleChange(e)}/>
 


   
 </div>
       { <table id="Spacexdata">
                  <tr>
                     <th>Name</th>
                     <th>Roll no.</th>
                     <th>Chemestry</th>
                     <th>Physics</th>
                     <th>Math</th>
                     <th>Total</th>
                     <th>Percent</th>
                    
                  </tr>
                     
                  {Spacexdata.length?Spacexdata.map(data=>
                   (this.state.sname==data.name)?
                    <tr key={data.id}>
                    <td>{data.name}</td> 
                    <td>{data.roll}</td>
                    <td>{data.chem}</td> 
                    <td>{data.phys}</td> 
                    <td>{data.math}</td>  
                    <td>{data.total}</td>  
                    <td>{data.percent}</td>            
                  </tr>
               :null ):null}

               {Spacexdata.length?Spacexdata.map(data=>
                   (this.state.sname=='')?
                    <tr key={data.id}>
                    <td>{data.name}</td> 
                    <td>{data.roll}</td>
                    <td>{data.chem}</td> 
                    <td>{data.phys}</td> 
                    <td>{data.math}</td>  
                    <td>{data.total}</td>  
                    <td>{data.percent}</td>            
                  </tr>
               :null ):null}
              </table> }

            
          </div>
        )
    }
}

export default SpacexData;