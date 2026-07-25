document.querySelectorAll('.media-frame').forEach((frame) => {
  const image = frame.querySelector('img');
  const placeholder = frame.querySelector('.media-placeholder');
  if (!image || !placeholder) return;
  image.addEventListener('load', () => { placeholder.hidden = true; });
  image.addEventListener('error', () => { placeholder.hidden = false; });
});

document.querySelectorAll('.video-wrap').forEach((wrap) => {
  const video = wrap.querySelector('video');
  const fallback = wrap.querySelector('.video-fallback');
  video.addEventListener('loadeddata', () => { fallback.hidden = true; });
  video.addEventListener('error', () => {
    video.style.display = 'none';
    fallback.hidden = false;
  });
});
