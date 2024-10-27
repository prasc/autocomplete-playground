import listOfData from './data/data.js';

const autocomplete = document.querySelector('#autocomplete');
const suggestionsDiv = document.querySelector('#suggestions');

const onChange = (e) => {
  let value = e.target.value;
  suggestionsDiv.innerHTML = '';

  const suggestions = filterList(value);

  createList(suggestions);
};

function filterList(value) {
  return listOfData.filter((name) =>
    name.toLowerCase().includes(value.toLowerCase())
  );
}

function createList(suggestions) {
  for (let suggestion of suggestions) {
    const div = document.createElement('div');
    div.textContent = suggestion;
    suggestionsDiv.append(div);
  }
}

// Same thing:
// autocomplete.addEventListener('keydown', onChange);
// autocomplete.onkeydown = onChange;
autocomplete.oninput = onChange;
