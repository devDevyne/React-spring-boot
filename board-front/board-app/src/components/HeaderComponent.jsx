import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className='navbar navbar-expand0md navbar-dark bg-dark'>
                        <div>
                            <a href='http://localhost:3000' className='navbar-brand'>Board-FullStack-App</a>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;
