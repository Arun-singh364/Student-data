import React from 'react';
import axios from 'axios';
import { Redirect,Link } from 'react-router-dom';
import UserImg from "../Image/user.jpg";
import { Button } from 'react-bootstrap';

class Signup extends React.Component
{
    state = {
        name : '',
        roll: '',
        chem:'',
        phys:'',
        math:'',
        redirect:false

    }
    handleChange = (e)=>{
        
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit = ()=>{
        if(this.state.name!='' && this.state.chem!='' && this.state.phys!='' && this.state.math!='' && this.state.math!='')
        {
            axios.post('http://localhost:5000/signup',this.state)
            .then(res=>{
                console.log('successfully posted');
                this.setState({name:'',roll:'',chem:'',phys:'',math:''});
               
            });
         
            // this.setState({redirect:true})

        }
    }
handleView=()=>{
    this.setState({redirect:true})
}

 renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/userdata' />
        }
      }
    

    render()
    {
        return(
            <div class="row text-center">
                {this.renderRedirect()}
                <div class="col-md-4 form-group" style={{justifyContent:"center"}} >
                    <form onSubmit={()=>this.handleSubmit()} style={{width:"100%",textAlign:'center'}}>
                    <b><i> <h1  style={{color:"red",marginBottom:"20px"}}>Store Data</h1></i></b>
                    <img src={UserImg} alt="Logo" style={{width:"30%"}} />
                    
                        <input required onChange={(e)=>this.handleChange(e)} name='name'  type="text" class="form-control" value={this.state.name} style={{fontSize:'15px',fontFamily:'Cursive,sans-serif,Gugi',width:'300px',borderRadius:'10px',marginLeft:'50px',marginTop:'20px'}} placeholder="Name" class="form-control"/>
                        <input required onChange={(e)=>this.handleChange(e)} name="roll" type="text" class="form-control" value={this.state.roll} style={{fontSize:'15px',fontFamily:'Cursive,sans-serif,Gugi',width:'300px',borderRadius:'10px',marginLeft:'50px',marginTop:'20px'}} placeholder="Roll no." class="form-control"/>
                        <input required onChange={(e)=>this.handleChange(e)} name='chem' type="text" class="form-control" value={this.state.chem} style={{fontSize:'15px',fontFamily:'Cursive,sans-serif,Gugi',width:'300px',borderRadius:'10px',marginLeft:'50px',marginTop:'20px'}} placeholder="Chemestry" class="form-control"/>
                        <input required onChange={(e)=>this.handleChange(e)} name="phys" type="text" class="form-control" value={this.state.phys} style={{fontSize:'15px',fontFamily:'Cursive,sans-serif,Gugi',width:'300px',borderRadius:'10px',marginLeft:'50px',marginTop:'20px'}} placeholder="Physics" class="form-control"/>
                        <input required onChange={(e)=>this.handleChange(e)} name='math' type="text" class="form-control" value={this.state.math} style={{fontSize:'15px',fontFamily:'Cursive,sans-serif,Gugi',width:'300px',borderRadius:'10px',marginLeft:'50px',marginTop:'20px'}} placeholder="Math" class="form-control"/>
                        
                        <button  style={{borderRadius:'10px',fontSize:'19px',fontFamily:'Cursive,sans-serif,Gugi',outline:'none',backgroundColor:"#00917c",marginRight:'40px',marginTop:'30px',width:'300px'}} class="btn">CREATE</button>
                    
                       
                    </form>
                    <button onClick={this.handleView} style={{borderRadius:'10px',fontSize:'19px',fontFamily:'Cursive,sans-serif,Gugi',outline:'none',backgroundColor:"#00917c",marginRight:'40px',marginTop:'30px',width:'300px'}} class="btn">View LeaderBoard</button>
                </div>
                {/* <div class="col-md-8">
                    <img src={team}/>
                </div> */}
            </div>
        );
    }
}
export default Signup