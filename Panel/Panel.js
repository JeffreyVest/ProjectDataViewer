(function() {

function listen() {
  var reloadButton = document.querySelector('.reload-button');
  reloadButton.addEventListener('click', updateUI);
  updateUI();
}

window.addEventListener('load', listen);

function getProjectData()
{
	console.log(ko.toJS(_controller.PageModel.Projects()[0]));
	return "";
}

function updateUI() {
	chrome.devtools.inspectedWindow.eval(
		"(" + getProjectData + ")()",
		function(result, isException) {
			var container = document.querySelector('.project-data');
			container.innerHTML = result;
		}
    );
}

})();
