
[![](https://data.jsdelivr.com/v1/package/npm/ezlorem/badge)](https://www.jsdelivr.com/package/npm/ezlorem) 
[![](https://img.shields.io/npm/dm/ezlorem?style=flat-square)](https://www.npmjs.com/package/ezlorem)


# What is this

this is a lorem generator for designers . this library can generate for two languages : Persian and English :D

# What is new ?

1.5.1 : Added more bug to fix later XD

1.5.0 : some changes in code

1.4.4 : added CDN

1.4.2 : highlight text when you are moving it's Generator.

# Installation

` npm i EzLorem `

# CDN

` https://cdn.jsdelivr.net/npm/ezlorem/lib/lorem.min.js `

` https://cdn.jsdelivr.net/npm/ezlorem/css/ezlorem-Regulators.css `

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

Generator in new feature in 1.3 that is real-time generator for make easy to generate as desired . just with add **ezlorem-Regulators** class to our target element.
```
<link rel="stylesheet" href="../css/ezlorem-Regulators.css"> // first add css file
<p class="ezlorem ezlorem-Regulators" data-ezlang="en" data-ezwords="25" data-EzAsHtml="true" data-EzHtmlTag="a"></p>
```
One of the remarkable points is that if the text is made with a tag, it will be placed in the same tag.

After accessing the desired text, you can put unit value in the options :D.

New Feature in 1.3.3 :

Now we can have generate Generator with code : (with **AddGenerator()** methode)
```
var element =  ElSelect('.a').AddLorem();
element.AddGenerator();

// Or (another way to use :)

ElSelect('.a').AddLorem().AddGenerator();
```

New Feature in 1.4.0 :

it's possible to change regulator position with cursor.

for add this feature to generators you have to use class or add with method :

we have to use **ezlorem-regulator-dynamic** class.

or pass a parameter to **AddGenerator(_moveable_ : true or false)** To determine that the Generator can move or not

```
<p class="ezlorem ezlorem-regulators ezlorem-regulator-dynamic"></p>

// or

<script>
    var testElement = ElSelect('.test').AddLorem();
    testElement.AddGenerator(true);
</script>
```
 
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
* _addText_    : 'hello' - string  - |     any      |   if you want text start with something else use this one

# Versions

1.4.0 : now it's possible to change regulator position with cursor (documents added)

1.3.6 : Some minor changes on code 

1.3.3 : added **AddGenerator()**

1.3.2 : fixed some bugs

1.3.0 : Added Lorem Generator (preview) , To get the desired text, it is very difficult to go to the code and change it and see the result. With the Generator, you can increase or decrease the text (real-time), and see the result, and take the options (units value).

1.2.0 : New Feature , generate lorem with html attributes 

1.1.6 : added .min file 