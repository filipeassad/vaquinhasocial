<template>
    <div style="display: flex; flex-wrap: wrap; text-align: center; justify-content: center; margin-top: 10px; margin-bottom:10px; height: 140px;">
        <div tyle="flex: 2">
            <div style="display: flex; flex-wrap: wrap; text-align: center; justify-content: center;">
                <div style="flex: 1">
                    <img
                        style="mix-blend-mode: multiply"
                        src="../../assets/img/logo.png"
                        alt="Vaquinha Social"
                        width="80%"
                    />
                </div>
                <div style="flex: 4">
                    <div style="display: flex; flex-wrap: wrap; align-items: center;">
                        <div style="flex: 1">
                            <form action="" class="container">
                                <div class="c-11" style="text-align: left;">
                                    <input type="text" name="nome" class="ipunt-header" required placeholder="Título ou ID" />
                                    <input type="submit" style="margin-top: 15px;" class="btn btn-light" value="Buscar" />
                                </div>
                            </form>
                        </div>  
                        <div style="flex: 2">
                            <a href="vaquinhas.html" class="btn btn-white">
                                <img src="../../assets/img/ic_queroajudar.svg" width="22">
                                <span>Quero Ajudar</span>
                            </a>
                            <a href="login.html" class="btn btn-white" style="margin-left: 20px;">
                                <img src="../../assets/img/ic_cadeado.svg" width="22">
                                <span>Login</span>
                            </a>
                            <a href="criar-vaquinha.html" style="margin-left: 20px;" class="btn btn-default">
                                <span>Criar Vaquinha Grátis</span>
                                <i class="fas fa-plus"></i>
                            </a>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "MainHeader",
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

    .btn-light {
        color: #1185BE !important;
        padding: 10px 20px;
        background-color: #D8EAF2;
        border: solid 1px #9FD8F3;
    }

    .btn-dark span {
        color: white; 
    }

    .btn-dark i {
        color: white; 
    }

    .btn-default {
        color: white;
        padding: 10px 28px;
        background-color: #1185BE;
        text-decoration: none;
    }

    .ipunt-header {
        transition: 0.5s ease-in-out;
        width: 100%;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 10px 15px;
        background-color: white !important;
    }

    .btn-default span {
        color: white; 
    }

    .btn-white { 
        padding: 10px 20px;
        background-color: transparent;
        border: solid 1px transparent;
        text-decoration: none;
    }

    .btn-white img {
        padding: 0 10px 0 0;
        opacity: 1;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
        -webkit-transition-delay: 0s;
        transition-delay: 0s;
    }

    .btn-white span {
        color: #1185BE;
    }

    .btn-white:hover {
        border: solid 1px #9FD8F3;
    }

    .btn-white:hover span {
        -webkit-transform: translate3d(2px, 0px, 0px);
        transform: translate3d(2 px, 0px, 0px);
        opacity: 1;
    }
</style>