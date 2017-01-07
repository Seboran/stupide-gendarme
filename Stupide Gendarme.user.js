// @name        BlblBot
// @description Don't spend your day bullshitting on facebook, this bot do it for you
// @include     https://www.messenger.com/t/1239124672796689
// @version     0.1
// @grant       none
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
    var blocks=getMessageBlocks();
    var text='';

    for (i = 0 ; i < blocks.length ; i++) 
    {
        text = text + '\n' + getMessageBlockAuthor(blocks[i]) + ' a écrit:\n';
        var messages = getBlockMessages(blocks[i]);
        for(j = 0; j < messages.length; j++) {
            text = text + messages[j].innerText + '\n';
        }
    }
}

function getLastMessages() {
    var blocks=getMessageBlocks();
    var auth=[];
    var mess=[];
    for (i=0;i<blocks.length;i++) {
        var messages=getBlockMessages(blocks[i]);
        for(j=0;j<messages.length;j++) {
            auth.push(getMessageBlockAuthor(blocks[i]));
            mess.push(messages[j].innerText);
        }
    }
    return new Array(auth,mess);
}

window.onlad=printMessages();
