<template>
  <footer class="section">
    <div style="background-color: #d8eaf2; display: flex; flex-wrap: wrap; text-align: center; justify-content: center; padding-top: 40px; padding-bottom:40px;">
      <div tyle="flex: 1">
        <div style="display: flex; flex-wrap: wrap; text-align: center; justify-content: center;">
          <div style="flex: 1">
            <img
              style="mix-blend-mode: multiply"
              src="../../assets/img/logo.png"
              alt="Vaquinha Social"
              width="100%"
            />
          </div>
          <div style="flex: 2; margin-left: 20px;">
            <ul style="text-align: left; list-style: none;">
              <li>
                <a style="color: #003853 !important; font-weight: 700; text-decoration: none;" href="login.html">Login</a>
              </li>
              <li>
                <a style="color: #003853 !important; font-weight: 700; text-decoration: none;" href="vaquinhas.html">Vaquinhas</a>
              </li>
              <li>
                <a style="color: #003853 !important; font-weight: 700; text-decoration: none;" href="criar-vaquinha.html">Crie sua Vaquinha Grátis</a>
              </li>
              <li>
                <a style="color: #003853 !important; font-weight: 700; text-decoration: none;" href="dicas.html">Dicas de como Bombar sua Vaquinha</a>
              </li>
              <li>
                <a style="color: #003853 !important; font-weight: 700; text-decoration: none;" href="faq.html">Dúvidas Frequentes</a>
              </li>
              <li>
                <a style="color: #003853 !important; font-weight: 700; text-decoration: none;" href="newsletter.html">Receba Novidades</a>
              </li>
              <li>
                <a style="color: #003853 !important; font-weight: 700; text-decoration: none;" href="contato.html">Fale Conosco</a>
              </li>
            </ul>
          </div>
          <div style="flex: 3">
            <div style="display: flex; flex-wrap: wrap; text-align: center; justify-content: center;">
              <div style="flex: 2">
                <h4 style="color: #1185BE; font-weight: 700; line-height: 1em; text-align: right; font-size: 14px;">
                  Curta e compartilhe nossa<br />
                  Página no Facebook
                </h4>
              </div>
              <div style="flex: 3">
                <a class="btn btn-dark">
                  <i class="fab fa-facebook-f"></i>
                  <span>Curtir</span>
                </a>
              </div>
              <div class="c-4 right">
                <a class="btn btn-dark">
                  <i class="fab fa-facebook-f"></i>
                  <span>Compartilhar</span>
                </a>
              </div>
            </div>
            <div style="display: flex; flex-wrap: wrap; text-align: center; justify-content: flex-end;">
              <div style="margin-top: 30px;">
                <h3 style="color: #1185BE; font-weight: 700; line-height: 1em; text-align: right; font-size: 30px;" >Visite nossas redes</h3>
                <div style="display: flex; text-align: center; justify-content: flex-end; margin-top: 20px;">
                  <a href="#" style="flex: 1; height: 40px;">
                    <i style="color: #1185BE; font-size: 12px;" class="fab fa-instagram"></i>
                  </a>
                  <a href="#" style="flex: 1; height: 40px;">
                    <i class="fab fa-tiktok"></i>
                  </a>
                  <a href="#" style="flex: 1; height: 40px;">
                    <i class="fab fa-youtube"></i>
                  </a>
                </div>                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "MainFooter",
};
</script>

<style>
  .btn {
    cursor: pointer; 
    border: none; 
    border-radius: 5px; 
    display: inline-block; 
    text-transform: uppercase; 
    line-height: 1.5em; 
    font-size: 1rem;
    font-weight: 700;
    outline: none;
    position: relative;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }

  .btn-dark {
    color: white; 
    padding: 10px 28px; 
    background-color: #003853;
  }

  .btn-dark span{
    color: white; 
  }

  .btn-dark i{
    color: white; 
  }
</style>