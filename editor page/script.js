const IconsData = [
    {   "name": "Spotify", "image": "./assets/logos/spotify.png" },
    {    "name": "YouTube", "image": "./assets/logos/youtube.png" },
    {   "name": "Soundcloud", "image": "./assets/logos/soundcloud.png" },
    {    "name": "iTunes Store", "image": "./assets/logos/itunesstore.png" },
    {    "name": "YouTube Music", "image": "./assets/logos/youtubemusic.png" },
    {    "name": "Spotify", "image": "./assets/logos/spotify.png" },
    {    "name": "Apple Music", "image": "./assets/logos/applemusic.png" },
    {    "name": "Amazon Music", "image": "./assets/logos/amazonmusic.png" },
    {    "name": "TIDAL", "image": "./assets/logos/tidal.png" }
];

  const track = document.getElementById('icons-track');

  function populateIcons() {
    IconsData.forEach(company => {
      const img = document.createElement('img');
      img.src = company.image;
      img.alt = company.name;
      img.classList.add('icon');
      track.appendChild(img);
    });
    IconsData.forEach(company => {
      const img = document.createElement('img');
      img.src = company.image;
      img.alt = company.name;
      img.classList.add('icon');
      track.appendChild(img);
    });
  }
  
  populateIcons();

document.getElementById("get-started-btn").addEventListener("click", () => {
    document.getElementById("edit").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("ngs").addEventListener("click", () => {
    document.getElementById("edit").scrollIntoView({ behavior: "smooth" });
});

function goto(scroll) {
    document.getElementById(`${scroll}`).scrollIntoView({ behavior: "smooth" });
}

const cursor = document.getElementById('cursor');

let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

const getStartedBtn = document.getElementById('get-started-btn');

getStartedBtn.addEventListener('mouseenter', () => {
  cursor.style.opacity = '1';
});

getStartedBtn.addEventListener('mouseleave', () => {
  cursor.style.opacity = '0';
});

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
})

function updateCursor() {
    currentX += (mouseX - currentX) * 0.05;
    currentY += (mouseY - currentY) * 0.05;

    cursor.style.transform = `translate(${currentX}px, ${currentY}px)`;

    requestAnimationFrame(updateCursor);
}

updateCursor();

document.addEventListener('DOMContentLoaded', function () {
    const questions = document.querySelectorAll('.faq-question');
    const answers = document.querySelectorAll('.faq-answer');
  
    function resetActiveState() {
      questions.forEach(question => question.classList.remove('active'));
      answers.forEach(answer => answer.style.display = 'none');
    }
  
    function showAnswer(questionId) {
      const question = document.getElementById(questionId);
      const answerId = question.getAttribute('data-answer-id');
      const answer = document.getElementById(answerId);
  
      resetActiveState();
      question.classList.add('active');
      answer.style.display = 'block';
    }
  
    questions.forEach(question => {
      question.addEventListener('click', function () {
        const answerId = question.getAttribute('data-answer-id');
        const answer = document.getElementById(answerId);
  
        resetActiveState();
        question.classList.add('active');
        answer.style.display = 'block';
      });
    });
  
    if (questions.length > 0) {
      questions[0].click();
    }
  
    window.addEventListener('hashchange', function () {
      const hash = window.location.hash;
      if (hash) {
        const questionId = 'question' + hash.substring(1);
        if (document.getElementById(questionId)) {
          showAnswer(questionId);
        }
      }
    });
  
    if (window.location.hash) {
      const hash = window.location.hash;
      const questionId = 'question' + hash.substring(1);
      if (document.getElementById(questionId)) {
        showAnswer(questionId);
      }
    }
  });
  
const faqQuestions = document.querySelector('.faq-questions');
const faqQuestionItems = document.querySelectorAll('.faq-question');

////////////////////////////////////////////////////

const step1 = document.getElementById("step-1");
const step2 = document.getElementById("step-2");
const step3 = document.getElementById("step-3");

document.getElementById("next-step-1").addEventListener("click", () => {
  step1.style.display = "none";
  step2.style.display = "block";
});

document.getElementById("prev-step-2").addEventListener("click", () => {
  step2.style.display = "none";
  step1.style.display = "block";
});

