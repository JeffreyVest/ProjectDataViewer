// Copyright 2013 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

(function() {

// This function is converted to a string and becomes the preprocessor
function listen() {
  var reloadButton = document.querySelector('.reload-button');
  reloadButton.addEventListener('click', updateUI);
  updateUI();
}

window.addEventListener('load', listen);

function getProjectData()
{
	return document.querySelector('.gb_jd').innerText;
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
