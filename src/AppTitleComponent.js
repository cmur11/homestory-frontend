class AppTitleComponent {
    constructor(title) {
        this.title = title
    }

    //*** RENDER TITLESCREEN
    renderForTitlePage = () => {
        const h1 = document.createElement("h1")
        h1.textContent = this.title
        h1.classList.add("h1-title-title")
        const img = document.createElement("img")
        img.classList.add("title-img")
        img.src = "imgs/jason-briscoe-UV81E0oXXWQ-unsplash.jpg"

        titlePageTitleDiv.append(h1)
        titleImgHolder.append(img)

        renderUserForm()

        /*** APP TITLE EVENT LISTENER FOR HOME PAGE */
        h1.addEventListener("mouseover", event => {
            animateMouseOverTitleComponentTitlePage()
        })

        h1.addEventListener("mouseout", event => {
            animateTitle()
        })

        h1.addEventListener("click", () => {
          h1.remove()
          titleFormHolder.innerHTML = ""
          appTitle.renderForHomePage()
          renderRoomsNavForHome()
        })

        
    }

    renderForHomePage = () => {
        const h1 = document.createElement("h1")
        h1.textContent = this.title
        h1.classList.add("h1-title-home")

        titleHomePageDiv.append(h1)

        h1.addEventListener("click", (event) => {
            h1.remove()
            roomsHomePageNav.innerHTML = " "
            roomRoomPageNav.innerHTML = " "
            roomNameRoomPage.innerHTML = " "
            furnitureGridDiv.innerHTML = " "
            addFurnitureButtonDiv.innerHTML = " "
            appTitle.renderForTitlePage()
            animateTitle()
        })
    }
}

const appTitle = new AppTitleComponent("HomeStory")
