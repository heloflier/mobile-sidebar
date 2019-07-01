import React, { Component } from 'react';
import "./styles/styles.scss";
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Backdrop from './components/BackDrop';

class App extends Component {
    state = { isSidebarOpen: false };

    sidebarToggleHandler = () => {
        this.setState( prevState => ({
            isSidebarOpen: !prevState.isSidebarOpen
        }));
    }

    sidebarClose = () => {
        this.setState(() => ({
            isSidebarOpen: false
        }));
    }

    render() {
        return (
            <div>
                <header>
                    <Navbar sidebarToggleHandler={this.sidebarToggleHandler} />
                </header>
                <div className="app-body" />
                <Sidebar show={this.state.isSidebarOpen} />
                {this.state.isSidebarOpen && <Backdrop sidebarClose={this.sidebarClose}/>}
            </div>
        );
    }
}

export default App;
