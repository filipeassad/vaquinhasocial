<template>
    <div class="slide-background">
            <div class="swiper-wrapper">

                <div class="" style="">
                    <div style="display: flex; text-align: center; justify-content: center;">

                        <div style="flex: 1; margin-bottom: 100px; margin-top: 100px;">
                            <div style="display: flex; flex-wrap: wrap; text-align: center; justify-content: center;">
                                <div style="flex: 6;">
                                    <h1 style="text-align: right; font-size: 50px; color: #fff; letter-spacing: -0.04em; font-weight: 700; line-height: 1em;">
                                        Vamos mudar<br>
                                        uma vida hoje?
                                    </h1>                                    
                                </div>

                                <div style="flex: 1">

                                </div>

                                <div style="flex: 4; text-align: left;">
                                    <form action="">
                                        <div class="c-12">
                                            <span style=" line-height: 1em; color: #fff; font-size: 18px;">De quanto sua vaquinha precisa?</span>
                                            <div>
                                                <input id="vaquinha_valor" type="text" name="vaquinha_valor" class="slide-input" placeholder="Informe o valor (R$)" required />
                                            </div>
                                            <span style=" line-height: 1em; color: #fff; font-size: 18px;">Informe seu e-mail</span>
                                            <div>
                                                <input id="vaquinha_email" type="text" name="vaquinha_email" class="slide-input" required />
                                            </div>
                                            <a href="criar-vaquinha.html" class="btn btn-default">
                                                <span>Criar Vaquinha Grátis</span>
                                                <i class="fas fa-plus"></i>
                                            </a>
                                        </div>
                                    </form>
                                </div>
                                <div style="flex: 2">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
</template>
<script>


export default ({
    name: 'HomeFormVaquinha'
})
</script>

<style>
    .slide-input{
        transition: 0.5s ease-in-out;
        width: 100%;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 10px 15px;
        background-color: white;
        margin: 10px 0 20px;
    }
    .slide-background{
        background-image:url("../../assets/img/slide1.jpg");
    }

    .white {
        color: white;
    }
</style>
