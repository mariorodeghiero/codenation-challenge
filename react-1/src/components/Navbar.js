import React, {Component} from 'react'
import PropTypes from 'prop-types'
import logo from '../logo.svg';
import {Link, withRouter} from 'react-router-dom';


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // searchString: this.props.history.location.pathname,
            searchString: props.match.params.id,
            match: props.match.params.id
        }
    }

    componentDidMount() {
        // will trigger the callback function whenever a new Route renders a component(as long as this component stays mounted as routes change)
        this.props.history.listen(() => {
            // view new URL
            console.log('New URL', this.props.history.location.pathname);
        });
    }

     filterRecipe = () => {
         this.setState({
             searchString: this.input.value
         })
        console.log("test: ", this.input.value)
        //  console.log("ref", {search: this.refs.search.value})
    }

     handleInputRef = (input) => {
        this.input = input;
    };

    render() {
        return (
            <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
                <div className="navbar-brand col-1">
                    <img src={logo} className="Navbar-logo" alt="logo" />
                </div>

                <div className="form-group justify-content-center row col-10 my-2">
                    <input
                        // TODO: onChange deve atualizar a URL
                        value={this.state.searchString}
                        className="form-control col-9 mr-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        ref={this.handleInputRef}
                        onChange={this.filterRecipe}
                    />
                    {console.log("match test: ", this.state.match)}
                    {console.log("test history: ", this.props.history)}
                </div>
            </nav>
        );
    }
}

export default withRouter(Navbar);





// const Navbar = ({
//     searchString,
//     match
// }) => (
//     <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
//         <div className="navbar-brand col-1">
//             <img src={logo} className="Navbar-logo" alt="logo" />
//         </div>

//         <div className="form-group justify-content-center row col-10 my-2">
//             <input
//                 // TODO: onChange deve atualizar a URL 
//                 className="form-control col-9 mr-2"
//                 type="search"
//                 placeholder="Search"
//                 aria-label="Search"
//                 ref={handleInputRef}
//                 onChange={filterRecipe}
//             />
//             {console.log("match: ", match)}
//         </div>
//     </nav>
// )


// Navbar.propTypes = {
//     searchString: PropTypes.string
// }

// const filterRecipe = () => {
//  console.log("test", this.input.value)
// //  console.log("ref", {search: this.refs.search.value})
// }

// const handleInputRef = (input) => {
//     this.input = input;
// };

// export default Navbar;
