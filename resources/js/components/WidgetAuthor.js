import React from 'react'
import '../../css/shop.css'
export default function WidgetCategory({list}) {
    const renderListItem = (list = []) => {
        return list.map((item) => {
            return(
                <li className='style-list'>{item.author_name}</li>
            )
        })
    }
    return(
        <>
            {renderListItem(list)}
        </>
    );
  
}
