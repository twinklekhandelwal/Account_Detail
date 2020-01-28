import React from 'react';

import Url from './url';

class Account extends React.Component {
	 constructor(props) {
	 	super(props);
		this.state = { account:""};
	}
	

	
	handleSubmit = async e => {
		e.preventDefault();
		const response = await Url.post({
			headers: {  
				'X-API-KEY': 'eyJlbWFpbCI6IlEyUDY5MDgiLCJpYXQiOjE1NTc4Mjg0MjR9.NHsXgEC6Cfq9rvlb89eqDTuuS3IpUi9NDVjdNxJAuY4',
				
			  }
		});
		
		console.log(response)
		this.setState({ account: response });
	};
	
	
	
	render() {
		return (
			<div>
				<h1>twinkle</h1>
			</div>
		);
	}
}
export default Account;
