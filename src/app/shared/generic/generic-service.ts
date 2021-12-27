import { HttpClient } from "@angular/common/http";
import { Utils } from "../Utils";




export class GenericService<E>{
    constructor(
        private serviceName: string,
        private readonly _http: HttpClient
      ) {}
    
      async getCount() {
        return await this._http
          .get<number>(Utils.ip() + '/' + this.serviceName + '/count', {})
          .toPromise();
      }
    
      async getAll() {
        return await this._http
          .get<Array<E>>(Utils.ip() + '/' + this.serviceName)
          .toPromise();
      }
    
      async getOne(id: number) {
        return await this._http
          .get<E>(Utils.ip() + '/' + this.serviceName + '/' + id)
          .toPromise();
      }
    
      async createOne(element: E) {
        return await this._http
          .post<E>(Utils.ip() + '/' + this.serviceName, element)
          .toPromise();
      }
    
      async editOne(element: E, id: number) {
        return await this._http
          .put<E>(Utils.ip() + '/' + this.serviceName + '/' + id, element)
          .toPromise();
      }
    
      async deleteOne(id: number) {
        return await this._http
          .delete<E>(Utils.ip() + '/' + this.serviceName + '/' + id)
          .toPromise();
      }
}