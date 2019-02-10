import React from 'react'
import PropTypes from 'prop-types'
import RecipeItem from './RecipeItem'

const Home = ({
    recipes = [],
    searchString = ''
    
}) => (
    <div className="row">
        {recipes.map((key, index) => {
            return <RecipeItem
                key={index}
                title={key.title}
                thumbnail={key.thumbnail}
                ingredients={key.ingredients}
                href={key.href}/>
        })}
    </div>
)

Home.propTypes = {
    searchString: PropTypes.string,
    recipes: PropTypes.array
}

export default Home
