import React, { Component } from 'react';
import Subject from "./components/Subject";
import Nav from "./components/Nav";
import Content from "./components/Content";
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mode:'read',
			subject: {title:'WEB2', sub:'Welcome react state~~!!'},
			welcome: {title:'welcome', desc:'Hello React!!'},
			contents: [
				{id:1, title:'HTML', desc:'HTML is good'},
				{id:2, title:'CSS', desc:'CSS is good'},
				{id:3, title:'Java', desc:'Java is good'}
			]
		}
	}

	render() {
		console.log('App render~~');
		var _title, _desc = null;
		if(this.state.mode==='welcome') {
			_title = this.state.welcome.title;
			_desc = this.state.welcome.desc;
		} else if(this.state.mode==='read') {
			_title = this.state.contents[0].title;
			_desc = this.state.contents[0].desc;
		}
		return (
			<div className="App">
				<Subject
					title={this.state.subject.title}
					sub={this.state.subject.sub}
					onChangePage = {function() {
						this.setState({
							mode:'welcome'
						})
					}.bind(this)}
				></Subject>
				<Nav data={this.state.contents}></Nav>
				<Content title={_title} desc={_desc}></Content>
			</div>
		);
	}
}

export default App;
