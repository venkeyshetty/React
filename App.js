import React from 'react'
import Navbar from './components/Navbar'
import Users from './components/Users'
import Axios from 'axios'
import Search from './components/Search'
  
class App extends React.Component{
  state= {
    users:[]//users array is empty
  }
 // async componentDidMount(){
    // const res=await Axios.get(`https://api.github.com/users?client_id
    // =${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    // )
    // //.then(res=>console.log(res.data));
    // console.log(res.data);
    // this.setState({users:res.data});//inserting the fetched data
  //}
  
  searchUser=async(text)=>{
    const res=await Axios.get(`https://api.github.com/search/users?q=${text}&client_id
    =${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )
    //.then(res=>console.log(res.data));
    console.log(res.data);
    this.setState({users:res.data.items});//inserting the fetched data
  }
  render(){
    return(
      <div>
      {/* <h1>Hello</h1>  */}
    
      
    <Navbar name='Github finder' className='fa fa-github'/>
    <Search searchUser={this.searchUser}/>
    <Users users={this.state.users}/>

    </div>
      )
 
  }
  

}
export default App