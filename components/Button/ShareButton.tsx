import IconButton from "./IconButton"

const ShareButton = ({ title, text, url }) => {
  const isMobile = false;

  const handleMobileClick = () => {
    if (!navigator.share) {
      console.log('Share not supported on this browser, do it the old way.');
      return;
    }

    navigator.share({
      title,
      text,
      url,
    });
  };

  const handleDesktopClick = () => {
    
  };

  return (
    <IconButton
      onClick={isMobile ? handleMobileClick : handleDesktopClick}
      ariaLabel="share"
      imageAlt="share icon"
      imageSrc="/thumb.png"
      isPink
    />
  );
};

export default ShareButton;;
