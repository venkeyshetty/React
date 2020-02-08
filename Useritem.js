import React from 'react'


const Useritems=(props)=>{
    // constructor(){
    //     super();
    //     this.state={
    //         id:1,
    //         avatar_url:'https://avatars0.githubusercontent.com/u/1?v=4',
    //         login:'mojombo',
    //         html_url: "https://github.com/mojombo"
    //     }
    //}
        const {id,avatar_url,login,html_url}=props.User;
        return(
            <div>
                <div className="card text-center">
                    <img src={avatar_url}
                    alt=" " className="round-img"
                    style={{width:'60px'}}/>
                    <h3>{id}</h3>
                    <h3>{login}</h3>
                    <a href={html_url}
                    className="btn btn-dark btn-sm m3-1">More
                        </a>
                </div>
            {/*{this.state.id}<br></br>
            {this.state.login}<br></br>
        {this.state.html_url}*/}
            </div>

        )
    }

export default Useritems;