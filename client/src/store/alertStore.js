import { makeAutoObservable } from 'mobx';

export default class AlertStore {
	_isOpen = false;
	_type = 'info';
	_message = '';
	_delay = 3000;

	constructor() {
		makeAutoObservable(this);
	}

	setIsOpen(bool) {
		this._isOpen = bool;
	}

	setMessage(message) {
		this._message = message;
	}

	setType(type) {
		this._type = type;
	}

	get isOpen() {
		return this._isOpen;
	}

	get message() {
		return this._message;
	}

	get type() {
		return this._type;
	}

	get delay() {
		return this._delay;
	}

	alertHide() {
		this.setIsOpen(false);
	}

	alertOpen(message, type) {
		this.setIsOpen(true);
		this.setMessage(message);
		this.setType(type);
		setTimeout(() => this.alertHide(), this.delay);
	}
}