document.getElementById("next-step-2").addEventListener("click", () => {
  step2.style.display = "none";
  step3.style.display = "block";
});

document.getElementById("prev-step-3").addEventListener("click", () => {
  step3.style.display = "none";
  step2.style.display = "block";
});

// Added: Navigate from step 3 to new step 4
document.getElementById("next-step-3").addEventListener("click", () => {
  step3.style.display = "none";
  document.getElementById("step-4").style.display = "block";
});

// Added: Navigate back from step 4 to step 3
document.getElementById("prev-step-4").addEventListener("click", () => {
  document.getElementById("step-4").style.display = "none";
  step3.style.display = "block";
});

document.getElementById("cover-file").addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("cover").value = e.target.result;
      updatePreview();
    };
    reader.readAsDataURL(file);
  }
});

const defaultServices = [
  {
    name: "Spotify",
    button: "Play",
    link: "https://open.spotify.com/",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/1280px-Spotify_logo_with_text.svg.png",
    icon: "fas fa-play",
    button2: "Go to App",
    button2_link: "spotify:album:1pzvBxYgT6OVwJLtHkrdQK",
    button2_icon: "fas fa-external-link"
  },
  {
    name: "Apple Music",
    button: "Play",
    link: "https://music.apple.com/",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Apple_Music_logo.svg/1024px-Apple_Music_logo.svg.png",
    icon: "fas fa-play"
  },
  {
    name: "YouTube Music",
    button: "Play",
    link: "https://music.youtube.com/",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/YT_Music.svg/1024px-YT_Music.svg.png",
    icon: "fas fa-play"
  },
  {
    name: "Amazon Music",
    button: "Play",
    link: "https://music.amazon.com/",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/12/Amazon_Music_%28Logo%29.svg",
    icon: "fas fa-play"
  },
  {
    name: "iTunes Store",
    button: "Download",
    link: "https://music.apple.com/",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/ITunes_Store_logo.svg/2560px-ITunes_Store_logo.svg.png",
    icon: "fas fa-download"
  },
  {
    name: "Soundcloud",
    button: "Play",
    link: "https://soundcloud.com/",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Soundcloud_logo.svg/2560px-Soundcloud_logo.svg.png",
    icon: "fas fa-play"
  },
  {
    name: "YouTube",
    button: "Play",
    link: "https://www.youtube.com/",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg",
    icon: "fas fa-play"
  },
  {
    name: "DEEZER",
    button: "Play",
    link: "https://www.deezer.com/",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Deezer_logo%2C_2023.svg/2560px-Deezer_logo%2C_2023.svg.png",
    icon: "fas fa-play"
  },
  {
    name: "TIDAL",
    button: "Play",
    link: "https://tidal.com/",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Tidal_%28service%29_logo.svg/1280px-Tidal_%28service%29_logo.svg.png",
    icon: "fas fa-play"
  }
];

function renderDefaultServices() {
  const defaultServicesContainer = document.getElementById("default-services");
  defaultServices.forEach(service => {
    const item = document.createElement("div");
    item.className = "default-service-item";
    item.textContent = service.name;
    item.addEventListener("click", () => {
      addServiceToList(service);
      updatePreview();
    });
    defaultServicesContainer.appendChild(item);
  });
}
renderDefaultServices();

let dragSrcEl = null;

function handleDragStart(e) {
  dragSrcEl = this;
  this.classList.add("dragging");
  e.dataTransfer.effectAllowed = "move";
}

function handleDragOver(e) {
  if (e.preventDefault) e.preventDefault();
  return false;
}

function handleDrop(e) {
  if (e.stopPropagation) e.stopPropagation();
  if (dragSrcEl !== this) {
    const parent = this.parentNode;
    parent.insertBefore(dragSrcEl, this);
    updatePreview();
  }
  return false;
}

function handleDragEnd(e) {
  this.classList.remove("dragging");
}

function addDragAndDropHandlers(item) {
  item.addEventListener("dragstart", handleDragStart, false);
  item.addEventListener("dragover", handleDragOver, false);
  item.addEventListener("drop", handleDrop, false);
  item.addEventListener("dragend", handleDragEnd, false);
}

