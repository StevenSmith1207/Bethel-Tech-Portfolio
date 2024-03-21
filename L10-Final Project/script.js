
function fetchRandomAdvice() {
    const adviceContainer = document.getElementById("outputAdvice");

    
    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then(data => {
            
            if (data && data.slip && data.slip.advice) {
                
                adviceContainer.innerHTML = data.slip.advice;
            } else {
                adviceContainer.innerHTML = "Unable to fetch advice at the moment.";
            }
        })
        .catch(error => {
            console.error("Error fetching advice:", error);
            adviceContainer.innerHTML = "An error occurred while fetching advice.";
        });
}


fetchRandomAdvice();

let nameElement = document.querySelector('#govName');
    let titleElement = document.querySelector('#Description');

    nameElement.addEventListener('mouseover', () => {
      nameElement.style.transform = 'scale(1.3)';
    });

    nameElement.addEventListener('mouseout', () => {
      nameElement.style.transform = 'scale(1)';
    });

    titleElement.addEventListener('mouseover', () => {
      titleElement.style.transform = 'scale(1.1)';
    });

    titleElement.addEventListener('mouseout', () => {
      titleElement.style.transform = 'scale(1)';
    });

