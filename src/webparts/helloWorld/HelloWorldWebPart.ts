import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
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
import {Output} from "webpack";

export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {



  public render(): void {
    const element: React.ReactElement<IHelloWorldProps > = React.createElement(
      HelloWorld,
      {
        description: this.properties.description
      }
    );

    let web = new Web(this.context.pageContext.site.absoluteUrl);
     let currEmpLoginName = '';
      let curruser = web.currentUser.get().then(function (res) {
         currEmpLoginName = res.LoginName.substring(res.LoginName.lastIndexOf("|") + 1, res.LoginName.lastIndexOf("@"));
        console.log(currEmpLoginName);
      });



    web.lists.getByTitle("Employees").items.top(1).filter("Title eq 'gkrystev'").get().then((items: any[]) => {

      // see if we got something
      if (items.length > 0) {
      console.log(items[0].LirexEmplFullName);
        console.log(JSON.stringify(items));

      }
    }

    );

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
