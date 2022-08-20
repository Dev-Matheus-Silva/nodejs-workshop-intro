const generateText = (name, age) => {
  // Returna o texto com base no preenchimento dos dois campos
  return `${name} (${age} anos)`;
};

exports.createElement = (type, text, className) => {
  // Cria um novo elemento e retorna 
  const newElement = document.createElement(type);
  newElement.classList.add(className);
  newElement.textContent = text;
  return newElement;
};

const validateInput = (text, notEmpty, isNumber) => {
  // Validar input com duas regras pré definidas
  if (!text) {
    return false;
  }
  if (notEmpty && text.trim().length === 0) {
    return false;
  }
  if (isNumber && +text === NaN) {
    return false;
  }
  return true;
};

exports.checkAndGenerate = (name, age) =>  {
  if(!this.validateInput(name, true, false) || !this.validateInput(age, false, true)){
    return false;
  }

  return this.generateText(name, age);
}

exports.generateText = generateText;
exports.validateInput = validateInput;
