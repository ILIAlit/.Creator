import { Grid } from '@mui/material'
import React from 'react'
import TagsBar from '../../components/TagsBar/TagsBar'
import MySelect from '../../components/UI/MySelect'

export default function PublicationSort({ sort, setSort }) {
	return (
		<Grid container sx={{ display: 'flex', alignItems: 'center' }} spacing={1}>
			<Grid item sm={4} xs={12}>
				<MySelect
					options={[{ value: 'new', text: 'Новые' }]}
					value={sort.orderBy}
					onChange={event => setSort({ ...sort, orderBy: event.target.value })}
					label='Выбор'
				/>
			</Grid>
			<Grid item sm={8} xs={12}>
				<TagsBar
					value={sort.tagId}
					onChange={(event, newValue) => setSort({ ...sort, tagId: newValue })}
				/>
			</Grid>
		</Grid>
	)
}
