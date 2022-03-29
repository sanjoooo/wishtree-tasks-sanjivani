import React, { Component } from 'react'
import axios from 'axios';

export class Signup3 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userName:'',
         email:'',
         password:'',
         confirmPassword:'',
         FirstNameError:'',
         EmailError:'',
         PasswordError:''
      }
    }
    validForm=()=>{
      var isValid=true;
      if(this.state.userName.length===0){
          this.setState({
              FirstNameError:"name should not be empty"
          })
          isValid=false;
      }  
      else if(this.state.userName>0){
          this.setState({
              FirstNameError:''
          })
          isValid=true
      }if(!this.state.email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)){
          this.setState({
              EmailError:'Email should contain @ and .'
          })
          isValid=false
      }else if(this.state.email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)){
        this.setState({
            EmailError:""
        })
        isValid=true
    }if(!this.state.password.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)){
        this.setState({
            PasswordError:"password should contain atleast 1 special symbol 1 capital and length should be 8  characters"
        })
        isValid=false
    }else if(this.state.password.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)){
        this.setState({
            PasswordError:""
        })
        isValid=true
    }
    if(this.state.password!=this.state.confirmPassword){
        this.setState({
            PasswordError:"password and confirm password should be same"
        })
        isValid=false
    }else if(this.state.password=this.state.confirmPassword){
        this.setState({
            PasswordError:""
        })
        isValid=true
    }
    return isValid
}

    onchange=e=>{
        this.setState({
        [e.target.name]:e.target.value    
        })
    }

    submitData=e=>{
        e.preventDefault();
        const validForm=this.validForm()
        if(validForm==true){
       
        const User={
            adminfound:false,
            userName:this.state.userName,
            email:this.state.email,
            password:this.state.password,
            confirmPassword:this.state.confirmPassword
        }
        const URL="http://localhost:8181/user/addUser";
        axios.post(URL,this.state.User).then(response=>{
            console.log(response.data);
        })
        alert("user is added successfully");
    }
    else{
        alert("something gone wrong")
    }

    }

  render() {
    return (
      <div className='container' >
          <form autoComplete='off'>
        <div className='col-md-6 form-group'>
            <label className='float-left block-text text-darken-2'>First Name <span aria-hidden='true' style={{color:'red'}}>*</span></label>
            <input type='text' name='userName' value={this.state.userName} onChange={this.onchange} placeholder='First Name' required className='form-control'/>
        </div>
        <div className='col-md-6 form-group'>
            <label className='float-left block-text text-darken-2'>Email <span aria-hidden='true' style={{color:'red'}}>*</span></label>
            <input type='text' name='email' value={this.state.email} onChange={this.onchange} placeholder='Email' required className='form-control'/>
        </div>
        <div className='col-md-6 form-group'>
            <label className='float-left block-text text-darken-2'>Password<span aria-hidden='true' style={{color:'red'}}>*</span></label>
            <input type='password' name='password' value={this.state.password} onChange={this.onchange} placeholder='Password' required className='form-control'/>
        </div>
        <div className='col-md-6 form-group'>
            <label className='float-left block-text text-darken-2'>Confirm Password <span aria-hidden='true' style={{color:'red'}}>*</span></label>
            <input type='password' name='confirmPassword' value={this.state.confirmPassword} onChange={this.onchange} placeholder='Confirm Password' required className='form-control'/>
        </div>
        <div className='form-group'>
                        <button type="submit" className='btn btn-info mt-2' onClick={this.submitData}>Submit</button>
                    </div>
          </form>
        </div>
    )
  }
}

export default Signup3