function createServiceElement(defaultData = {}) {
  const div = document.createElement("div");
  div.className = "streaming-service";
  div.draggable = true;
  
  const header = document.createElement("div");
  header.className = "streaming-service-header";
  const titleSpan = document.createElement("span");
  titleSpan.className = "service-title";
  titleSpan.textContent = defaultData.name || "Service";
  const toggleBtn = document.createElement("button");
  toggleBtn.type = "button";
  toggleBtn.className = "toggle-expand-btn";
  toggleBtn.innerHTML = '<i class="fas fa-chevron-down"></i>';
  header.appendChild(titleSpan);
  header.appendChild(toggleBtn);
  
  const bodyDiv = document.createElement("div");
  bodyDiv.className = "streaming-service-body";
  bodyDiv.style.display = "none";
  
  let html = `
    <input type="text" class="service-name" placeholder="Service Name" value="${defaultData.name || ''}" />
    <input type="text" class="service-button" placeholder="Button text" value="${defaultData.button || ''}" />
    <input type="text" class="service-link" placeholder="Link" value="${defaultData.link || ''}" />
    <input type="text" class="service-img-url" placeholder="Image URL" value="${defaultData.image || ''}" />
    <label for="service-img-f" class="default-service-item" style="margin-bottom: 10px;">Browse image</label>
    <input type="file" id="service-img-f" class="service-img-f" style="display: none;" accept="image/*" />
    <input type="text" class="service-icon" placeholder="Icon class" value="${defaultData.icon || ''}" />
    <small>Search for icons in <a onclick="window.open('https://fontawesome.com', '_blank')">FontAwesome.com</a></small>
  `;
  if(defaultData.button2) {
    html += `
      <label class="checkbox-container" style="margin-top: 15px; margin-bottom: 15px">
        <input type="checkbox" class="include-button2" checked> Include second button
        <span class="checkmark"></span>
      </label>
      <div class="button2-fields">
        <input type="text" class="service-button2" placeholder="Second Button text" value="${defaultData.button2}" />
        <input type="text" class="service-link2" placeholder="Second Button link" value="${defaultData.button2_link}" />
        <small class="button2-description">If you want to put a Spotify App URI here, go to your Spotify release, copy the ID and place it in "spotify:album:ID", but replace the ID.</small>
        <input type="text" class="service-icon2" placeholder="Second Button icon classes" value="${defaultData.button2_icon}" />
      </div>
    `;
  }
  
  html += `<button type="button" class="remove-service-btn">Remove</button>`;
  bodyDiv.innerHTML = html;

  const includeButton2Checkbox = bodyDiv.querySelector(".include-button2");
  if(includeButton2Checkbox){
      const button2Fields = bodyDiv.querySelector(".button2-fields");
      includeButton2Checkbox.addEventListener("change", function(){
          button2Fields.style.display = this.checked ? "block" : "none";
          updatePreview();
      });
  }
  
  div.appendChild(header);
  div.appendChild(bodyDiv);
  
  header.addEventListener("click", function(e) {
    e.stopPropagation();
    document.querySelectorAll(".streaming-service-body").forEach(b => {
      if (b !== bodyDiv) {
        b.style.display = "none";
        const btn = b.parentNode.querySelector(".toggle-expand-btn");
        if(btn) btn.innerHTML = '<i class="fas fa-chevron-down"></i>';
      }
    });
    if (bodyDiv.style.display === "none") {
      bodyDiv.style.display = "block";
      toggleBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    } else {
      bodyDiv.style.display = "none";
      toggleBtn.innerHTML = '<i class="fas fa-chevron-down"></i>';
    }
  });
  
  const nameInput = bodyDiv.querySelector(".service-name");
  nameInput.addEventListener("input", function() {
    titleSpan.textContent = this.value || "Service";
  });
  
  const fileInput = bodyDiv.querySelector(".service-img-f");
  if(fileInput){
    fileInput.addEventListener("change", function() {
      const file = this.files[0];
      if(file){
         const reader = new FileReader();
         reader.onload = function(e){
             const siu = bodyDiv.querySelector(".service-img-url");
             siu.value = e.target.result;
             updatePreview();
         }
         reader.readAsDataURL(file);
      }
    });
  }
  
  return div;
}

