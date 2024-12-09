import React from 'react';
import './AboutUs.css'; // Import the CSS file

const AboutUs = () => {
  const artImages = [
  
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1qWHLfcr_uKOfvQl_zTwb2mNtYMy75XpME9k6d8tHWUpKMrpfOaKOZNdjWW5zP8rJXd0&usqp=CAU', 
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs71ah37oAY1zy7sdcUG3bTmMLux4M4tD3jQ&s',
    'https://cdn11.bigcommerce.com/s-x49po/images/stencil/1500x1500/products/48378/280974/1580748722098_93a8c1c145e223b79d3f1021cfa0586b__94897.1687415068.jpg?c=2&imbypass=on',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTTdg2mYqxsDTBpaDrYXBsA8yuiFSjJYJi7ySUJUVrlS5J67xyVPau4KEGcU3olQtQ9iI&usqp=CAU',
    'https://artlogic-res.cloudinary.com/w_1000,h_1000,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/porthminstergallery/images/view/6c48fb59a5d5edc2d59b52997f568e5a.jpg',
    'https://5.imimg.com/data5/JJ/KF/TG/SELLER-88896786/marble-madhubani-design-mobile-stand-500x500.jpg',
];

  return (
    <div className="about-us-container">
      <h1 className="about-us-heading">About Us</h1>
      <p className="about-us-paragraph">
        Welcome to our Art Gallery Project, where creativity meets passion. Our mission is to showcase
        the vibrant world of art through diverse exhibitions that inspire and engage the community.
        We believe in the power of art to transform spaces and minds, and we are dedicated to
        providing a platform for both emerging and established artists. Join us in celebrating
        creativity and expression in a space designed to captivate and inspire.


        Our gallery hosts a variety of exhibitions throughout the year, featuring diverse styles and mediums. 
        We believe in fostering a community where artists and art enthusiasts can connect and inspire one another. 
        In addition to exhibitions, we offer workshops and events aimed at engaging the public and promoting art education. 
        Our team is passionate about art and is here to guide you through your artistic journey. 
        We invite you to visit us and immerse yourself in the creativity that surrounds you!
        
      </p>

      <div className="art-gallery">
      {artImages.map((image, index) => (
  <img key={index} src={image} alt={`Art ${index + 1}`} className="art-image" />
))}

      </div>
    </div>
  );
};

export default AboutUs;