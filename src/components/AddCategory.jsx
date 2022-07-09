import { useState } from 'react';


export const AddCategory = ({onNewCategory}) => {
    
    const [ inputValue, setInputValue ] = useState('')
    const onInputChange = ( { target } ) => {
        // console.log(event.target.value);
        setInputValue( target.value );
    };
    const onSubmit = (event) => {
        // console.log(event);
        
        event.preventDefault();
        // console.log( inputValue );
        if( inputValue.trim().length <= 1) return;

        // setCategories( categories =>[ ...categories, inputValue ]);

        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type= 'text'
                placeholder="Buscar Gif"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    );
}
