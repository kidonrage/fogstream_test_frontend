import React from 'react';
import {ThemeConsumer} from 'styled-components';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
export default function FontSizeSlider() {
	return(<ThemeConsumer>{theme => (
		<div>
		<Typography id="discrete-slider" gutterBottom>
			Font Size
		</Typography>
		<Slider
			defaultValue={theme.fontSize}
			valueLabelDisplay="auto"
			step={1}
			min={12}
			max={22}
			// Использую onChangeCommitted, потому что onChange слишком часто вызывается, даже если значение слайдера не меняется
			onChangeCommitted={(e, newValue) => theme.setTheme({...theme, fontSize: newValue})}
		/>
		</div>
	)}</ThemeConsumer>)
}