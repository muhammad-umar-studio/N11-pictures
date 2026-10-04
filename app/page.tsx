import { client } from "../sanity";

export default async function Home() {
  const films = await client.fetch(`*[_type == "film"]{
    _id,
    title,
    category,
    "slug": slug.current
  }`);

  return (
    <>
      <section className="section-hero">
        <div className="wrapper-letter">
          
          {/* Letter N */}
          <div className="block-letter">
            <a href="https://www.n11pictures.com/project/showreel1" className="w-inline-block">
              <div data-w-id="b9c95c08-a63d-9c45-eef6-dcb98a345cd3" className="letter preload-1">N</div>
              {/* RESTORED: w-background-video classes to bring the masking boundaries back */}
              <div data-poster-url="/videos/0301-13-poster-00001.jpg" data-video-urls="/videos/0301-13-transcode.mp4,/videos/0301-13-transcode.webm" data-autoplay="true" data-loop="true" data-wf-ignore="true" className="bg-video-letter w-background-video w-background-video-atom">
                <video id="1f591597-8df1-e7b9-dcd6-f143391bb6a1-video" autoPlay loop style={{ backgroundImage: 'url("/videos/0301-13-poster-00001.jpg")' }} muted playsInline data-wf-ignore="true" data-object-fit="cover">
                  <source src="/videos/0301-13-transcode.mp4" data-wf-ignore="true" />
                  <source src="/videos/0301-13-transcode.webm" data-wf-ignore="true" />
                </video>
              </div>
            </a>
          </div>

          {/* Letter 11 */}
          <div className="block-letter">
            <a href="https://www.n11pictures.com/project/spectrum" className="w-inline-block">
              <div data-poster-url="/videos/0301-15-poster-00001.jpg" data-video-urls="/videos/0301-15-transcode.mp4,/videos/0301-15-transcode.webm" data-autoplay="true" data-loop="true" data-wf-ignore="true" className="bg-video-letter w-background-video w-background-video-atom">
                <video id="f4078344-e49e-8528-9966-ad4ef4d698de-video" autoPlay loop style={{ backgroundImage: 'url("/videos/0301-15-poster-00001.jpg")' }} muted playsInline data-wf-ignore="true" data-object-fit="cover">
                  <source src="/videos/0301-15-transcode.mp4" data-wf-ignore="true" />
                  <source src="/videos/0301-15-transcode.webm" data-wf-ignore="true" />
                </video>
              </div>
              <div data-w-id="b5d7e1f9-a582-3059-be8a-421711aac49f" className="letter preload-2">11</div>
            </a>
          </div>

          {/* Letter P */}
          <div className="block-letter">
            <a href="https://www.n11pictures.com/project/obsidian" className="w-inline-block">
              <div data-w-id="2a4c7c2f-7d3f-e480-a76b-8a544356a6bd" className="letter preload-5">P</div>
              <div data-poster-url="/videos/cabin-poster-00001.jpg" data-video-urls="/videos/cabin-transcode.mp4,/videos/cabin-transcode.webm" data-autoplay="true" data-loop="true" data-wf-ignore="true" className="bg-video-letter w-background-video w-background-video-atom">
                <video id="2a4c7c2f-7d3f-e480-a76b-8a544356a6bf-video" autoPlay loop style={{ backgroundImage: 'url("/videos/cabin-poster-00001.jpg")' }} muted playsInline data-wf-ignore="true" data-object-fit="cover">
                  <source src="/videos/cabin-transcode.mp4" data-wf-ignore="true" />
                  <source src="/videos/cabin-transcode.webm" data-wf-ignore="true" />
                </video>
              </div>
            </a>
          </div>

          {/* Letter I */}
          <div className="block-letter">
            <a href="https://www.n11pictures.com/music-video/re-arranger" className="w-inline-block">
              <div data-w-id="483b44f3-6d10-08f8-b09b-a051bc2cc26b" className="letter preload-5">I</div>
              <div data-poster-url="/videos/0301-11-poster-00001.jpg" data-video-urls="/videos/0301-11-transcode.mp4" data-autoplay="true" data-loop="true" data-wf-ignore="true" className="bg-video-letter w-background-video w-background-video-atom">
                <video id="2a4c7c2f-7d3f-e480-a76b-8a544356a6c1-video" autoPlay loop style={{ backgroundImage: 'url("/videos/0301-11-poster-00001.jpg")' }} muted playsInline data-wf-ignore="true" data-object-fit="cover">
                  <source src="/videos/0301-11-transcode.mp4" data-wf-ignore="true" />
                </video>
              </div>
            </a>
          </div>

          {/* Letter C */}
          <div className="block-letter">
            <a href="https://www.n11pictures.com/gyms/toptier-brandon-lewis" className="w-inline-block">
              <div data-poster-url="/videos/videoplayback-5-poster-00001.jpg" data-video-urls="/videos/videoplayback-5-transcode.mp4" data-autoplay="true" data-loop="true" data-wf-ignore="true" className="bg-video-letter w-background-video w-background-video-atom">
                <video id="2a4c7c2f-7d3f-e480-a76b-8a544356a6c3-video" autoPlay loop style={{ backgroundImage: 'url("/videos/videoplayback-5-poster-00001.jpg")' }} muted playsInline data-wf-ignore="true" data-object-fit="cover">
                  <source src="/videos/videoplayback-5-transcode.mp4" data-wf-ignore="true" />
                </video>
              </div>
              <div data-w-id="64cfbf2f-8a94-c872-bd99-01f3714a32b8" className="letter preload-5">C</div>
            </a>
          </div>

          {/* Letter T */}
          <div className="block-letter">
            <a href="https://www.n11pictures.com/bens-samuel/just-e-t" className="w-inline-block">
              <div data-poster-url="/videos/videoplayback-6-poster-00001.jpg" data-video-urls="/videos/videoplayback-6-transcode.mp4,/videos/videoplayback-6-transcode.webm" data-autoplay="true" data-loop="true" data-wf-ignore="true" className="bg-video-letter w-background-video w-background-video-atom">
                <video id="2a4c7c2f-7d3f-e480-a76b-8a544356a6c5-video" autoPlay loop style={{ backgroundImage: 'url("/videos/videoplayback-6-poster-00001.jpg")' }} muted playsInline data-wf-ignore="true" data-object-fit="cover">
                  <source src="/videos/videoplayback-6-transcode.mp4" data-wf-ignore="true" />
                  <source src="/videos/videoplayback-6-transcode.webm" data-wf-ignore="true" />
                </video>
              </div>
              <div data-w-id="17c1bed0-2b67-d831-b22d-d849cdde8d77" className="letter preload-5">T</div>
            </a>
          </div>

          {/* Letter U */}
          <div className="block-letter">
            <a href="https://www.n11pictures.com/hospitality/best-bartender-in-london-watch-these-talented-bartenders-craft-delicious-cocktails" className="w-inline-block">
              <div data-poster-url="/videos/0301-1-poster-00001.jpg" data-video-urls="/videos/0301-1-transcode.mp4" data-autoplay="true" data-loop="true" data-wf-ignore="true" className="bg-video-letter w-background-video w-background-video-atom">
                <video id="2a4c7c2f-7d3f-e480-a76b-8a544356a6c7-video" autoPlay loop style={{ backgroundImage: 'url("/videos/0301-1-poster-00001.jpg")' }} muted playsInline data-wf-ignore="true" data-object-fit="cover">
                  <source src="/videos/0301-1-transcode.mp4" data-wf-ignore="true" />
                </video>
              </div>
              <div data-w-id="d314eca0-f488-0dda-6601-c25d82aaa16a" className="letter preload-5">U</div>
            </a>
          </div>

          {/* Letter R */}
          <div className="block-letter">
            <a href="https://www.n11pictures.com/bens-samuel/days-go-by" className="w-inline-block">
              <div data-poster-url="/videos/Days-go-back-poster-00001.jpg" data-video-urls="/videos/Days-go-back-transcode.mp4" data-autoplay="true" data-loop="true" data-wf-ignore="true" className="bg-video-letter w-background-video w-background-video-atom">
                <video id="2a4c7c2f-7d3f-e480-a76b-8a544356a6c9-video" autoPlay loop style={{ backgroundImage: 'url("/videos/Days-go-back-poster-00001.jpg")' }} muted playsInline data-wf-ignore="true" data-object-fit="cover">
                  <source src="/videos/Days-go-back-transcode.mp4" data-wf-ignore="true" />
                </video>
              </div>
              <div data-w-id="52a80225-62cb-79fc-e60f-75eb2333caf4" className="letter preload-5">R</div>
            </a>
          </div>

          {/* Letter E */}
          <div className="block-letter">
            <a href="https://www.n11pictures.com/gyms/toptier-tumi-phillips" className="w-inline-block">
              <div data-poster-url="/videos/promo-poster-00001.jpg" data-video-urls="/videos/promo-transcode.mp4" data-autoplay="true" data-loop="true" data-wf-ignore="true" className="bg-video-letter w-background-video w-background-video-atom">
                <video id="2a4c7c2f-7d3f-e480-a76b-8a544356a6cb-video" autoPlay loop style={{ backgroundImage: 'url("/videos/promo-poster-00001.jpg")' }} muted playsInline data-wf-ignore="true" data-object-fit="cover">
                  <source src="/videos/promo-transcode.mp4" data-wf-ignore="true" />
                </video>
              </div>
              <div data-w-id="6067dabb-0a86-a725-8d95-2f056c89e4b2" className="letter preload-5">E</div>
            </a>
          </div>

          {/* Letter S */}
          <div className="block-letter">
            <a href="https://www.n11pictures.com/project/obsidian" className="w-inline-block">
              <div data-poster-url="/videos/Folie-à-Deux-Cabin-Fever---Naveed-Mir-720p-h264-poster-00001.jpg" data-video-urls="/videos/Folie-à-Deux-Cabin-Fever---Naveed-Mir-720p-h264-transcode.mp4" data-autoplay="true" data-loop="true" data-wf-ignore="true" className="bg-video-letter w-background-video w-background-video-atom">
                <video id="997a703b-896a-57d1-7b9e-5614bb831458-video" autoPlay loop style={{ backgroundImage: 'url("/videos/Folie-à-Deux-Cabin-Fever---Naveed-Mir-720p-h264-poster-00001.jpg")' }} muted playsInline data-wf-ignore="true" data-object-fit="cover">
                  <source src="/videos/Folie-à-Deux-Cabin-Fever---Naveed-Mir-720p-h264-transcode.mp4" data-wf-ignore="true" />
                </video>
              </div>
              <div data-w-id="997a703b-896a-57d1-7b9e-5614bb831459" className="letter preload-5">S</div>
            </a>
          </div>

        </div>
        <div className="block-info">
          <div className="text-info">creating award-winning films and music videos</div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{
        __html: `
          /* 1. Tell Webflow the wrapper is fully visible so it never pauses the videos */
          .bg-video-letter {
            opacity: 1 !important;
            display: block !important;
          }
          
          /* 2. Hide the actual inner video element natively */
          .bg-video-letter video {
            opacity: 0 !important;
            transition: opacity 0.4s ease-in-out !important;
          }
          
          /* 3. Reveal the video inside the mask on hover */
          .w-inline-block:hover .bg-video-letter video {
            opacity: 1 !important;
          }
        `
      }} />
    </>
  );
}