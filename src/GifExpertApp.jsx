import React, { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'Deku' ]);
  const onAddCategory = ( newCategory ) => {
    // console.log('Naruto');

    // categories.push('Naruto');  // esta funcion trata de mutar el arreglo, lo cual react no permite hacer para los hooks
    if( categories.includes( newCategory )) return;

    setCategories([ newCategory, ...categories ]);
    // setCategories( cat => [ ...categories, 'Naruto' ]); //otra forma

  }

  return (
    <>
        <h1>Gif Expert App</h1>

        <AddCategory 
          // setCategories={ setCategories }
          onNewCategory={ onAddCategory }
        />

        {/* <button onClick={ onAddCategory }>Agregar</button> */}
        { 
          categories.map( category => ( 
            <GifGrid 
              key={ category } 
              category={ category } 
            />
          ))
        }
    </>
  )
}
