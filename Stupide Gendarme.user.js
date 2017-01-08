// ==UserScript==
// @name        Stupide Gendarme
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description Don't spend your day bullshitting on facebook, this bot do it for you
// @author       You
// @match        https://www.messenger.com/t/1239124672796689
// @match        https://www.messenger.com/t/1684421825168594
// @grant        none
// ==/UserScript==



function getMessageBlocks() 
{
    return document.getElementsByClassName('_41ud');
}

function getMessageBlockAuthor(block) 
{
    return block.getElementsByTagName('h5')[0].innerText;
}

function getBlockMessages(block) 
{
    return block.getElementsByClassName('_58nk');
}

function printMessages()
{
    var blocks = getMessageBlocks();
    var text = '';

    for (i = 0 ; i < blocks.length ; i++) 
    {
        text = text + '\n' + getMessageBlockAuthor(blocks[i]) + ' a écrit:\n';
        var messages = getBlockMessages(blocks[i]);
        for(j = 0; j < messages.length; j++) {
            text = text + messages[j].innerText + '\n';
        }
    }
    alert(text);
}

function getLastMessages() 
{
    var blocks = getMessageBlocks();
    var auth = [];
    var mess = [];
    for (i=0; i < blocks.length; i++) {
        var messages = getBlockMessages(blocks[i]);
        for(j=0; j < messages.length; j++) {
            auth.push(getMessageBlockAuthor(blocks[i]));
            mess.push(messages[j].innerText);
        }
    }
    return new Array(auth, mess);
}


function getLastMessage()
{
	var last = getLastMessages();
	var auths = last[0];
	var messs = last[1];
	return new Array(auths[auths.length - 1], messs[messs.length - 1]);
}

function inLastMessage(word)
{
	return (getLastMessage()[1].search(word) != -1);
	
}

function WriteFile(message)
{

    var fh = fopen("C:\Users\nirin\Documents\stupide-gendarme\messages\lastMessage.txt", 3); // Open the file for writing

    if(fh != -1) // If the file has been successfully opened
    {
        fwrite(fh, message); // Write the string to a file
        fclose(fh); // Close the file
    }

}





function blbl()
{
    var lastMessage = getLastMessage();
    var author = lastMessage[0];
    var message = lastMessage[1];
    
}

function sendNextNumber()
{
    var message = getLastMessage();
    var number = parseInt(getLastMessage()[1]);
    
    if(!isNaN(number) && (message[0] != 'Nirina') && message[0] != 'infiNirina')
    {
        
        document.getElementsByClassName('_1mf')[0].textContent = number + 1;
    }
}

window.onload = setTimeout(function(){blbl(); },5000);
setInterval(function(){ sendNextNumber(); }, 500);