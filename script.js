// Función para filtrar videos
function filterVideos() {
    const searchInput = document.getElementById('search-bar').value.toLowerCase();
    const filterCategory = document.getElementById('filter').value;
    const videoGrid = document.getElementById('video-grid');
    const videos = videoGrid.getElementsByClassName('video-item');

    for (let i = 0; i < videos.length; i++) {
        const videoTitle = videos[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
        const videoCategory = videos[i].classList.contains(filterCategory) || filterCategory === 'all';
        
        if (videoTitle.includes(searchInput) && videoCategory) {
            videos[i].parentElement.style.display = 'block';
        } else {
            videos[i].parentElement.style.display = 'none';
        }
    }
}
