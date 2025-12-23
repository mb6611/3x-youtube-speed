export default defineContentScript({
  matches: ['*://*.youtube.com/*'],
  main() {
    browser.runtime.onMessage.addListener((message: { type: string; speed: number }) => {
      if (message.type === 'SET_SPEED') {
        const video = document.querySelector('video') as HTMLVideoElement;
        if (video) {
          video.playbackRate = message.speed;
        }
      }
    });
  },
});
