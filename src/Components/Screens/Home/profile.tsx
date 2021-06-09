import React from 'react';
import '../../../Assets/css/myProfile.css';

class MyProfile extends React.Component {

    state = {
        person: [],
    };

    async componentDidMount() {
        const URL = "https://orunpay-api.herokuapp.com/v1";
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data.ip);
        
    }

    render() {
        return (
            <div className="my-profile">
                <div>
                    {!this.state.person ? (<div>loading...</div>) : (<div><div>{this.state.person}</div></div>)}
                </div>
            </div>
        );
    }
}

export default MyProfile;