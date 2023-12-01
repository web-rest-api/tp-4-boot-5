/*  top games  */
const gameList = [
	{
		title: "Hollow knight",
		year: 2017,
		imgUrl:
			"https://gaming-cdn.com/images/products/2198/616x353/hollow-knight-pc-mac-game-steam-cover.jpg?v=1694101703",
	},
	{
		title: "FC24",
		year: 2024,
		imgUrl:
			"https://wp.inews.co.uk/wp-content/uploads/2023/08/EA-Sports-FC-24-scaled-1.jpeg?resize=640,360&strip=all&quality=90",
	},
	{
		title: "God of War",
		year: 2018,
		imgUrl:
			"https://cdn.dlcompare.com/game_tetiere/upload/gameimage/file/95a1-god_of_war_4.jpeg",
	},
	{
		title: "Call of Duty",
		year: 2023,
		imgUrl:
			"https://animalpolitico.com/_next/image?url=https%3A%2F%2Fap-cdn.sfo3.cdn.digitaloceanspaces.com%2Fuploads%2F2023%2F08%2Fcall-of-duty-modern-warfare-3-como-jugar-revelacion-warzone-1024x683.jpg&w=3840&q=75",
	},
	{
		title: "Fortnite",
		year: 2017,
		imgUrl: "https://cdn-uploads.gameblog.fr/img/news/412858_63a0a6d8ce231.jpg",
	},
	{
		title: "Minecraft",
		year: 2009,
		imgUrl: "https://cdn-uploads.gameblog.fr/img/news/418221_640097726ba44.jpg",
	},
]
/*   DOM ELEMENTS */
const cardContainer = document.querySelector(".row")

/*  modal elements  */
const modalTitle = document.querySelector(".modal-title ")
const modalBody = document.querySelector(".modal-body")
const modalFooter = document.querySelector(".modal-footer")

// modalTitle.innerHTML = "test modal"
// modalBody.innerHTML = "test du modal body"
// modalFooter.innerHTML = "test du modal footer"

gameList.forEach((game, i) => {
	// console.log(game.year, i)
	cardContainer.innerHTML += `
    <div class="col">
        <article class="card shadow-sm">
            <img src="${game.imgUrl}" class="card-img-top" alt="${game.title}">
             <div class="card-body">
                <h3 class="card-title">${game.title}</h3>
                <p class="card-text">Year: ${game.year}</p>
                <div class="btn-group">
                    <button
                        type="button"
                        class="btn btn-sm btn-outline-dark view"
                        data-bs-toggle="modal"
				        data-bs-target="#gameModal"
                    >
                        View
                    </button>
                    <button
                        type="button"
                        class="btn btn-sm btn-outline-dark edit"
                        data-bs-toggle="modal"
				        data-bs-target="#gameModal"
                    >
                        Edit
                    </button>
                </div>   
             </div>
            
        </article>
    </div>
    `
})

/*  butttons array  */
const listBtnsView = document.querySelectorAll(".view")
const listBtnsEdit = document.querySelectorAll(".edit")

/*  add event listeners to view buttons
    and write the game info unto the modal body and header
*/
listBtnsView.forEach((btn, i) => {
	btn.addEventListener("click", () => {
		modalTitle.innerHTML = gameList[i].title
		modalBody.innerHTML = `
            <img src="${gameList[i].imgUrl}" alt="${gameList[i].ttile}" class="img-fluid" >
            <p class="mt-2">Year: ${gameList[i].year}</p>
        `
		modalFooter.innerHTML = `
            <button
                type="button"
                class="btn btn-dark"
                data-bs-dismiss="modal"
            >
                Close
            </button>
        `
	})
})

/* 
   event on edit button
*/

listBtnsEdit.forEach((btn, i) => {
	btn.addEventListener("click", () => {
		modalTitle.innerHTML = "You are on edit mode"
		modalBody.innerHTML = `        
            <form>
                <div class="mb-3">
                    <label for="title" class="form-label">Title</label>
                    <input type="text" class="form-control" id="title" aria-describedby="titleHelp" value="${gameList[i].title}">
                </div>

                <div class="mb-3">
                    <label for="year" class="form-label">Year</label>
                    <input type="number" class="form-control" id="year" aria-describedby="titleYear" value="${gameList[i].year}">
                </div>

                <div class="mb-3">
                    <label for="image" class="form-label">Image url</label>
                    <input type="text" class="form-control" id="image" aria-describedby="titleHelp" value="${gameList[i].imgUrl}">
                    <img src="${gameList[i].imgUrl}" alt="" class="img-thumbnail w-50" >
                </div>
             
            
        `
		modalFooter.innerHTML = `
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                   >Close</button>
                <button type="submit" class="btn btn-primary submit" data-bs-dismiss="modal"
                   >Save</button>
            </form>
        `
		const saveBtn = document.querySelector(".submit")
		saveBtn.addEventListener("click", () => {
			// console.log("save data", i)
			const formulaire = document.querySelector("form")
			let newTitle = formulaire.title.value
			let newYear = formulaire.year.value
			let newImageUrl = formulaire.image.value
			/*  validation form  */
			// vide ??
			if (newTitle === "" || newYear === "" || newImageUrl === "") {
				alert("no vide !!! ")
				return
			}
			const regexTest = /^[a-zA-Z0-9]+$/
			if (!regexTest.test(newTitle)) {
				alert("no valid !")
				return
			}
			console.log(newTitle, newYear, newImageUrl)
		})
	})
})
