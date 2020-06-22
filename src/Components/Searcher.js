import React, {Component} from 'react';

class Searcher extends Component {
    render() {
        return (
            <div className="search">
                <form>
                    <div>
                        <input type="text" className="form"></input>
        
                        <button id="search-button">Search</button>
                    </div>
                </form>
            </div>
        );
    }
}
export default Searcher;