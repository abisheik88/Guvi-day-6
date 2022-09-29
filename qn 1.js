/*The class Movie is stated below. An instance of class Movie represents a film. This class has the following 
three properties:

title, which is a String representing the title of the movie
studio, which is a String representing the studio that made the movie
rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

a) Write a constructor for the class Movie, which takes a String representing the title of the movie, 
a String representing the studio, and a String representing the rating as its arguments, and sets the
 respective class properties to these values.*/
 class Movie{
  constructor(Title,Studio,Rating){
  this.Title=Title;
  this.Studio=Studio;
  this.Rating=Rating;
  } 
}
var c1 = new Movie("Vikram","raajkamal studio","U/A")

/*b) The constructor for the class Movie will set the class property rating to "PG" as default when
no rating is provided.*/

class Movie{
  constructor(Title,Studio,Rating="PG"){
  this.Title=Title;
  this.Studio=Studio;
  this.Rating=Rating;
  } 
}
var c1 = new Movie("Vikram","raajkamal studio")


/*d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, 
the studio “Eon Productions”, and the rating “PG­13”*/

class Movie{
  constructor(Title,Studio,Rating){
  this.Title=Title;
  this.Studio=Studio;
  this.Rating=Rating;
  } 
}
var c1=new Movie(“Casino Royale”,“Eon Productions”,“PG13”);
