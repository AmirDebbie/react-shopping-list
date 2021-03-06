import React, { useState } from 'react';
import GroceriesList from './GroceriesList';
import BasketList from './BasketList';
import SearchBar from './SearchBar';
import './ShoppingArea.css';

function ShoppingArea() {
    const [itemList, setItemList] = useState([
        {
            name: 'Strawberry',
            amount: 0,
            isChecked: false,
            show: true
        },
        {
            name: 'Blueberry',
            amount: 0,
            isChecked: false,
            show: true
        },
        {
            name: 'Orange',
            amount: 0,
            isChecked: false,
            show: true
        },
        {
            name: 'Banana',
            amount: 0,
            isChecked: false,
            show: true
        },
        {
            name: 'Apple',
            amount: 0,
            isChecked: false,
            show: true
        },
        {
            name: 'Carrot',
            amount: 0,
            isChecked: false,
            show: true
        },
        {
            name: 'Celery',
            amount: 0,
            isChecked: false,
            show: true
        },
        {
            name: 'Mushroom',
            amount: 0,
            isChecked: false,
            show: true
        },
        {
            name: 'Green Pepper',
            amount: 0,
            isChecked: false,
            show: true
        },
        {
            name: 'Eggs',
            amount: 0,
            isChecked: false,
            show: true
        },
        {
            name: 'Cheese',
            amount: 0,
            isChecked: false,
            show: true
        },
        {
            name: 'Butter',
            amount: 0,
            isChecked: false,
            show: true
        },
        {
            name: 'Chicken',
            amount: 0,
            isChecked: false,
            show: true
        },
        {
            name: 'Pork',
            amount: 0,
            isChecked: false,
            show: true
        },
        {
            name: 'Fish',
            amount: 0,
            isChecked: false,
            show: true
        },
        {
            name: 'Rice',
            amount: 0,
            isChecked: false,
            show: true
        },
        {
            name: 'Pasta',
            amount: 0,
            isChecked: false,
            show: true
        },
        {
            name: 'Bread',
            amount: 0,
            isChecked: false,
            show: true
        },
    ]);

    // takes an item and adds 1 to his amount
    const addAmount = (itemName) => {
        let cloneItemList = itemList.slice();
        cloneItemList.forEach(item => {
            if (item.name === itemName) {
                item.amount++;
            }
        });
        setItemList(cloneItemList);
    }

    // Reset amount of all items in list (also deletes them from basket).
    const deleteAll = () => {
        let cloneItemList = itemList.slice();
        cloneItemList.forEach(item => {
            item.amount = 0;
            item.isChecked = false;
        })
        setItemList(cloneItemList);
    }

    // Takes an item and changes its 'isChecked' status. 
    const changeChecked = (itemName) => {
        let cloneItemList = itemList.slice();
        cloneItemList.forEach(item => {
            if (item.name === itemName) {
                item.isChecked = !item.isChecked;
            }
        });
        setItemList(cloneItemList);
    }

    // Takes a value and search's it in the itemList.
    const search = (searchValue) => {
        let cloneItemList = itemList.slice();
        cloneItemList.forEach(item => {
            if (item.name.toLowerCase().indexOf(searchValue) === -1) {
                item.show = false;
            } else {
                item.show = true;
            }
        });
        setItemList(cloneItemList);
    }
    return (
        <div style={{margin: 30, textAlign: 'center'}}>
            <SearchBar search={search} list={itemList} />
            <div className='container'>
                <GroceriesList addAmount={addAmount} list={itemList} />
                <BasketList changeChecked={changeChecked} deleteAll={deleteAll} list={itemList} />
            </div>
        </div>
    )
}

export default ShoppingArea;