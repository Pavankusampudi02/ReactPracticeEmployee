import React from "react";

const Hoc = (Component) =>{
    return (
        class extends React.Component{
            state = {
                auth : false
            }
            render(){
                return(
                    <div>
                        {this.state.auth ? <Component/> : <h4>Please Login</h4>}
                    </div>
                )
            }
        }
    )
}

export default Hoc;