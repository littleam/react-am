import React, { Component } from 'react';
import List from './list'
import Search from './search'
class Category extends Component {

    render() {

        return(
            <div>
                <Search/>
               <List/>
            </div>
        )

    }

}
export default Category;

