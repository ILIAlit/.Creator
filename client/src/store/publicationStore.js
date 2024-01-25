import PublicationService from '../service/publicationService'
import LoadingStore from './loadingStore'

const { makeAutoObservable } = require('mobx')


export default class PublicationStore {
  _publications = {}
  loading
  

  constructor() {
    makeAutoObservable(this)
    this.loading = new LoadingStore()
  }

  async createPublication(publData) {
    this.loading.setIsLoading(true)
    try {
      const response = await PublicationService.createPublication(publData)
      console.log("publ", response)
      return response
    } catch({response: {data}}) {
      return {error: data.massage}
    } finally {
      this.loading.setIsLoading(false)
    }
  }
}