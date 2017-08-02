import * as React from 'react';

export interface HelloProps {compiler: string;framework:string;}
export class CurentUser extends React.Component<HelloProps, undefined>{
  render(){
    return(
      <div className="">
          <table>
            <thead>
            <tr>
              <th>Име</th>
              <th>Дни, текуща</th>
              <th>Длъжност</th>
              <th>Направление</th>
              <th>Отдел</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Георги Кръстев</td>
              <td>18</td>
              <td>Програмист, SharePoint</td>
              <td>Професионални у-ги</td>
              <td>Програмно осигуряване</td>
            </tr>
            </tbody>
          </table>
      </div>
    );
  }
}
