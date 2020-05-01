# What is this

this is a lorem generator for designers . this library can generate for two languages : Persian and English :D

# What is new ?

1.3.0(preview) : Added Lorem Generator , To get the desired text, it is very difficult to go to the code and change it and see the result. With the Generator, you can increase or decrease the text (real-time), and see the result, and take the options (units value).

1.2.0 : New Feature , generate lorem with html attrubites (documents added)

1.1.6 : added .min file 

# Installation

` npm i EzLorem `

# How to use

first we need to add lorem.js file to our document

```
<scritp src="lorem.js"></script>
<script>
    ElSelect('p').AddLorem({
        options ...
    });
</script>
```
For select an element for add lorem we have to use **ElSelect()** method to select object.

Many ways to use of  **ElSelect()** : 

```
var el = document.querySelectorAll('p.text'); //or querySelector or get...

ElSelect(el).AddLorem({
	options ...
});

ElSelect('p').AddLorem({
	options ...
});
```
*After select the element you can add your lorem text with **AddLorem()** and the options*

Another Functions :
```
ElSelect('h2').EnLorem(); //this will add a full lorem ipsum 'english language'

ElSelect('.text').FaLorem(); //this will add a full lorem ipsum 'Persian language'
```

New Feature in 1.2.0 : 

We can Generate lorem with Attributes . first we have to set **ezlorem** clas for element then set the attributes.
```
<p class="ezlorem" data-ezlang="fa" data-EzAsHtml="true" data-EzHtmlTag="" data-EzHtmlClasses=" " data-EzAddText=" " data-EzLetters=" " data-EzWords=" " data-EzParagraph=" "></p>
```

New Feature in 1.3.0 : 

Generautor in new feature in 1.3 that is real-time genrator for make easy to generate as desired . just with add **ezlorem-Regulators** class to our target element.
```
<link rel="stylesheet" href="../css/ezlorem-Regulators.css"> // first add css file
<p class="ezlorem ezlorem-Regulators" data-ezlang="en" data-ezwords="25" data-EzAsHtml="true" data-EzHtmlTag="a"></p>
```
One of the remarkable points is that if the text is made with a tag, it will be placed in the same tag.

After accessing the desired text, you can put unit value in the options :D.


****The Attributes And Options Are Optional But One Of Generate Units Should Be Fill (letters,words,paragraph)****

# Options

__there is many options to use :__


* _lang_       : 'en'    - string  - | 'en' , 'fa'  |   the default of lang is fa
* _letters_    : 50      - number  - |     any      |   this is for generate lorem by letter
* _words_      : 10      - number  - |     any      |   this is for generate lorem by letter
* _paragraph_  : 1       - number  - |     any      |   and with this options you can generate by paragraph
* _asHTML_     : true    - boolean - | true , false |   for generate as a html tag
* _HtmlTag_    : 'span'  - string  - | Html TagName |   generate as this html Tag and default is **p** tag
* _HtmlClasses_: 'class' - string  - |  Html class  |   add some html Class to the tag
* _addedText_  : 'hello' - string  - |     any      |   if you want text start with something else use this one
