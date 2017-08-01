import * as React from 'react';
import styles from './HelloWorld.module.scss';
import { IHelloWorldProps } from './IHelloWorldProps';
import HelloWorldWebPart from "../HelloWorldWebPart";

export default class HelloWorld extends React.Component<IHelloWorldProps, void> {


  public render(): React.ReactElement<IHelloWorldProps> {

    return (
      <div className={styles.helloWorld}>
        <div className={styles.container}>
          <div className={`ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}`}>
            <div className="ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1">
              <span className="ms-font-xl ms-fontColor-white">Изберете акаунт: </span>
             <input type="text" onKeyUp={this.searchName.bind(this)}/>
            </div>
          </div>
        </div>
      </div>
    );


  }


  searchName(){
    console.log("Search ", this);

  }

}
