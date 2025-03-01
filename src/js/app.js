function homework() {
	const characters = [
		{
			first_name: "Harry",
			last_name: "Potter",
			house: "Gryffindor",
			image: "https://ik.imagekit.io/hpapi/harry.jpg",
			actor: "Daniel Radcliffe",
		},
		{
			first_name: "Hermione",
			last_name: "Granger",
			house: "Gryffindor",
			image: "https://ik.imagekit.io/hpapi/hermione.jpeg",
			actor: "Emma Watson",
		},
		{
			first_name: "Ron",
			last_name: "Weasley",
			house: "Gryffindor",
			image: "https://ik.imagekit.io/hpapi/ron.jpg",
			actor: "Rupert Grint",
		},
		{
			first_name: "Draco",
			last_name: "Malfoy",
			house: "Slytherin",
			image: "https://ik.imagekit.io/hpapi/draco.jpg",
			actor: "Tom Felton",
		},
	];

	// 1. html ფაილში (ჯავასკრიპტით არა) შევქმნათ ღილაკი, ამ ღილაკის კლიკზე წაიშალოს თვითონ ეს ღილაკი.
	const btn = document.querySelector("#delete-me");
	btn.addEventListener("click", () => {
		btn.remove();
	});
	// 2. ჯავასკრიპტით შევქმნათ img tag რომელსაც src ად მივანიჭებთ ამ:  https://fastly.picsum.photos/id/180/2000/1600.jpg?hmac=dr3QTXUHbgPDvKgE9s2UjynoVFsZdxoLI3cxK8YZd9A  ლინკს და ეს შექმნილი img ჩავსვათ body ში (ჯავასკრიპტით).
	const img = document.createElement("img");
	const section = document.querySelector("section");
	img.setAttribute(
		"src",
		"https://fastly.picsum.photos/id/180/2000/1600.jpg?hmac=dr3QTXUHbgPDvKgE9s2UjynoVFsZdxoLI3cxK8YZd9A"
	);
	img.setAttribute("alt", "random image");
	section.appendChild(img);

	// 3. html-ში შექმენით <section id="characters-list"></section>

	// 4.
	//     4.1 ლექციაზე დაწერილ ფაილში => app.js ში ნახეთ characters  მასივი რომელიც შედგება 4 ობიექტისგან.
	//     4.2. characters   მასივიდან .map ის საშულებით შექმენით html სტრინგი (როგორც ლექციაზე გავაკეთეთ) დიზაინი უნდა იყოს ქვემოთ ატვირთული ფოტოს მსგავსი (სტილები დაადეთ css ის საშუალებით).
	//     4.3 ეს html სტრინგი ჩასვით ამ სექციაში: <section id="characters-list"></section>.
	//     4.4 დიზაინში  character card ზე არის სურათი, house და სრული სახელი, თქვენ უნდა ჩასვათ image, house და first_name + last_name რომელიც არის მასივის ობიექტ ელემენტში.

	function renderCharacterList() {
		const section = document.querySelector("#characters-list");
		const html = characters
			.map((char) => {
				return `
				<div class="character-card">
					<div class="info-wrapper">
						<h3>${char.first_name} ${char.last_name}</h3>
						<p>${char.house}</p>
						<p class="actor">${char.actor}</p>
						<div class="btns">
							<button class="show">show</button>
							<button class="delete">delete</button>
						</div>
					</div>
					<div>
						<img src="${char.image}" alt="${char.actor}" />
					</div>
				</div>
			`;
			})
			.join("");
		section.innerHTML = html;
	}
	renderCharacterList();
	// 5.  (optional) #4 დავალებაში შექმნილ character card - ზე დავამატოთ ღილაკები (წაშლა და ინფო -  ჯავასკრიპტიდან, მე-4 დავალებზე მუშაობისას დანარჩენ დეტალებთან ერთად უნდა დაემატოს ეს ღილაკები), წაშლა ღილაკზე დაჭერით წავშალოთ შესაბამისი  character card-ი, ინფო ღილაკზე დაჭერის შედეგად ღილაკების ქვემოთ გამოვაჩინოთ მსახიობის ინფო (actor)
	// *ჯავასკრიპტიდან შექმნილ ღილაკებზე eventListener-ის დამატება შეგვიძლია მათი html-ში ჩამატების (append)-ის შემდეგ
	const deleteBtns = document.querySelectorAll(".delete");
	const showBtns = document.querySelectorAll(".show");

	deleteBtns.forEach((btn) => {
		btn.addEventListener("click", () => {
			// console.log(btn.parentElement.parentElement.parentElement);
			// console.log(btn.closest(".character-card"));
			btn.closest(".character-card").remove();
		});
	});
	showBtns.forEach((btn) => {
		btn.addEventListener("click", () => {
			// console.log(btn.parentElement.parentElement.parentElement);
			// console.log(btn.closest(".character-card"));
			// console.log(btn.closest(".character-card").querySelector(".actor"));
			btn
				.closest(".character-card")
				.querySelector(".actor")
				.classList.toggle("active");
		});
	});

	function syncFn() {
		console.log("syncFn");
		for (let i = 0; i < 100; i++) {
			console.log(i);
		}
		console.log("syncFn done");
	}

	function asyncFn() {
		console.log("asyncFn");

		setTimeout(() => {
			for (let i = 0; i < 100; i++) {
				console.log(i);
			}
			console.log("timout done");
		}, 0);
		// setInterval(() => {
		// 	console.log("interval done");
		// }, 2000);

		console.log("asyncFn done");
	}

	const startTimoutBtn = document.querySelector(".start-timeout"),
		stopTimoutBtn = document.querySelector(".stop-timeout"),
		startIntervalBtn = document.querySelector(".start-interval"),
		stopIntervalBtn = document.querySelector(".stop-interval");
	let intervalId = null,
		timeoutId = null;

	function startTimout() {
		console.log("startTimout");
		timeoutId = setTimeout(() => {
			console.log("timout done");
		}, 5000);
	}
	function startInterval() {
		console.log("startInterval");
		intervalId = setInterval(() => {
			console.log("interval done");
		}, 5000);
	}

	startTimoutBtn.addEventListener("click", startTimout);
	startIntervalBtn.addEventListener("click", startInterval);

	stopTimoutBtn.addEventListener("click", () => {
		if (timeoutId) {
			clearTimeout(timeoutId);
			timeoutId = null;
		}
		console.log("timeout cleared");
	});
	stopIntervalBtn.addEventListener("click", () => {
		if (intervalId) {
			clearInterval(intervalId);
			intervalId = null;
		}
		console.log("interval cleared");
	});
}

