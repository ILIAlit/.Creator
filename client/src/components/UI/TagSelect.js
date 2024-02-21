import {
	Box,
	Chip,
	FormControl,
	InputLabel,
	MenuItem,
	OutlinedInput,
	Select,
} from '@mui/material'

const TagSelect = ({ publTag, setPublTag }) => {
	const ITEM_HEIGHT = 48
	const ITEM_PADDING_TOP = 8
	const MenuProps = {
		PaperProps: {
			style: {
				maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
				width: 250,
			},
		},
	}

	const tags = [
		'дизайн',
		'моделирование',
		'арт',
		'лендинг',
		'сайт',
		'фотография',
		'спорт',
		'кулинария',
		'веб-дизайн',
		'разработка сайтов',
	]

	const handleChange = event => {
		const {
			target: { value },
		} = event
		setPublTag(typeof value === 'string' ? value.split(',') : value)
	}

	return (
		<FormControl fullWidth>
			<InputLabel id='multiple-tag-label'>Теги</InputLabel>
			<Select
				labelId='multiple-tag-label'
				id='multiple-tag'
				multiple
				value={publTag}
				onChange={handleChange}
				input={<OutlinedInput id='select-multiple-tag' label='Теги' />}
				renderValue={selected => (
					<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
						{selected.map(value => (
							<Chip key={value} label={value} />
						))}
					</Box>
				)}
				MenuProps={MenuProps}
			>
				{tags.map(tag => (
					<MenuItem key={tag} value={tag}>
						{tag}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	)
}

export default TagSelect
