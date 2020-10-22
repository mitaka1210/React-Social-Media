export const requiredField = (value) => {
  if (value) {
    return undefined;
  }
  return 'Field is required';
};

export const maxLengthCreator = (maxLength) => (value) => {
  if (value.length > maxLength) {
    return `Max length is ${maxLength} symbol`;
  }
  return undefined;
};

//export const requiredMaxLenght = (value) => {
//  if (value && value.lenght > 30) {
//    return 'Max lenght is 30 symbols';
//  }
//  return undefined;
//};
