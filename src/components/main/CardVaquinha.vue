<template>
    <div>
        <div class="card-style1">
          <a href="vaquinha.html">
            <img src="../../assets/img/thumb.jpg" />
          </a>
          <div class="icons">
            <a href="#"><i class="fab fa-whatsapp"></i></a>
            <a href="#"><i class="fab fa-facebook"></i></a>
          </div>
          <div class="content">
            <a href="vaquinha.html" style="text-decoration: none;">
              <h4 class="card-h4">EQUIPAMENTOS PARA SPRINT SOCIAL</h4>
              <h4 class="card-h4-orange">CAMPO GRANDE/MS</h4>
            </a>
            <div class="progress-bar">
              <span style="width: 35%">35%</span>
            </div>
            <div style="margin-top: 10px; display: flex; flex-wrap: wrap; justify-content: flex-start;">
              <div style="flex: 1;">
                <small class="card-label">META (R$)</small>
                <h3 class="card-h3">50.000<sup>,00</sup></h3>
              </div>
              <div style="flex: 1;">
                <small class="card-label">ARRECADADO (R$)</small>
                <h3 class="card-h3" style="color: #82B378;">20.000<sup>,00</sup></h3>
              </div>
            </div>
            <div class="actions center">
              <div style="display: flex; flex-wrap: wrap; justify-content: center;">
                <a href="vaquinha.html" class="btn btn-default">
                  <i class="fas fa-coins"></i>
                  <span>Quero Ajudar</span>
                </a>
              </div>
              
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default ({
    name: 'CardVaquinha',
    data(){
      return {
       
      }
    },
    props :{
      numero :{
        type: Number,
        defualt: () => 0  
      }
    }
})
</script>

<style>

.card-label {
  font-family: "Barlow", Helvetica, sans-serif;
  color: #40454B;
  line-height: 1.5rem;
  text-transform: uppercase;
  font-weight: 700;
}

.card-h3 {
  color: #1185BE;
  font-weight: 700;
  line-height: 1em;
  font-size: 2rem;
}

.card-h3 sup {
  color: #1185BE;
  font-size: 1rem;
  margin: 2px;
  letter-spacing: 0em;
  opacity: 0.5;
}

.card-h4 {
  color: #1185BE;
  font-weight: 700;
  line-height: 1em;
}

.card-h4-orange {
  color: #E58638;
  font-weight: 700;
  line-height: 1em;
}

.card-style1 {
  background: #EBF2F5;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px; 
  position: relative;
  overflow: hidden;
  width: 100%;
  text-align: left;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  text-transform: uppercase;
}
.card-style1 * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
.card-style1 img {
  max-width: 100%;
  position: relative;
  top: 0;
  left: 0;
  opacity: 1;
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
  -webkit-transform-origin: 0 100%;
  transform-origin: 0 100%;
}
.card-style1 .content {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-right: solid 1px #9FD8F3;
  border-bottom: solid 1px #9FD8F3;
  border-left: solid 1px #9FD8F3;
  padding: 20px;
}
.card-style1 h4,
.card-style1 h3 {
  margin: 10px 0 0;
}
.card-style1 h4:first-of-type,
.card-style1 h3:first-of-type {
  margin: 0;
}
.card-style1 .icons {
  top: 5px;
  left: 5px;
  width: 35px;
  position: absolute;
  text-align: center;
}
.card-style1 .icons i {
  display: inline-block;
  font-size: 22px;
  color: #003853;
  opacity: 1;
  position: relative;
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
  -webkit-transform: translate(-40px, 0);
  transform: translate(-40px, 0);
  height: 35px;
  width: 35px;
  line-height: 35px;
  background: #EBF2F5;
}
.card-style1 .actions {
  margin-top: 20px;
  padding-top: 20px;
  border-top: solid 1px #9FD8F3;
}
.card-style1 a:hover {
  opacity: 1;
}
.card-style1 a:hover i {
  -webkit-transition: all 0.1s;
  transition: all 0.1s;
}
.card-style1:hover img {
  opacity: 0.7;
  -webkit-transform: scale(1.05);
  transform: scale(1.05);
}
.card-style1:hover .icons {
  opacity: 1;
}
.card-style1:hover .icons i {
  -webkit-transform: translate(0, 0);
  transform: translate(0, 0);
  opacity: 1;
}
.card-style1:hover a:first-child i {
  -webkit-transition-delay: 0.2s;
  transition-delay: 0.2s;
}
.card-style1:hover a:nth-child(2) i {
  -webkit-transition-delay: 0.1s;
  transition-delay: 0.1s;
}
.card-style1:hover a:nth-child(3) i {
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
}
.card-style1 .hover img {
  opacity: 0.7;
  -webkit-transform: scale(1.05);
  transform: scale(1.05);
}
.card-style1 .hover h3 {
  -webkit-transform: translate(0, 0);
  transform: translate(0, 0);
  -webkit-transition-delay: 0.2s;
  transition-delay: 0.2s;
  opacity: 1;
}
.card-style1 .hover .icons {
  opacity: 1;
}
.card-style1 .hover .icons i {
  -webkit-transform: translate(0, 0);
  transform: translate(0, 0);
  opacity: 1;
}
.card-style1 .hover a:first-child i {
  -webkit-transition-delay: 0.2s;
  transition-delay: 0.2s;
}
.card-style1 .hover a:nth-child(2) i {
  -webkit-transition-delay: 0.1s;
  transition-delay: 0.1s;
}
.card-style1 .hover a:nth-child(3) i {
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
}

.progress-bar {
  box-sizing: content-box;
  height: 24px;
  position: relative;
  margin: 20px 0;
  background: #D8EAF2;
  border-radius: 25px;
  padding: 0;
}
.progress-bar > span {
  display: block;
  font-size: 14px;
  color: white;
  text-align: right;
  height: 100%;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background-color: #82B378;
  position: relative;
  overflow: hidden;
  padding-right: 5px;
  line-height: 28px;
}
.progress-bar > span:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  background-size: 50px 50px;
  animation: move 2s linear infinite;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  overflow: hidden;
}
</style>