const menuItems = document.querySelectorAll(".menu-contain>li");
		menuItems.forEach((val, idx) => {
			val.onclick = function() {
				for (let i = 0; i < menuItems.length; i++) {
					if (i != idx) {
						menuItems[i].classList.remove("active");
						const child = menuItems[i].children[0]; 
						menuItems[i].children[1].style.display = child.children[1].style.display = child.children[2].style.display = "none";
					}
				}
				val.classList.add("active");
				const child = val.children[0];
				val.children[1].style.display = child.children[1].style.display = child.children[2].style.display = "block";
			}
			if (!(val.classList.contains("active"))) {
				const child = val.children[0]; 
				val.children[1].style.display = child.children[1].style.display = child.children[2].style.display = "none";
			}
		})