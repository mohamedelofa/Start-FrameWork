import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  src:any;
  show(e:any){
    // console.log(e.target.parentNode.firstElementChild);
    this.src = e.target.parentNode.firstElementChild.getAttribute('src');
    let model = document.querySelector(".model");
    model?.classList.remove('d-none');
    model?.classList.add('d-flex');
  }

  hide(e:any){
    document.querySelector(".model")?.classList.add('d-none');
    // console.log(e);
  }
  prevent(e:any){
    e.stopPropagation();
  }
}
