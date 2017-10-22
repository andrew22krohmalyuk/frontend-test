import React, { Component } from 'react';

export default class Form extends Component {
    render() {
        let styles = {}

        if(this.props.value === 'one') {
            styles = {
                width: '33%'
            }
        } else if (this.props.value === 'two') {
            styles = {
                width: '66%'
            }
        }
        else if (this.props.value === 'three') {
            styles = {
                width: '100%'
            }
        }

        return(
            <div className="progress-bar">
                <div className="bar-container">
                    <div className="bar">
                        <div className="active-bar" style={styles}></div>
                    </div>
                </div>
            </div>
        )
    }
}
