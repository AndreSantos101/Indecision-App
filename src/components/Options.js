import React from 'react';
import Option from './Option';

const Options = (props) => (
        <div> 
            <div className='widget-header'>
                <h3 className='widget-header__tittle'>Your Options</h3>
                <button className = 'button button--link' onClick={props.handleDeleteOptions}>Remove All</button>
            </div>
             {props.options.length===0 && <p className='widget-message'>Please add a option</p>}
                    {
                        props.options.map((elem, index)=> (
                            <Option
                            key={elem} 
                            optionText={elem}
                            handleDeleteOptionSingle={props.handleDeleteOptionSingle} 
                            count={index+1}
                            />
                        ))
            }
        </div>
);

export default Options;