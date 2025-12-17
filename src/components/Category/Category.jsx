import React from 'react'
import {categoryInfo} from './categoryFullInfos'
import CategoryCard from './CategoryCard'
import classes from './Category.module.css'

function Category() {
  return (
    <section className={classes.category__container}>
        {
            categoryInfo.map((info) => {
               return <CategoryCard key={info.imgLink} data={info} />
            })
        }
    </section>
  )
}

export default Category