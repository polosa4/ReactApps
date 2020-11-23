import React from 'react';
import {useQuery, gql} from '@apollo/client';

import { Icon, Label, Menu, Table } from 'semantic-ui-react';


const ALL_STOCKS = gql`{
  stocks {
    ticker
    company
    price
    country
    marketCap
    volume
    change
  }
}`

function App() {
  const { data } = useQuery(ALL_STOCKS);
  console.log(data)

  return (
    <> 
    Hello
    {}
    
     
    </>
  );
}

export default App;
