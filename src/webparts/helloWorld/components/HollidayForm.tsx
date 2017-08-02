import * as React from 'react';

export interface HelloProps {compiler: string;framework:string;}
export class Holliday extends React.Component<HelloProps, undefined>{
  render(){
    return(
      <div>
        <form>
          <div>
            <div>
              <label htmlFor="type">Тип на заявката </label>
              <select type="text" id="type" className="">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <div>
              <label htmlFor="typeHoliday">Тип на отпуск </label>
              <select type="text" id="typeHoliday" className="">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>            </div>
            <div>
              <label htmlFor="days">Дни </label>
              <input type="number" id="days" className=""/>
            </div>
            <div>
              <label htmlFor="desc">Описание </label>
              <textarea id="desc" className=""/>
            </div>
            <div>
              <label htmlFor="fromDate">Начална дата </label>
              <input type="text" id="fromDate" className=""/>
            </div>
            <div>
              <label htmlFor="toDate">Начална дата </label>
              <input type="text" id="toDate" className=""/>
            </div>
            <div>
              <label htmlFor="phone">Телефон </label>
              <input type="number" id="phone" className=""/>
            </div>
            <div>
              <label htmlFor="deputy">Заместник </label>
              <input type="text" id="deputy" className=""/>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
