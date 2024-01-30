import { makeAutoObservable } from 'mobx';

export default class LoadingStore {
	_isLoading = false;

	constructor() {
		makeAutoObservable(this);
	}

	setIsLoading(bool) {
		this._isLoading = bool;
	}

	get isLoading() {
		return this._isLoading;
	}
}
