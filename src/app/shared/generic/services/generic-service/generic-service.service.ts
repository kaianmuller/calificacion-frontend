import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Utils } from 'src/app/shared/Utils';

export class GenericServiceService<E> {

    constructor(
        private serviceName: string,
        private readonly _http: HttpClient
      ) {}

    
      async getAll(params?:Params) {
        return await this._http
          .get<Array<E>>(Utils.ip() + '/' + this.serviceName,{params: params})
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
