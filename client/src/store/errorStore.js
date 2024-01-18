import { makeAutoObservable } from "mobx"

export default class ErrorStore {
  _errorMassage = ''

  constructor() {
    makeAutoObservable(this)
  }

  setErrorMess(mess) {
    this._errorMassage = mess
  }

  get errorMess() {
    return this._errorMassage
  }
}