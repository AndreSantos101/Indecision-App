// const showDetailsF = () =>{
//     flag ? <div><p>Hey, here is some info!</p></div> : <p></p>
//     flag=!flag;
//     render();
// }

// let flag = false;
// const title = "Visibility Toggle";
// const render = () =>{
//     const template = (
//         <div>
//             <h1>{title} teste</h1>
//             <button onClick={showDetailsF}>Show Details</button>
//             {console.log(flag)}
//         </div>
//     );
//     ReactDOM.render(template,  document.getElementById('app'));
// }

// render();

const title = "Visibility";

class Visibility extends React.Component{
    constructor(props){
        super(props);
        this.handleClickDetails = this.handleClickDetails.bind(this);
        this.state = {
            flag: true
        }
    }

    handleClickDetails(){
        this.setState((prevState) =>{
            return {
                flag : !prevState.flag
            }
        }

        )
    }
    render(){
        return(
            <div>
                <h1>{title}</h1>
                <button onClick={this.handleClickDetails}>{ this.state.flag ? 'Hide Details': 'Show Details'}</button>
                {
                    (!this.state.flag && <p>Here are some Details!</p>)
                }
            </div>
        )
    }
}

ReactDOM.render(<Visibility />, document.getElementById("app"));