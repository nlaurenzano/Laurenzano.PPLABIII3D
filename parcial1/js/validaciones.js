export const validarCampoVacio = (input) => {
  return input.value.trim() ? clearError(input) : setError(input,"Campo requerido");
};

export const validarRadioVacio = (input) => {
  const getSelectedValue = document.querySelector( `input[name="${input.name}"]:checked`);   
  return getSelectedValue ? clearError(input) : setError(input, "Campo requerido");
};

const setError = (input, mensaje) => {
  const $parent = input.parentElement;
  const $small = $parent.lastElementChild;
  $small.textContent = mensaje || `${input.name} requerido`;
  input.classList.add("inputError");
  $small.classList.add("danger");
  return false;
};

export const clearError = (input, mensaje) => {
  const $parent = input.parentElement;
  const $small = $parent.lastElementChild;
  $small.textContent = "";
  input.classList.remove("inputError");
  $small.classList.remove("danger");
  return true;
};
