import React, { Component } from 'react';

class Footer extends Component {

    state = {
        name: 'Nestor',
        age:29,
        isLogin: true
    }

    componentDidMount(){
        this.setState({name: 'MyName'});
        //subscribe
    }

    //componentWillUnmount(){
        //unsubscribe
    //}


    change = evt => {
        //console.log('change', evt.target.value);
        this.setState({name:evt.target.value});
        console.log(this.state.name)

        //console.log(this.state.name)
        //console.log('changed', e)
    }

    render() {

        const animals = ['']
        return (
            <div>
                {
                  this.state.isLogin ? (
                  <React.Fragment>
                        <h2 onClick={this.props.myAlert}>
                            {this.props.adminmessage}
                        </h2>
                        <input
                            value= {this.state.name}
                            type="text"
                            onChange={this.change.bind(this)}
                        />
                  </React.Fragment>
                ): (
                    <React.Fragment>
                        <h2>no</h2>
                    </React.Fragment>
                )}
            </div>
        )
    }
}

export default Footer;