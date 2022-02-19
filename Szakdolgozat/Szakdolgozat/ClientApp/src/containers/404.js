import React, {Component} from 'react';
import {connect} from 'react-redux';
import "./css/404.css"

class _404 extends Component {
    render() {
        return (
            <div className="body">
                <section className="notFound">
                    <div className="img">
                        <img src="https://assets.codepen.io/5647096/backToTheHomepage.png" alt="Back to the Homepage"/>
                        <img src="https://assets.codepen.io/5647096/Delorean.png"
                             alt="El Delorean, El Doc y Marti McFly"/>
                    </div>
                    <div className="text">
                        <h1>404</h1>
                        <h2>PAGE NOT FOUND</h2>
                        <h3>BACK TO HOME?</h3>
                        <a href="/" className="yes">YES</a>
                        <a href="https://www.youtube.com/watch?v=G3AfIvJBcGo">NO</a>
                    </div>
                </section>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
)(_404);
