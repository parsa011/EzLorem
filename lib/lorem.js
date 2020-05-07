const enLorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.';
const fnLorem = 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.';
const AllowedTags = ['b', 'a', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'sup', 'sub', 'i', 'bold', 'del', 'small', 'strong', 'mark', 'ins', 'em', 'div'];

//this parametr is for certain the lang is persian or no :D
// برای مشخص کردن زبان 
function Getlorem(bool) {
    if (bool === true) {
        return fnLorem;
    }
    return enLorem;
}

//selector for select an element for lorem text
function ElSelect(selector) {
    var element;
    if (typeof selector === 'string') {
        element = document.querySelectorAll(selector);
    } else if (typeof selector === 'object') {
        element = selector;
    } else
        throw new Error('Nothing found ;/');
    if (element === undefined)
        throw new Error('Nothing found ;/');

    //the finall text that want to be add
    var loremText;

    function insertLorem() {
        if (element.innerHTML === undefined) {
            element.forEach(item => {
                item.innerHTML = loremText;
            });
        } else {
            element.innerHTML = loremText;
        }
    }
    const el = {
        AddLorem: function (options) {
            if (options !== undefined & typeof options === 'object') {
                var letters = options.letters;
                var lang = options.lang;
                var words = options.words
                var paragraph = options.paragraph;
                var asHTML = options.asHTML;
                var HtmlTag = options.HtmlTag;
                var HtmlClasses = options.HtmlClasses;
                var addedText = options.addText;
            } else {
                loremText = Getlorem(true);
                insertLorem();
            }
            let filledUnits = 0;

            // check for filled units
            if (paragraph !== undefined) {
                filledUnits++;
            }
            if (words !== undefined) {
                filledUnits++;
            }
            if (letters !== undefined) {
                filledUnits++;
            }

            // get the related text 

            if (lang === 'en') {
                loremText = Getlorem(false);
            } else if (lang === 'fa' || lang === undefined) {
                loremText = Getlorem(true);
            } else {
                throw new Error('Language not found');
            }

            // by letter
            if (letters !== undefined && filledUnits === 1) {
                if (typeof letters === 'number') {
                    if (letters > loremText.length) {
                        let multipleUnit = letters / loremText.length;
                        multipleUnit++;
                        loremText = loremText.repeat(Math.floor(multipleUnit));
                    }
                    loremText = loremText.substring(0, letters);
                } else {
                    console.log('EzLore : please enter letters as a integer');
                }

            }

            // by word
            if (words !== undefined && filledUnits === 1) {
                if (typeof words === 'number') {
                    var splitedLoremLength = loremText.split(' ').length;

                    if (words > splitedLoremLength) {
                        let multipleUnit = words / splitedLoremLength;
                        multipleUnit++;
                        loremText = loremText.repeat(Math.floor(multipleUnit));
                    }
                    var splited = loremText.split(' ');
                    let finall = '';
                    for (let index = 0; index < words; index++) {
                        if (splited[index] !== undefined) {
                            finall += splited[index] + ' ';
                        }
                    }
                    finall.replace(',', ' ');
                    loremText = finall;
                } else {
                    console.log('EzLore : please enter words as a integer');
                }
            }

            // by paragraph
            if (paragraph !== undefined && filledUnits === 1) {
                if (typeof paragraph === 'number') {
                    let asParagraph = loremText.repeat(paragraph);
                    loremText = asParagraph;
                } else {
                    console.log('EzLore : please enter paragraph as a integer');
                }
            }

            // add text
            if (addedText != undefined) {
                if (typeof addedText === 'string') {
                    if (/<.+?/.test(addedText)) {
                        throw new Error('you cant add a html tag for addText option ;/');
                    }
                    loremText = addedText + ' ' + loremText;
                } else {
                    console.log('EzLore : please enter addText as string');
                }
            }

            // html check
            if (asHTML === true) {
                let tag;
                let Classes;
                if (HtmlTag !== undefined) {
                    tag = HtmlTag.trim();
                } else {
                    tag = 'p';
                }

                if (AllowedTags.find(inputTag => inputTag == tag) === undefined) {
                    console.log('please enter a valid html tag ! ');
                    tag = 'p';
                }
                if (tag === 'a') {
                    tag += ' href="#!"';
                }
                if (HtmlClasses !== undefined) {
                    Classes = HtmlClasses;
                } else {
                    Classes = '';
                }
                let inHTML = '<' + tag + ' data-ezgeneratedtag="true" class="' +
                    Classes + '" >' + loremText + '</' + tag + '>';
                loremText = inHTML;
            }

            // =======================================
            insertLorem();
            return element;
        },
        EnLorem: function () {
            ElSelect(element).AddLorem({
                lang: 'en'
            });
            return element;
        },
        FaLorem: function () {
            ElSelect(element).AddLorem({
                lang: 'fa'
            });
            return element;
        },
        AddGenerator: function (floatable = false) {
            if (element.innerHTML === undefined) {
                element.forEach(item => {
                    item.classList.add('ezlorem');
                    item.classList.add('ezlorem-Regulators');
                });
            } else
                element.classList.add('ezlorem-Regulators');
            ManageRegulators(element, floatable);
        }
    }
    element.AddGenerator = function (floatable = false) {
        el.AddGenerator(floatable);
    };
    return el;
}

