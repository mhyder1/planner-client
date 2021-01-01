import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component{
    render() {
        return (
            <header>
                <div className="hero">
                    <h2>Event Planning Made Easy</h2>
                    <p>Use event planner to make your event planning easy.</p>
                    <div>
                        <button>
                            <Link to="/login">
                                Start planning your event now
                        </Link>
                        </button>
                    </div>
                </div>
                <div className="hero">
                    <span className="hero-image">Image</span>
                </div>
                
            </header>
        );
    }
}


export default Header;