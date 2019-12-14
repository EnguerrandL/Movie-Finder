@extends ('layouts.app')

@section('content')





<main>





            <div id="app">    
            
        
<nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
    <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="/">Movie Finder</a>
 

    <input   class=" form-control form-control-dark w-100"  v-model="searchKey" type="text" placeholder="Search a movie" aria-label="Search">
    <ul class="navbar-nav px-3">
      <li   class=" nav-item text-nowrap">
      <button  v-on:click="searchMovies" class="container btn-success">Search</button>
      </li>
    </ul>

  </nav>


                                              

              <side-bar></side-bar>          
              <div class="row"  v-for="finder in moviesFinded.results" >
                 <movie-finder v-bind:movie="finder"></movie-finder>  
                     </div>
                        
                   <movie-trending ></movie-trending>
                   <movie-idea ></movie-idea>  

                   </div>
                   
           
        

</main>
@endsection




