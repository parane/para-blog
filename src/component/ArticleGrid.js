import { Grid } from "@material-ui/core";
import ArticleCard from './ArticleCard.js';


function ArticleGrid() {

  let var1 = [{id:1,name:'hello'},{id:2, name:'world'}];

    return (<Grid container spacing={1}>
     {var1.map((row, id) => <ArticleCard/>)}
      </Grid>);

}

export default ArticleGrid;
