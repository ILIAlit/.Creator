import { makeAutoObservable } from 'mobx'
import ProfileService from '../service/profileService'


export default class ProfileStore {
  _profile = {}
  _isProfile = false

  constructor() {
    makeAutoObservable(this)
  }

  setProfile(profile) {
    this._profile = profile
  }

  setIsProfile(bool) {
    this._isProfile = bool
  }

  get profile() {
    return this._profile
  }

  get isProfile() {
    return this._isProfile
  }

  async createProfile(profileData) {
    try {
      const response = await ProfileService.createProfile(profileData)
      if(response) {
        const {data: {userProfile}} = response
        this.setProfile(userProfile)
      }
      return response
    } catch({response: {data}}) {
      return {error: data.message}
    }
  }

  async getProfile() {
    try {
      const response = await ProfileService.getProfile()
      if(response) {
        const {data: {userProfile}} = response
        this.setProfile(userProfile)
        this.setIsProfile(true)
      }
      return response
    } catch({response: {data}}) {
      return {error: data.message}
    }
  }
}