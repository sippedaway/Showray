let data = {
  "artist": "Future, Metro Boomin",
  "album": "WE DON'T TRUST YOU",
  "cover": "https://upload.wikimedia.org/wikipedia/en/8/8a/Future_and_Metro_Boomin_-_We_Don%27t_Trust_You.png",
  "services": [{
          "name": "Spotify",
          "button": "Play",
          "link": "https://open.spotify.com/",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/1280px-Spotify_logo_with_text.svg.png",
          "icon": "fas fa-play",
          "button2": "Open in app",
          "button2_link": "spotify:album:1pzvBxYgT6OVwJLtHkrdQK",
          "button2_icon": "fas fa-external-link"
      },
      {
          "name": "Apple Music",
          "button": "Play",
          "link": "https://music.apple.com/",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Apple_Music_logo.svg/1024px-Apple_Music_logo.svg.png",
          "icon": "fas fa-play"
      },
      {
          "name": "Amazon Music",
          "button": "Play",
          "link": "https://music.amazon.com/",
          "image": "https://upload.wikimedia.org/wikipedia/commons/1/12/Amazon_Music_%28Logo%29.svg",
          "icon": "fas fa-play"
      },
      {
          "name": "YouTube Music",
          "button": "Play",
          "link": "https://music.youtube.com/",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/YT_Music.svg/1024px-YT_Music.svg.png",
          "icon": "fas fa-play"
      },
      {
          "name": "iTunes Store",
          "button": "Download",
          "link": "https://music.apple.com/",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/ITunes_Store_logo.svg/2560px-ITunes_Store_logo.svg.png",
          "icon": "fas fa-download"
      },
      {
          "name": "Soundcloud",
          "button": "Play",
          "link": "https://soundcloud.com/",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Soundcloud_logo.svg/2560px-Soundcloud_logo.svg.png",
          "icon": "fas fa-play"
      },
      {
          "name": "TIDAL",
          "button": "Play",
          "link": "https://tidal.com/",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Tidal_%28service%29_logo.svg/1280px-Tidal_%28service%29_logo.svg.png",
          "icon": "fas fa-play"
      }
  ],
  "options": [{
    "share-button": "true",
    "footer": "true"
  }]
};

function renderData() {
  const coverImg = document.getElementById("album-cover");
  if (data.cover) {
      coverImg.src = data.cover;
      coverImg.alt = `${data.album} Cover`;

      const link = document.createElement('link');
      link.rel = 'icon';
      link.href = data.cover;
      document.head.appendChild(link);
  }

  if (data.album) document.getElementById("album-name").textContent = data.album;
  if (data.artist) document.getElementById("artist-name").textContent = data.artist;

  if (data.artist && data.album) {
      document.title = `${data.artist} - ${data.album}`;
  }

  const body = document.body;
  if (data.cover) {
      body.style.backgroundImage = `url(${data.cover})`;
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
          window.open(`${service.link}`, '_blank');
      });

      let serviceHTML = '';

      if (service.image) {
          serviceHTML += `
      <div class="streaming-s-title">
        <img src="${service.image}" alt="${service.name || 'Service'}" class="streaming-logo">
      </div>
    `;
      }

      if (service.link && service.button) {
          serviceHTML += `
      <div class="streaming-s-buttons">
        <button onclick="event.stopPropagation(); window.open('${service.link}', '_blank');" class="streaming-s-button">
          ${service.icon ? `<i class="${service.icon}"></i>` : ''} ${service.button}
        </button>
        ${service.button2 && service.button2_link ? `
          <button onclick="event.stopPropagation(); window.open('${service.button2_link}', '_blank');" class="streaming-s-button streaming-s-circle">
            ${service.button2_icon ? `<i class="${service.button2_icon}"></i>` : ''}
          </button>
        ` : ''}
      </div>
    `;
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
