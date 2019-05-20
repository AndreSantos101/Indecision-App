
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {(props.subtitle && <h2>{props.subtitle}</h2>)}
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision'
}

const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled = {!props.hasOptions}
            >
                What Should I do here?
            </button>
        </div>
    );
}


const Options = (props) => {
    return (
        <div> 
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length===0 && <p> Please add a option </p>}
            {
                props.options.map((elem)=> (
                    <Option
                    key={elem} 
                    optionText={elem}
                    handleDeleteOptionSingle={props.handleDeleteOptionSingle} 
                    />
                ))
            }
        </div>
    );
    console.log("teste");
    
};

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button 
                onClick= {(e)=>{
                        props.handleDeleteOptionSingle(props.optionText);
                    }   
                }
            >
                Remove</button>
        </div>
    );
}

class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: undefined
        }
        this.handleAddOption = this.handleAddOption.bind(this);
    }
    handleAddOption(e){
        e.preventDefault();
        const option= e.target.elements.option.value.trim();
        const error =this.props.handleAddOption(option);
        if(!error){
            e.target.elements.option.value = '';
        }
        this.setState( () => ({ error }));
    }
    render(){
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
           
        )
    }
}

class Indecision extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOptionSingle = this.handleDeleteOptionSingle.bind(this);
        this.state = {
            options: []
        }
    }

    componentDidMount(){
        try{
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);
            if(options){
                    this.setState( () => ({options}))
        }
            
        }catch(e){

        }

       
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
            console.log("save data");
        }
        
    }
    componentWillUnmount(){
        console.log("component will unmount!");
    }

    handleDeleteOptionSingle(optionToRemove){
        this.setState((prevState)=> ({
            options: prevState.options.filter((elem)=>elem !== optionToRemove
                )
            })
        );
    }

    handleAddOption(option){
        
        if(!option){
            return 'Enter valid value to add item';
        }else if(this.state.options.indexOf(option)>-1){
                return 'This Item already exists';
        }
        
        this.setState((prevState) => ({ options:prevState.options.concat([option]) }));
    }

    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const selectedOption=this.state.options[randomNum];
        alert(selectedOption);
    }

    handleDeleteOptions(){
            this.setState(()=>({ options: [] }));
    }
    render(){
        
        const subtitle = "Put your life in the hands of a computer";
        return (
            <div>
                <Header subtitle={subtitle}></Header>
                <Action
                    hasOptions = {this.state.options.length>0}
                    handlePick = {this.handlePick}
                ></Action>
                <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOptionSingle = {this.handleDeleteOptionSingle}></Options>
                <AddOption handleAddOption={this.handleAddOption}></AddOption>
            </div>
        );
    }
}

// ReactDOM.render(<User name="Andre" age={24} />, document.getElementById('app'));
ReactDOM.render(<Indecision options = {['Porto', 'Lisbon']}></Indecision>, document.getElementById('app'));