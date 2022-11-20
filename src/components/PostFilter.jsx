import React from "react";
import MySelect from './UI/selects/MySelect';
import MyInput from './UI/inputs/MyInput';

const PostFilter = ({filter, setFilter}) =>{
    return(
        <div>
            <MyInput
                placeholder='Search...'
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
            />

            <MySelect
                value={filter.sortt}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Сортировка"
                options={[
                    {value: 'title', name: "по названию"},
                    {value: 'body', name: "по описанию"}
                ]}
            />
        </div>
    )
}

export default PostFilter;