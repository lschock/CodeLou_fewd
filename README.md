# CodeLou_FrontEnd

## Description
```
My project is an expression of my favorite hobby...painting furniture and making it feel NEW.  This project is a personal website displaying furniture I have painted as well as furniture still on my 'to-paint' list.  To view, open the index.html file.  
- Home Page:  (index.html) includes an Images link in navbar. It includes the following links that are under construction:  About, Contact, and Sign up for our Newsletter!.  

Objectives: 
 - responsive
 - 3 custom CSS class or ID selectors (see ## Customer CSS Classes below)
 - Commenting Sections
 - Uploaded project to GitHub repository
 - README file (you're reading it!!)

```


## Custom CSS Classes
```
The class(es) I created are:

1. .store_name
..changes the font-family to tangerine, made the font bold, and changed font-size to 6em

2. .linkedIn
..transforms the text to white when the linkedIn link is hovered over

3. .footer_name
..Changing the size of the company name in footer to 3em

4. .inspired
..Add 2em padding to top and 1em padding to bottom

5. #images
..added ID that I could link to from the navbar

6. .offset:before
..have Images Navbar link to Image Gallery #images ID
```


## Custom JavaScript Functions
```
The javascript functions I created are:

  //Add dialog box to links under construction on page
  $(".dialog").click(function(event){
    $("#dialogbox").dialog


  //Reposition at top of Home page on refresh//
    $(window).on('beforeunload', function () {
        $(window).scrollTop(0);
    });


  //collapse navbar menu on click in smaller screens//
  $(".navbar-nav li").click(function (event) {
    var toggle = $(".navbar-toggler").is(":visible");
    if (toggle) {
      $(".navbar-collapse").collapse('hide');
    }
  });

```
