import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {

  constructor() { }

  @ViewChild('canvas') canvasRef: ElementRef<HTMLCanvasElement>;
  enableDrawLine = false;
  enableZoom = false;


  private context: CanvasRenderingContext2D;
  private canvasNativeElement: HTMLCanvasElement;
  private file: File;
  private needFirstPoint = true;
  private mousePositionOne = [0, 0];
  private mousePositionTwo = [0, 0];

  ngAfterViewInit(): void {
    this.context = this.canvasRef.nativeElement.getContext('2d');
    this.canvasNativeElement = this.canvasRef.nativeElement;
    this.canvasNativeElement.width = 1000;
    this.canvasNativeElement.height = 500;
  }

  imgInputChange(fileInputEvent: any): void {
    this.file = fileInputEvent.target.files[0];
    this.cleanCanvas();
    this.drawImage();
  }

  zoomer(): void {
    this.enableZoom = !this.enableZoom;
    this.cleanCanvas();
    this.drawImage();
  }

  enableDraw(): void {
    this.enableDrawLine = !this.enableDrawLine;
  }

  clickRight(e: MouseEvent) {
    this.cleanCanvas();
    this.drawImage();
    this.needFirstPoint = true;
    return false;
  }

  draw(e: MouseEvent): void {
    if (this.enableDrawLine) {
      const y = e.offsetY;
      const x = e.offsetX;
      if (this.needFirstPoint) {
        this.mousePositionOne = [x, y]
        this.needFirstPoint = false;
      } else {
        this.mousePositionTwo = [x, y]
        this.drawLine();
        this.needFirstPoint = true;
      }
    }
  }

  private drawLine(): void {
    this.context.beginPath();
    this.context.strokeStyle = 'black';
    this.context.lineWidth = 1;
    this.context.moveTo(this.mousePositionOne[0], this.mousePositionOne[1]);
    this.context.lineTo(this.mousePositionTwo[0], this.mousePositionTwo[1]);
    this.context.stroke();
    this.context.closePath();
  }

  private drawImage(): void {
    if (this.file) {
      const img = new Image;
      img.onload = () => {
        const hRatio = this.canvasNativeElement.width / img.width;
        const vRatio = this.canvasNativeElement.height / img.height;
        const ratio = Math.min(hRatio, vRatio);
        const centerShift_x = (this.canvasNativeElement.width - img.width * ratio) / 2;
        const centerShift_y = (this.canvasNativeElement.height - img.height * ratio) / 2;
        if (this.enableZoom) {
          this.context.drawImage(img, img.width / 4, img.height / 4, img.width / 2, img.height / 2, centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
        } else {
          this.context.drawImage(img, 0, 0, img.width, img.height, centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
        }
      }
      img.src = URL.createObjectURL(this.file);
    }
  }

  private cleanCanvas(): void {
    this.context.clearRect(0, 0, this.canvasNativeElement.width, this.canvasNativeElement.height);
  }

}
