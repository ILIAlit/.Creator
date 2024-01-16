import { makeAutoObservable } from "mobx"


export default class AlertStore {
  _isOpen = false

  constructor() {
    makeAutoObservable(this)
  }

  setIsOpen(bool) {
    this._isOpen = bool
  }

  get isOpen() {
    return this._isOpen
  }
}