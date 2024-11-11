document.addEventListener("DOMContentLoaded", function() {
    const difficultyButtons = document.querySelectorAll('.difficulty-buttons button');
    const fileButtons = document.querySelectorAll('.file-buttons button');
    const uploadMusicInput = document.getElementById('uploadMusicInput');
    const fileInput = document.getElementById('fileInput');
    const osuMap = document.querySelector('.osu-map');
    const attachedBox = document.querySelector('.attached-box');
    let isMp3Selected = false;

    //  Difficulty click
    difficultyButtons.forEach(button => {
        button.addEventListener('click', function() {
            difficultyButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // file click
    fileButtons.forEach(button => {
        button.addEventListener('click', function() {
            fileButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            isMp3Selected = button.textContent.toLowerCase() === 'mp3';
        });
    });

    // click Upload Music
    uploadMusicInput.addEventListener('click', function() {
        if (isMp3Selected) {
            fileInput.click();
        }
    });

    // select file
    fileInput.addEventListener('change', function() {
        if (fileInput.files.length > 0) {
            osuMap.classList.add('reverse');
        }
    });

    // download
    const downloadButton = document.querySelector('.download-button');
    const loadingOverlay = document.querySelector('.loading-overlay');
    const progressBar = document.querySelector('.progress-bar');
    const progressText = document.querySelector('.progress-text');

    downloadButton.addEventListener('click', function() {
        loadingOverlay.classList.add('active');

        let progress = 0;
        const interval = setInterval(function() {
            progress += 1;
            progressBar.style.width = progress + '%';
            progressText.textContent = `Downloading... ${progress}%`;

            if (progress >= 100) {
                clearInterval(interval);
                setTimeout(function() {
                    loadingOverlay.classList.remove('active');
                    alert('Download complete!');
                }, 500);
            }
        }, 50);
    });

    // change color between .osu-map  and .attached-box
    osuMap.addEventListener('click', function() {
        osuMap.classList.toggle('active');
        attachedBox.classList.toggle('active');
    });

    attachedBox.addEventListener('click', function() {
        osuMap.classList.toggle('active');
        attachedBox.classList.toggle('active');
    });
});
