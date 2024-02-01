import PublicationService from '../service/publicationService';
import { getPageCount } from '../utils/getPageCount';
import LoadingStore from './loadingStore';

const { makeAutoObservable } = require('mobx');

export default class PublicationStore {
	_publications = [];
	_totalPages = 0;
	_limit = 10;
	loading;

	constructor() {
		makeAutoObservable(this);
		this.loading = new LoadingStore();
	}

	setPublications(publication) {
		this._publications = publication;
	}

	setTotalPages(count) {
		this._totalPages = count;
	}

	get totalPages() {
		return this._totalPages;
	}

	get publications() {
		return this._publications;
	}

	get limit() {
		return this._limit;
	}

	async createPublication(publData) {
		this.loading.setIsLoading(true);
		try {
			const response = await PublicationService.createPublication(publData);
			return response;
		} catch ({ response: { data } }) {
			return { error: data.massage };
		} finally {
			this.loading.setIsLoading(false);
		}
	}

	async getPublications(tagId, page) {
		this.loading.setIsLoading(true);
		try {
			const response = await PublicationService.getPublications(
				tagId,
				this.limit,
				page
			);
			const totalCount = response.data.count;
			this.setTotalPages(getPageCount(totalCount, this.limit));
			return response;
		} catch ({ response: { data } }) {
			return { error: data.massage };
		} finally {
			this.loading.setIsLoading(false);
		}
	}
}