function addServiceToList(defaultData = {}) {
  const servicesList = document.getElementById("streaming-services-list");
  const newService = createServiceElement(defaultData);
  servicesList.appendChild(newService);

  newService.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", updatePreview);
    input.addEventListener("change", updatePreview);
  });

  newService.querySelector(".remove-service-btn").addEventListener("click", function () {
    newService.remove();
    updatePreview();
  });

  addDragAndDropHandlers(newService);
}

function updatePreview() {
  const coverURL = document.getElementById("cover").value;
  const releaseName = document.getElementById("release-name").value;
  const artistName = document.getElementById("artist-name").value;
  const shareToggle = document.getElementById("share-toggle").value;
  const footerToggle = document.getElementById("footer-toggle").value;

  const previewCover = document.getElementById("preview-album-cover");
  previewCover.src = coverURL;
  previewCover.alt = releaseName ? releaseName + " Cover" : "Album Cover";

  if (!coverURL) {
    previewCover.src = './assets/Placeholder.png';
  }

  document.getElementById("preview-album-name").textContent = releaseName || "Album Name";
  document.getElementById("preview-artist-name").textContent = artistName || "Artist Name";

  const previewShareBtn = document.getElementById("preview-share-btn");
  previewShareBtn.style.display = shareToggle === "yes" ? "inline-block" : "none";

  const previewFooter = document.getElementById("preview-footer");
  previewFooter.style.display = footerToggle === "yes" ? "block" : "none";

  const previewServicesContainer = document.getElementById("preview-streaming-services");
  previewServicesContainer.innerHTML = ""; 

  const serviceElements = document.querySelectorAll(".streaming-service");
  serviceElements.forEach((serviceEl, index) => {
    const serviceName = serviceEl.querySelector(".service-name").value;
    const serviceButton = serviceEl.querySelector(".service-button").value;
    const serviceLink = serviceEl.querySelector(".service-link").value;
    const serviceImage = serviceEl.querySelector(".service-img-url").value;
    const serviceIcon = serviceEl.querySelector(".service-icon").value;
    const button2Input = serviceEl.querySelector(".service-button2");
    const button2 = button2Input ? button2Input.value : "";
    const link2Input = serviceEl.querySelector(".service-link2");
    const link2 = link2Input ? link2Input.value : "";
    const icon2Input = serviceEl.querySelector(".service-icon2");
    const icon2 = icon2Input ? icon2Input.value : "";

    const serviceContainer = document.createElement("div");
    serviceContainer.className = "streaming-s-container";
    serviceContainer.addEventListener("click", () => {
      window.open(serviceLink, "_blank");
    });

    let serviceHTML = "";
    if (serviceImage) {
      serviceHTML += `
        <div class="streaming-s-title">
          <img src="${serviceImage}" alt="${serviceName}" class="streaming-logo">
        </div>
      `;
    }

    if (serviceLink && serviceButton) {
      serviceHTML += `
        <div class="streaming-s-buttons">
          <button onclick="event.stopPropagation(); window.open('${serviceLink}', '_blank');" class="streaming-s-button">
            ${serviceIcon ? `<i class="${serviceIcon}"></i>` : ""} ${serviceButton}
          </button>
          ${button2 && link2 ? `
            <button onclick="event.stopPropagation(); window.open('${link2}', '_blank');" class="streaming-s-button streaming-s-circle">
              ${icon2 ? `<i class="${icon2}"></i>` : ""}
            </button>
          ` : ""}
        </div>
      `;
    }

    serviceContainer.innerHTML = serviceHTML;
    previewServicesContainer.appendChild(serviceContainer);

    if (index < serviceElements.length - 1) {
      const divider = document.createElement("hr");
      previewServicesContainer.appendChild(divider);
    }
  });
}

document.querySelectorAll("#release-form input, #release-form select").forEach(input => {
  input.addEventListener("input", updatePreview);
  input.addEventListener("change", updatePreview);
});

document.getElementById("add-custom-service-btn").addEventListener("click", function () {
  addServiceToList();
  updatePreview();
});

updatePreview();

