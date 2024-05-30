import { useState } from "react";

function Title(prop) {
    
    return (
      <div class={prop.class}>
        <h1>{prop.title}</h1>
        <p>{prop.description}</p>
        {DisplayDataList(prop.index)}
      </div>
    );
  }
  
function DisplayDataList(dataIndex) {
    const [dataItem, setData] = useState({
        value: [
            {
                index: 0,
                dataLabel: [
                    {
                        label: "<b>Total:</b> Approximately 10 minutes"
                    },
                    {
                        label: "<b>Preparation:</b> 5 minutes"
                    },
                    {
                        label: "<b>Cooking:</b> 5 minutes"
                    }
                ]
            },
            {
                index: 1,
                dataLabel: [
                    {
                        label: "2-3 large eggs"
                    },
                    {
                        label: "Salt, to taste"
                    },
                    {
                        label: "Pepper, to taste"
                    },
                    {
                        label: "1 tablespoon of butter or oil"
                    },
                    {
                        label: "Optional fillings: cheese, diced vegetables, cooked meats, herbs"
                    }
                ]
            },
            {
                index: 2,
                dataLabel: [
                    {
                        label: "<b>Beat the eggs:</b> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture. "
                    },
                    {
                        label: "<b>Heat the pan:</b> Place a non-stick frying pan over medium heat and add butter or oil. "
                    },
                    {
                        label: "<b>Cook the omelette:</b> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface."
                    },
                    {
                        label: "<b>Add fillings (optional):</b> When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette. "
                    },
                    {
                        label: "<b>Fold and serve:</b> As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate."
                    },
                    {
                        label: "<b>Enjoy:</b> Serve hot, with additional salt and pepper if needed."
                    }
                ]
            },
            {
                index: 3,
                dataLabel: [
                    {
                        label: "Calories;277kcal"
                    },
                    {
                        label: "Carbs;0g"
                    },
                    {
                        label: "Protein;20g"
                    },
                    {
                        label: "Fat;22g"
                    }
                ]
            }
        ]
    });

    // displaying dataList 
    
    return(
        dataItem.value.map((item,index) => { 
            if(dataIndex === index)
            {
                console.log("dataindex=" + dataIndex)
                // unordered list
                if (dataIndex === 0 || dataIndex === 1) {
                    return (
                        <ul>
                            {
                                item.dataLabel.map((dataLabel) => {
                                    return(
                                        <li dangerouslySetInnerHTML={{__html: dataLabel.label}} />
                                    )
                                })
                            }
                        </ul>
                    )
                }
                // ordered list
                else if(dataIndex === 2) {
                    return(
                        <ol>
                            {
                                item.dataLabel.map((dataLabel) => {
                                    return (
                                        <li dangerouslySetInnerHTML={{__html: dataLabel.label}} />
                                    )
                                })
                            }
                        </ol>
                    )
                }
                // table
                else {
                    return(
                        <table cellPadding="10">
                            <tbody>
                            {
                                item.dataLabel.map((dataLabel) => {
                                    return (
                                        <tr>
                                            <td>{dataLabel.label.split(';')[0]}</td>
                                            <td>{dataLabel.label.split(';')[1]}</td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                    )
                }
            }
            
       })
    )
    
  }
  export default Title;
  