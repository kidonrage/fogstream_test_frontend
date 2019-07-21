import React from 'react';
import {ThemeConsumer} from 'styled-components';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function ThemeSwitch() {
	return(<ThemeConsumer>{theme => (
		<FormControlLabel
			control={
				<Switch 
					checked={theme.mode === 'dark'}
					onChange={(e) => theme.setTheme(theme.mode === 'dark' ? {mode: 'light'} : {mode: 'dark'})}
					value="nightMode"
				/>
			}
			label="Night mode"
		/>
	)}</ThemeConsumer>)
}