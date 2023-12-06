import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'recon',
  templateUrl: './recon.component.html',
  styleUrls: ['./recon.component.css']
})
export class FaceDetectionComponent implements AfterViewInit {
  @ViewChild('videoElement')
  videoElement!: ElementRef;

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    this.startVideo();
  }

  async startVideo(): Promise<void> {
    const video = this.videoElement.nativeElement as HTMLVideoElement;

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: {} });
      video.srcObject = stream;
    } catch (err) {
      console.error(err);
    }

    video.addEventListener('play', async () => {
      const canvas = document.createElement('canvas');
      
      const context = canvas.getContext('2d');

      setInterval(() => {
        if (video.paused || video.ended) {
          return;
        }

        const width = video.videoWidth;
        const height = video.videoHeight;
        canvas.width = width;
        canvas.height = height;
        context?.drawImage(video, 0, 0, width, height);

        const imageData = context?.getImageData(0, 0, width, height);
        if (imageData) {
          const skinPixels = this.detectSkin(imageData);
          const faceDetected = skinPixels > 10000; // Adjust threshold as needed

          if (faceDetected) {
            console.log("Face detected");
            this.router.navigate(['/acess']);
          }
        }
      }, 3333); // Adjust the interval as needed
    });
  }

  detectSkin(imageData: ImageData): number {
    const pixels = imageData.data;
    let skinPixels = 0;

    for (let i = 0; i < pixels.length; i += 4) {
      const red = pixels[i];
      const green = pixels[i + 1];
      const blue = pixels[i + 2];

      if (red > 60 && green > 40 && blue > 20 && red > green && red > blue && Math.abs(red - green) > 15) {
        skinPixels++;
      }
    }

    return skinPixels;
  }
}
