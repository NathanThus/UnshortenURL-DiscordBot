let shorturlRegex = /https:\/\/share\.google\//g;
let fullURLRegex = /https:\/\/share\.google\/\S+/g;

function DoesMessageContainLink(message)
{
    return shorturlRegex.test(message);
}

function ExtractURL(message)
{
    return message.match(fullURLRegex);
}

export default {
DoesMessageContainLink,
ExtractURL
};