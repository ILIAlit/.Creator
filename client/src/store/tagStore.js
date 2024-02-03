import { makeAutoObservable } from 'mobx';
import LoadingStore from './loadingStore';
import TagService from '../service/tagService';

export default class TagStore {
	_tags = [];
	_limit = 10;
	loading;

	constructor() {
		makeAutoObservable(this);
		this.loading = new LoadingStore();
	}

	setTags(tags) {
		this._tags = tags;
	}

	get tags() {
		return this._tags;
	}

	get limit() {
		return this._limit;
	}

	async getPupularTag() {
		this.loading.setIsLoading(true);
		try {
			const response = await TagService.getPopularTag(this.limit);
			const { data } = response;
			this.setTags(data);
			return data;
		} catch ({ response: { data } }) {
			return { error: data.massage };
		} finally {
			this.loading.setIsLoading(false);
		}
	}
}
