

//INDIVIDUAL PROJECT EXERCISE 1 - This is going to be fairly unguided,
//but it's really similar to the Beer (or whatever you decided to) Review app.
/*
Create a function that creates a new "post" object and adds it to a "posts" array.
Each post object should have two properties:
1. "text" (the user's input, a string).
2. "id" (a number, dynamically generated).
Each id should be unique to that post (no two post objects should have the same id).
*/

var posts =[];
var index = 0;
var NewPost = function(pText, pId){ //put the post and his id in the object properties
    var post = {
        text: pText, //post.text = pText;
        id: pId      //post.id = pId;
    };
    posts.push(post);
    //console.log(posts); // -> good, prints all the posts in this array in object way

    // for (var j = 0; j < posts.length; j++)
    // {
    //     console.log(posts[j].id);  //good -> print just the ID 
    //     console.log(posts[j].text);//good -> print just the TEXT
    // }
}

$('button').click(function(){
    var in_tex = $('#post-name').val(); //tex get the text from the post input
    var in_id = index; //the post unique id
    index++;
    //console.log(in_tex + " " + in_id + " " + index); //-> good
    NewPost(in_tex,in_id);
    renderPosts();
});


//INDIVIDUAL PROJECT EXERCISE 2
/*
Now to render the array.
Create a second function that adds all the posts that in the "posts" array to the "posts" div.
In addition, add the "id" to the element with our data attribute.
Each post element should look something like this:

<p class="post" data-id="1">Hey man! I'm a post!</p>
*/

var renderPosts = function(){
    $('.posts').empty();//delete all ".post" div

    for (var i = 0; i < posts.length; i++)
    {
        //if (posts.length == 1) //make the "remove button" just in the first time
        //    addRemoveButton();
        $('.posts').append('<p class = remove post data-id = ' + posts[i].id + '>'  
         + '<button type="button" class="btn btn-warning remove-btn">REMOVE</button>' +
          posts[i].text + '</p>');
    }
};


//INDIVIDUAL PROJECT EXERCISE 3
/*
Change your code so that each post element also has a "remove" button.
Like this:

<p class="post" data-id="1"> <button type="button" class="remove">REMOVE</button> Hey man! I'm a post!</p>
When the button gets clicked, remove the post from the array and consequently the page.
 */

//------------------------------------------------------------------------
//event listener to ".remove-btn" button in "p" in "div .posts"
$('.posts').on('click','.remove-btn',function(){ 
    //console.log($(this));         // this => ".remove-btn" button
    //console.log($(this).parent());// parent => "p.remove"
    //console.log($(this).parent().data());  // => the data-id of the post ("p .remove")

    var delPost = $(this).parent().data().id //give me the data-id of the post
    qqconsole.log(delPost); //good,give me the number

    for (var i = 0; i < posts.length; i++)
    {
        if (posts[i].id == delPost)
        {
            posts.splice(i , 1); //remove the post "i" from the "posts" array
            break;
        }
    }
    $(this).parent().remove(); //remove the post from the page

});

//------------------------------------------------------------------------
//aother way is with "bindEvents" func

//$('button.remove-btn').click(function(){
// $('button').on('click','.remove-btn',function(){
//     var a;
//     console.log(this);
//     bindEvents();
// });

// var bindEvents = function () {
//     $('.remove').off(); //add this line so that each ".remove" post only has one click binding!
//     $('.remove').click(function () {
//       $(this).remove();
//     });
//   };

//   bindEvents(); //need this?

/*
INDIVIDUAL PROJECT EXTENSION 1 (OPTIONAL!)
Add a feature that allows each post to receive a comment.
Each post will require it's own "form", allowing a user to leave their username
and some kind of comment text.
List all the comments and associated users below the post.
*/

/*
INDIVIDUAL PROJECT EXTENSION 2 (OPTIONAL!)
Allow users to remove comments.
*/

/*
INDIVIDUAL PROJECT EXTENSION 3 (OPTIONAL!)
Link the posts,so when the user click on a post they are sent to a page
that shows themjust that post and all its comments.
*/