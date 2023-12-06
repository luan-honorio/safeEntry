import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'recon',
  templateUrl: './recon.component.html',
  styleUrls: ['./recon.component.css']
})
export class FaceDetectionComponent implements AfterViewInit {
  @ViewChild('videoElement')
  videoElement!: ElementRef;

  constructor() {}

  async ngAfterViewInit(): Promise<void> {
    const video = this.videoElement.nativeElement as HTMLVideoElement;

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: {} });
      video.srcObject = stream;

      video.addEventListener('play', async () => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        const width = video.width;
        const height = video.height;
        canvas.width = width;
        canvas.height = height;

        document.body.appendChild(canvas);

        setInterval(() => {
          if (video.paused || video.ended) {
            return;
          }

          context?.drawImage(video, 0, 0, width, height);
          const imageData = context?.getImageData(0, 0, width, height);

          if (imageData) {
            const skinPixels = this.detectSkin(imageData);
            const faceDetected = skinPixels > 10000; // Adjust threshold as needed

            if (faceDetected) {
              console.log('Face detected');
              // Implement your logic here upon face detection
            }
          }
        }, 1000); // Adjust the interval as needed
      });
    } catch (err) {
      console.error(err);
    }
  }

  detectSkin(imageData: ImageData): number {
    const pixels = imageData.data;
    let skinPixels = 0;

    for (let i = 0; i < pixels.length; i += 4) {
      const red = pixels[i];
      const green = pixels[i + 1];
      const blue = pixels[i + 2];

      // Simple heuristic for skin color based on RGB values
      if (red > 60 && green > 40 && blue > 20 && red > green && red > blue && Math.abs(red - green) > 15) {
        skinPixels++;
      }
    }

    return skinPixels;
  }
}
