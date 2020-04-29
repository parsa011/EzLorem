# what is this

this is a lorem generator for designers . this library can generate for two languages : Persian and English :D

# what is new ?

1.1.6 : added .min file 

# Installation

` npm i EzLorem `

# how to use

first we need to add lorem.js file to our document

```
<scritp src="lorem.js"></script>
<script>
    ElSelect('p').AddLorem({
        options ...
    });
</script>
```
for select an element for add lorem we have to use **ElSelect()** method to select object.

many ways to use of  **ElSelect()** : 

```
var el = document.querySelectorAll('p.text'); //or querySelector or get...

ElSelect(el).AddLorem({
	options ...
});

ElSelect('p').AddLorem({
	options ...
});
```
*after select the element you can add your lorem text with **AddLorem()** and the options*

another functions :
```
ElSelect('h2').EnLorem(); //this will add a full lorem ipsum 'english language'

ElSelect('.text').FaLorem(); //this will add a full lorem ipsum 'Persian language'
```
# options

__there is many options to use :__


* _lang_       : 'en'    - string  - | 'en' , 'fa'  |   the default of lang is fa
* _letters_    : 50      - number  - |     any      |   this is for generate lorem by letter
* _words_      : 10      - number  - |     any      |   this is for generate lorem by letter
* _paragraph_  : 1       - number  - |     any      |   and with this options you can generate by paragraph
* _asHTML_     : true    - boolean - | true , false |   for generate as a html tag
* _HtmlTag_    : 'span'  - string  - | Html TagName |   generate as this html Tag and default is **p** tag
* _HtmlClasses_: 'class' - string  - |  Html class  |   add some html Class to the tag
* _addedText_  : 'hello' - string  - |     any      |   if you want text start with something else use this one
