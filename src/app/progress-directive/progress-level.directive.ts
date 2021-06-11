import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appProgressLevel]',
})
export class ProgressLevelDirective {
  @Input() set progressLevel(progressLevel: number) {
    this.progressStatus = progressLevel;
    this.setProgressLevel();
  }
  progressStatus: number;
  constructor(private elementRef: ElementRef) {}
  setProgressLevel(): void {
    const parentNode = this.elementRef.nativeElement.parentNode;
    if (document.getElementById('progressBar')) {
      parentNode.removeChild(document.getElementById('progressBar'));
    }
    this.elementRef.nativeElement.style.borderRadius = '50%';
    this.elementRef.nativeElement.style.border = '5px solid #e7e7e7';
    const nativeProps = window.getComputedStyle(this.elementRef.nativeElement);
    const progressEl = document.createElement('div');
    progressEl.style.backgroundColor = 'dodgerblue';
    progressEl.style.borderRadius = '50%';
    progressEl.setAttribute('id', 'progressBar');
    const newWidth =
      Number(nativeProps.width.slice(0, nativeProps.width.length - 2)) + 50;
    const newHeight =
      Number(nativeProps.height.slice(0, nativeProps.width.length - 2)) + 50;
    progressEl.style.width = newWidth + 'px';
    progressEl.style.height = newHeight + 'px';
    progressEl.style.position = 'absolute';
    progressEl.style.zIndex = '-9999';
    if (this.progressStatus > 0 && this.progressStatus != 100) {
      if (this.progressStatus < 50) {
        const degRange = 90 + this.progressStatus * 3.6;
        progressEl.style.backgroundImage =
          'linear-gradient(' +
          degRange +
          'deg, transparent 50%, white 50%),linear-gradient(90deg, white 50%, transparent 50%)';
      } else if (this.progressStatus == 50) {
        progressEl.style.backgroundImage =
          'linear-gradient(90deg, white 50%, transparent 50%)';
      } else {
        const degRange = 90 + (this.progressStatus - 50) * 3.6;
        progressEl.style.backgroundImage =
          'linear-gradient(' +
          degRange +
          'deg, transparent 50%, dodgerblue 50%),linear-gradient(90deg, white 50%, transparent 50%)';
      }
    } else if (this.progressStatus == 0) {
      progressEl.style.backgroundColor = 'transparent';
    }
    this.elementRef.nativeElement.style.marginLeft = '20px';
    this.elementRef.nativeElement.style.marginTop = '20px';
    parentNode.insertBefore(progressEl, this.elementRef.nativeElement);
  }
}
