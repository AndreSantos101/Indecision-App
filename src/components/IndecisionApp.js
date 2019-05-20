import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';

export default class Indecision extends React.Component{
    state = {
        options: [],
        selectedOption: undefined
    };

    handleClearSelectedOption = (e) =>{
        this.setState( ()=>({
                selectedOption: undefined
            })
        );
    }

    handleDeleteOptionSingle = (optionToRemove) => {
        this.setState((prevState)=> ({
            options: prevState.options.filter((elem)=>elem !== optionToRemove
                )
            })
        );
    }
    handleAddOption = (option) => {
        
        if(!option){
            return 'Enter valid value to add item';
        }else if(this.state.options.indexOf(option)>-1){
                return 'This Item already exists';
        }
        
        this.setState((prevState) => ({ options:prevState.options.concat([option]) }));
    }

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const selectedOption=this.state.options[randomNum];
        this.setState(()=> ({selectedOption: selectedOption}));
    }

    handleDeleteOptions = ()=> {
            this.setState(()=>({ options: [] }));
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

    render(){
        const subtitle = "Put your life in the hands of a computer";
        return (
            <div>
                <Header subtitle={subtitle}></Header>
                <div className='container'>
                    <Action
                        hasOptions = {this.state.options.length>0}
                        handlePick = {this.handlePick}
                    ></Action>
                <div className='widget'>
                    <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOptionSingle = {this.handleDeleteOptionSingle}></Options>
                    <AddOption handleAddOption={this.handleAddOption}></AddOption>
                </div>
                </div>
                <OptionModal selectedOption={this.state.selectedOption} handleClearSelectedOption={this.handleClearSelectedOption}/>
            </div>
        );
    }
}
