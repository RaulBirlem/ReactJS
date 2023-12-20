import classes from './FooterFilters.module.scss'; //não conflita com outros scss
/* classes/styles... */


function FooterFilters({isFirst}) {

    return (
    <>
        <div className={classes.filters}>
          <div>
            <p>Footer Filters</p>
          </div>
        </div>
    </>
    )
  }
  
  export default FooterFilters


  /* 
  
<p className={classes['main-text']}>Footer Filters</p>
<p className={classes.mainText}>Footer Filters</p>
Mais de uma classe scss:
<p className={` ${classes['main-text']} ${classes.first}`}>Footer Filters</p>


  
  */