"use client";

import { useEffect } from "react";

export default function HeyGenAutoLoad() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      const script = document.createElement("script");
      script.innerHTML = `!function(window){const host="https://labs.heygen.com",url=host+"/guest/streaming-embed?share=eyJxdWFsaXR5IjoiaGlnaCIsImF2YXRhck5hbWUiOiIzYmRiNTIzMWE4MmM0OTZkOWE5MjQxZDcw%0D%0AYjQyNzYwMyIsInByZXZpZXdJbWciOiJodHRwczovL2ZpbGVzMi5oZXlnZW4uYWkvYXZhdGFyL3Yz%0D%0ALzNiZGI1MjMxYTgyYzQ5NmQ5YTkyNDFkNzBiNDI3NjAzL2Z1bGwvMi4yL3ByZXZpZXdfdGFyZ2V0%0D%0ALndlYnAiLCJuZWVkUmVtb3ZlQmFja2dyb3VuZCI6ZmFsc2UsImtub3dsZWRnZUJhc2VJZCI6ImRm%0D%0AMzU2ZjIyYTg0NDQzN2U5MDJjZDhkZTU5Y2E0MDE1IiwidXNlcm5hbWUiOiI5M2QwNWI3NzU4YjA0%0D%0ANDViOWIzOWEzNmUwNzAzY2M4ZCJ9&inIFrame=1",clientWidth=document.body.clientWidth,wrapDiv=document.createElement("div");wrapDiv.id="heygen-streaming-embed";const container=document.createElement("div");container.id="heygen-streaming-container";const stylesheet=document.createElement("style");stylesheet.innerHTML=\`#heygen-streaming-embed{z-index:9999;position:fixed; right: 15px;
      bottom: 160px;
      width: 80px;
      height: 80px;border-radius:50%;border:2px solid #fff;box-shadow:0px 8px 24px 0px rgba(0,0,0,0.12);transition:all linear 0.1s;overflow:hidden;opacity:0;visibility:hidden;}#heygen-streaming-embed.show{opacity:1;visibility:visible;}#heygen-streaming-embed.expand{\${clientWidth<540?"height: 266px; width: 96%; left: 50%; transform: translateX(-50%);":"height: 366px; width: calc(366px * 16 / 9);"}border:0;border-radius:8px;}#heygen-streaming-container{width:100%;height:100%;}#heygen-streaming-container iframe{width:100%;height:100%;border:0;}\`;const iframe=document.createElement("iframe");iframe.allowFullscreen=!1,iframe.title="Streaming Embed",iframe.role="dialog",iframe.allow="microphone",iframe.src=url;let visible=!1,initial=!1;window.addEventListener("message",(e=>{e.origin===host&&e.data&&e.data.type&&"streaming-embed"===e.data.type&&("init"===e.data.action?(initial=!0,wrapDiv.classList.toggle("show",initial)):"show"===e.data.action?(visible=!0,wrapDiv.classList.toggle("expand",visible)):"hide"===e.data.action&&(visible=!1,wrapDiv.classList.toggle("expand",visible)))})),container.appendChild(iframe),wrapDiv.appendChild(stylesheet),wrapDiv.appendChild(container),document.body.appendChild(wrapDiv)}(globalThis);`;

      document.body.appendChild(script);
    }, 5000); // 5 second delay

    return () => clearTimeout(timeout);
  }, []);

  return null;
}
