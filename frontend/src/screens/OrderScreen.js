import { Avatar, Box, Card, CardActionArea, CardContent, CardMedia, CircularProgress, Grid, List, ListItem, Typography, } from '@material-ui/core'
import React from 'react'
import { useStyles } from '../styles'
import { useEffect } from 'react';
import { listCategories, listProducts } from '../actions';
import { useContext } from 'react';
import { Store } from '../Store';
import Logo from '../components/Logo';
import { Alert } from '@material-ui/lab';
import { useState } from 'react';

export default function OrderScreen() {
    const styles = useStyles();
    const [categoryName, setCategoryName] = useState('');
    const { state, dispatch } = useContext (Store);
    const { categories, loading, error } = state.categoryList;
    const {
      products, 
      loading: loadingProducts,
      error: errorProducts,
    } = state.productList;
    useEffect(() =>{
      if (!categories) {
        listCategories(dispatch);
      }
      else {
        listProducts(dispatch,categoryName);
      }
        listCategories(dispatch);
    }, [ dispatch, categories, categoryName]);


    const categoryClickHandler = (name) => {
      setCategoryName(name);
      listProducts(dispatch, categoryName);
    }

  return  (
  <Box className = {styles.root}>
    <Box className= {styles.main}>
    <Grid container>
          <Grid item md={2}>
            <List>
              {loading ? (
                <CircularProgress />
              ) : error ? (
                <Alert severity="error">{error}</Alert>
              ) : (
                <>
                  <ListItem button>
                    <Logo></Logo>
                  </ListItem>
                  {categories.map((category) => (
                    <ListItem button key={category.name}
                    onClick = {() => categoryClickHandler(category.name)}
                    >
                      <Avatar alt={category.name} src={category.image} />
                    </ListItem>
                  ))}
                </>
              )}
            </List>
            </Grid>
                <Grid item md = {10}>
                  <Typography 
                    gutterBottom
                    className = {styles.title}
                    variant = "h2"
                    component= "h2"
                    >
                      {categoryName || 'Main Menu'}
                    </Typography>
                    <Grid container spacing = {1}>
                      {loadingProducts ? (
                        <CircularProgress />
                      ) : errorProducts ? (
                        <Alert severity = "error">{errorProducts}</Alert>
                      ) : (
                        products.map((product) => (<Grid item md = {6}>
                          <Card
                            className={styles.card}
                            >
                              <CardActionArea>
                                <CardMedia 
                                  component="img"
                                  alt = {product.name}
                                  image = {product.image}
                                  className={styles.media}
                                />
                              </CardActionArea>
                              <CardContent>
                                <Typography
                                gutterBottom
                                vaiant = "body2"
                                color = "textPrimary"
                                component= "p"
                                >
                                  {product.name}
                                </Typography>
                                <Box className={styles.cardFooter}>
                                  <Typography
                                  variant = "body2"
                                  color = "textSecondary"
                                  component= "p"
                                  >
                                    ${product.price}
                                  </Typography>
                                </Box>
                              </CardContent>
                            </Card>
                            </Grid>
                        )))}
                    </Grid>
            </Grid>
        </Grid>
    </Box>
  </Box>
  )
  
}

