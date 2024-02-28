import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

export default function MySelect({ value, onChange, label, options }) {
	return (
		<FormControl fullWidth sx={{ minWidth: 200 }}>
			<InputLabel id='select-label'>{label}</InputLabel>
			<Select
				labelId='select-label'
				label={label}
				value={value || ''}
				onChange={onChange}
			>
				<MenuItem value=''>
					<em>По умолчанию</em>
				</MenuItem>
				{options.map(item => (
					<MenuItem key={item.value} value={item.value}>
						{item.text}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	)
}
