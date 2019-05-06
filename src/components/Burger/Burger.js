import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredient = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                //It will add many type e.g if salad appears more than, the burgerIngredient
                //for salad sill be added more than once
                return <BurgerIngredient key={igKey + i} type={igKey} />
            })
        })
        // reduce() reduces the array to a single value
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (transformedIngredient.length === 0) {
        transformedIngredient = <p>Pls, start adding ingredients!</p>
    }
    console.log(transformedIngredient);
    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top" />
           {transformedIngredient}
            <BurgerIngredient type="bread-bottom"/>

        </div>
    )
}

export default burger;