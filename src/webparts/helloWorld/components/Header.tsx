import * as React from 'react';

export interface HelloProps {compiler: string;framework:string;}
export class Header extends React.Component<HelloProps, undefined>{

  public getDate(){

  }
  render(){
    return(
      <div className="">
        <h1 className="">Форма за добавяне на отпуск</h1>
      </div>
    );
  }
}
