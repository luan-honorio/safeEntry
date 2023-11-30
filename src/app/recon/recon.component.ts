import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';



declare const faceapi: any; 

@Component({
  selector: 'recon',
  templateUrl: './recon.component.html',
  styleUrls: ['./recon.component.css']
})
export class FaceDetectionComponent {
  @ViewChild('imageInput')
  imageInput!: ElementRef;

  constructor(private router: Router) {}

  async detectFaces(): Promise<void> {
    const input = this.imageInput.nativeElement as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const imgFile = input.files[0];
      const img = await faceapi.bufferToImage(imgFile);
      
      await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
      
      const detections = await faceapi.detectAllFaces(img, new faceapi.TinyFaceDetectorOptions());

      if (detections && detections.length > 0) {
        this.router.navigate(['\acess']); 
      } else {
        console.log('No faces detected.');
      }
    }
  }
}
