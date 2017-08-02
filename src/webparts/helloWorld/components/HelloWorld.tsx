import * as React from 'react';
import styles from './HelloWorld.module.scss';
import { IHelloWorldProps } from './IHelloWorldProps';
import {Header} from "./Header"
import {Holliday} from "./HollidayForm";
import {CurentUser} from "./CurentUser";

export default class HelloWorld extends React.Component<IHelloWorldProps, void> {

  public render(): React.ReactElement<IHelloWorldProps> {

    return (
      <div className={styles.helloWorld}>
        <div className={styles.container}>
          <div className={`ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}`}>
            <div className="ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1">
              <Header compiler="TypeScript" framework="React"/>
              <CurentUser compiler="TypeScript" framework="React"/>
              <Holliday compiler="TypeScript" framework="React"/>
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
