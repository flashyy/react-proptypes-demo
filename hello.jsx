import React,{Component,PropTypes} from 'react';

class Hello extends Component {
	render() {
		return <div>
		  <h1>Hello {this.props.name}</h1>
		  <div>The number is {this.props.number}</div>
		</div>;
	}
}

Hello.propTypes = {
	name: PropTypes.string.isRequired,
	number: PropTypes.number.isRequired
}

export default Hello;