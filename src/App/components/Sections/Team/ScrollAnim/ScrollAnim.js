import { TimelineLite } from 'gsap';  

export class ScrollAnim{
  animScrollDown;
  animScrollLeft;
  animScrollUp;
  animScrollRight;

  constructor(imgElement, prevFunc, nextFunc){
    this.imgElement = imgElement;
    this.prevFunc = prevFunc;
    this.nextFunc = nextFunc;
    
  }

  //Initialize scrolling animations
  initScrollAnim = () => {
    this.animScrollDown = new TimelineLite({ 
      paused:true,
      onComplete: () => {
        this.animScrollDown.restart();
        this.animScrollDown.pause();
      }
    })
    .to(this.imgElement, 0.5, {y: -75, opacity: 0})
    .call(this.nextFunc)
    .to(this.imgElement, 0, {y: 75})
    .to(this.imgElement, 0.5, {y: 0, opacity: 1});

    this.animScrollLeft = new TimelineLite({
      paused: true,
      onComplete: () => {
        this.animScrollLeft.restart();
        this.animScrollLeft.pause();
      }
    })
    .to(this.imgElement, 0.5, {x: -15, opacity: 0})
    .call(this.nextFunc)
    .to(this.imgElement, 0, {x: 15})
    .to(this.imgElement, 0.5, {x: 0, opacity: 1});

    this.animScrollUp = new TimelineLite({ 
      paused:true,
      onComplete: () => {
        this.animScrollUp.restart();
        this.animScrollUp.pause();
      }
    })
    .to(this.imgElement, 0.5, {y: 75, opacity: 0})
    .call(this.prevFunc)
    .to(this.imgElement, 0, {y: -75})
    .to(this.imgElement, 0.5, {y: 0, opacity: 1});

    this.animScrollRight = new TimelineLite({
      paused: true,
      onComplete: () => {
        this.animScrollRight.restart();
        this.animScrollRight.pause();
      }
    })
    .to(this.imgElement, 0.5, {x: 15, opacity: 0})
    .call(this.prevFunc)
    .to(this.imgElement, 0, {x: -15})
    .to(this.imgElement, 0.5, {x: 0, opacity: 1});
  }

  //return true if no active animations
  checkActiveAnim = () => {
    return (!this.animScrollDown.isActive() && !this.animScrollUp.isActive() && !this.animScrollLeft.isActive() && !this.animScrollRight.isActive());
  }

  playDown = () => {
    return this.animScrollDown.play();
  }

  playLeft = () => {
    return this.animScrollLeft.play();
  }
  
  playUp = () => {
    return this.animScrollUp.play();
  }

  playRight = () => {
    return this.animScrollRight.play();
  }


}