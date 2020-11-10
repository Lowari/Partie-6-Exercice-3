let languages = ['html', 'css', 'javascript', 'php', 'mysql', 'c++','ruby','python'];
const languagesList = document.createElement('ul');

languagesList.setAttribute('class', 'list-group text-center container col-4 mt-5');
document.body.appendChild(languagesList);

languages.forEach(function(language) {
    let itemLanguagesList = document.createElement('li');
    itemLanguagesList.setAttribute('class', 'list-group-item');
    itemLanguagesList.textContent = language;
    languagesList.appendChild(itemLanguagesList);
});