homework();

function sliderFn() {
	const slides = document.querySelectorAll(".slide");
	const next = document.querySelector(".next");
	const prev = document.querySelector(".prev");
	let currentSlide = 0;

	function renderSlides() {
		slides.forEach((slide, index) => {
			if (index === currentSlide) {
				slide.classList.add("show-slide");
			} else {
				slide.classList.remove("show-slide");
			}
		});
	}

	// renderSlides();

	function goToNextSlide() {
		if (currentSlide === slides.length - 1) {
			currentSlide = 0;
		} else {
			currentSlide++;
		}
		renderSlides();
	}

	function goToPreSlide() {
		if (currentSlide === 0) {
			currentSlide = slides.length - 1;
		} else {
			currentSlide--;
		}
		renderSlides();
	}

	next.addEventListener("click", goToNextSlide);
	prev.addEventListener("click", goToPreSlide);

	// setInterval(goToNextSlide, 5000);

	document.addEventListener("keyup", (e) => {
		console.log("key up", e);
		if (e.code === "ArrowRight") {
			goToNextSlide();
		}
		if (e.code === "ArrowLeft") {
			goToPreSlide();
		}
	});
	// document.addEventListener("keydown", (e) => {
	// 	console.log("key down", e);
	// });
	// document.addEventListener("keypress", (e) => {
	// 	console.log("key press", e);
	// });
}

sliderFn();
