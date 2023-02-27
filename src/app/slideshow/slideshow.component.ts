import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit{
  images=['code.jpg','labtop.jpg','PC1.jpg','medical.jpeg','munich.jpg'];
  headlines=['Enjoying to code','Engineering to the next level','Progress never stops','Medical background for coding','Graduated in Munich' ]
 currentImage=0;
 showImage=true;
 
 ngOnInit(){
   this.changeImage();
 
 }
 
 changeImage(){
 setInterval(()=>{
   this.currentImage++;
   this.currentImage=this.currentImage % this.images.length;
   this.showImage=false;
   setTimeout(()=>{
     this.showImage=true;
   },10)
   
 },8000);
 
 
 }
 }
 

