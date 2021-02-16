var app = new Vue({
  el : '#app',
  data : {
        contatore: 0,
        ny: false,
        spb: false,
        sy: false,
        hover: true,
        testimonial:"img/h3-img-04.png",
        // "img/h3-img-07.png"
        // "img/h3-img-08.png"
  },
  created() {

  },
  methods: {
    //freccia destra
    // nextTest(){
    //   this.contatore++;
    //   if(this.contatore > (this.testimonials.nome.length -1)){
    //     this.contatore = 0
    //   }
    // },
    // // freccia sinistra
    // prevTest(){
    //   this.contatore--;
    //   if(this.contatore < 0){
    //     this.contatore = (this.testimonials.nome.length -1)
    //   }
    // },
    //apri e chiudi tendina city
    changeImg() {
      if (this.testimonial == "img/h3-img-04.png") {
        this.testimonial = "img/h3-img-07.png";
      } else if (this.testimonial == "img/h3-img-07.png"){
        this.testimonial = "img/h3-img-08.png";
      } else {
        this.testimonial = "img/h3-img-04.png";
      }
    },
    ddNy(){
      this.ny = !this.ny
    },
    ddSpb(){
      this.spb = !this.spb
    },
    ddSy(){
      this.sy = !this.sy
    },
    Mhover(){
    this.hover = !this.hover;
    }
  }
});
