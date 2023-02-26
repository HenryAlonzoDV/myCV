const body = document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text"),
      container = body.querySelector(".container");
      
      
      toggle.addEventListener("click", () =>{
        sidebar.classList.toggle("close");
        if (sidebar.classList.contains("close")) {
          container.style.marginLeft = "0";
      } else {
        container.style.marginLeft = "100px";
      }
      })

      searchBtn.addEventListener("click", () =>{
        sidebar.classList.remove("close");
      })

      modeSwitch.addEventListener("click", () =>{
        body.classList.toggle("dark");

        if(body.classList.contains("dark")){
            modeText.innerText = "light Mode"
        }else{
            modeText.innerText = "Dark Mode"
        }

      });