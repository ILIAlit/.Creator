import React from 'react';
import MySelect from '../../components/UI/MySelect';
import TagsBar from '../../components/TagsBar/TagsBar';

export default function PublicationSort({ sort, setSort }) {
	return (
		<>
			<MySelect
				options={[
					{ value: 'popular', text: 'Популярные' },
					{ value: 'new', text: 'Новые' },
				]}
				value={sort.orderBy}
				onChange={(event) =>
					setSort({ ...sort, orderBy: event.target.value })
				}
				label="Выбор"
			/>
			<TagsBar
				value={sort.tagId}
				onChange={(event, newValue) =>
					setSort({ ...sort, tagId: newValue })
				}
			/>
		</>
	);
}