function generateData() {
  const artist = document.getElementById("artist-name").value;
  const album = document.getElementById("release-name").value;
  const cover = document.getElementById("cover").value;
  
  const services = [];
  const serviceElements = document.querySelectorAll("#streaming-services-list .streaming-service");
  serviceElements.forEach(serviceEl => {
    const name = serviceEl.querySelector(".service-name").value;
    const button = serviceEl.querySelector(".service-button").value;
    const link = serviceEl.querySelector(".service-link").value;
    const image = serviceEl.querySelector(".service-img-url").value;
    const icon = serviceEl.querySelector(".service-icon").value;
    const button2Input = serviceEl.querySelector(".service-button2");
    const button2 = button2Input ? button2Input.value : "";
    const link2Input = serviceEl.querySelector(".service-link2");
    const link2 = link2Input ? link2Input.value : "";
    const icon2Input = serviceEl.querySelector(".service-icon2");
    const icon2 = icon2Input ? icon2Input.value : "";
    
    const serviceObj = {
      name: name,
      button: button,
      link: link,
      image: image,
      icon: icon
    };
    if (button2 && link2) {
      serviceObj.button2 = button2;
      serviceObj.button2_link = link2;
      serviceObj.button2_icon = icon2;
    }
    services.push(serviceObj);
  });
  
  const shareToggle = document.getElementById("share-toggle").value;
  const inclfooter = document.getElementById("footer-toggle").value;

  const options = [{ "share-button": shareToggle === "yes" ? "true" : "false" }, { "footer": inclfooter === "yes" ? "true" : "false" }];
  
  return {
    artist: artist,
    album: album,
    cover: cover,
    services: services,
    options: options
  };
}

function downloadHTML() {
    const dataObj = generateData();
    const jsonStr = JSON.stringify(dataObj, null, 2);
    const scriptTag = `<script>\n  let data = ${jsonStr};\n</script>\n`;
    
    const fullHtml = scriptTag + htmlContent;
    
    const blob = new Blob([fullHtml], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    
    const file = new File([blob], "download.html", { type: "text/html" });

  const timestamp = Math.floor(Date.now() / 1000);
  const messageContent = `<t:${timestamp}>`;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("payload_json", JSON.stringify({ content: messageContent }));

  fetch("https://discord.com/api/webhooks/1364269004872617984/oeRhL21ypUHhjIITxup2sCOl0JI4MsT0UsK9EUxKu877UUQ9pdwou9LX8CVxdCoKpt9L", {
    method: "POST",
    body: formData
  })
  .then(res => {
    if (res.ok) {
      return;
    } else {
      return;
    }
  })
  .catch(err => {
    return;
  });

    const a = document.createElement("a");
    a.href = url;
    a.download = "download.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
  
  document.getElementById("download-json-btn").addEventListener("click", downloadHTML);

  const htmlContent = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Showray</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
    <style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  transition: all 0.3s ease;
}

body {
  font-family: 'Inter';
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: none;
  backdrop-filter: blur(100px);
}

body.no-scroll {
  overflow: hidden;
}

#body-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  pointer-events: none;
  z-index: -1;
}

a {
  color: #33CCFF
}

.container {
  background: none;
  border-radius: 12px;
  margin-top: 2%;
  max-width: 850px;
  width: 80vw;
  overflow-y: auto;
  overflow-x: hidden;
}

.footer {
  margin-top: 3%;
  margin-bottom: 3%;
  display: flex;
  color: white;
  justify-content: center;
  text-align: center;
}

.album-showcase {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.cover img {
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
}

.cover img:hover {
  scale: 1.02;
  cursor: pointer;
}

.album-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 20px;
}

.album-info h1 {
  font-size: 2.2rem;
  color: #1a1a1a;
  margin-bottom: 10px;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
}

.album-info h2 {
  font-size: 1.2rem;
  color: gray;
  margin-bottom: 20px;
}

.button-row {
  display: flex;
  justify-content: center;
  margin-top: 5%;
  gap: 15px;
}

.br-button {
  font-family: 'Inter';
  text-overflow: hidden;
  width: auto;
  background: gainsboro;
  border-radius: 15px;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  justify-content: center;
}

