import React ,{Component} from 'react';
import Select from 'react-select';
import ReactDOM from 'react-dom';

const COUNTRIES = require('../data/countries.js');

var CountriesField = React.createClass({
 

    displayName: 'CountriesField',
    propTypes:{
        label: React.PropTypes.string,
    },

    getDefaultProps(){
        return {
            label:'Countries',
        };
    },

    getInitialState() {
        return{
            selectCountry: 'russia',
            clearable: true,
        };
    },

    changeCountry (newCountry){
        console.log('Country changed to' + newCountry);
        this.setState({
            selectValue: newCountry
        });
    },

    toggleCheckbox (e) {
		let newState = {};
		newState[e.target.name] = e.target.checked;
		this.setState(newState);
	},

    render () {
		var options = COUNTRIES;
		return (
			<div className="section">
				<h3 className="section-heading">{this.props.label}</h3>
				<Select ref="countrySelect" autofocus options={options} simpleValue clearable={this.state.clearable} name="selected-state"  value={this.state.selectValue} onChange={this.changeCountry} />

				<div style={{ marginTop: 14 }}>
					<button type="button" onClick={this.focusStateSelect}>Focus Select</button>
					<label className="checkbox" style={{ marginLeft: 10 }}>
						<input type="checkbox" className="checkbox-control" name="clearable" checked={this.state.clearable} onChange={this.toggleCheckbox}/>
						<span className="checkbox-label">Clearable</span>
					</label>
				</div>
			</div>	
		);
	}

});


module.exports = CountriesField;





