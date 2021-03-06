import React from 'react';
import {connect} from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import ThemeSwitch from './ThemeSwitch';
import FontSizeSlider from './FontSizeSlider';
import './Settings.css'

const Settings = (props) => {

	let currentNewsOnPage = 0;

	const newsOnPageSliderChanged = (e, newValue) => {
		currentNewsOnPage = newValue;
	}

	const saveNewsOnPage = (e) => {
		props.updateNewsOnPage(currentNewsOnPage);
	}

	return (
		<div className="settings-form">
      <ThemeSwitch />
			<FontSizeSlider />
			<Divider variant="fullWidth" />
			<Typography id="discrete-slider" gutterBottom>
        Posts count
      </Typography>
      <Slider
        defaultValue={props.newsOnPage}
        valueLabelDisplay="auto"
        step={1}
        min={5}
        max={20}
				onChange={newsOnPageSliderChanged}
      />
			<Button variant="contained" onClick={saveNewsOnPage} size="small">Сохранить</Button>
		</div>
	)
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateNewsOnPage: (value) => { dispatch({type: "UPDATE_NEWSONPAGE", value: value }) }
	}
}

const mapStatesToProps = (state) => {
	return {
		newsOnPage: state.newsOnPage
	}
}

export default connect(mapStatesToProps, mapDispatchToProps)(Settings);