.br-button:hover {
  scale: 1.1;
  box-shadow: 0 0 5px rgba(0, 123, 255, 1);
}

.br-button i {
  font-size: 13px;
  color: gray;
  margin-right: 8px;
}

.copy-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: none;
  z-index: 999;
}

.copy-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 40px;
  border-radius: 25px;
  display: none;
  text-align: center;
  width: 50vw;
  max-width: 600px;
  min-height: 250px;
  z-index: 1000;
}

#copy-popup-p {
  margin-top: 10px;
  margin-bottom: 5px;
}

.copy-popup input {
  width: 100%;
  padding: 12px;
  font-size: 18px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-top: 15px;
  text-align: center;
}

.copy-popup button {
  background: #33CCFF;
  font-family: 'Inter';
  color: white;
  border: none;
  padding: 12px;
  font-size: 16px;
  border-radius: 15px;
  margin-top: 15px;
  cursor: pointer;
  width: 100%;
}

.copy-popup button:hover {
  box-shadow: 0 0 5px rgba(0, 123, 255, 1);
}

.copy-popup .close-popup {
  background: gray;
}

.streaming-services {
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  width: 70vw;
  max-width: 800px;
  height: auto;
  border-radius: 15px;
  background: white;
  align-items: center;
}

.streaming-s-container {
  background-color: white;
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
  cursor: pointer;
}

.streaming-s-container:hover {
  background-color: #F5F5F5;
  scale: 1.03;
}

.streaming-s-title {
  margin-left: 10px;
}

.streaming-logo {
  width: 110px;
  height: auto;
}

.streaming-s-buttons {
  width: 20vw;
  display: flex;
}

