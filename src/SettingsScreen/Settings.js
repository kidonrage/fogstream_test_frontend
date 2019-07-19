import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

import ThemeSwitch from '../ThemeSwitch';

export default function Settings() {
	return (
		<div>
      <ThemeSwitch />
			
			<Typography id="discrete-slider" gutterBottom>
        Posts count
      </Typography>
      <Slider
        defaultValue={5}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={5}
        min={5}
        max={20}
      />
			<Typography id="discrete-slider" gutterBottom>
        Font Size
      </Typography>
      <Slider
        defaultValue={18}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        min={10}
        max={24}
      />
		</div>
	)
}