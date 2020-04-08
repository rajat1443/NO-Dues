import React,{Component} from 'react';
import Navbar from '../Views/Navbar';
import FeedColumn from '../Views/Feed-column';
import NoDisplayDivs from '../Views/NoDisplayDivs' 
class Applynodues extends Component{
    render() {
        return (
            <div className="container">
                <Navbar />
                <div className="bottom-container">
                <FeedColumn />
                <NoDisplayDivs />
                </div>
            </div>
        )
    }
}

export default Applynodues;