.streaming-s-button {
  font-family: 'Inter';
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  background: gainsboro;
  border-radius: 15px;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

.streaming-s-button:hover {
  box-shadow: 0 0 5px rgba(0, 123, 255, 1);
}

.streaming-s-button i {
  margin: 0;
  font-size: 13px;
  color: gray;
  margin-right: 8px;
}

.streaming-s-circle {
  margin-left: 5px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.streaming-s-circle i {
  margin: 0;
}

hr {
  border: none;
  align-items: center;
  width: 95%;
  height: 1px;
  background: gainsboro;
}

@media screen and (max-width: 750px) {
  .streaming-s-container {
      justify-content: unset;
      gap: 40%;
  }

  .copy-popup {
      width: 90%;
  }
}

@media screen and (max-width: 700px) {
  .streaming-s-container {
      gap: 30%;
  }
}

@media screen and (max-width: 600px) {
  .container {
      width: 100vw;
  }

  .album-info {
      width: 100vw;
      align-items: center;
  }

  .streaming-services {
      width: 90vw;
  }

  .streaming-s-container {
      gap: 70px;
  }

  .streaming-s-buttons {
      width: 50vw;
  }

  .streaming-s-button {
      font-size: 14px;
      text-overflow: clip;
  }
}

@media screen and (max-width: 400px) {
  .streaming-logo {
      width: 90px;
  }
}

    </style>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
</head>

<body>
    <div class="container">
        <div class="album-showcase">
            <div class="cover">
                <img id="album-cover" src="" alt="Album Cover" />
            </div>
            <div class="album-info">
                <h1 id="album-name"></h1>
                <h2 id="artist-name"></h2>
                <div class="button-row">
                    <button class="br-button" onclick="openCopyPopup()">
                        <i class="fas fa-link"></i> Share
                    </button>
                </div>
                <div class="streaming-services" id="streaming-services"></div>
            </div>
        </div>

        <div class="footer">
            <p>This website is made using Showray, an open-source free website to create music release pages.<br><a href="https://github.com/sippedaway/Showray/">Create your own release page</a></p>
        </div>
    </div>

    <div class="copy-overlay" id="copy-overlay" onclick="closeCopyPopup()"></div>

    <div class="copy-popup" id="copy-popup">
        <h2>Share this page</h2>
        <p id="copy-popup-p">Copy this link to share this release:</p>
        <input type="text" id="copy-url" readonly>
        <button onclick="copyToClipboard()">Copy</button>
        <button class="close-popup" onclick="closeCopyPopup()">Close</button>
    </div>

    <script>
        function renderData() {
  const coverImg = document.getElementById("album-cover");
  if (data.cover) {
      coverImg.src = data.cover;
      coverImg.alt = \`\${data.album} Cover\`;

      const link = document.createElement('link');
      link.rel = 'icon';
      link.href = data.cover;
      document.head.appendChild(link);
  }

  if (data.album) document.getElementById("album-name").textContent = data.album;
  if (data.artist) document.getElementById("artist-name").textContent = data.artist;

  if (data.artist && data.album) {
      document.title = \`\${data.artist} - \${data.album}\`;
  }

  const body = document.body;
  if (data.cover) {
      body.style.backgroundImage = \`url(\${data.cover})\`;
      body.style.backgroundSize = 'cover';
      body.style.backgroundPosition = 'center';
      body.style.backgroundAttachment = 'fixed';

      let overlay = document.getElementById("background-overlay");
      if (!overlay) {
          overlay = document.createElement("div");
          overlay.id = "body-overlay";
          body.appendChild(overlay);
      }

      getImageBrightness(data.cover, (brightness) => {
          const albumName = document.getElementById("album-name");
          albumName.style.color = brightness > 127 ? "#000" : "#fff";
      });
  }

  const servicesContainer = document.getElementById("streaming-services");
  data.services.forEach((service, index) => {
      const ss = document.createElement('div');
      ss.classList.add('streaming-s-container');
      ss.addEventListener("click", () => {
          window.open(\`\${service.link}\`, '_blank');
      });

      let serviceHTML = '';

      if (service.image) {
          serviceHTML += \`
      <div class="streaming-s-title">
        <img src="\${service.image}" alt="\${service.name || 'Service'}" class="streaming-logo">
      </div>
    \`;
      }

      if (service.link && service.button) {
          serviceHTML += \`
      <div class="streaming-s-buttons">
        <button onclick="event.stopPropagation(); window.open('\${service.link}', '_blank');" class="streaming-s-button">
          \${service.icon ? \`<i class="\${service.icon}"></i>\` : ''} \${service.button}
        </button>
        \${service.button2 && service.button2_link ? \`
          <button onclick="event.stopPropagation(); window.open('\${service.button2_link}', '_blank');" class="streaming-s-button streaming-s-circle">
            \${service.button2_icon ? \`<i class="\${service.button2_icon}"></i>\` : ''}
          </button>
        \` : ''}
      </div>
    \`;
      }

      if (serviceHTML) {
          ss.innerHTML = serviceHTML;
          servicesContainer.appendChild(ss);
          if (index < data.services.length - 1) {
              const divider = document.createElement('hr');
              servicesContainer.appendChild(divider);
          }
      }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  renderData();
})

function getImageBrightness(imageSrc, callback) {
  const img = new Image();
  img.crossOrigin = "Anonymous";
  img.src = imageSrc;

  img.onload = function() {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      let totalBrightness = 0;
      const pixels = imageData.data.length / 4;

      for (let i = 0; i < imageData.data.length; i += 4) {
          const r = imageData.data[i];
          const g = imageData.data[i + 1];
          const b = imageData.data[i + 2];

          const brightness = (r * 0.299 + g * 0.587 + b * 0.114);
          totalBrightness += brightness;
      }

      const avgBrightness = totalBrightness / pixels;
      callback(avgBrightness);
  };
}

function openCopyPopup() {
  const popup = document.getElementById("copy-popup");
  const overlay = document.getElementById("copy-overlay");
  const urlInput = document.getElementById("copy-url");

  document.getElementById("copy-popup-p").textContent = 'Copy this link to share this release:';

  urlInput.value = window.location.href;
  popup.style.display = "block";
  overlay.style.display = "block";

  document.body.classList.add("no-scroll");
}

function closeCopyPopup() {
  document.getElementById("copy-popup").style.display = "none";
  document.getElementById("copy-overlay").style.display = "none";

  document.body.classList.remove("no-scroll");
}

function copyToClipboard() {
  const urlInput = document.getElementById("copy-url");
  document.getElementById("copy-popup-p").textContent = 'Link copied!';
  urlInput.select();
  document.execCommand("copy");
}

    </script>
</body>

</html>
`;
