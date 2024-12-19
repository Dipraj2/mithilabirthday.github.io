const giftBox = document.getElementById('giftBox');
const imagesContainer = document.getElementById('images');

// Create multiple images to appear after gift opening
const imageUrls = [
    'https://scontent.fdac5-2.fna.fbcdn.net/v/t1.6435-9/56213707_632759920494233_926635371591106560_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE3zzL5J4nw2qgupL30jnrJ-6k4-qyWtjH7qTj6rJa2MW-U-Y2rAxR_nbCN5OvDb7Ee-A_gwtbt_X9zGbewaZJ-&_nc_ohc=K4oWYT35XnsQ7kNvgEe8exk&_nc_zt=23&_nc_ht=scontent.fdac5-2.fna&_nc_gid=AnQbQ5sQD9B-EqeBYMCh8l5&oh=00_AYBVQrlJFcClMYienai3HBDHlKws61yZmveVxpyvhjty7w&oe=678BCC4B',
    'https://i.pinimg.com/1200x/2c/83/fb/2c83fbaad5b3937e7fb1aaff07192cdf.jpg',
    'https://thumbs.dreamstime.com/b/bangladeshi-women-s-traditional-colorful-jamdani-saree-hanging-retail-showrooms-texture-background-262441732.jpg',
    'https://m.media-amazon.com/images/I/81C68CpqINL._AC_UF1000,1000_QL80_.jpg'
];

// Append image elements to the images container
imageUrls.forEach(url => {
    const img = document.createElement('img');
    img.src = url;
    imagesContainer.appendChild(img);
});

// Make the gift box clickable
giftBox.addEventListener('click', () => {
    // Hide the gift box when clicked
    //giftBox.classList.add('hide');
    const imageElement = document.getElementById('giftBox'); imageElement.src = 'https://parspng.com/wp-content/uploads/2022/02/giftboxpng.parspng.com-4.png';

    // Show images after a short delay
    setTimeout(() => {
        imagesContainer.style.opacity = 1;

        // Animate images coming out of the gift box
        const images = imagesContainer.querySelectorAll('img');
        images.forEach((img, index) => {
            setTimeout(() => {
                img.style.transform = 'translateY(0)';
                img.style.opacity = 1;
            }, index * 300); // Delay each image animation
        });
    }, 1000);
    //img.src = 'https://parspng.com/wp-content/uploads/2022/02/giftboxpng.parspng.com-4.png';
    //  // Wait for gift box to disappear before showing images
});

// Create birthday balloons raining down
const balloonContainer = document.body;
for (let i = 0; i < 20; i++) {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    balloon.textContent = '🎈';
    balloonContainer.appendChild(balloon);
}
