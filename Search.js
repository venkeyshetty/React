import React from 'react'

class Search extends React.Component{
    state={
        text:''
    }
    //taking the input from the user-------venkey is the user choice.......onChange is the predefined event
    venkey=(e)=>{
        this.setState({text:e.target.value})
        //console.log(e.target.value)
    }
    onSubmit=(e)=>{
        e.preventDefault();
        this.props.searchUser(this.state.text);
        this.setState({text:''})
    }

    render() {
        return (
            <div>
                <form className='form' onSubmit={this.onSubmit}>
                    <input type='text' value={this.state.text} 
                    onChange={this.venkey} name='text' placeholder='search here'></input>
                    <input type='submit' value='search' className='btn btn-dark btn-block'></input>


                </form>
                
            </div>
        )
    }
}
export default Search;
