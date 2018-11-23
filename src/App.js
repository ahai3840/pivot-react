import React from 'react';
import { drop } from 'lodash/fp';
import * as WebDataRocksReact from './webdatarocks.react';
import zh from './zh.json';

function getJSONData() {
  return [{
    "Category": {
      type: "level",
      hierarchy: "Food"
    },
    "Item": {
      type: "level",
      hierarchy: "Food",
      level: "Dish",
      parent: "Category"
    },
    "Serving Size": {
      type: "level",
      hierarchy: "Food",
      level: "Size",
      parent: "Dish"
    },
    "Calories": {
      type: "number"
    },
    "Calories from Fat": {
      type: "number"
    }
  },
  {
    "Category": "早餐",
    "Item": "Frittata",
    "Serving Size": "4.8 oz (136 g)",
    "Calories": 300,
    "Calories from Fat": 120
  },
  {
    "Category": "早餐",
    "Item": "Boiled eggs",
    "Serving Size": "4.8 oz (135 g)",
    "Calories": 250,
    "Calories from Fat": 70
  },
  {
    "Category": "早餐",
    "Item": "Sunny-side up eggs",
    "Serving Size": "3.9 oz (111 g)",
    "Calories": 370,
    "Calories from Fat": 200
  },
  {
    "Category": "早餐",
    "Item": "Chocolate Cake",
    "Serving Size": "5.7 oz (161 g)",
    "Calories": 450,
    "Calories from Fat": 250
  },
  {
    "Category": "早餐",
    "Item": "Sausages",
    "Serving Size": "5.7 oz (161 g)",
    "Calories": 400,
    "Calories from Fat": 210
  },

  {
    "Category": "早餐",
    "Item": "English 早餐 & Cookie",
    "Serving Size": "5.3 oz (150 g)",
    "Calories": 460,
    "Calories from Fat": 230
  },
  {
    "Category": "早餐",
    "Item": "Cheesecake",
    "Serving Size": "5.8 oz (164 g)",
    "Calories": 420,
    "Calories from Fat": 270
  },
  {
    "Category": "早餐",
    "Item": "Honey Oatmeal",
    "Serving Size": "9.6 oz (251 g)",
    "Calories": 290,
    "Calories from Fat": 35
  },

  {
    "Category": "Beef & Pork",
    "Item": "Steak",
    "Serving Size": "7.1 oz (202 g)",
    "Calories": 520,
    "Calories from Fat": 240
  },
  {
    "Category": "Chicken & Fish",
    "Item": "Grilled Chicken",
    "Serving Size": "7 oz (200 g)",
    "Calories": 350,
    "Calories from Fat": 80
  },
  {
    "Category": "Chicken & Fish",
    "Item": "Chicken Sandwich",
    "Serving Size": "8.8 oz (249 g)",
    "Calories": 670,
    "Calories from Fat": 300
  },
  {
    "Category": "Chicken & Fish",
    "Item": "Fish Sandwich",
    "Serving Size": "7.6 oz (217 g)",
    "Calories": 450,
    "Calories from Fat": 130
  }, {
    "Category": "Beverages",
    "Item": "Banana Smoothie",
    "Serving Size": "13.4 oz (381 g)",
    "Calories": 300,
    "Calories from Fat": 50
  }
  ];
}


function customizeToolbar(toolbar) {
  // get all tabs
  var tabs = toolbar.getTabs(); 
   console.log(tabs);
   console.log(drop(1)(tabs));
   return drop(1)(tabs);
}

export class App extends React.PureComponent {

  render() {

    return (

      <div>
        <WebDataRocksReact.Pivot
          toolbar={true}
          beforetoolbarcreated={customizeToolbar}
          report={{
            "dataSource": { "data": getJSONData() },
            dataSource: {
              data: getJSONData()
            },
            formats: [{
              name: "calories",
              maxDecimalPlaces: 2,
              maxSymbols: 20,
              textAlign: "right"
            }],
            slice: {
              rows: [{
                uniqueName: "Food"
              }],
              columns: [{
                uniqueName: "Measures"
              }],
              measures: [{
                uniqueName: "Calories",
                aggregation: "average",
                format: "calories"
              }]
            },
            localization: zh,
          }} />
      </div>
    );
  }
}

export default App;
