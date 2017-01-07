// ==UserScript==
<<<<<<< HEAD
// @name         Stupide Gendarme
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Parler sur messenger de façon automatisée ET intelligente
// @author       Nirina Guillaume Stéphane
// @match        https://www.messenger.com/t/1239124672796689
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
	
	alert(document.getElementsByClassName('__i_')[0].getElementsByClassName('_58nk')[0].innerHTML);
    // Your code here...
})();
=======
// @name        BlblBot
// @description Don't spend your day bullshitting on facebook, this bot do it for you
// @include     https://www.messenger.com/t/1239124672796689
// @version     0.1
// @grant       none
// ==/UserScript==


function getMessageBlocks() {
    return document.getElementsByClassName('_41ud');
}

function getMessageBlockAuthor(block) {
    return block.getElementsByTagName('h5')[0].innerText;
}

function getBlockMessages(block) {
    return block.getElementsByTagName('div');
}

var blocks=getMessageBlocks();
var text='';
for (i=0;i<blocks.length;i++) {
    text=text+ getMessageBlockAuthor(blocks[i]) + ' a écrit:\n';
    var messages=getBlockMessages(blocks[i]);
    for(j=0;j<messages.length;j++) {
        text=text + messages[j].innerText + '\n';
    }
}
>>>>>>> refs/remotes/origin/master
