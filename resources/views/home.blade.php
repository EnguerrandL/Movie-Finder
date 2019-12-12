<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

        <title>Movie Finder</title>

  



    </head>
    <body>




            <div id="app">
            <movie-upcoming></movie-upcoming>
      </div>


                    <div class="jumbotron ml-5 mr-5 p-5 p-md-5 text-white rounded bg-dark">
                      <div class="col-md-6 px-0">
                        <h1 class="display-4 font-italic">Movies Finder</h1>
                      </div>
                      
                    </div>




{{-- Movie finder tools --}}


  


                  <div class="album py-5 bg-light text-center" id="movieFinder">
                    <input  type="text" v-model="searchKey">
                    <button v-on:click="searchMovies">Search for Movie</button>
                  <div class="container">
                  <div class="row" v-for="finder in moviesList.results" >
                  <movie-finder v-bind:movie="finder"></movie-finder>  
                    </div>
                      </div>
                          </div>





                          {{-- Movie discover section --}}


                    <div  class="album py-5 bg-light" id="discoverMovies">
                      <button v-on:click="dicoverMovies">Discover movie</button>
                            <div class="container">
                      <div class="row"  v-for="discover in moviesDiscover.results">  
                        <movie-discover v-bind:movie="discover"></movie-discover>  
                              </div>
                            </div>
                          </div>









<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

<script src="/js/app.js">

</script>

       
    </body>
</html>
 