(function () {
    var elements = document.querySelectorAll('.ezlorem');

    var attr_lang, attr_asHtml,
        attr_htmlTag, attr_htmlClasses,
        attr_letters, attr_words,
        attr_paragraph, attr_AddedText;

    elements.forEach(item => {
        // CheckAttributes(item);
        attr_lang = item.getAttribute('data-EzLang');
        attr_asHtml = item.getAttribute('data-EzAsHtml');
        attr_asHtml = (attr_asHtml === 'true') ? true : false;
        attr_letters = item.getAttribute('data-EzLetters');
        attr_words = item.getAttribute('data-EzWords');
        attr_paragraph = item.getAttribute('data-EzParagraph');
        attr_htmlTag = item.getAttribute('data-EzHtmlTag');
        attr_htmlClasses = item.getAttribute('data-EzHtmlClasses');
        attr_AddedText = item.getAttribute('data-EzAddText');

        if (attr_words !== null && attr_letters === null && attr_paragraph == null) {
            ElSelect(item).AddLorem({
                lang: attr_lang,
                words: parseInt(attr_words),
                asHTML: attr_asHtml,
                HtmlTag: attr_htmlTag,
                HtmlClasses: attr_htmlClasses,
                addText: attr_AddedText
            });
        }
        if (attr_letters !== null && attr_words === null && attr_paragraph == null) {
            ElSelect(item).AddLorem({
                lang: attr_lang,
                letters: parseInt(attr_letters),
                asHTML: attr_asHtml,
                HtmlTag: attr_htmlTag,
                HtmlClasses: attr_htmlClasses,
                addText: attr_AddedText
            });
        }
        if (attr_paragraph !== null && attr_words === null && attr_letters == null) {
            ElSelect(item).AddLorem({
                lang: attr_lang,
                paragraph: parseInt(attr_paragraph),
                asHTML: attr_asHtml,
                HtmlTag: attr_htmlTag,
                HtmlClasses: attr_htmlClasses,
                addText: attr_AddedText
            });
        }
    });
})();


//regulator :D

function ManageRegulators(item = null, floatable = false) {
    let elementsThatHaveRegulator = document.querySelectorAll('.ezlorem-Regulators');
    let attId;
    if (item != null) {
        elementsThatHaveRegulator = item;
    }
    //lorem of GetLorem() length
    let itemLorem;
    let loremLang;
    let loremLength;
    let itemTxtLenght;
    elementsThatHaveRegulator.forEach(item => {

        attId = makeid(6);
        item.innerHTML = item.innerHTML.trim();
        item.style.position = 'relative';
        const regulatorHtml = '<ul><li> <div class="ez-reg-wordOptions"><a href="#!"><span>words :</span><em class="showWrCount"> 1 </em></a><p><span class="increaseWords">+</span><span class="decreaseWords">-</span></p></div></li><li><div class="ez-reg-paragraphOptions"><a href="#!"><span>paragraph :</span><em class="showPrCount"> 1 </em></a><p><span class="increaseParagraph">+</span><span class="decreaseParagraph">-</span></p></div></li><li><div class="ez-reg-lettersOptions"><a href="#!"><span>letters :</span><em class="showLtCount"> 1 </em></a></div></li></ul>';
        const generatedRegulatorDiv = document.createElement('div');
        generatedRegulatorDiv.classList.add('Regulators-div');
        generatedRegulatorDiv.innerHTML = regulatorHtml;

        item.after(generatedRegulatorDiv);
        item.setAttribute('data-targetregulatorId', attId);
        generatedRegulatorDiv.setAttribute('data-regulatorId', attId);

        if (item.textContent.match('Lorem ipsum')) {
            itemLorem = Getlorem(false);
            loremLang = false;

        } else {
            itemLorem = Getlorem(true);
            loremLang = true;
        }
        const coords = item.getBoundingClientRect();
        loremLang === false ? generatedRegulatorDiv.style.left = coords.left : generatedRegulatorDiv.style.left =
            (coords.right == document.documentElement.clientWidth ? coords.right - 150 : coords.right);
        generatedRegulatorDiv.style.top = coords.top;
        loremLength = itemLorem.length;
        itemTxtLenght = item.textContent.length;
        if (floatable === true) {
            generatedRegulatorDiv.classList.add('ezlorem-generator-dynamicPosition');
            MakeFloatableGenerator();
        }
        UpdateRegulatorTexts(attId, item.textContent, loremLength);
        //AddEventForRegulatorButtons();
        const increaseParagraph = document.querySelector('div[data-regulatorId="' + attId + '"] .increaseParagraph');
        increaseParagraph.setAttribute('data-ezRegId', attId);
        increaseParagraph.setAttribute('data-ezReglang', loremLang);
        increaseParagraph.addEventListener('click', function () {
            RegulatorOperator('+', 'paragraph', this.getAttribute('data-ezReglang'), this.getAttribute('data-ezRegId'));
        });
        const decreaseParagraph = document.querySelector('div[data-regulatorId="' + attId + '"] .decreaseParagraph');
        decreaseParagraph.setAttribute('data-ezRegId', attId);
        decreaseParagraph.setAttribute('data-ezReglang', loremLang);
        decreaseParagraph.addEventListener('click', function () {
            RegulatorOperator('-', 'paragraph', this.getAttribute('data-ezReglang'), this.getAttribute('data-ezRegId'));
        });
        const increaseWords = document.querySelector('div[data-regulatorId="' + attId + '"] .increaseWords');
        increaseWords.setAttribute('data-ezRegId', attId);
        increaseWords.setAttribute('data-ezReglang', loremLang);
        increaseWords.addEventListener('click', function () {
            RegulatorOperator('+', 'word', this.getAttribute('data-ezReglang'), this.getAttribute('data-ezRegId'));
        });
        const decreaseWords = document.querySelector('div[data-regulatorId="' + attId + '"] .decreaseWords');
        decreaseWords.setAttribute('data-ezRegId', attId);
        decreaseWords.setAttribute('data-ezReglang', loremLang);
        decreaseWords.addEventListener('click', function () {
            RegulatorOperator('-', 'word', this.getAttribute('data-ezReglang'), this.getAttribute('data-ezRegId'));
        });
    });
};

