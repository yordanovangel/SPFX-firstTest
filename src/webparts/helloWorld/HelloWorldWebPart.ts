import * as React from 'react';
import * as ReactDom from 'react-dom';
import {EnvironmentType, Version} from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'helloWorldStrings';
import HelloWorld from './components/HelloWorld';
import { IHelloWorldProps } from './components/IHelloWorldProps';
import { IHelloWorldWebPartProps } from './IHelloWorldWebPartProps';
import {Web} from "sp-pnp-js";

import Select from 'react-select';
import 'react-select/dist/react-select.css';
import Environment from "@microsoft/sp-core-library/lib/Environment";

export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {



  public render(): void {
    const element: React.ReactElement<IHelloWorldProps > = React.createElement(
      HelloWorld,
      {
        description: this.properties.description
      }
    );
// намира абсолютния път и след това прави заявка към списъка с служители , също намира и текущия служител и връща информация за него
    if(Environment.type === EnvironmentType.Local){
    let web = new Web(this.context.pageContext.site.absoluteUrl);
     let currEmpLoginName = '';
      let curruser = web.currentUser.get().then(function (res) {
         currEmpLoginName = res.LoginName.substring(res.LoginName.lastIndexOf("|") + 1, res.LoginName.lastIndexOf("@"));
        console.log(currEmpLoginName);
      });
    web.lists.getByTitle("Employees").items.top(1).filter("Title eq 'gkrystev'").get().then((items: any[]) => {
      if (items.length > 0) {
      console.log(items[0].LirexEmplFullName);
        console.log(JSON.stringify(items));
      }
    }
    );
    }
    //край на заявката

    ReactDom.render(element, this.domElement);



  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }





protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
