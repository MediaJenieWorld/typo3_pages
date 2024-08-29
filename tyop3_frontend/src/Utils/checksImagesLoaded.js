export function checkAllImagesLoaded() {
  const header = document.querySelector(".header1");
  const images = document.querySelectorAll(
    header?.nextSibling?.className || "body " + " img"
  ); // Select all image elements
  let notLoaded = [];

  images.forEach((image) => {
    const isLoaded = image.complete && image.naturalWidth > 0;
    if (!isLoaded) {
      img.addEventListener("load", checkAllImagesLoaded);
      notLoaded.push(false);
    }
  });
  return notLoaded.length > 0 ? false : true;
}

export function promiseImgLoaded() {
  return new Promise((resolve) => {
    const header = document.querySelector(".header1");
    const images = document.querySelectorAll(
      header?.nextSibling?.className || "body " + " img"
    ); // Select all image elements
    let notLoaded = [];

    // Check if all images are loaded
    images.forEach((image) => {
      const isLoaded = image.complete && image.naturalWidth > 0;
      if (!isLoaded) {
        notLoaded.push(image); // Store the image that is not loaded
        image.addEventListener("load", () => {
          // Check again after the image has loaded
          notLoaded = notLoaded.filter((img) => img !== image); // Remove the loaded image from notLoaded
          if (notLoaded.length === 0) {
            resolve(true); // All images are loaded
          }
        });
        image.addEventListener("error", () => {
          // Handle image load error
          notLoaded = notLoaded.filter((img) => img !== image); // Remove the errored image from notLoaded
          if (notLoaded.length === 0) {
            resolve(false); // All images are either loaded or errored
          }
        });
      }
    });

    // If there are no images not loaded, resolve immediately
    if (notLoaded.length === 0) {
      resolve(true);
    }
  });
}