function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function UpdateRegulatorTexts(attrId, itemtext, loremLength) {
    document.querySelector('div[data-regulatorId="' + attrId + '"] .showLtCount').innerHTML = itemtext.length;
    document.querySelector('div[data-regulatorId="' + attrId + '"] .showPrCount').innerHTML = Math.floor(itemtext.length / loremLength);
    let splited = itemtext.split(' ');
    if (splited[0] == "")
        splited.shift();
    document.querySelector('div[data-regulatorId="' + attrId + '"] .showWrCount').innerHTML = splited.length;
}

function RegulatorOperator(operator, unit, loremLang, id) {
    if (operator === null && unit === null && loremLang === null && id === null) {
        throw new Error('argumant type error');
    }
    let lorem = Getlorem(loremLang == 'true' ? true : false);
    let target = document.querySelector('[data-targetregulatorId="' + id + '"]');
    if (document.querySelector('[data-targetregulatorId ="' + id + '"] > [data-ezgeneratedtag="true"]') != undefined) {
        target = document.querySelector('[data-targetregulatorId    ="' + id + '"] > [data-ezgeneratedtag="true"]');
        console.log(target);
        
    }
    let targetTextLength = target.textContent.length;
    let loremLength = lorem.length;
    if (operator === '+' && unit === 'paragraph') {
        target.innerHTML += lorem;

    } else if (operator === '-' && unit === 'paragraph') {
        if (targetTextLength < loremLength) {
            target.innerHTML = '';
        } else {
            if (targetTextLength === loremLength) {
                target.innerHTML = '';
            }
            target.innerHTML = target.textContent.substring(targetTextLength, loremLength);
        }

    } else if (operator === '+' && unit === 'word') {
        var splitedLorem = lorem.split(' ');
        target.innerHTML += ' ' + splitedLorem[Math.floor(Math.random() * splitedLorem.length)].replace(',', ' ');

    } else if (operator === '-' && unit === 'word') {
        target.innerHTML = target.textContent.substring(0, target.textContent.lastIndexOf(' '));
    }
    UpdateRegulatorTexts(id, target.textContent, loremLength);

    if (target.innerHTML === '') {
        document.querySelector('div[data-regulatorId="' + id + '"] .showWrCount').innerHTML = 0;
    }
}

ManageRegulators();


(function () {
    var targets = document.querySelectorAll('.ezlorem-regulator-dynamic');
    targets.forEach(item => {
        var attr = item.getAttribute('data-targetregulatorId');
        document.querySelector('[data-regulatorId="' + attr + '"]').classList.add('ezlorem-generator-dynamicPosition');
    });
    MakeFloatableGenerator();
})();

function MakeFloatableGenerator() {
    let generators = document.querySelectorAll('.ezlorem-generator-dynamicPosition');
    var mousePosition;
    var offset = [0, 0];
    var isDown;
    generators.forEach(item => {
        var target = document.querySelector('[data-targetregulatorId="'+item.getAttribute('data-regulatorId')+'"]');
        item.addEventListener('mousedown', function (e) {
            console.log(item);
            isDown = true;
            offset = [
                item.offsetLeft - e.clientX,
                item.offsetTop - e.clientY
            ];
        }, true);

        item.addEventListener('mouseup', function () {
            isDown = false;
        }, true);
        item.addEventListener('mousemove', function (event) {
            event.preventDefault();
            if (isDown) {
                mousePosition = {
                    x: event.clientX,
                    y: event.clientY
                };
                target.style.background = 'rgba(222, 222, 222, 0.63)';
                item.style.left = (mousePosition.x + offset[0]) + 'px';
                item.style.top = (mousePosition.y + offset[1]) + 'px';
            }else{
                target.style.background = '';
            }
        }, true);
    });
}