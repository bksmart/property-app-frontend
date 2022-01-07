import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProperty } from '../property/IProperty.Interface';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) { }

  getAllProperties(sellRent:number): Observable<IProperty[]>
  {

      // return this.http.get('data/properties.json').pipe(
      //   map(data=>{
      //     const propertiesJson=JSON.stringify(data);
      //     const propertiesArray: Array<IProperty> = JSON.parse(propertiesJson);
      //     return propertiesArray;
      //   })
      // );

 return this.http.get('data/properties.json').pipe(
        map(data=>{
          const propertiesArray: Array<IProperty>=[];
          for(const id in data)
          {
            // Add only the data in the array matching the sell or rent value during the call from sell
            // or buy page
            if(data.hasOwnProperty(id) && data[id].SellRent==sellRent)
            {
              propertiesArray.push(data[id]);
            }
          }
          return propertiesArray;

        }
      ))
    }
}
