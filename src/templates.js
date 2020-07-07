
const genericTemplate = (msg) => {
  value = `====
  Code: ${msg.code}
  Description: ${msg.description}`;

  return value;
}

const noTemplate = (msg) => {
  return msg;
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
      value = noTemplate(msgParsed)
  }

  return value;
}


const template = {
  handler
}

module.exports = template;