const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  // Add query to get all genres
  const id = req.params.id;
  console.log(id);
  
  const query = `
  SELECT 
  movies.id AS moviesId,
  movies.title,
  movies.poster,
  movies.description,
  array_agg(genres.name)
  FROM movies
  JOIN movies_genres 
    ON movies.id = movies_genres.movie_id
  JOIN genres
    ON genres.id = movies_genres.genre_id
  WHERE movies.id = $1
  GROUP BY 
  moviesId,
  movies.title,
  movies.poster,
  movies.description
  ;
  `;

  const queryparams = [
    id
  ]
  

  pool.query(query, queryparams)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all details', err);
      res.sendStatus(500)
    })    
});

module.exports = router;

