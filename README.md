# what is this

this is a lorem generator for designers . this library can generate for two languages : Persian and English :D

# Installation

` npm i EzLorem --save `

# how to use

```
<scritp src="lorem.js"></script>
<script>
    ElSelect('p').AddLorem({
        options ...
    });
</script>

```

# options

__there is many options to use :__

. _lang_      : 'en'    - string  - | 'en' , 'fa'  |   the defualt of lang is fa
. _letters_   : 50      - number  - |     any      |   this is for generate lorem by letter
. _words_     : 10      - number  - |     any      |   this is for generate lorem by letter
._paragraph_  : 1       - number  - |     any      |   and with this options you can generate by paragraph
._asHTML_     : true    - boolean - | true , false |   for generate as a html tag
._HtmlTag_    : 'span'  - string  - | Html TagName |   generate as this html Tag and defualt is **p** tag
._HtmlClasses_: 'class' - string  - |  Html class  |   add some html Class to the tag
._addedText_  : 'hello' - string  - |     any      |   if you want text start with something else use this one