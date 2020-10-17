import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedServiceService {
  blogTitle = '- My fancy blog';
  baseURL = 'http://localhost:4200/';
  constructor() {}
}
