class Counter extends React.Component{

    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count : 0
        };
    }

    componentDidMount(){

        try{
            const json = localStorage.getItem("count");
            const options = JSON.parse(json);
            if(options){
                this.setState(() => ({ count : parseInt(localStorage.getItem("count")) }));
            }
        }catch(e){

        }
    }
    componentDidUpdate( prevProps , prevState){
        if(prevState.count !== this.state.count){
            const json = JSON.stringify(this.state.count);
            localStorage.setItem("count",json);
            this.setState(() => ({ count :  parseInt(localStorage.getItem("count")) }));
        }
    }
    componentWillUnmount(){
        
    }

    handleAddOne(){
        this.setState((prevState) =>{
            return {
                count: prevState.count+1
            }
        });
    }
    handleMinusOne(){
        this.setState((prevState) =>{
            return {
                count: prevState.count-1
            }
        });
    }
    reset(){
        this.setState(() => {
            return {
                count: 0
            }
        });
    }


    render(){
        return (
        <div>
            <h1>Count: {this.state.count}</h1>
            <button onClick ={this.handleAddOne}>+1</button>
            <button onClick ={this.handleMinusOne}>-1</button>
            <button onClick ={this.reset}>Reset</button>
        </div>
        )
    }
}


ReactDOM.render(<Counter count={-100}/>, document.getElementById('app'));
