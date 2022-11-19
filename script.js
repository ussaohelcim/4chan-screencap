function ScreenCapture() {
	function generateScreencap(repliesIDs) {		
		let newWindow = window.open();
		let doc = newWindow.document;
		let page = document.createElement('html');
		let head = document.querySelector("head");
		page.appendChild(head.cloneNode(true));
	
		let thread = document.createElement('div');
	
		page.appendChild(thread);
	
		repliesIDs.forEach((id) => {
			let r = document.querySelector(`#pc${id}`);
			thread.appendChild( r.cloneNode(true));
		});
	
		doc.write(page.outerHTML);
	}
	
	function getIDsFromCheckbox() {
		let all = document.querySelectorAll(".replyContainer");
		let list = [];
		
		all.forEach((e) => {
			let t = e.querySelector("input[type=checkbox]") ;
			if (t.checked) {
				list.push(t.name);
				t.checked = false;
			}
		});
	
		return list;
	}

	let list = getIDsFromCheckbox();
	if (list.length == 0) {
		alert("you must select the replies you want to screencap, sir");
	} else {
		generateScreencap(list);
	}
}

ScreenCapture();