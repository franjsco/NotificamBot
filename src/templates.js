
const genericTemplate = (msg) => {
  value = `====
  Code: ${msg.code}
  Description: ${msg.description}`;

  return value;
}


const handler = (msg) => {
  let msgParsed;
  let value;

  try {
    msgParsed = JSON.parse(msg);
  } catch (e) {
    console.error('Error parse');
    return 'Error';
  }

  switch (msgParsed.code) {
    case 'generic':
      value = genericTemplate(msgParsed);
      break;
    default:
      value = {}
  }

  return value;
}


const template = {
  genericTemplate,
  handler
}

module.exports = template;