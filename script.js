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
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1o6M79HA4A5bd6ddTPVSjCZr6aQcI2QDWqO7AlBNljWaLb73pzDVismW7890T5kKi_Uw&usqp=CAU",
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
		imgUrl:
			"https://i.guim.co.uk/img/media/01512e0bd1d78a9a85026844386c02c544c01084/38_0_1200_720/master/1200.jpg?width=1200&quality=85&auto=format&fit=max&s=cef05f7f90efd180648f5aa5ce0d3690",
	},
	{
		title: "Minecraft",
		year: 2009,
		imgUrl:
			"https://techstory.in/wp-content/uploads/2023/07/Minecraftwallpapersdotcom.jpg",
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
			const alphanumericRegex = /^[a-zA-Z0-9/.:-_ 'éùçà(),-=?&]+$/
			if (
				!alphanumericRegex.test(newTitle) ||
				!alphanumericRegex.test(newYear)
			) {
				alert("no valid !")
				return
			}
			/*  update gameList  */
			gameList[i].title = newTitle
			gameList[i].year = newYear
			gameList[i].imgUrl = newImageUrl
			console.log(gameList[i])

			/* update DOM */
			document.querySelectorAll(".card-title")[i].innerHTML = newTitle
			document.querySelectorAll(".card-text")[i].innerHTML = `Year: ${newYear}`
			document.querySelectorAll(".card-img-top")[i].src = newImageUrl
		})
	})
})
